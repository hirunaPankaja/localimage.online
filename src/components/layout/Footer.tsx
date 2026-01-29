import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Zap } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              LocalImage.online
            </h3>
            <p className="text-slate-600 mb-6 max-w-sm">
              Free, secure, and offline-capable image tools. We process
              everything in your browser so your photos never leave your device.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4" />
                <span>Client-side</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Tools</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/heic-to-jpg"
                  className="text-slate-600 hover:text-blue-600">

                  HEIC to JPG
                </Link>
              </li>
              <li>
                <Link
                  to="/png-to-webp"
                  className="text-slate-600 hover:text-blue-600">

                  PNG to WebP
                </Link>
              </li>
              <li>
                <Link
                  to="/jpg-to-png"
                  className="text-slate-600 hover:text-blue-600">

                  JPG to PNG
                </Link>
              </li>
              <li>
                <Link
                  to="/image-compressor"
                  className="text-slate-600 hover:text-blue-600">

                  Image Compressor
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal & Info</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-400 cursor-not-allowed">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-slate-400 cursor-not-allowed">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="text-slate-400 cursor-not-allowed">
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} LocalImage.online. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-current" />{' '}
            for the web
          </p>
        </div>
      </div>
    </footer>);

}