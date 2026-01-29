
import { Link } from 'react-router-dom';
import { Shield, Zap, Wifi, Lock, ArrowRight } from 'lucide-react';
import { ConverterApp } from '../components/converter/ConverterApp';
import { SEOHead } from '../components/layout/SEOHead';
import { SEOContent } from '../components/seo/SEOContent';
import { FAQAccordion } from '../components/seo/FAQAccordion';
export function HomePage() {
  const faqs = [
    {
      question: 'Is LocalImage.online really free?',
      answer:
        'Yes, LocalImage.online is 100% free to use. There are no hidden fees, subscriptions, or watermarks on your converted images. We believe everyone should have access to high-quality image tools.'
    },
    {
      question: 'Are my images uploaded to a server?',
      answer:
        'No. We use advanced browser technology (Canvas API and WebAssembly) to process your images directly on your device. Your files never leave your computer or phone, ensuring 100% privacy and security.'
    },
    {
      question: 'Does this tool work offline?',
      answer:
        'Yes! Once you load the page, our Service Worker caches the necessary files so you can use the converter even without an internet connection. This makes it perfect for use on airplanes, in remote areas, or anywhere with limited connectivity.'
    },
    {
      question: 'What image formats do you support?',
      answer:
        'We support input and output for JPG/JPEG, PNG, WebP, AVIF, BMP, and TIFF. We also support HEIC conversion on compatible devices. Our converter handles the most common image formats used on the web and mobile devices.'
    },
    {
      question: 'Is there a limit to how many images I can convert?',
      answer:
        "You can convert up to 100 images at once. This limit helps ensure your browser doesn't run out of memory during the conversion process. For larger batches, simply process them in groups of 100."
    },
    {
      question: 'How do I convert HEIC photos from my iPhone?',
      answer:
        'Simply upload your HEIC files using the "Upload Images" button or drag and drop them into the converter. Select JPG or PNG as your output format, adjust the quality if needed, and click "Convert All". Your photos will be converted instantly.'
    },
    {
      question: 'What quality setting should I use?',
      answer:
        'For most web uses, a quality setting of 80% offers the best balance between file size and visual fidelity. For printing or archival purposes, use 90-100%. For maximum compression (like email attachments), try 60-70%.'
    },
    {
      question: 'Can I convert images on my phone or tablet?',
      answer:
        'Absolutely! LocalImage.online is fully responsive and works on all modern smartphones and tablets. The interface adapts to your screen size, making it easy to convert images on the go.'
    }];

  return (
    <>
      <SEOHead
        title="Free Online Image Converter & Compressor | LocalImage.online"
        description="Convert and compress images online for free. Support for HEIC, PNG, JPG, WebP. 100% private - files never leave your device. Works offline."
        canonicalPath="/"
        keywords="image converter, image compressor, convert images online, compress images, free image converter, heic to jpg, png to webp, online image tools"
        faqs={faqs} />


      <div className="space-y-16 pb-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto px-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Free Online Image Converter & Compressor
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Convert HEIC, PNG, JPG, WebP & more. 100% private - files never
            leave your device.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-100">
              <Shield className="w-4 h-4" />
              No Upload Required
            </span>
            <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-100">
              <Wifi className="w-4 h-4" />
              Works Offline
            </span>
            <span className="flex items-center gap-1.5 bg-purple-50 text-purple-700 px-4 py-2 rounded-full border border-purple-100">
              <Lock className="w-4 h-4" />
              100% Free & Private
            </span>
          </div>
        </section>

        {/* App Section */}
        <section className="px-4 max-w-[1400px] mx-auto">
          <ConverterApp />
        </section>

        {/* Quick Links to Tools */}
        <section className="px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Popular Conversion Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/heic-to-jpg"
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">

              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 flex items-center justify-between">
                HEIC to JPG
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-slate-600">
                Convert iPhone photos to universal JPG format
              </p>
            </Link>
            <Link
              to="/png-to-webp"
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">

              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 flex items-center justify-between">
                PNG to WebP
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-slate-600">
                Optimize images for faster web performance
              </p>
            </Link>
            <Link
              to="/jpg-to-png"
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">

              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 flex items-center justify-between">
                JPG to PNG
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-slate-600">
                Convert to lossless format for editing
              </p>
            </Link>
            <Link
              to="/image-compressor"
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">

              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 flex items-center justify-between">
                Image Compressor
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-slate-600">
                Reduce file size without losing quality
              </p>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
              Why Choose LocalImage.online?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The smartest way to convert images online. No uploads, no waiting, no privacy concerns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Privacy Card */}
            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200/50 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  100% Private & Secure
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Your images are processed entirely in your browser using advanced WebAssembly technology. Nothing is ever uploaded to our servers. Your private photos stay private — always.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    Zero data collection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    No server uploads
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    GDPR compliant by design
                  </li>
                </ul>
              </div>
            </div>

            {/* Speed Card */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200/50 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  Lightning Fast Conversion
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  No upload or download wait times. Conversion happens instantly on your device using modern Canvas API and Web Workers. Process 100+ images in seconds.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Batch processing support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Real-time progress tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    ZIP download option
                  </li>
                </ul>
              </div>
            </div>

            {/* Offline Card */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-200/50 group-hover:scale-110 transition-transform">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">
                  Works Offline, Anywhere
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Once loaded, the converter works without internet. Perfect for travel, remote work, or unreliable connections. Your productivity never stops.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    PWA-ready technology
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Service Worker caching
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    No installation needed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="px-4 max-w-4xl mx-auto">
          <SEOContent title="Convert & Compress Images Online - Free, Private, No Upload">
            <p>
              Welcome to <strong>LocalImage.online</strong>, the most secure and
              efficient way to convert and compress your images directly in your
              web browser. Unlike other tools that require you to upload your
              sensitive photos to a remote server, our technology processes
              everything locally on your device, ensuring complete privacy and
              instant results.
            </p>

            <h2>Why Choose LocalImage.online?</h2>
            <p>
              In today's digital age, image privacy and speed are paramount.
              Traditional online converters upload your files to a cloud server,
              process them, and then send them back. This not only takes time
              depending on your internet speed but also exposes your files to
              potential privacy risks. Your personal photos, sensitive
              documents, and private images pass through third-party servers
              where they could potentially be stored, analyzed, or even
              breached.
            </p>
            <p>
              LocalImage.online eliminates these concerns entirely by using
              cutting-edge WebAssembly and Canvas APIs to perform all
              conversions right on your computer or smartphone. This
              revolutionary approach means:
            </p>
            <ul>
              <li>
                <strong>Zero Upload Time:</strong> Since files stay on your
                device, you don't have to wait for uploads to finish. Large
                batches of images convert in seconds, not minutes.
              </li>
              <li>
                <strong>Total Privacy:</strong> Your personal photos, documents,
                and designs never touch our servers. We literally cannot see
                your files because they never leave your device.
              </li>
              <li>
                <strong>Offline Capability:</strong> Once loaded, our tool works
                perfectly without an internet connection. Convert images on
                airplanes, in remote locations, or anywhere with spotty WiFi.
              </li>
              <li>
                <strong>No Account Required:</strong> Start converting
                immediately. No sign-up, no email verification, no personal
                information needed.
              </li>
            </ul>

            <h2>Supported Image Formats</h2>
            <p>
              We support a comprehensive range of modern and legacy image
              formats to ensure you can handle any file type you encounter in
              your daily workflow:
            </p>
            <ul>
              <li>
                <strong>HEIC/HEIF:</strong> Apple's high-efficiency format used
                on iPhones and iPads. Convert these to universally compatible
                JPG or PNG formats with a single click.
              </li>
              <li>
                <strong>WebP:</strong> Google's modern web format that offers
                superior compression. Convert to and from WebP for optimized
                website images.
              </li>
              <li>
                <strong>JPG/JPEG:</strong> The universal standard for
                photography, with adjustable quality settings for the perfect
                balance of size and quality.
              </li>
              <li>
                <strong>PNG:</strong> Perfect for images requiring transparency,
                screenshots, logos, and graphics with sharp edges and text.
              </li>
              <li>
                <strong>AVIF:</strong> The next-generation image format offering
                even better compression than WebP while maintaining excellent
                quality.
              </li>
              <li>
                <strong>BMP & TIFF:</strong> Legacy formats still used in
                professional workflows, scanning, and archival purposes.
              </li>
            </ul>

            <h2>How to Use the Image Converter</h2>
            <p>
              Using LocalImage.online is incredibly simple and intuitive. Our
              interface is designed so that anyone can convert images without
              reading documentation or watching tutorials:
            </p>
            <ol>
              <li>
                <strong>Select Your Images:</strong> Drag and drop your files
                into the designated area, click "Upload Images" to select files,
                or use "Scan Folder" to import an entire directory of images at
                once.
              </li>
              <li>
                <strong>Choose Your Output Format:</strong> Select your desired
                output format (JPG, PNG, WebP, etc.) from the dropdown menu in
                the left panel.
              </li>
              <li>
                <strong>Adjust Quality Settings:</strong> Use the quality slider
                to balance file size and image fidelity. Higher values mean
                better quality but larger files.
              </li>
              <li>
                <strong>Convert:</strong> Click the "Convert All Images" button
                and watch as your images are processed instantly in real-time.
              </li>
              <li>
                <strong>Download:</strong> Save your converted images
                individually with the download button on each card, or download
                everything at once as a convenient ZIP file.
              </li>
            </ol>

            <h2>Batch Processing Made Easy</h2>
            <p>
              Need to convert dozens or even hundreds of images?
              LocalImage.online handles batch processing with ease. Simply
              select up to 100 images at once, and our converter will process
              them sequentially, showing you real-time progress for each file.
              The folder scanning feature is particularly useful for
              photographers, designers, and anyone who needs to convert entire
              directories of images quickly.
            </p>

            <h2>Optimized for Speed and Performance</h2>
            <p>
              Our converter is built with performance in mind. We use modern
              browser APIs including the Canvas API for image manipulation and
              Web Workers for background processing. This means your browser
              stays responsive even while converting large batches of
              high-resolution images. The result is a smooth, fast experience
              that respects your time and your device's resources.
            </p>
          </SEOContent>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </div>
    </>);

}