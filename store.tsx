
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppState, Service, Course, Testimonial, BlogPost, Booking, Inquiry, SiteSettings } from './types';
import { INITIAL_STATE } from './constants';

interface StoreContextType {
  state: AppState;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  addService: (service: Service) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  addCourse: (course: Course) => void;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
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
    const saved = localStorage.getItem('meerra_state');
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('meerra_state', JSON.stringify(state));
  }, [state]);

  const updateSettings = (settings: Partial<SiteSettings>) => {
    setState(prev => ({ ...prev, settings: { ...prev.settings, ...settings } }));
  };

  const addService = (service: Service) => {
    setState(prev => ({ ...prev, services: [...prev.services, service] }));
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
    setState(prev => ({ ...prev, courses: [...prev.courses, course] }));
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
      state, updateSettings, addService, updateService, deleteService,
      addCourse, updateCourse, deleteCourse, addBooking, addInquiry,
      updateBookingStatus, addBlogPost, updateBlogPost, deleteBlogPost
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
