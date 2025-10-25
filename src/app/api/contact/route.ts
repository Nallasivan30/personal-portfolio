import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

const ownerEmailTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; background: white; }
    .header { background: linear-gradient(135deg, #3D4C96 0%, #FF6F61 100%); padding: 30px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 24px; }
    .content { padding: 30px; }
    .message-box { background: #f8f9fa; border-left: 4px solid #3D4C96; padding: 20px; margin: 20px 0; }
    .footer { background: #1A1A2E; color: #F0F0F0; padding: 20px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <h2>Contact Details:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      
      <div class="message-box">
        <h3>Message:</h3>
        <p>${message}</p>
      </div>
      
      <p>Please respond to this inquiry at your earliest convenience.</p>
    </div>
    <div class="footer">
      <p>Portfolio Contact System</p>
    </div>
  </div>
</body>
</html>
`

const userEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; background: white; }
    .header { background: linear-gradient(135deg, #3D4C96 0%, #FF6F61 100%); padding: 30px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 24px; }
    .content { padding: 30px; line-height: 1.6; }
    .highlight { background: linear-gradient(135deg, #3D4C96 0%, #FF6F61 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; }
    .footer { background: #1A1A2E; color: #F0F0F0; padding: 20px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Reaching Out!</h1>
    </div>
    <div class="content">
      <h2>Hi ${name},</h2>
      
      <p>Thank you for contacting me! I've received your message and will get back to you within <span class="highlight">24-48 hours</span>.</p>
      
      <p>In the meantime, feel free to:</p>
      <ul>
        <li>Check out my latest projects on GitHub</li>
        <li>Connect with me on LinkedIn</li>
        <li>Explore my portfolio for more work samples</li>
      </ul>
      
      <p>I'm excited to discuss potential opportunities and collaborations with you!</p>
      
      <p>Best regards,<br>
      <span class="highlight">Your Full-Stack Developer</span></p>
    </div>
    <div class="footer">
      <p>This is an automated response. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send email to owner
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: ownerEmailTemplate(name, email, message),
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: userEmailTemplate(name),
    })

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}