export type ImageFormat =
'image/jpeg' |
'image/png' |
'image/webp' |
'image/heic' |
'image/avif' |
'image/bmp' |
'image/tiff';

export type ConversionStatus = 'ready' | 'converting' | 'done' | 'failed';

export interface ImageFile {
  id: string;
  file: File;
  previewUrl: string;
  originalSize: number;
  convertedSize?: number;
  convertedBlob?: Blob;
  convertedUrl?: string;
  status: ConversionStatus;
  error?: string;
  format: ImageFormat;
  targetFormat: ImageFormat;
  quality: number; // 0-100
}

export interface ConversionSettings {
  targetFormat: ImageFormat;
  quality: number; // 0-100
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords: string;
  ogType?: 'website' | 'article';
  faqs?: FAQItem[];
}