import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const quoteData = [{
      company: body.company || '',
      contactName: body.contactName || '',
      email: body.email || '',
      phone: body.phone || '',
      serviceType: body.serviceType || '',
      projectDescription: body.projectDescription || '',
      budgetRange: body.budgetRange || '',
      timeline: body.timeline || ''
    }];

    const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
    const passphrase = process.env.WEBHOOK_JWT_PASSPHRASE;
    
    if (!webhookUrl) {
      return NextResponse.json(
        { error: 'Webhook URL not configured' },
        { status: 500 }
      );
    }

    if (!passphrase) {
      return NextResponse.json(
        { error: 'JWT passphrase not configured' },
        { status: 500 }
      );
    }

    const token = jwt.sign({}, passphrase, { algorithm: 'HS256', expiresIn: '1h' });

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(quoteData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error response:', errorText);
      throw new Error(`Webhook request failed with status ${response.status}: ${errorText}`);
    }

    return NextResponse.json(
      { success: true, message: 'Quote submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting quote:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
