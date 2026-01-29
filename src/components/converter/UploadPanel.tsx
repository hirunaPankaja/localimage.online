import React, { useState, useRef } from 'react';
import { Upload, FolderOpen, FileUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { FormatSelector } from './FormatSelector';
import { QualitySlider } from './QualitySlider';
import { FormatSelectionModal } from './FormatSelectionModal';
import { ImageFormat, ConversionSettings } from '../../types';
interface UploadPanelProps {
  onFilesAdded: (files: File[]) => void;
  fileCount: number;
  settings: ConversionSettings;
  onSettingsChange: (settings: Partial<ConversionSettings>) => void;
  onConvert: () => void;
  isProcessing: boolean;
}
export function UploadPanel({
  onFilesAdded,
  fileCount,
  settings,
  onSettingsChange,
  onConvert,
  isProcessing
}: UploadPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showFormatModal, setShowFormatModal] = useState(false);
  const [pendingFolderFiles, setPendingFolderFiles] = useState<File[]>([]);
  const [detectedFormats, setDetectedFormats] = useState<string[]>([]);
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesAdded(Array.from(e.target.files));
    }
    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };
  const handleFolderSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const formats = new Set<string>();
      // Filter for images and collect formats
      const imageFiles = files.filter((file) => {
        if (file.type.startsWith('image/')) {
          const ext = file.name.split('.').pop()?.toLowerCase();
          if (ext) formats.add(ext);
          return true;
        }
        return false;
      });
      if (imageFiles.length > 0) {
        setPendingFolderFiles(imageFiles);
        setDetectedFormats(Array.from(formats));
        setShowFormatModal(true);
      }
    }
    // Reset input
    if (folderInputRef.current) folderInputRef.current.value = '';
  };
  const handleFormatConfirm = (selectedFormats: string[]) => {
    const filteredFiles = pendingFolderFiles.filter((file) => {
      const ext = file.name.split('.').pop()?.toLowerCase();
      return ext && selectedFormats.includes(ext);
    });
    onFilesAdded(filteredFiles);
    setShowFormatModal(false);
    setPendingFolderFiles([]);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith('image/')
      );
      onFilesAdded(files);
    }
  };
  return (
    <div className="h-full flex flex-col gap-6 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
      {/* Upload Actions */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className="hidden"
          multiple
          accept="image/*" />

        <Button
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          leftIcon={<FileUp className="w-4 h-4" />}>

          Upload Images
        </Button>

        <input
          type="file"
          ref={folderInputRef}
          onChange={handleFolderSelect}
          className="hidden"
          // @ts-ignore - webkitdirectory is standard but not in React types
          webkitdirectory=""
          directory="" />

        <Button
          variant="outline"
          onClick={() => folderInputRef.current?.click()}
          leftIcon={<FolderOpen className="w-4 h-4" />}>

          Scan Folder
        </Button>
      </div>

      {/* Drag Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex-1 flex flex-col items-center justify-center border-2 border-dashed rounded-xl transition-colors p-8 text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100'}`}>

        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
          <Upload className="w-6 h-6" />
        </div>
        <h3 className="text-base font-semibold text-slate-900 mb-1">
          Drag & Drop Images Here
        </h3>
        <p className="text-sm text-slate-500">or use the buttons above</p>
        <div className="mt-4 text-xs font-medium text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">
          {fileCount} / 100 files
        </div>
      </div>

      {/* Settings */}
      <div className="space-y-6 border-t border-slate-100 pt-6">
        <FormatSelector
          value={settings.targetFormat}
          onChange={(f) =>
          onSettingsChange({
            targetFormat: f
          })
          } />


        <QualitySlider
          value={settings.quality}
          onChange={(q) =>
          onSettingsChange({
            quality: q
          })
          } />


        <Button
          className="w-full h-12 text-lg shadow-lg shadow-blue-500/20"
          onClick={onConvert}
          disabled={fileCount === 0}
          isLoading={isProcessing}>

          {isProcessing ? 'Converting...' : 'Convert All Images'}
        </Button>
      </div>

      {showFormatModal &&
      <FormatSelectionModal
        formats={detectedFormats}
        onConfirm={handleFormatConfirm}
        onCancel={() => setShowFormatModal(false)} />

      }
    </div>);

}