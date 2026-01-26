import React, { useState } from 'react';
import { useStore } from '../store';
import { 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  Users, 
  BookOpen, 
  Monitor, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  Tv, 
  Theater, 
  UserCheck, 
  Briefcase,
  TrendingUp,
  Coins,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CreditCard,
  User,
  Clock,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PaymentDetails from '../components/PaymentDetails';
import SEO from '../components/SEO';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-serif font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-[#D4AF37]" /> : <ChevronDown className="text-gray-300 group-hover:text-[#D4AF37]" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Academy: React.FC = () => {
  const { state } = useStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Professional', 'Makeup', 'Hair', 'Nail'];
  const filteredCourses = activeCategory === 'All' 
    ? state.courses 
    : state.courses.filter(c => c.category === activeCategory);

  const cleanPhone = state.settings.whatsappNumber.replace(/\D/g, '');

  const careerPaths = [
    {
      title: "Celebrity Makeup Artist",
      icon: UserCheck,
      description: "Celebrities are ready to pay to look their best. But being a celebrity makeup artist takes much more than being an amazing MUA. You have to have a great personality and flexibility to boot. Celebrities can be the most fun and interesting makeup clients you’ll ever have! But working with, and around, celebrities can often add to the stress of an already stressful job. You need to be confident in your abilities and have amazing interpersonal and stress management skills.",
      highlight: "High demand & prestige."
    },
    {
      title: "Theatrical/Performance MUA",
      icon: Theater,
      description: "Doing makeup for theater, TV, movies, or other performance arts is a high-stress, high-skills job. Makeup artists in this position need expertise in multiple areas—no two performances are alike. Oftentimes, the makeup artist is required to exaggerate the actor’s features in order to make the character look more realistic. Makeup artists will also need training in at least basic special FX makeup – being able to simulate bruises, cuts, burns, or to age a character quickly and effectively is often part of the job!",
      highlight: "Entertainment industry focus."
    },
    {
      title: "Special FX Makeup Artist",
      icon: Tv,
      description: "With the advent of CGI, you might think special effects makeup is on the decline, but this couldn’t be further from the truth! Special FX makeup is more in demand now than it’s ever been–whether it be in movies, television, theater, entertainment, or special events (zombie run, anyone?) a special fx makeup artist can always find work.",
      highlight: "Cinematic specialization."
    },
    {
      title: "Freelance Makeup Artist",
      icon: Briefcase,
      description: "Not everyone makes a career out of being a standalone freelance makeup artist. It’s how most MUAs start out, but most professionals then change gears and go into a different career. For those freelance MUAs who do stick with their career, build up a client base and enhance their expertise through additional training through the years, freelance makeup artistry can be a real cash enrich business! Because you’re the business owner, you get a bigger cut of the client’s fee, AND you can set your own rates.",
      highlight: "Entrepreneurial freedom."
    }
  ];

  const faqs = [
    {
      question: "1. Do I need any prior experience to join your course?",
      answer: "Not at all. Our courses are designed for beginners as well as passionate learners, starting from the basics and progressing to professional level."
    },
    {
      question: "2. What certificate will I receive after completion?",
      answer: "You will receive Government certification, UK certification, and an internationally recognized CIDESCO certificate, along with our academy certification (depending on the course selected)."
    },
    {
      question: "3. Is there any age limit to join the course?",
      answer: "No age limit at all. As long as you’re passionate about makeup, you’re welcome to join."
    },
    {
      question: "4. Do you offer job assistance or internships after the course?",
      answer: "We do not provide direct placement support. However, the skills taught have helped many students secure jobs and internships with leading artists and brands."
    },
    {
      question: "5. Are the classes online or offline?",
      answer: "All classes are offline and hands-on, conducted at our Mumbai studio, as practical learning is essential in makeup artistry."
    },
    {
      question: "6. What products and tools do I need to bring?",
      answer: "A list of essentials is provided at enrollment, and you will also receive a complimentary basic makeup kit to begin practicing."
    },
    {
      question: "7. Can I pay in installments?",
      answer: "Yes, we offer flexible installment options to make the course accessible and provide convenience."
    },
    {
      question: "8. Will I be able to start freelancing after the course?",
      answer: "Absolutely. Our training equips you with the confidence and skills needed to start freelancing in bridal makeup, shoots, and events right after completion."
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-[#FDFCFB]">
      <SEO 
        title="CIDESCO Certified Makeup Academy Mumbai"
        description="Join Meerras International School of Makeup and More (MIS) Mumbai. CIDESCO certified makeup diploma, hair styling courses, and nail technician programs in Mumbai."
        keywords="makeup academy mumbai, makeup courses in mumbai, CIDESCO diploma india, beauty school ghatkopar, professional makeup training mumbai"
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center mb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop"
            alt="MIS Academy - International Makeup School Mumbai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <div className="inline-block px-4 py-1 border border-[#D4AF37] rounded-full mb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase">Best Beauty School in Mumbai</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 max-w-4xl leading-tight">Meerras International School of Makeup and More</h1>
          <p className="text-xl font-light text-gray-300 max-w-2xl leading-relaxed">
            Leading the next generation of beauty masters with international CIDESCO certifications and Govt approved courses in Mumbai.
          </p>
        </div>
      </section>

      {/* Categories Filter Bar */}
      <section className="sticky top-24 z-40 bg-white border-y border-gray-100 py-6 mb-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all ${
                activeCategory === cat 
                  ? 'bg-[#D4AF37] text-white shadow-lg' 
                  : 'bg-gray-50 text-gray-400 hover:text-[#D4AF37]'
              }`}
            >
              {cat === 'Professional' ? 'PROFESSIONAL MAKEUP' : cat === 'Makeup' ? 'MAKEUP COURSES' : cat === 'Hair' ? 'HAIR COURSES' : cat === 'Nail' ? 'NAIL COURSES' : 'ALL COURSES'}
            </button>
          ))}
        </div>
      </section>

      {/* Signature Programs List */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredCourses.map((course) => (
            <article key={course.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500">
              <div className="h-96 relative overflow-hidden">
                <img src={course.image} alt={`${course.title} - Professional Course Mumbai`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-[#D4AF37] px-6 py-2 rounded-full text-[10px] font-bold text-white shadow-lg uppercase tracking-widest">
                  {course.category}
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-2">Duration: {course.duration}</p>
                  <h3 className="text-3xl font-serif font-bold leading-tight">{course.title}</h3>
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <p className="text-gray-600 mb-8 leading-relaxed text-sm">{course.description}</p>
                
                <div className="bg-[#FDFCFB] p-6 rounded-2xl mb-8">
                  <h4 className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">Course Curriculum</h4>
                  <div className="grid grid-cols-2 gap-y-3">
                    {course.curriculum.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 size={14} className="text-[#D4AF37]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-50 mt-auto gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Certification Details</p>
                    <span className="text-xs font-bold text-gray-900 leading-relaxed block max-w-[200px]">{course.certification}</span>
                  </div>
                  <a
                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi, I'm interested in enrolling in the "${course.title}" course. Could you share the registration form and next batch dates?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-[10px] tracking-widest hover:bg-[#D4AF37] transition-all text-center"
                  >
                    ENROLL NOW IN MUMBAI
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Private One-on-One Makeup Class Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-50 flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 relative min-h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1595475253508-37299092413e?q=80&w=2070&auto=format&fit=crop" 
              alt="Private One-on-One Makeup Class" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-8 left-8">
              <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
                <Sparkles className="text-[#D4AF37]" size={20} />
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-900 uppercase">Premium Mentorship</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-[#FDFCFB]">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block">Bespoke Training</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">Private One-on-One <br /> Makeup Class</h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Elevate your artistry with an exclusive, fully personalized one-on-one makeup training session. Designed for brides, beginners, and professionals alike, this bespoke masterclass is conducted personally by our senior makeup artist. Experience the traditional power of direct mentorship with flexible timings and complete privacy, ensuring every technique is mastered to perfection under expert guidance. This is your chance to receive undivided attention and refine your skills with specialized, hands-on professional feedback.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5E6E8] rounded-xl flex items-center justify-center text-[#D4AF37] shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-widest mb-1">Personalized</h4>
                  <p className="text-xs text-gray-500">Tailored to your specific skill level and goals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5E6E8] rounded-xl flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-widest mb-1">Expert Led</h4>
                  <p className="text-xs text-gray-500">Conducted personally by a senior artist.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5E6E8] rounded-xl flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-widest mb-1">Flexible</h4>
                  <p className="text-xs text-gray-500">Schedule sessions at your convenience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5E6E8] rounded-xl flex items-center justify-center text-[#D4AF37] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 uppercase tracking-widest mb-1">Private</h4>
                  <p className="text-xs text-gray-500">Complete privacy for focused learning.</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi, I'm interested in the Private One-on-One Makeup Class. Could you share more details about the curriculum and available dates?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-white px-10 py-5 rounded-2xl font-bold text-[10px] tracking-[0.3em] hover:bg-gray-900 transition-all shadow-xl shadow-[#D4AF37]/30 flex items-center justify-center gap-3 uppercase w-full sm:w-max"
            >
              WhatsApp Us for Class Details <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Payment Section for Students */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <CreditCard className="text-[#D4AF37]" size={32} />
          <h2 className="text-4xl font-serif font-bold">Enrollment & Payments</h2>
        </div>
        <PaymentDetails light />
      </section>

      {/* Formal Education Insight */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <TrendingUp className="text-[#D4AF37] mb-6" size={48} />
              <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">Master Professional Makeup in Mumbai</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  While becoming a freelance makeup artist is a great way to start, <span className="text-white font-medium">formal education at MIS Mumbai</span> provides the structural foundation required for long-term success.
                </p>
                <p>
                  Our curriculum dives deep into the <span className="text-[#D4AF37]">science of dermatology</span> and advanced color theory, ensuring you don't just apply products, but understand skin health and texture for high-definition results.
                </p>
                <p>
                  As Mumbai's top makeup academy, we ensure every graduate is ready for high-paying careers in film, TV, and bridal couture.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-[3rem] rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522338228048-3506018615c1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional Education at Meerras International School" 
                  className="relative z-10 w-full h-full object-cover rounded-[3rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
      </section>

      {/* High Paying Careers Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <Coins className="text-[#D4AF37] mx-auto mb-6" size={48} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">High Paying Makeup Careers in India</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            The beauty industry in India is booming. Graduates of professional makeup courses in Mumbai often find lucrative roles across various sectors.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careerPaths.map((path, idx) => (
            <div key={idx} className="bg-[#FDFCFB] p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#D4AF37] hover:shadow-2xl transition-all group flex flex-col">
              <div className="w-16 h-16 bg-[#F5E6E8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-all duration-500 shrink-0">
                <path.icon className="text-[#D4AF37] group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{path.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {path.description}
              </p>
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                  {path.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academy FAQ Section */}
      <section className="py-24 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <HelpCircle className="text-[#D4AF37]" size={32} />
            <h2 className="text-4xl font-serif font-bold">Academy FAQs - Learning in Mumbai</h2>
          </div>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="max-w-3xl">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academy Review CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#D4AF37]/20">
                <Star className="text-white" size={32} fill="currentColor" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Graduate Success Stories</h2>
              <p className="text-gray-400 mb-12 leading-relaxed text-lg">
                Did MIS transform your artistic career in Mumbai? We invite our alumni to share their reviews. Your success story inspires the next generation of Mumbai artists.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://g.page/meerramevawala/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#D4AF37] text-white px-10 py-5 rounded-full font-bold text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-gray-900 transition-all shadow-xl shadow-[#D4AF37]/20"
                >
                  REVIEW ON GOOGLE MAPS <ExternalLink size={14} />
                </a>
                <Link 
                  to="/portfolio" 
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-gray-900 transition-all"
                >
                  VIEW STUDENT ARTWORK <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#F5E6E8] relative overflow-hidden mt-20 mx-4 sm:mx-10 lg:mx-20 rounded-[4rem]">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          < GraduationCap className="text-[#D4AF37] mx-auto mb-8" size={64} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Join Mumbai's Elite Makeup School</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Enrollment is now open for the 2024 batch in Mumbai. Secure your seat at India's premier international school for makeup, hair, and nails in Ghatkopar East.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Meerra, I'd like to receive the MIS Academy brochure and course details.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-[10px] tracking-widest hover:bg-[#D4AF37] transition-all shadow-xl shadow-gray-200"
            >
              DOWNLOAD ACADEMY BROCHURE
            </a>
            <a 
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi, I have a quick question about the academy courses.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 px-12 py-5 rounded-full font-bold text-[10px] tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all"
            >
              WHATSAPP ENQUIRY
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
