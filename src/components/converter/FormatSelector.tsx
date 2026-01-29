import React from 'react';
import { ImageFormat } from '../../types';
interface FormatSelectorProps {
  value: ImageFormat;
  onChange: (format: ImageFormat) => void;
  disabled?: boolean;
}
export function FormatSelector({
  value,
  onChange,
  disabled
}: FormatSelectorProps) {
  const formats: {
    value: ImageFormat;
    label: string;
  }[] = [
  {
    value: 'image/jpeg',
    label: 'JPG'
  },
  {
    value: 'image/png',
    label: 'PNG'
  },
  {
    value: 'image/webp',
    label: 'WebP'
  },
  {
    value: 'image/avif',
    label: 'AVIF'
  },
  {
    value: 'image/bmp',
    label: 'BMP'
  },
  {
    value: 'image/tiff',
    label: 'TIFF'
  }];

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-700">
        Output Format
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as ImageFormat)}
        disabled={disabled}
        className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2.5">

        {formats.map((format) =>
        <option key={format.value} value={format.value}>
            {format.label}
          </option>
        )}
      </select>
    </div>);

}