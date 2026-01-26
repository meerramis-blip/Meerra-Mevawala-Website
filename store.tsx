
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppState, Service, Course, Testimonial, BlogPost, Booking, Inquiry, SiteSettings } from './types';
import { INITIAL_STATE } from './constants';

interface StoreContextType {
  state: AppState;
  setAdmin: (isAdmin: boolean) => void;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  addService: (service: Service) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  addCourse: (course: Course) => void;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  addBooking: (booking: Booking) => void;
  addInquiry: (inquiry: Inquiry) => void;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem('meerra_state');
      if (saved && saved !== 'undefined' && saved !== 'null') {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_STATE, ...parsed };
      }
    } catch (error) {
      console.error('Failed to load state from localStorage:', error);
    }
    return INITIAL_STATE;
  });

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'meerra_state' && e.newValue) {
        setState(prev => ({
          ...prev,
          ...JSON.parse(e.newValue!)
        }));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('meerra_state', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save state to localStorage:', error);
    }
  }, [state]);

  const setAdmin = (isAdmin: boolean) => {
    setState(prev => ({ ...prev, isAdmin }));
  };

  const updateSettings = (settings: Partial<SiteSettings>) => {
    setState(prev => ({ ...prev, settings: { ...prev.settings, ...settings } }));
  };

  const addService = (service: Service) => {
    setState(prev => ({ ...prev, services: [service, ...prev.services] }));
  };

  const updateService = (id: string, service: Partial<Service>) => {
    setState(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, ...service } : s)
    }));
  };

  const deleteService = (id: string) => {
    setState(prev => ({ ...prev, services: prev.services.filter(s => s.id !== id) }));
  };

  const addCourse = (course: Course) => {
    setState(prev => ({ ...prev, courses: [course, ...prev.courses] }));
  };

  const updateCourse = (id: string, course: Partial<Course>) => {
    setState(prev => ({
      ...prev,
      courses: prev.courses.map(c => c.id === id ? { ...c, ...course } : c)
    }));
  };

  const deleteCourse = (id: string) => {
    setState(prev => ({ ...prev, courses: prev.courses.filter(c => c.id !== id) }));
  };

  const addTestimonial = (testimonial: Testimonial) => {
    setState(prev => ({ ...prev, testimonials: [testimonial, ...prev.testimonials] }));
  };

  const updateTestimonial = (id: string, testimonial: Partial<Testimonial>) => {
    setState(prev => ({
      ...prev,
      testimonials: prev.testimonials.map(t => t.id === id ? { ...t, ...testimonial } : t)
    }));
  };

  const deleteTestimonial = (id: string) => {
    setState(prev => ({ ...prev, testimonials: prev.testimonials.filter(t => t.id !== id) }));
  };

  const addBooking = (booking: Booking) => {
    setState(prev => ({ ...prev, bookings: [booking, ...prev.bookings] }));
  };

  const addInquiry = (inquiry: Inquiry) => {
    setState(prev => ({ ...prev, inquiries: [inquiry, ...prev.inquiries] }));
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    setState(prev => ({
      ...prev,
      bookings: prev.bookings.map(b => b.id === id ? { ...b, status } : b)
    }));
  };

  const addBlogPost = (post: BlogPost) => {
    setState(prev => ({ ...prev, blogPosts: [post, ...prev.blogPosts] }));
  };

  const updateBlogPost = (id: string, post: Partial<BlogPost>) => {
    setState(prev => ({
      ...prev,
      blogPosts: prev.blogPosts.map(p => p.id === id ? { ...p, ...post } : p)
    }));
  };

  const deleteBlogPost = (id: string) => {
    setState(prev => ({ ...prev, blogPosts: prev.blogPosts.filter(p => p.id !== id) }));
  };

  return (
    <StoreContext.Provider value={{
      state, setAdmin, updateSettings, addService, updateService, deleteService,
      addCourse, updateCourse, deleteCourse, addTestimonial, updateTestimonial, deleteTestimonial,
      addBooking, addInquiry, updateBookingStatus, addBlogPost, updateBlogPost, deleteBlogPost
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};