import emailjs from '@emailjs/browser';

// Initialize EmailJS with environment variables
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  jobType?: string;
  budget?: string;
  urgency?: string;
  location?: string;
}

export const sendEmail = async (data: EmailData, templateId: string) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
      templateId,
      {
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'campbellcwa@outlook.com',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        message: data.message,
        job_type: data.jobType || "Not applicable",
        budget: data.budget || "Not applicable",
        urgency: data.urgency || "Not applicable",
        location: data.location || "Not applicable"
      }
    );
    
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};