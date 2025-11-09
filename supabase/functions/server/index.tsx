import { Hono } from "npm:hono@4";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { Resend } from "npm:resend@4.0.0";

const app = new Hono();

// Initialize Resend
const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a887b54b/health", (c) => {
  return c.json({ status: "ok" });
});

// Email sending endpoint
app.post("/make-server-a887b54b/send-email", async (c) => {
  try {
    const data = await c.req.json();

    // Validate required fields
    if (!data.email || !data.phone) {
      return c.json({ 
        success: false, 
        message: 'Email and phone are required fields' 
      }, 400);
    }

    // Determine which form was submitted
    const isContactPageForm = data.firstName && data.lastName;
    const isHeroForm = data.fullName;

    let htmlContent = '';
    let subject = '';
    let textContent = '';

    if (isContactPageForm) {
      subject = 'New Quote Request from Contact Page - Westprint';
      
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0891b2 0%, #14b8a6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #0891b2; border-radius: 4px; }
            .label { font-weight: bold; color: #0891b2; margin-bottom: 5px; }
            .value { color: #374151; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Quote Request</h1>
              <p style="margin: 10px 0 0 0;">From Contact Page</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Contact Name</div>
                <div class="value">${data.firstName} ${data.lastName}</div>
              </div>
              
              ${data.company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${data.company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              
              ${data.service ? `
              <div class="field">
                <div class="label">Service Needed</div>
                <div class="value">${data.service}</div>
              </div>
              ` : ''}
              
              ${data.quantity ? `
              <div class="field">
                <div class="label">Estimated Quantity</div>
                <div class="value">${data.quantity}</div>
              </div>
              ` : ''}
              
              ${data.timeline ? `
              <div class="field">
                <div class="label">Project Timeline</div>
                <div class="value">${data.timeline}</div>
              </div>
              ` : ''}
              
              ${data.message ? `
              <div class="field">
                <div class="label">Project Details</div>
                <div class="value" style="white-space: pre-wrap;">${data.message}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>This quote request was submitted via the Westprint website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      textContent = `
New Quote Request from Contact Page

Contact Name: ${data.firstName} ${data.lastName}
${data.company ? `Company: ${data.company}` : ''}
Email: ${data.email}
Phone: ${data.phone}
${data.service ? `Service Needed: ${data.service}` : ''}
${data.quantity ? `Estimated Quantity: ${data.quantity}` : ''}
${data.timeline ? `Project Timeline: ${data.timeline}` : ''}
${data.message ? `\nProject Details:\n${data.message}` : ''}
      `;
      
    } else if (isHeroForm) {
      subject = 'New Quote Request from Homepage - Westprint';
      
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0891b2 0%, #14b8a6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #0891b2; border-radius: 4px; }
            .label { font-weight: bold; color: #0891b2; margin-bottom: 5px; }
            .value { color: #374151; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Quote Request</h1>
              <p style="margin: 10px 0 0 0;">From Homepage Hero Form</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${data.fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              
              ${data.projectDetails ? `
              <div class="field">
                <div class="label">Project Details</div>
                <div class="value" style="white-space: pre-wrap;">${data.projectDetails}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>This quote request was submitted via the Westprint homepage.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      textContent = `
New Quote Request from Homepage

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
${data.projectDetails ? `\nProject Details:\n${data.projectDetails}` : ''}
      `;
    } else {
      return c.json({ 
        success: false, 
        message: 'Invalid form data' 
      }, 400);
    }

    // Send email using Resend
    // Production: sending to estimating@westprint.com and rcarandang@advantageinc.com
    const result = await resend.emails.send({
      from: 'Westprint Website <onboarding@resend.dev>',
      to: ['estimating@westprint.com', 'rcarandang@advantageinc.com'],
      replyTo: data.email,
      subject: subject,
      html: htmlContent,
      text: textContent,
    });

    console.log('Email sent successfully:', result);

    return c.json({ 
      success: true, 
      message: 'Quote request sent successfully',
      emailId: result.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    return c.json({ 
      success: false, 
      message: 'Failed to send quote request. Please try again or call us directly.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

Deno.serve(app.fetch);
