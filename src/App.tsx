import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { HeicToJpgPage } from './pages/HeicToJpgPage';
import { PngToWebpPage } from './pages/PngToWebpPage';
import { JpgToPngPage } from './pages/JpgToPngPage';
import { ImageCompressorPage } from './pages/ImageCompressorPage';
export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/heic-to-jpg" element={<HeicToJpgPage />} />
            <Route path="/png-to-webp" element={<PngToWebpPage />} />
            <Route path="/jpg-to-png" element={<JpgToPngPage />} />
            <Route path="/image-compressor" element={<ImageCompressorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>);

}