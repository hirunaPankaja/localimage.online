import { useState, useMemo } from 'react';
import { Download, Trash2, Archive, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { ImageCard } from './ImageCard';
import { ImageFile } from '../../types';
import { downloadAllAsZip } from '../../utils/zipExport';
import { getFormatFromFile, getFormatColor } from '../../utils/imageProcessing';

interface OutputPanelProps {
  files: ImageFile[];
  onRemoveFile: (id: string) => void;
  onClearAll: () => void;
}

interface FormatGroup {
  format: string;
  files: ImageFile[];
  color: { bg: string; text: string };
}

export function OutputPanel({
  files,
  onRemoveFile,
  onClearAll
}: OutputPanelProps) {
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const hasConvertedFiles = files.some((f) => f.status === 'done');

  // Group files by format
  const formatGroups = useMemo((): FormatGroup[] => {
    const groups: Record<string, ImageFile[]> = {};

    files.forEach((file) => {
      const format = getFormatFromFile(file.file);
      if (!groups[format]) {
        groups[format] = [];
      }
      groups[format].push(file);
    });

    return Object.entries(groups)
      .map(([format, groupFiles]) => ({
        format,
        files: groupFiles,
        color: getFormatColor(format)
      }))
      .sort((a, b) => b.files.length - a.files.length);
  }, [files]);

  const toggleGroup = (format: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(format)) {
        next.delete(format);
      } else {
        next.add(format);
      }
      return next;
    });
  };

  const shouldShowGroups = formatGroups.length > 1 && files.length > 3;

  if (files.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-400">
          <Archive className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-medium text-slate-900 mb-2">
          No Images Yet
        </h3>
        <p className="text-slate-500 max-w-xs">
          Upload images from the left panel to see them appear here ready for
          conversion.
        </p>
      </div>);

  }

  return (
    <div className="h-full flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Toolbar */}
      <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600">
            {files.length} Images
          </span>
          {shouldShowGroups && (
            <div className="flex items-center gap-1">
              {formatGroups.map((group) => (
                <span
                  key={group.format}
                  className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${group.color.bg} ${group.color.text}`}
                >
                  {group.format} ({group.files.length})
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-red-500 hover:text-red-600 hover:bg-red-50"
            leftIcon={<Trash2 className="w-4 h-4" />}>

            Clear All
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => downloadAllAsZip(files)}
            disabled={!hasConvertedFiles}
            leftIcon={<Download className="w-4 h-4" />}>

            Download ZIP
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {shouldShowGroups ? (
          // Grouped view
          <div className="space-y-4">
            {formatGroups.map((group) => {
              const isCollapsed = collapsedGroups.has(group.format);
              const doneCount = group.files.filter((f) => f.status === 'done').length;

              return (
                <div key={group.format} className="border border-slate-200 rounded-lg overflow-hidden">
                  {/* Group Header */}
                  <button
                    onClick={() => toggleGroup(group.format)}
                    className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {isCollapsed ? (
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                      <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold ${group.color.bg} ${group.color.text}`}>
                        {group.format}
                      </span>
                      <span className="text-sm font-medium text-slate-700">
                        {group.files.length} {group.files.length === 1 ? 'file' : 'files'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      {doneCount > 0 && (
                        <span className="text-emerald-600 font-medium">
                          {doneCount} converted
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Group Content */}
                  {!isCollapsed && (
                    <div className="p-3 bg-white">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {group.files.map((file) => (
                          <ImageCard key={file.id} image={file} onRemove={onRemoveFile} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          // Flat grid view
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file) => (
              <ImageCard key={file.id} image={file} onRemove={onRemoveFile} />
            ))}
          </div>
        )}
      </div>
    </div>);

}