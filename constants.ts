import { AppState, SiteSettings } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  brandName: "Meerra Mevawala",
  primaryColor: "#F5E6E8",
  accentColor: "#D4AF37",
  fontHeading: "'Playfair Display', serif",
  fontBody: "'Montserrat', sans-serif",
  whatsappNumber: "+91 9820700556",
  instagramUrl: "https://www.instagram.com/meerra.mevawala/",
  facebookUrl: "https://www.facebook.com/Meerra.Mevawala/",
  youtubeUrl: "https://www.youtube.com/channel/UC-H2UnvLkMrwKGJk5RUqAvw",
  twitterUrl: "https://x.com/meerramevawala",
  linkedinUrl: "https://www.linkedin.com/in/meerra-mevawala-39b6678a/",
  pinterestUrl: "https://in.pinterest.com/meerramevawala/",
  googleMapsUrl: "https://maps.google.com/?q=201,+Monterossa,+Ghatkopar+East,+Mumbai",
  address: "201, Monterossa, 2nd Floor, 90 Feet Road, Pant Nagar, Opp Siddhivinayak mandir, above IDFC Bank, Ghatkopar East, Mumbai, Maharashtra 400075",
  email: "meerramis@gmail.com",
  phone: "+91 9820700556"
};

export const INITIAL_STATE: AppState = {
  settings: INITIAL_SETTINGS,
  isAdmin: false,
  services: [
    {
      id: 's1',
      title: 'WEDDING / RECEPTION - SIGNATURE LOOK',
      description: 'Wedding & Reception Makeup with Luxury High Brand / HD / Airbrush Products. Our most premium offering for the discerning bride.',
      price: '₹30,000',
      duration: '2 Hours',
      category: 'Bridal',
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b067c82b00b.jfif'
    },
    {
      id: 's2',
      title: 'COCKTAIL / SANGEET',
      description: 'Minimalistic to Heavy makeup – Depends on Clients Choice. Flawless Finish & Long Lasting Makeup look using professional high-end products.',
      price: '₹25,000',
      duration: '2 Hours',
      category: 'Bridal',
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/6975d397eb392b4b7242cac3.jpeg'
    },
    {
      id: 's3',
      title: 'MEHNDI / HALDI / ENGAGEMENT / PARTY MAKEUP',
      description: 'Sophisticated flawless finish and long-lasting makeup for Mehendi, Haldi, Engagement, and all types of celebration party looks.',
      price: '₹18,000',
      duration: '2 Hours',
      category: 'Bridal',
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b107082b00a.jfif'
    },
    {
      id: 's7',
      title: 'PRE-BRIDAL SHOOT',
      description: 'Comprehensive professional makeup and hairstyling for your pre-wedding photoshoot. Includes look changes and touch-ups throughout the day to ensure perfection in every frame.',
      price: '₹25,000',
      duration: '8 Hours',
      category: 'Bridal',
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e515885e80b07c00c5.jfif'
    },
    {
      id: 's4',
      title: 'ENGAGEMENT / SISTER MAKEUP',
      description: 'Sophisticated and elegant look for the bride\'s sister or for engagement ceremonies.',
      price: '₹18,000',
      duration: '2 Hours',
      category: 'Party',
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697215cbcff5694f33359411.jpeg'
    },
    {
      id: 's5',
      title: 'MATURE SKIN (MOM) MAKEUP',
      description: 'Specialized techniques for mature skin to provide a youthful, glowing, and elegant look for the Mother of the Bride/Groom.',
      price: '₹12,500',
      duration: '2 Hours',
      category: 'Special',
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697216ac4a64640501509374.jpeg'
    },
    {
      id: 's6',
      title: 'GROOM MAKEUP',
      description: 'Natural, camera-ready grooming to ensure a flawless and polished look for the groom on his special day.',
      price: '₹5,000',
      duration: '0.5 Hours',
      category: 'Special',
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/69721659d740ae4f18cff776.jpeg'
    }
  ],
  courses: [
    {
      id: 'c2',
      title: 'LEVEL 1A - FUNDAMENTAL MAKEUP',
      description: 'A comprehensive one-week foundation course designed to kick-start your career and learn professional beauty skills up to special occasion level.',
      duration: '1 Week (6 Sessions)',
      price: '₹19,999',
      category: 'Professional',
      certification: 'MIS Fundamental Makeup Certificate',
      curriculum: ['Hygiene & Health Safety', 'Product Research', 'Color-wheel Theory', 'Natural & Day Makeup', 'Ethnic/Traditional Looks', 'Mature Skin Techniques'],
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b067c82b00b.jfif'
    },
    {
      id: 'c14',
      title: 'LEVEL 2A - ADVANCE MAKEUP',
      description: 'A 3-week programmed course designed for professional beauty makeup skills, special occasions, and foundational creative makeup.',
      duration: '3 Weeks (75 Hours)',
      price: '₹79,999',
      category: 'Professional',
      certification: 'MIS Professional Advancement Certificate',
      curriculum: ['Eye Mapping & Shading', 'Glitter Application', 'Arabic Eye Makeup', 'Waterproof Mastery', 'Baking & Contouring', 'Color Transitions'],
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b107082b00a.jfif'
    },
    {
      id: 'c15',
      title: 'LEVEL 2B - ADVANCE MAKEUP',
      description: 'A 6-week intensive programmed course for those wishing to kick-start their professional beauty career and learn advanced creative makeup for special occasions.',
      duration: '6 Weeks (150 Hours)',
      price: '₹1,79,999',
      category: 'Professional',
      certification: 'MIS Advanced Professional Certification',
      curriculum: ['Dusky Skin Mastery', 'Society & Party Makeup', 'Red Carpet Glamour', 'Character Makeup Looks', 'Sunkissed & Glowy Skin', 'Glossy Eye Techniques'],
      image: 'https://images.unsplash.com/photo-1522338228048-3506018615c1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'c1',
      title: 'LEVEL 3 - CIDESCO INTERNATIONAL MEDIA MAKEUP DIPLOMA',
      description: 'The ultimate professional course at Meerras International school. Valid worldwide, this course covers everything from intermediate/foundation to next-advance pro levels including film, TV, and fashion.',
      duration: '12 Weeks (340 Hours)',
      price: '₹2,24,999',
      category: 'Professional',
      certification: 'CIDESCO International Diploma (Zurich)',
      curriculum: ['Advanced Color Theory', 'Practical Eye Mapping', 'Asian & Arabic Makeup', 'Special Occasion Mastery', 'Editorial & Fantasy Looks', 'Photography Makeup'],
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'c3',
      title: 'LEVEL MIS 1 - SELF MAKEUP',
      description: 'One-on-one personal makeup classes personally taught by Meerra Mevawala or Hrishita Mevawala. Perfect for mastering your daily look.',
      duration: '2 Days (4 hours)',
      price: '₹7,999',
      category: 'Makeup',
      certification: 'MIS Participation Certificate',
      curriculum: ['Skin Care & Prep', 'Corrective Makeup', 'Day & Eye Shadow Looks', 'Contouring & Highlight', '5 Eye Variations'],
      image: 'https://images.unsplash.com/photo-1526045431048-f857369aba09?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'c4',
      title: 'LEVEL MIS ADVANCE SELF MAKEUP',
      description: 'Advanced one-on-one personal makeup classes for those who want to master sophisticated party and glam looks.',
      duration: '4 Days (8 hours)',
      price: '₹14,999',
      category: 'Makeup',
      certification: 'MIS Advanced Certificate',
      curriculum: ['Soft Glam Techniques', 'Smokey Eyes Variations', 'Glitter Application', 'Lash Application', 'Contour & Highlight'],
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop'
    },
    {
      id: 'c10',
      title: 'LEVEL MIS 2 - AIRBRUSH MAKEUP',
      description: 'Certified Makeup Masterclass focusing on the professional application of Airbrush makeup for high-definition results.',
      duration: '2 Days',
      price: '₹19,999',
      category: 'Makeup',
      certification: 'MIS Airbrush Specialist Certificate',
      curriculum: ['Airbrush Equipment', 'HD Skin Finish', 'Product Dilution', 'Precision Contouring', 'Maintenance'],
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop'
    },
    {
      id: 'c11',
      title: 'LEVEL MIS 3 - CREATIVE COMPETITION MAKEUP',
      description: 'Intensive masterclass for artists looking to enter professional makeup competitions and create avant-garde editorial looks.',
      duration: '3 Days',
      price: '₹26,999',
      category: 'Makeup',
      certification: 'MIS Creative Artistry Diploma',
      curriculum: ['Avant-Garde Theory', 'Thematic Makeup', 'Color Blocking', 'Face Jewelry/Adornment', 'Symmetry Mastery'],
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b107082b00a.jfif'
    },
    {
      id: 'c12',
      title: 'LEVEL MIS 4 - LATEST BRIDAL TRENDS',
      description: 'Comprehensive Look and Learn workshop with practical sessions focusing on the most current global bridal makeup trends.',
      duration: '3 to 5 Days',
      price: 'Contact for Fees',
      category: 'Makeup',
      certification: 'MIS Bridal Trends Certification',
      curriculum: ['Modern Bridal Finishes', 'Global Saree Draping', 'Jewelry Coordination', 'Waterproof Mastery', 'Photography Prep'],
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b067c82b00b.jfif'
    },
    {
      id: 'c13',
      title: 'LEVEL MIS 5 - MEERRAS SIGNATURE LOOK',
      description: 'A special "Look and Learn" Master Class detailing the iconic signature styling of Meerra Mevawala.',
      duration: '2 Days',
      price: '₹9,999',
      category: 'Makeup',
      certification: 'MIS Signature Look Certificate',
      curriculum: ['The Glow Signature', 'Seamless Blending', 'Product Secret Stash', 'Lighting for Makeup', 'Speed Artistry'],
      image: 'https://images.unsplash.com/photo-1595475253508-37299092413e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'c8',
      title: 'LEVEL MIS A - THERMAL HAIRSTYLE',
      description: 'Comprehensive Thermal Hairstyle Masterclass covering everything from basic blow-dries to Hollywood waves and extension styling.',
      duration: '8 Sessions',
      price: '₹19,999',
      category: 'Hair',
      certification: 'MIS Thermal Styling Certificate',
      curriculum: ['Voluminous Blowout', 'Ironing & Tongs Variation', 'Hollywood Waves', 'Extension Styling', 'Front Variations'],
      image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/6975d397eb392b4b7242cac3.jpeg'
    },
    {
      id: 'c9',
      title: 'LEVEL MIS B - HAIRSTYLE DIPLOMA',
      description: 'Master the fundamentals of professional hairstyling and advance to bridal excellence. Focus on professional techniques without tool provision.',
      duration: '18 Sessions',
      price: '₹50,999',
      category: 'Hair',
      certification: 'MIS Advanced Hairstyle Diploma',
      curriculum: ['Fundamentals of Hair', 'Bridal Advance Course', 'Traditional Updos', 'Modern Braiding', 'Contemporary Stylings'],
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'c5',
      title: 'LEVEL N1 - NAIL ART WORKSHOP',
      description: 'Specialized intensive workshop focusing on creative nail art techniques and decorative finishes.',
      duration: '2 Days',
      price: '₹6,999',
      category: 'Nail',
      certification: 'MIS Participation Certificate',
      curriculum: ['Floral Art Rose', 'Cat Eye Art', '3D Flower Art', 'Ombre Vertical', 'French Art Variations'],
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'c6',
      title: 'LEVEL N2 - NAIL PROFESSIONAL COURSE',
      description: 'Professional Nail Technician training with India Champion RAMKUI SIR. Master advanced acrylic techniques and salon management.',
      duration: '10 Days (Every Thursday)',
      price: '₹34,999',
      category: 'Nail',
      certification: 'MIS Professional Nail Certification',
      curriculum: ['Acrylic Level 1', 'Advance Machine Manicure', 'Inbuilt French Technique', 'Business Strategy'],
      image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'c7',
      title: 'LEVEL N3 - NAIL TECHNICIAN COURSE',
      description: 'Complete comprehensive Nail Technician program covering anatomy, multiple extension systems, and advanced Russian filing.',
      duration: '20 Days (One Month)',
      price: '₹59,999',
      category: 'Nail',
      certification: 'MIS Master Nail Technician Diploma',
      curriculum: ['Russian Filing & Machine', 'Gel Extensions', 'Camouflage Extensions', 'Advanced Anatomy', 'Refilling Technique'],
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1974&auto=format&fit=crop'
    }
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Sai Lokhande',
      lookTitle: 'Royal Traditional Bridal Glow',
      role: 'Bride',
      content: 'She had done such a great job! I was so happy with my looks. Got tons of compliments.',
      rating: 5,
      image: 'https://picsum.photos/seed/user1/100/100',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      videoThumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 't2',
      name: 'Mausam Agrawal',
      lookTitle: 'Soft Glam Modern Reception Look',
      role: 'BRIDE',
      content: 'She did my bridal makeup and I really loved it! Got so many compliments for all my looks.',
      rating: 5,
      image: 'https://picsum.photos/seed/user2/100/100',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      videoThumbnail: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop'
    },
    {
      id: 't3',
      name: 'Lakshita Gaddam',
      lookTitle: 'Editorial High-Fashion Artistry',
      role: 'BRIDE',
      content: 'Joining the MIS academy was the best career move. Meerra is a generous and detailed mentor.',
      rating: 5,
      image: 'https://picsum.photos/seed/user3/100/100',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      videoThumbnail: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop'
    }
  ],
  blogPosts: [
    {
      id: 'b1',
      title: '5 Secrets for Long-Lasting Bridal Makeup',
      excerpt: 'How to ensure your wedding glow stays through all the ceremonies.',
      content: 'Content here...',
      category: 'Tips',
      date: '2024-05-15',
      image: 'https://picsum.photos/seed/blog1/800/500',
      author: 'Meerra',
      published: true
    }
  ],
  bookings: [],
  inquiries: []
};