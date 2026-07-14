import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const contactData = [{
      email: body.email || '',
      phone: body.phone || ''
    }];

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
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
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error response:', errorText);
      throw new Error(`Webhook request failed with status ${response.status}: ${errorText}`);
    }

    return NextResponse.json(
      { success: true, message: 'Contact submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting contact:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
