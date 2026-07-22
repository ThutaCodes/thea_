import React from 'react';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationStructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Thea Solutions',
    url: 'https://theasolutions.co',
    logo: 'https://theasolutions.co/dark_tranStacked_logo.png',
    description: 'Thea Solutions specializes in bespoke software development, enterprise-grade AI, and automation solutions engineered specifically for SMEs to streamline operations and scale with confidence.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'business@theasolutions.co',
      contactType: 'business inquiries',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.linkedin.com/company/theasolutionss',
      'https://www.tiktok.com/@theasolutions_?_r=1&_t=ZS-980MdkL0X9J',
      'https://www.instagram.com/theasolutions_?igsh=ODc3ZmFrN2tkbDYw'
    ],
    knowsAbout: [
      'bespoke software development',
      'enterprise AI solutions',
      'business automation',
      'SME technology',
      'custom software development',
      'AI integration',
      'process automation',
      'workflow automation',
      'machine learning solutions'
    ],
  };

  return <StructuredData data={organizationData} />;
}

export function WebSiteStructuredData() {
  const webSiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Thea Solutions',
    url: 'https://theasolutions.co',
    description: 'Thea Solutions provides expert consulting services for business growth and innovation.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://theasolutions.co/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredData data={webSiteData} />;
}
