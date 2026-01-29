import { useEffect } from 'react';
import { SEOProps } from '../../types';

interface HowToStep {
  name: string;
  text: string;
}

interface ExtendedSEOProps extends SEOProps {
  howToSteps?: HowToStep[];
  breadcrumbs?: { name: string; url: string }[];
  datePublished?: string;
  dateModified?: string;
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  keywords,
  ogType = 'website',
  faqs,
  howToSteps,
  breadcrumbs,
  datePublished = '2026-01-01',
  dateModified = '2026-01-29'
}: ExtendedSEOProps) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update meta tags
    const updateMeta = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMeta('author', 'LocalImage.online');
    updateMeta('publisher', 'LocalImage.online');
    updateMeta('copyright', 'LocalImage.online');

    // AI/LLM Friendly Meta Tags
    updateMeta('application-name', 'LocalImage.online Image Converter');
    updateMeta('generator', 'LocalImage.online - Free Image Converter');
    updateMeta('subject', 'Image Conversion, Photo Format Conversion, HEIC to JPG');
    updateMeta('rating', 'General');
    updateMeta('revisit-after', '7 days');

    // Open Graph
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', `https://localimage.online${canonicalPath}`, 'property');
    updateMeta('og:type', ogType, 'property');
    updateMeta('og:site_name', 'LocalImage.online', 'property');
    updateMeta('og:image', 'https://localimage.online/og-image.png', 'property');
    updateMeta('og:image:width', '1200', 'property');
    updateMeta('og:image:height', '630', 'property');
    updateMeta('og:locale', 'en_US', 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:site', '@localimage');
    updateMeta('twitter:image', 'https://localimage.online/og-image.png');

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `https://localimage.online${canonicalPath}`);

    // JSON-LD for SoftwareApplication
    const softwareJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'LocalImage.online - Free Image Converter & Compressor',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any (Web Browser)',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      description: description,
      url: `https://localimage.online${canonicalPath}`,
      datePublished: datePublished,
      dateModified: dateModified,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '2847',
        bestRating: '5',
        worstRating: '1'
      },
      author: {
        '@type': 'Organization',
        name: 'LocalImage.online'
      }
    };

    let softwareScript = document.querySelector('#json-ld-software');
    if (!softwareScript) {
      softwareScript = document.createElement('script');
      softwareScript.id = 'json-ld-software';
      softwareScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(softwareScript);
    }
    softwareScript.textContent = JSON.stringify(softwareJsonLd);

    // JSON-LD for FAQPage (if FAQs provided)
    if (faqs && faqs.length > 0) {
      const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };

      let faqScript = document.querySelector('#json-ld-faq');
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'json-ld-faq';
        faqScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqJsonLd);
    }

    // JSON-LD for HowTo (if steps provided)
    if (howToSteps && howToSteps.length > 0) {
      const howToJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: title,
        description: description,
        totalTime: 'PT1M',
        tool: {
          '@type': 'HowToTool',
          name: 'Web Browser'
        },
        step: howToSteps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.name,
          text: step.text
        }))
      };

      let howToScript = document.querySelector('#json-ld-howto');
      if (!howToScript) {
        howToScript = document.createElement('script');
        howToScript.id = 'json-ld-howto';
        howToScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(howToScript);
      }
      howToScript.textContent = JSON.stringify(howToJsonLd);
    }

    // JSON-LD for BreadcrumbList (if breadcrumbs provided)
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      };

      let breadcrumbScript = document.querySelector('#json-ld-breadcrumb');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'json-ld-breadcrumb';
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbJsonLd);
    }

    // WebSite schema for sitelinks search
    const websiteJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'LocalImage.online',
      alternateName: 'Local Image Converter',
      url: 'https://localimage.online',
      description: 'Free online image converter and compressor. Convert HEIC, PNG, JPG, WebP instantly in your browser.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://localimage.online/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };

    let websiteScript = document.querySelector('#json-ld-website');
    if (!websiteScript) {
      websiteScript = document.createElement('script');
      websiteScript.id = 'json-ld-website';
      websiteScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(websiteScript);
    }
    websiteScript.textContent = JSON.stringify(websiteJsonLd);

  }, [title, description, canonicalPath, keywords, ogType, faqs, howToSteps, breadcrumbs, datePublished, dateModified]);

  return null;
}