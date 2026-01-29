import { ImageFormat } from '../types';
import heic2any from 'heic2any';

export const formatMap: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/heic': 'heic',
  'image/avif': 'avif',
  'image/bmp': 'bmp',
  'image/tiff': 'tiff'
};

export const getFileExtension = (filename: string): string => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
};

export const getFormatFromFile = (file: File): string => {
  const ext = getFileExtension(file.name).toLowerCase();
  const extMap: Record<string, string> = {
    'jpg': 'JPG',
    'jpeg': 'JPG',
    'png': 'PNG',
    'webp': 'WebP',
    'heic': 'HEIC',
    'heif': 'HEIC',
    'avif': 'AVIF',
    'bmp': 'BMP',
    'tiff': 'TIFF',
    'tif': 'TIFF'
  };
  return extMap[ext] || ext.toUpperCase();
};

export const getFormatColor = (format: string): { bg: string; text: string } => {
  const colors: Record<string, { bg: string; text: string }> = {
    'JPG': { bg: 'bg-gradient-to-r from-amber-500 to-orange-500', text: 'text-white' },
    'JPEG': { bg: 'bg-gradient-to-r from-amber-500 to-orange-500', text: 'text-white' },
    'PNG': { bg: 'bg-gradient-to-r from-emerald-500 to-teal-500', text: 'text-white' },
    'WebP': { bg: 'bg-gradient-to-r from-blue-500 to-indigo-500', text: 'text-white' },
    'HEIC': { bg: 'bg-gradient-to-r from-purple-500 to-pink-500', text: 'text-white' },
    'AVIF': { bg: 'bg-gradient-to-r from-rose-500 to-red-500', text: 'text-white' },
    'BMP': { bg: 'bg-gradient-to-r from-slate-500 to-gray-500', text: 'text-white' },
    'TIFF': { bg: 'bg-gradient-to-r from-cyan-500 to-sky-500', text: 'text-white' }
  };
  return colors[format] || { bg: 'bg-slate-500', text: 'text-white' };
};

export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const isHeicFile = (file: File): boolean => {
  return file.type === 'image/heic' ||
    file.type === 'image/heif' ||
    file.name.toLowerCase().endsWith('.heic') ||
    file.name.toLowerCase().endsWith('.heif');
};

const convertHeicToBlob = async (file: File): Promise<Blob> => {
  try {
    const result = await heic2any({
      blob: file,
      toType: 'image/png',
      quality: 1
    });
    // heic2any can return an array of blobs for multi-image HEIC files
    if (Array.isArray(result)) {
      return result[0];
    }
    return result;
  } catch (error) {
    throw new Error('Failed to decode HEIC file. Please ensure it is a valid HEIC image.');
  }
};

export const convertImage = async (
  file: File,
  targetFormat: ImageFormat,
  quality: number
): Promise<Blob> => {
  return new Promise(async (resolve, reject) => {
    try {
      // Handle HEIC files by first converting to PNG
      let processableFile: Blob = file;
      if (isHeicFile(file)) {
        processableFile = await convertHeicToBlob(file);
      }

      const img = new Image();
      const url = URL.createObjectURL(processableFile);

      img.onload = () => {
        URL.revokeObjectURL(url);
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        // Draw white background for transparent images converting to JPEG
        if (targetFormat === 'image/jpeg') {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Conversion failed'));
            }
          },
          targetFormat,
          quality / 100
        );
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Failed to load image'));
      };

      img.src = url;
    } catch (error) {
      reject(error instanceof Error ? error : new Error('Conversion failed'));
    }
  });
};