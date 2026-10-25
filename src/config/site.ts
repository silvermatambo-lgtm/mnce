import raw from '../../site.config.json';

type Config = Omit<typeof raw, 'testimonials'> & {testimonials: Array<{ name: string; quote: string; context: string }>};
export const site = raw as Config;
export const hasPhone = Boolean(site.contact.phone.trim());
export const hasWhatsApp = /^\d{8,15}$/.test(site.contact.whatsapp.replace(/\D/g, ''));
export const whatsAppNumber = site.contact.whatsapp.replace(/\D/g, '');
export const telephone = site.contact.phone.replace(/[^+\d]/g, '');
export const whatsappHref = (message = `Hello ${site.brand.name}, I would like to enquire.`) =>
  hasWhatsApp ? `https://wa.me/${whatsAppNumber.startsWith('0') ? '27'+whatsAppNumber.slice(1) : whatsAppNumber}?text=${encodeURIComponent(message)}` : '';
export const navLinks = [
 {to:'/',label:'Home'}, {to:'/onsite',label:'On-site Training'}, {to:'/courses',label:'Courses'}, {to:'/about',label:'About'}, {to:'/gallery',label:'Gallery'}, {to:'/media',label:'Videos'}, {to:'/faq',label:'FAQ'}, {to:'/contact',label:'Contact'}
];
