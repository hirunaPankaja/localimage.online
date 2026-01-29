import { useState, useCallback } from 'react';
import { ImageFile, ImageFormat, ConversionSettings } from '../types';
import { convertImage } from '../utils/imageProcessing';
import { v4 as uuidv4 } from 'uuid'; // Assuming uuid is available or we'll use a simple generator

const generateId = () => Math.random().toString(36).substring(2, 15);

export function useImageConverter() {
  const [files, setFiles] = useState<ImageFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [globalSettings, setGlobalSettings] = useState<ConversionSettings>({
    targetFormat: 'image/jpeg',
    quality: 80
  });

  const addFiles = useCallback(
    (newFiles: File[]) => {
      if (files.length + newFiles.length > 100) {
        alert('Maximum 100 files allowed');
        return;
      }

      const newImageFiles: ImageFile[] = newFiles.map((file) => ({
        id: generateId(),
        file,
        previewUrl: URL.createObjectURL(file),
        originalSize: file.size,
        status: 'ready',
        format: file.type as ImageFormat,
        targetFormat: globalSettings.targetFormat,
        quality: globalSettings.quality
      }));

      setFiles((prev) => [...prev, ...newImageFiles]);
    },
    [files.length, globalSettings]
  );

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove?.previewUrl) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }
      if (fileToRemove?.convertedUrl) {
        URL.revokeObjectURL(fileToRemove.convertedUrl);
      }
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  const updateSettings = useCallback(
    (settings: Partial<ConversionSettings>) => {
      setGlobalSettings((prev) => ({ ...prev, ...settings }));
      // Update all ready files to new settings
      setFiles((prev) =>
      prev.map((f) => {
        if (f.status === 'ready') {
          return {
            ...f,
            targetFormat: settings.targetFormat || f.targetFormat,
            quality: settings.quality || f.quality
          };
        }
        return f;
      })
      );
    },
    []
  );

  const convertAll = useCallback(async () => {
    setIsProcessing(true);

    // Process sequentially to avoid freezing browser
    const filesToConvert = files.filter(
      (f) => f.status === 'ready' || f.status === 'failed'
    );

    for (const file of filesToConvert) {
      setFiles((prev) =>
      prev.map((f) =>
      f.id === file.id ? { ...f, status: 'converting' } : f
      )
      );

      try {
        const blob = await convertImage(
          file.file,
          file.targetFormat,
          file.quality
        );
        const url = URL.createObjectURL(blob);

        setFiles((prev) =>
        prev.map((f) =>
        f.id === file.id ?
        {
          ...f,
          status: 'done',
          convertedBlob: blob,
          convertedUrl: url,
          convertedSize: blob.size
        } :
        f
        )
        );
      } catch (error) {
        setFiles((prev) =>
        prev.map((f) =>
        f.id === file.id ?
        {
          ...f,
          status: 'failed',
          error:
          error instanceof Error ?
          error.message :
          'Conversion failed'
        } :
        f
        )
        );
      }
    }

    setIsProcessing(false);
  }, [files]);

  const clearAll = useCallback(() => {
    files.forEach((f) => {
      if (f.previewUrl) URL.revokeObjectURL(f.previewUrl);
      if (f.convertedUrl) URL.revokeObjectURL(f.convertedUrl);
    });
    setFiles([]);
  }, [files]);

  return {
    files,
    addFiles,
    removeFile,
    updateSettings,
    convertAll,
    clearAll,
    isProcessing,
    globalSettings
  };
}