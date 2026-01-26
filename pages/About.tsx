
import React from 'react';
import { Award, Star, ShieldCheck, Trophy, Medal, Crown, Landmark, GraduationCap, History, Briefcase, Sparkles, Users, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const meerraWork = [
    "Makeup for MISS EARTH 2021 for PNI Magazine",
    "Seminar at Chennai for Hair & Makeup – June 2019",
    "Makeup Core Team for Stars Cosmetics – Bharat Icon 2019",
    "Makeup Done For Mrs.Tiara India – Heena Sheikh – 2019",
    "Stage Show for Ardell Lashes – HBS India 2019",
    "Makeup Core Team for Stars Cosmetics – Miss Eco International 2018 held at Egypt",
    "Makeup for Amber Bernachi – Miss Eco International 2017 (With Stars Cosmetics)",
    "Makeup for Mrs Asia Universe – 2017",
    "Makeup For Mrs. Pinky Rajgarhia – Mrs Asia 2017 / Mrs Asia Universe 2017 / Mrs Business Lady 2017 / Mrs Fitness 2016",
    "Makeup For Rewati Chetri – Miss International India 2016 / World Miss Asia University 2016 / Femina Miss India Top 10",
    "Makeup for Mrs Globe 2015 / Mrs Beauty India 2015 – Elakshi More",
    "Worked For Tia Bajpai (Singer and Actress)",
    "Worked For Kaizeen Irani (Model)",
    "Trained Karishma Gupta (She Ranked 6th) For World Skills Representing India for Makeup & Nails",
    "Worked For Neha Kaul (Actress)",
    "Worked For Sukruti & Prakriti (Singers)",
    "Worked For Nausheen Ali (Actress)",
    "Makeup for Miss Bhagyashree More – Marathi Actress",
    "Makeup for Ms Dalljiet Kaur – Small Screen Actress",
    "Grooming workshop at Garodia School of Professional Studies – 2012"
  ];

  const misTeamWork = [
    "MIS Team makeup for Pageants and Celebrities for Bharat Icon Awards 2022",
    "MIS team worked on professional models for NIIFD fashion show 2019",
    "MIS team worked for Jai Hind College Fashion show – JOSH 2019",
    "MIS Team Worked For A Cause Fashion Show with Garodia International Fashion School (Mar 2019)",
    "Makeup Core Team for Apsara India 2019 – Season 6",
    "Makeup Core Team for Stars Cosmetics – Miss Maharashtra 2018 at Pune",
    "Makeup Core Team for Stars Cosmetics – Bharat Icon 2018",
    "MIS Team Worked For ITA Indian Television Awards (In 2018)",
    "Makeup Team for Stars Cosmetics – Miss Femina 2017"
  ];

  return (
    <div className="pt-20">
      {/* Profile Hero Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full max-w-sm lg:w-1/2 relative mx-auto lg:mx-0">
              <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src="https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697729bbc1fa0cf7bdb46dd4.jpeg?q=80&w=2087&auto=format&fit=crop" 
                  alt="Meerra Mevawala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 w-full h-full border-2 border-[#D4AF37] rounded-2xl z-0"></div>
            </div>

            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left">
              <h1 className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4 block">CIDESCO Certified Media Makeup Artist & Cosmetologist</h1>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">Meerra Mevawala</h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg font-medium text-gray-800">
                  With over 20 years of experience, Meerra Mevawala is an internationally certified makeup artist and is an sought-after professional in the industry.
                </p>
                <p>
                  Her expertise extends to working with high-profile clients, including celebrities and pageant contestants. Her talent has also been recognized on a global scale, as she has served as a jury member for prestigious international & national beauty competitions. 
                </p>
                <p>
                  Additionally, her impressive portfolio boasts of <strong>over 1500 brides</strong>, showcasing her ability to create stunning bridal looks. With her extensive background and exceptional skills, Meerra Mevawala is undoubtedly an trusted choice for any special occasion.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12 border-t border-gray-100 pt-8">
                <div>
                  <h4 className="text-4xl font-serif font-bold text-[#D4AF37]">20+</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Years of Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-[#D4AF37]">1500+</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Brides Styled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History of Company */}
      <section className="py-24 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-3 text-[#D4AF37] mb-6">
                <History size={24} />
                <span className="text-xs font-bold tracking-[0.4em] uppercase">Our Legacy</span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-8">History of Company</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Welcome to MAGIC MIRROR, a renowned brand that began its journey in 2007 as a unisex salon, catering to clients with exceptional Bridal and Nails studio services. Over the years, we have expanded our horizons and in 2017, proudly introduced the Cidesco International certified Media Makeup School in the name of "MEERRAS INTERNATIONAL SCHOOL OF MAKEUP AND MORE" (MIS).
                </p>
                <p>
                  Our commitment lies in offering top-notch education to aspiring professionals in the beauty industry, ensuring they receive an internationally recognized and world-class learning experience. With a decade of expertise and a passion for excellence, MAGIC MIRROR Bridal Studio & MIS continues to redefine beauty standards while nurturing future talent.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl transform translate-y-8">
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" alt="Salon History" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" alt="Academy History" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Done by Meerra & Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">WORK DONE BY <br /> MEERRA & TEAM</h1>
            <div className="w-32 h-1 bg-[#D4AF37] mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
            {/* Vertical Divider for Large Screens */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100"></div>

            {/* Meerra's Column */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
                <div className="w-12 h-12 bg-[#F5E6E8] rounded-full flex items-center justify-center text-[#D4AF37]">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900">WORK BY MEERRA MEVAWALA</h2>
              </div>
              <ul className="space-y-6">
                {meerraWork.map((item, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 group-hover:scale-150 transition-transform shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MIS Team's Column */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
                <div className="w-12 h-12 bg-[#F5E6E8] rounded-full flex items-center justify-center text-[#D4AF37]">
                  <Users size={24} />
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900">WORK BY MIS TEAM</h2>
              </div>
              <ul className="space-y-6">
                {misTeamWork.map((item, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 group-hover:scale-150 transition-transform shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Awards Sidebar Element (Visual Balance) */}
              <div className="mt-20 p-8 bg-[#FDFCFB] rounded-3xl border border-[#D4AF37]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star size={80} className="text-[#D4AF37]" />
                </div>
                <h4 className="text-lg font-serif font-bold mb-2">Excellence Guaranteed</h4>
                <p className="text-gray-500 text-sm italic">"Our team works collectively to ensure that every pageant, fashion show, and celebrity event is executed with the highest degree of professionalism and creativity."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Jury Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="inline-flex items-center gap-3 text-[#D4AF37] mb-6">
                <Trophy size={24} />
                <span className="text-xs font-bold tracking-[0.4em] uppercase">Recognition</span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-12">Awards & Honors</h2>
              <div className="space-y-6">
                {[
                  { title: "Best Woman Entrepreneur Award 2022", org: "RBI Bank" },
                  { title: "Most Creative Makeup Artist", org: "National Beauty Awards" },
                  { title: "Best Traditional Bridal Makeup", org: "Bridal Fashion Week" },
                  { title: "Excellence in Makeup Education", org: "International Beauty Expo" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <Medal className="text-[#D4AF37]" size={32} />
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-400 uppercase tracking-widest">{item.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 text-[#D4AF37] mb-6">
                <Crown size={24} />
                <span className="text-xs font-bold tracking-[0.4em] uppercase">Industry Role</span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-12">Jury & Expertise</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Meerra Mevawala has been invited to judge prestigious competitions across the globe, setting the benchmark for the next generation of artists.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "India's Next Fashion Model",
                  "National Hair & Makeup Championship",
                  "Inter-College Beauty Fest",
                  "Elite Bridal Competition",
                  "State Level Styling Awards",
                  "Mumbai Makeup Masters"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/10 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-[#D4AF37]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-24 bg-[#F5E6E8] text-center">
        <div className="max-w-3xl mx-auto px-4 italic">
          <p className="text-2xl md:text-3xl font-serif mb-8 leading-relaxed text-gray-900">
            "Beauty is an experience, and every interaction with us is designed to be extraordinary. We don't just teach makeup; we cultivate artists."
          </p>
          <p className="font-bold text-[#D4AF37] not-italic tracking-widest uppercase">— Meerra Mevawala</p>
        </div>
      </section>
    </div>
  );
};

export default About;
