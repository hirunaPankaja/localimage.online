import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Image as ImageIcon } from 'lucide-react';
import { OfflineBadge } from '../ui/OfflineBadge';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'HEIC to JPG',
    path: '/heic-to-jpg'
  },
  {
    name: 'PNG to WebP',
    path: '/png-to-webp'
  },
  {
    name: 'JPG to PNG',
    path: '/jpg-to-png'
  },
  {
    name: 'Compressor',
    path: '/image-compressor'
  }];

  const isActive = (path: string) => location.pathname === path;
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <ImageIcon className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold text-slate-900">
              LocalImage.online
            </span>
          </Link>
          <div className="hidden ml-4 sm:block">
            <OfflineBadge />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive(link.path) ? 'text-blue-600' : 'text-slate-600'}`}>

              {link.name}
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu">

          {isMenuOpen ?
          <X className="h-6 w-6" /> :

          <Menu className="h-6 w-6" />
          }
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen &&
      <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={`text-base font-medium ${isActive(link.path) ? 'text-blue-600' : 'text-slate-600'}`}
            onClick={() => setIsMenuOpen(false)}>

                {link.name}
              </Link>
          )}
            <div className="pt-2">
              <OfflineBadge />
            </div>
          </div>
        </div>
      }
    </header>);

}