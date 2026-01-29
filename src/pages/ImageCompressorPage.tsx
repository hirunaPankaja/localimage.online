import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ConverterApp } from '../components/converter/ConverterApp';
import { SEOHead } from '../components/layout/SEOHead';
import { SEOContent } from '../components/seo/SEOContent';
import { FAQAccordion } from '../components/seo/FAQAccordion';
export function ImageCompressorPage() {
  const faqs = [
  {
    question: 'How does image compression work?',
    answer:
    'Our compressor intelligently reduces the file size of your images by optimizing color data and removing unnecessary metadata. For lossy formats like JPG, it selectively reduces detail in areas where the human eye is less sensitive to changes.'
  },
  {
    question: 'What is the best quality setting for compression?',
    answer:
    'For most web uses, a quality setting of 80% offers the best balance between file size and visual fidelity. For social media, 70-80% is usually sufficient. For printing, keep it at 90-100% to preserve maximum detail.'
  },
  {
    question: 'Will compression make my images look bad?',
    answer:
    'At quality settings of 70% and above, most people cannot distinguish compressed images from originals. Our smart compression algorithms prioritize visual quality while maximizing file size reduction.'
  },
  {
    question: 'How much can I reduce my image file sizes?',
    answer:
    'Depending on the original image and quality setting, you can typically reduce file sizes by 50-80%. A 5MB photo might compress to 500KB-1MB while still looking great.'
  },
  {
    question: 'Does compression remove image metadata?',
    answer:
    'Our compression process focuses on image data optimization. EXIF metadata (camera info, GPS, etc.) may be preserved or removed depending on the output format and browser capabilities.'
  },
  {
    question: 'Can I compress PNG files?',
    answer:
    'Yes! While PNG uses lossless compression by default, you can convert PNGs to JPG or WebP during compression for significant size reduction. For PNGs that need to stay as PNG, the quality slider affects the compression level.'
  },
  {
    question: 'Is there a limit to how many images I can compress?',
    answer:
    'You can compress up to 100 images at once. This limit ensures your browser has enough memory to process all images smoothly without crashing or slowing down.'
  },
  {
    question: 'Are my images uploaded to a server for compression?',
    answer:
    'No! All compression happens directly in your browser using local processing. Your images never leave your device, ensuring complete privacy and security.'
  }];

  return (
    <>
      <SEOHead
        title="Image Compressor - Reduce File Size Online | LocalImage.online"
        description="Compress images online to reduce file size without losing quality. Optimize JPG, PNG, and WebP files for faster websites, easier sharing, and reduced storage. Free and private."
        canonicalPath="/image-compressor"
        keywords="image compressor, compress images, reduce image size, optimize images, photo compressor, image optimization, reduce file size, compress jpg, compress png"
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
            Free Online Image Compressor
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Reduce image file size without visible quality loss. Optimize for
            web, email, and storage.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
              Up to 80% Smaller
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              No Quality Loss
            </span>
            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full">
              100% Private
            </span>
          </div>
        </section>

        <section className="px-4 max-w-[1400px] mx-auto">
          <ConverterApp />
        </section>

        <section className="px-4 max-w-4xl mx-auto">
          <SEOContent title="Compress Images Without Losing Quality">
            <p>
              High-resolution images are beautiful, but they come with a cost:
              large file sizes that slow down websites, fill up storage, and
              make sharing difficult. Our online image compressor allows you to
              significantly reduce the file size of your photos while
              maintaining excellent visual quality that's indistinguishable from
              the original.
            </p>

            <h2>Why Compress Your Images?</h2>
            <p>
              Image compression is essential for anyone who works with digital
              photos, whether you're a web developer, photographer, blogger, or
              just someone who wants to share photos with friends and family.
              Here's why compression matters:
            </p>
            <ul>
              <li>
                <strong>Faster Website Loading:</strong> Images are typically
                the largest files on a webpage. Compressed images load faster,
                improving user experience and reducing bounce rates. Google also
                uses page speed as a ranking factor, so faster sites rank
                higher.
              </li>
              <li>
                <strong>Save Storage Space:</strong> Whether it's your phone,
                computer, or cloud storage, compressed images take up less
                space. This means more room for more photos and lower storage
                costs.
              </li>
              <li>
                <strong>Easier Sharing:</strong> Email attachments have size
                limits. Social media platforms compress your images anyway
                (often poorly). By compressing yourself, you control the quality
                and ensure faster uploads.
              </li>
              <li>
                <strong>Reduced Bandwidth Costs:</strong> For websites and apps,
                smaller images mean lower CDN and hosting bills. This can add up
                to significant savings for high-traffic sites.
              </li>
              <li>
                <strong>Better Mobile Experience:</strong> Mobile users often
                have limited data plans and slower connections. Compressed
                images load faster and use less data, making your content more
                accessible.
              </li>
            </ul>

            <h2>How Our Image Compressor Works</h2>
            <p>
              Our compressor uses advanced algorithms to analyze your images and
              reduce file size while preserving visual quality. The process
              works differently depending on the image format:
            </p>
            <p>
              For <strong>JPG/JPEG images</strong>, we use intelligent lossy
              compression that removes data the human eye is least likely to
              notice. This includes subtle color variations and fine details in
              areas where they won't be missed.
            </p>
            <p>
              For <strong>PNG images</strong>, we optimize the compression
              algorithm and can optionally convert to JPG or WebP for even
              greater size reduction when transparency isn't needed.
            </p>
            <p>
              For <strong>WebP images</strong>, we leverage this modern format's
              superior compression capabilities to achieve the smallest possible
              file sizes while maintaining quality.
            </p>

            <h2>Choosing the Right Quality Setting</h2>
            <p>
              The quality slider lets you balance file size against image
              quality. Here's a guide to help you choose:
            </p>
            <ul>
              <li>
                <strong>90-100%:</strong> Minimal compression, best for printing
                and archival. File size reduction of 10-30%.
              </li>
              <li>
                <strong>80-90%:</strong> Excellent quality, perfect for
                portfolios and professional use. File size reduction of 30-50%.
              </li>
              <li>
                <strong>70-80%:</strong> Great quality, ideal for websites and
                social media. File size reduction of 50-70%.
              </li>
              <li>
                <strong>60-70%:</strong> Good quality, suitable for thumbnails
                and previews. File size reduction of 70-80%.
              </li>
              <li>
                <strong>Below 60%:</strong> Noticeable quality loss, only for
                extreme size requirements.
              </li>
            </ul>

            <h2>Batch Compression for Efficiency</h2>
            <p>
              Need to compress your entire photo library or all images for a
              website? Our batch processing feature lets you compress up to 100
              images at once. Simply upload your files, set your desired quality
              level, and click compress. Download individually or get everything
              in a convenient ZIP file.
            </p>

            <h2>Privacy-First Compression</h2>
            <p>
              Unlike other online compressors that upload your images to remote
              servers, LocalImage.online processes everything directly in your
              browser. Your photos never leave your device, ensuring complete
              privacy for personal photos, confidential documents, and sensitive
              images. There's no upload time, no waiting for server processing,
              and no risk of your images being stored or accessed by anyone
              else.
            </p>

            <h2>Tips for Best Results</h2>
            <ol>
              <li>
                <strong>Start with the original:</strong> Always compress from
                the highest quality source available. Compressing an
                already-compressed image leads to worse results.
              </li>
              <li>
                <strong>Preview before downloading:</strong> Check the file size
                comparison on each image card to ensure you're happy with the
                compression ratio.
              </li>
              <li>
                <strong>Consider the format:</strong> For photographs, JPG or
                WebP offer the best compression. For graphics with transparency,
                stick with PNG or WebP.
              </li>
              <li>
                <strong>Test different quality levels:</strong> Try a few images
                at different quality settings to find the sweet spot for your
                specific use case.
              </li>
            </ol>
          </SEOContent>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Image Compression FAQs
            </h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </div>
    </>);

}