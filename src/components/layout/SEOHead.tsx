import React, { useEffect, createElement } from 'react';
import { SEOProps } from '../../types';
export function SEOHead({
  title,
  description,
  canonicalPath,
  keywords,
  ogType = 'website',
  faqs
}: SEOProps) {
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
    // Update Meta Tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow');
    updateMeta('author', 'LocalImage.online');
    // Open Graph
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta(
      'og:url',
      `https://localimage.online${canonicalPath}`,
      'property'
    );
    updateMeta('og:type', ogType, 'property');
    updateMeta('og:site_name', 'LocalImage.online', 'property');
    updateMeta('og:image', 'https://localimage.online/og-image.png', 'property');
    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:site', '@localimage');
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
      name: 'LocalImage.online - Image Converter & Compressor',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any (Web Browser)',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      description: description,
      url: `https://localimage.online${canonicalPath}`,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1250'
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
    // WebSite schema for sitelinks search
    const websiteJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'LocalImage.online',
      url: 'https://localimage.online',
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
  }, [title, description, canonicalPath, keywords, ogType, faqs]);
  return null;
}