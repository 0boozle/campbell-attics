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
    name: data.name,
    from_email: data.email,
    phone: data.phone || "Not provided",
    email: data.email || "Not provided", // for Reply To field
    message: data.message || "No message provided",
    jobType: data.jobType || "Not applicable",
    budget: data.budget || "Not applicable",
    urgency: data.urgency || "Not applicable",
    location: data.location || "Not applicable",
    additionalInfo: data.additionalInfo || "Not applicable",
      }
    );
    
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};