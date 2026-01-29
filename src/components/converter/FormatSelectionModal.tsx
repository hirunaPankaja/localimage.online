import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';
interface FormatSelectionModalProps {
  formats: string[];
  onConfirm: (selectedFormats: string[]) => void;
  onCancel: () => void;
}
export function FormatSelectionModal({
  formats,
  onConfirm,
  onCancel
}: FormatSelectionModalProps) {
  const [selected, setSelected] = useState<string[]>(formats);
  const toggleFormat = (format: string) => {
    if (selected.includes(format)) {
      setSelected(selected.filter((f) => f !== format));
    } else {
      setSelected([...selected, format]);
    }
  };
  const handleSelectAll = () => setSelected(formats);
  const handleDeselectAll = () => setSelected([]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">
            Select Formats to Include
          </h3>
          <button
            onClick={onCancel}
            className="text-slate-400 hover:text-slate-600">

            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-sm text-slate-600 mb-4">
            We found multiple image formats in this folder. Which ones would you
            like to import?
          </p>

          <div className="space-y-3 mb-6">
            {formats.map((format) =>
            <label
              key={format}
              className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">

                <input
                type="checkbox"
                checked={selected.includes(format)}
                onChange={() => toggleFormat(format)}
                className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />

                <span className="text-sm font-medium text-slate-700 uppercase">
                  {format}
                </span>
              </label>
            )}
          </div>

          <div className="flex gap-2 text-sm text-blue-600 mb-6">
            <button onClick={handleSelectAll} className="hover:underline">
              Select All
            </button>
            <span className="text-slate-300">|</span>
            <button onClick={handleDeselectAll} className="hover:underline">
              Deselect All
            </button>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              className="flex-1"
              onClick={() => onConfirm(selected)}
              disabled={selected.length === 0}>

              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>);

}