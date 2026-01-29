import React from 'react';
interface QualitySliderProps {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}
export function QualitySlider({
  value,
  onChange,
  disabled
}: QualitySliderProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-slate-700">
          Quality / Compression
        </label>
        <span className="text-sm font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          {value}%
        </span>
      </div>
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />

      <div className="flex justify-between text-xs text-slate-400 px-1">
        <span>Smaller File</span>
        <span>Better Quality</span>
      </div>
    </div>);

}