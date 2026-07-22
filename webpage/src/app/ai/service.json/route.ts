import { NextResponse } from 'next/server';

export async function GET() {
  const service = {
    version: "1.0",
    lastModified: new Date().toISOString(),
    service: {
      name: "Thea Solutions",
      type: "technology-service",
      description: "A technology company specializing in bespoke software development, enterprise AI solutions, and intelligent automation systems",
      url: "https://theasolutions.co",
      capabilities: [
        "Bespoke software development",
        "Enterprise AI solutions",
        "Workflow automation",
        "Machine learning integration",
        "Custom API development",
        "Process optimization"
      ],
      endpoints: {
        "home": "/",
        "about": "/about",
        "services": "/services",
        "contact": "/contact"
      },
      serviceAreas: [
        "Custom software development",
        "AI-powered automation",
        "Business process optimization",
        "Data analytics solutions",
        "Cloud integration"
      ],
      contact: {
        "email": "business@theasolutions.co",
        "website": "https://theasolutions.co"
      },
      availability: "Monday - Friday, 9:00 AM - 6:00 PM ASEAN business hours",
      responseTime: "Within 24 business hours",
      languages: ["English"],
      pricing: "Custom pricing based on project scope"
    }
  };

  return NextResponse.json(service, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
