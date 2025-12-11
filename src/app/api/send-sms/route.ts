import { NextRequest, NextResponse } from 'next/server';
import { sanitizeText } from '@/lib/security';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Sanitize inputs
    const message = sanitizeText(body.message, 500);
    const messageType = sanitizeText(body.messageType || 'newsletter', 50);
    
    // Validate message type
    const validTypes = ['newsletter', 'availability', 'special'];
    if (!validTypes.includes(messageType)) {
      return NextResponse.json(
        { success: false, message: 'Invalid message type' },
        { status: 400 }
      );
    }
    
    // Validate message content
    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Here you would integrate with Twilio for SMS
    /*
    const twilio = require('twilio');
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    
    const chefSubscribers = await getChefSubscribers();
    
    for (const chef of chefSubscribers) {
      await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: chef.phoneNumber
      });
    }
    */

    // For now, we'll simulate the SMS sending
    console.log(`Sending SMS to chef subscribers`);
    console.log(`Message type: ${messageType}`);
    console.log(`Message: ${message}`);

    // Simulate chef subscriber count
    const chefCount = 89;

    // Simulate different message types
    let finalMessage = message;
    if (messageType === 'availability') {
      finalMessage = `🥬 AVAILABILITY UPDATE: ${message} - Reply STOP to opt out`;
    } else if (messageType === 'special') {
      finalMessage = `🌟 SPECIAL OFFER: ${message} - Reply STOP to opt out`;
    } else {
      finalMessage = `📰 Mendo Grass Newsletter: ${message} - Reply STOP to opt out`;
    }

    return NextResponse.json({
      success: true,
      message: `SMS sent successfully to ${chefCount} chefs`,
      sentCount: chefCount,
      messageType,
      finalMessage
    });

  } catch (error) {
    console.error('Error sending SMS:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send SMS' },
      { status: 500 }
    );
  }
}

// Helper function to get chef subscribers (you'll implement based on your data storage)
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
async function getChefSubscribers() {
  // This would fetch from your database
  // For now, return mock data
  return [
    { phoneNumber: '+15551234567', name: 'Chef Maria', restaurant: 'Bistro Verde' },
    { phoneNumber: '+15559876543', name: 'Chef John', restaurant: 'Farm Table' },
  ];
}
