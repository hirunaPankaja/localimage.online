import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ConverterApp } from '../components/converter/ConverterApp';
import { SEOHead } from '../components/layout/SEOHead';
import { SEOContent } from '../components/seo/SEOContent';
import { FAQAccordion } from '../components/seo/FAQAccordion';
export function HeicToJpgPage() {
  const faqs = [
  {
    question: 'Why do I need to convert HEIC to JPG?',
    answer:
    "HEIC is Apple's proprietary image format. While efficient, it's not supported by many websites, Windows computers, or Android devices. Converting to JPG ensures your photos can be viewed everywhere."
  },
  {
    question: 'Does converting HEIC to JPG reduce quality?',
    answer:
    'JPG is a lossy format, so there is technically some data loss, but our converter uses high-quality algorithms to ensure the visual difference is negligible for most users. At 90% quality, most people cannot tell the difference.'
  },
  {
    question: 'Can I convert multiple HEIC files at once?',
    answer:
    'Yes! You can select up to 100 HEIC files and convert them all to JPG simultaneously in your browser. Use the folder scan feature to import entire directories of iPhone photos.'
  },
  {
    question: 'Why does my iPhone save photos as HEIC?',
    answer:
    'Apple uses HEIC as the default format because it offers better compression than JPG while maintaining quality. This saves storage space on your device. However, you can change this in Settings > Camera > Formats > Most Compatible.'
  },
  {
    question: 'Are my HEIC photos uploaded to a server?',
    answer:
    'No. All conversion happens directly in your browser using local processing. Your private photos never leave your device, ensuring complete privacy and security.'
  },
  {
    question: 'What if my HEIC file fails to convert?',
    answer:
    'Some HEIC files use advanced encoding that browsers cannot decode. If conversion fails, try exporting the photo from your iPhone with "Most Compatible" format enabled, or use the Photos app to share as JPG.'
  }];

  return (
    <>
      <SEOHead
        title="HEIC to JPG Converter - Free Online Tool | LocalImage.online"
        description="Convert HEIC photos from iPhone to JPG format instantly. Free, secure, and works offline. No software installation required. Process up to 100 images at once."
        canonicalPath="/heic-to-jpg"
        keywords="heic to jpg, convert heic to jpg, heic converter, iphone photo converter, heic to jpeg, apple heic converter, ios photo converter"
        faqs={faqs} />


      <div className="space-y-16 pb-16">
        <section className="text-center space-y-6 max-w-4xl mx-auto px-4 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 mb-4">

            <ArrowLeft className="w-4 h-4" />
            Back to All Tools
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Convert HEIC to JPG Online
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The fastest way to convert iPhone photos to JPG. Free, private, and
            works offline.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
              iPhone Photos
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
              iPad Photos
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
              macOS Images
            </span>
          </div>
        </section>

        <section className="px-4 max-w-[1400px] mx-auto">
          <ConverterApp defaultFormat="image/jpeg" />
        </section>

        <section className="px-4 max-w-4xl mx-auto">
          <SEOContent title="Free HEIC to JPG Converter - Convert iPhone Photos Instantly">
            <p>
              If you're an iPhone user, you're likely familiar with HEIC (High
              Efficiency Image Container) files. While great for saving storage
              space on your device, they can be a headache when trying to share
              photos with Windows users, upload them to websites that only
              accept JPGs, or use them in applications that don't support
              Apple's format.
            </p>

            <h2>What is HEIC Format?</h2>
            <p>
              HEIC (High Efficiency Image Container) is the default image format
              on iPhones and iPads running iOS 11 or later. It's based on the
              HEIF (High Efficiency Image Format) standard and offers
              significantly better compression than JPG without sacrificing
              quality. A typical HEIC file is about 50% smaller than an
              equivalent JPG while maintaining the same visual quality.
            </p>
            <p>
              However, HEIC's lack of universal compatibility remains a
              significant hurdle for cross-platform sharing. Windows computers
              (without additional codecs), Android devices, many websites, and
              older software simply cannot open HEIC files.
            </p>

            <h2>Why Convert HEIC to JPG?</h2>
            <p>
              JPG (or JPEG) is the most widely supported image format in the
              world. It's been the standard for digital photography since the
              1990s and is supported by virtually every device, application, and
              website. By converting your HEIC files to JPG, you ensure that:
            </p>
            <ul>
              <li>
                Your photos can be opened on Windows, Android, Linux, and any
                other operating system without special software.
              </li>
              <li>
                You can upload images to any website, social media platform,
                government portal, or online form.
              </li>
              <li>
                You can easily edit your photos in any image editing software,
                from Photoshop to free online editors.
              </li>
              <li>
                You can share photos via email without worrying about
                compatibility issues.
              </li>
              <li>You can print your photos at any photo printing service.</li>
            </ul>

            <h2>How Our HEIC Converter Works</h2>
            <p>
              Most online converters require you to upload your personal photos
              to their servers, which raises privacy concerns. LocalImage.online
              is fundamentally different. We use your browser's built-in
              capabilities combined with WebAssembly technology to decode HEIC
              files and re-encode them as JPGs directly on your device.
            </p>
            <p>
              This approach guarantees that your private moments remain private.
              Your photos never leave your computer or phone. There's no upload
              time, no waiting for server processing, and no risk of your images
              being stored or accessed by third parties.
            </p>

            <h2>Batch Convert iPhone Photos</h2>
            <p>
              Need to convert your entire photo library? Our batch processing
              feature lets you convert up to 100 HEIC files at once. Simply use
              the "Scan Folder" button to select a directory containing your
              iPhone photos, choose which formats to include, and convert them
              all with a single click. Download individually or get everything
              in a convenient ZIP file.
            </p>

            <h2>Tips for iPhone Users</h2>
            <p>
              If you frequently need to share photos with non-Apple users, you
              can change your iPhone's default photo format:
            </p>
            <ol>
              <li>Open the Settings app on your iPhone</li>
              <li>Scroll down and tap "Camera"</li>
              <li>Tap "Formats"</li>
              <li>Select "Most Compatible"</li>
            </ol>
            <p>
              This will make your iPhone save photos as JPG instead of HEIC.
              Note that this will use more storage space, but ensures maximum
              compatibility when sharing photos.
            </p>
          </SEOContent>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              HEIC Conversion FAQs
            </h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </div>
    </>);

}