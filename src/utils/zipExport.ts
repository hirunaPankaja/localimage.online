import { ImageFile } from '../types';
import { formatMap } from './imageProcessing';
import JSZip from 'jszip';

export const downloadSingleImage = (image: ImageFile) => {
  if (!image.convertedUrl) return;

  const link = document.createElement('a');
  link.href = image.convertedUrl;

  const originalName = image.file.name.substring(
    0,
    image.file.name.lastIndexOf('.')
  );
  const ext = formatMap[image.targetFormat] || 'jpg';
  link.download = `${originalName}_converted.${ext}`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadAllAsZip = async (images: ImageFile[]) => {
  const convertedImages = images.filter(
    (img) => img.status === 'done' && img.convertedBlob
  );

  if (convertedImages.length === 0) {
    alert('No converted images to download.');
    return;
  }

  const zip = new JSZip();

  convertedImages.forEach((img) => {
    if (img.convertedBlob) {
      const originalName = img.file.name.substring(
        0,
        img.file.name.lastIndexOf('.')
      );
      const ext = formatMap[img.targetFormat] || 'jpg';
      const fileName = `${originalName}_converted.${ext}`;
      zip.file(fileName, img.convertedBlob);
    }
  });

  try {
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = `localimage_converted_${Date.now()}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to create ZIP:', error);
    alert('Failed to create ZIP file. Please download images individually.');
  }
};