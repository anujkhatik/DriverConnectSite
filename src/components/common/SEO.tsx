/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS_DETAILS } from '../../content.ts';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'DriverConnect: Book a Driver in Surat',
  description = 'Book a professional driver for your own car in Surat, Gujarat. Hourly & daily booking from ₹600. Verified drivers, live tracking, transparent pricing.',
  canonicalPath,
  type = 'website',
  noIndex = false,
}) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${BUSINESS_DETAILS.websiteUrl}${currentPath === '/' ? '' : currentPath}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Update OpenGraph tags
    const updateMetaTag = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', type);
    updateMetaTag('og:url', canonicalUrl);
    updateMetaTag('og:site_name', BUSINESS_DETAILS.brandName);

    // Update Twitter tags
    const updateTwitterTag = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);

    // Update Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Inject/Update Schema.org LocalBusiness / Organization JSON-LD
    let scriptTag = document.getElementById('driverconnect-schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'driverconnect-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BUSINESS_DETAILS.brandName,
      description:
        'Time-based driver booking service for your own car in Surat, Gujarat. Hourly & daily booking with verified drivers.',
      url: BUSINESS_DETAILS.websiteUrl,
      email: BUSINESS_DETAILS.supportEmail,
      priceRange: '₹600 - ₹2200+',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '24 Cars, Vesu',
        addressLocality: 'Surat',
        addressRegion: 'Gujarat',
        postalCode: '395007',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '21.1418',
        longitude: '72.7709',
      },
      areaServed: {
        '@type': 'City',
        name: 'Surat',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
      founder: {
        '@type': 'Person',
        name: BUSINESS_DETAILS.grievanceOfficer.name,
      },
    };

    scriptTag.text = JSON.stringify(structuredData);
  }, [title, description, canonicalUrl, type]);

  return null;
};
