// src/lib/emailjs.ts
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const CONTACT_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || '';
const DEALER_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_DEALER || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export interface ContactFormData {
    name: string;
    phone: string;
    subject: string;
    message: string;
}

export interface DealerInquiryData {
    name: string;
    shopName: string;
    location: string;
    phone: string;
    message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
    await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE,
        {
            from_name: data.name,
            from_phone: data.phone,
            subject: data.subject,
            message: data.message,
        },
        PUBLIC_KEY
    );
}

export async function sendDealerInquiry(data: DealerInquiryData): Promise<void> {
    await emailjs.send(
        SERVICE_ID,
        DEALER_TEMPLATE,
        {
            from_name: data.name,
            shop_name: data.shopName,
            location: data.location,
            from_phone: data.phone,
            message: data.message,
        },
        PUBLIC_KEY
    );
}
