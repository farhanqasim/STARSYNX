import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// All email addresses to receive newsletter subscriptions
const RECIPIENT_EMAILS = [
  'starsynxofficial@gmail.com'
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the subscription
    console.log('New newsletter subscription:', email);

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured!');
      // Still return success even if email can't be sent (for development)
      console.log('Newsletter subscription logged (email not sent - SMTP not configured)');
      return NextResponse.json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create HTML email content for notification
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
          New Newsletter Subscription
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Subscriber Information</h3>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="color: #64748b; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p>This email was sent from the Starsynx newsletter subscription form.</p>
        </div>
      </div>
    `;

    // Send notification email
    try {
      const mailOptions = {
        from: process.env.SMTP_FROM || `"Starsynx Website" <${process.env.SMTP_USER}>`,
        to: RECIPIENT_EMAILS.join(', '),
        replyTo: email,
        subject: `New Newsletter Subscription: ${email}`,
        html: htmlContent,
        text: `
New Newsletter Subscription

Email: ${email}
Subscription Date: ${new Date().toLocaleString()}

---
This email was sent from the Starsynx newsletter subscription form.
        `.trim(),
      };

      await transporter.sendMail(mailOptions);
      console.log('Newsletter subscription notification sent successfully!');
    } catch (emailError) {
      console.error('Failed to send newsletter notification email:', emailError);
      // Don't fail the subscription if email sending fails
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}