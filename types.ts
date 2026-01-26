
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  category: 'Bridal' | 'Party' | 'Editorial' | 'Special';
  image: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  category: 'Professional' | 'Makeup' | 'Hair' | 'Nail';
  certification: string;
  curriculum: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  lookTitle?: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  videoUrl?: string;
  videoThumbnail?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  author: string;
  published: boolean;
}

export interface Booking {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  createdAt: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: 'Service' | 'Course' | 'General';
  createdAt: string;
}

export interface SiteSettings {
  brandName: string;
  primaryColor: string;
  accentColor: string;
  fontHeading: string;
  fontBody: string;
  whatsappNumber: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  pinterestUrl: string;
  googleMapsUrl: string;
  address: string;
  email: string;
  phone: string;
}

export type AppState = {
  services: Service[];
  courses: Course[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  bookings: Booking[];
  inquiries: Inquiry[];
  settings: SiteSettings;
  isAdmin: boolean;
};