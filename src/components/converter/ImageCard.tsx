import { Download, AlertCircle, Check, Loader2, FileImage, ArrowRight } from 'lucide-react';
import { ImageFile } from '../../types';
import { formatBytes, getFormatFromFile, getFormatColor } from '../../utils/imageProcessing';
import { downloadSingleImage } from '../../utils/zipExport';
import { Button } from '../ui/Button';

interface ImageCardProps {
  image: ImageFile;
  onRemove: (id: string) => void;
}

const formatMap: Record<string, string> = {
  'image/jpeg': 'JPG',
  'image/png': 'PNG',
  'image/webp': 'WebP',
  'image/heic': 'HEIC',
  'image/avif': 'AVIF',
  'image/bmp': 'BMP',
  'image/tiff': 'TIFF'
};

export function ImageCard({ image, onRemove }: ImageCardProps) {
  const sourceFormat = getFormatFromFile(image.file);
  const targetFormat = formatMap[image.targetFormat] || 'JPG';
  const sourceColor = getFormatColor(sourceFormat);
  const targetColor = getFormatColor(targetFormat);

  const getStatusBadge = () => {
    switch (image.status) {
      case 'ready':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">
            Ready
          </span>);

      case 'converting':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
            <Loader2 className="w-3 h-3 mr-1 animate-spin" /> Converting
          </span>);

      case 'done':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
            <Check className="w-3 h-3 mr-1" /> Done
          </span>);

      case 'failed':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
            <AlertCircle className="w-3 h-3 mr-1" /> Failed
          </span>);

    }
  };

  return (
    <div className="group relative bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="aspect-video w-full bg-slate-100 relative overflow-hidden">
        {image.previewUrl ?
          <img
            src={image.previewUrl}
            alt={image.file.name}
            className="w-full h-full object-cover" /> :


          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <FileImage className="w-8 h-8" />
          </div>
        }
        {/* Format Badge - Top Left */}
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold shadow-sm ${sourceColor.bg} ${sourceColor.text}`}>
            {sourceFormat}
          </span>
          <ArrowRight className="w-3 h-3 text-white drop-shadow-md" />
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold shadow-sm ${targetColor.bg} ${targetColor.text}`}>
            {targetFormat}
          </span>
        </div>
        {/* Status Badge - Top Right */}
        <div className="absolute top-2 right-2">{getStatusBadge()}</div>
      </div>

      <div className="p-3 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h4
            className="text-sm font-medium text-slate-900 truncate max-w-[180px]"
            title={image.file.name}>

            {image.file.name}
          </h4>
          <button
            onClick={() => onRemove(image.id)}
            className="text-slate-400 hover:text-red-500 transition-colors"
            aria-label="Remove image">

            <span className="text-lg leading-none">&times;</span>
          </button>
        </div>

        <div className="mt-auto space-y-2">
          <div className="flex justify-between text-xs text-slate-500">
            <span>{formatBytes(image.originalSize)}</span>
            {image.convertedSize &&
              <span className="font-medium text-emerald-600">
                {formatBytes(image.convertedSize)}
                <span className="ml-1 text-[10px] text-slate-400">
                  (
                  {Math.round(image.convertedSize / image.originalSize * 100)}
                  %)
                </span>
              </span>
            }
          </div>

          {image.status === 'done' &&
            <Button
              variant="outline"
              size="sm"
              className="w-full h-8 text-xs"
              onClick={() => downloadSingleImage(image)}
              leftIcon={<Download className="w-3 h-3" />}>

              Download
            </Button>
          }

          {image.status === 'failed' &&
            <div className="text-xs text-red-500 truncate" title={image.error}>
              {image.error}
            </div>
          }
        </div>
      </div>
    </div>);

}