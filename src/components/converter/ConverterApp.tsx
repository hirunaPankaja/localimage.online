import React, { useEffect } from 'react';
import { UploadPanel } from './UploadPanel';
import { OutputPanel } from './OutputPanel';
import { useImageConverter } from '../../hooks/useImageConverter';
import { ImageFormat } from '../../types';
interface ConverterAppProps {
  defaultFormat?: ImageFormat;
}
export function ConverterApp({ defaultFormat }: ConverterAppProps) {
  const {
    files,
    addFiles,
    removeFile,
    updateSettings,
    convertAll,
    clearAll,
    isProcessing,
    globalSettings
  } = useImageConverter();
  // Set default format if provided and not already set by user interaction
  useEffect(() => {
    if (defaultFormat) {
      updateSettings({
        targetFormat: defaultFormat
      });
    }
  }, [defaultFormat, updateSettings]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)] min-h-[600px]">
      <div className="lg:col-span-4 h-full">
        <UploadPanel
          onFilesAdded={addFiles}
          fileCount={files.length}
          settings={globalSettings}
          onSettingsChange={updateSettings}
          onConvert={convertAll}
          isProcessing={isProcessing} />

      </div>
      <div className="lg:col-span-8 h-full">
        <OutputPanel
          files={files}
          onRemoveFile={removeFile}
          onClearAll={clearAll} />

      </div>
    </div>);

}