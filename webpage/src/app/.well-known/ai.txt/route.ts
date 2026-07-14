import { NextResponse } from 'next/server';

export async function GET() {
  const aiTxt = `# AI.txt for theasolutions.co
# This file specifies which JSON endpoints are accessible to AI crawlers
# Note: According to Google's official guidance, AI-specific files like this are not required for Google Search visibility
# This file is provided for other AI systems that may use it

User-agent: *
Allow: /ai/faq.json
Allow: /ai/service.json
Allow: /ai/summary.json

# Last updated: ${new Date().toISOString().split('T')[0]}`;

  return new NextResponse(aiTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
