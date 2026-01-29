import React from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { useOfflineStatus } from '../../hooks/useOfflineStatus';
export function OfflineBadge() {
  const isOffline = useOfflineStatus();
  if (isOffline) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium border border-amber-200">
        <WifiOff className="w-3 h-3" />
        <span>Offline Mode</span>
      </div>);

  }
  return (
    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
      <Wifi className="w-3 h-3" />
      <span>Works Offline</span>
    </div>);

}