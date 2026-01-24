
import React from 'react';
import { ShieldCheck, AlertCircle, Scale, GraduationCap, ClipboardCheck, BookOpen } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FDFCFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Terms & Conditions</h1>
          <p className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase">Meerra’s International School of Makeup & More (MIS)</p>
          <div className="w-20 h-px bg-gray-200 mx-auto mt-8"></div>
        </div>

        <div className="space-y-12 text-gray-700">
          {/* Section: Academy Enrollment & Fees */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#F5E6E8] rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">1. Courses, Fees & Registration</h2>
            </div>
            <div className="prose prose-sm max-w-none space-y-4">
              <p><strong>Registration:</strong> We recommend that you find out as much as possible about a course before enrolling by communicating with our administrative team. It is your responsibility to ensure you have received satisfactory information prior to booking.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deposits are non-refundable but will be credited against the course fee. If you cancel registration less than 10 days prior to the start date, no deposit will be refunded.</li>
                <li>The balance of the full course fee must be paid to the Administrator prior to or on the commencement date. Failure to pay will result in the deposit being forfeited.</li>
                <li>All fees quoted are exclusive of GST. Educational courses are not exempt from GST.</li>
                <li>Fees are not refundable if the course is interrupted or cancelled through an act of God or terrorist act.</li>
                <li>Course fees, deposits, and other payments are non-transferable.</li>
                <li><strong>Cancellations:</strong> If you cancel within 30 days prior to commencement, a full refund (minus deposit) is issued. If notified after this 30-day window, no refund can be provided.</li>
              </ul>
            </div>
          </section>

          {/* Section: Attendance & Achievement */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#F5E6E8] rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">2. Hours, Attendance & Achievement</h2>
            </div>
            <div className="prose prose-sm max-w-none space-y-4">
              <p>Students must maintain high standards of punctuality and attendance, as expected in the beauty industry.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Minimum Attendance:</strong> A minimum of 80% attendance is required for assessment-based and examination-based courses. Missing more than 100 hours in total will preclude registration for final examinations.</li>
                <li>Failure to attend the first day of the course will preclude you from attending any further part of that course or module without a refund.</li>
                <li>Classes commence promptly. Teachers are not responsible for repeating work missed by latecomers.</li>
                <li><strong>Achievements:</strong> Paying for and attending a course does not guarantee a qualification. Awards are gained by successful fulfillment of criteria set by our Board of Educators. The decision of the Creative Director is final.</li>
                <li>MIS is closed on weekends. Public holidays may result in extra days being added to the course duration.</li>
              </ul>
            </div>
          </section>

          {/* Section: Conduct & Dress Code */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#F5E6E8] rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <ClipboardCheck size={24} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">3. General Conduct & Dress Code</h2>
            </div>
            <div className="prose prose-sm max-w-none space-y-4">
              <p><strong>Dress Code:</strong> The Academy uniform is required. Footwear must be casual, low-heel flats or boots. <strong>Not allowed:</strong> Sandals, trainers, sneakers, flip-flops, or open-toe shoes. Mobile phones are strictly prohibited in classrooms.</p>
              <p><strong>Disciplinary:</strong> Improper behavior, cheating during assessments, or damage to Academy equipment will result in immediate expulsion without refund.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Age Restriction:</strong> Minimum age is 18. Exceptions can be made for students 16+ with parental consent and a perfect attendance record.</li>
                <li><strong>Copyright:</strong> Video recording is strictly prohibited due to potential copyright infringement. Audio recording requires specific prior arrangement.</li>
                <li><strong>ESL:</strong> All instructions are taught in English. Students must be proficient in reading, writing, and speaking English.</li>
              </ul>
            </div>
          </section>

          {/* Section: Outstation & Professional Policies */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#F5E6E8] rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <Scale size={24} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">4. Outstation & Support Policies</h2>
            </div>
            <div className="prose prose-sm max-w-none space-y-4">
              <p><strong>Outstation Students:</strong> Payments via outstation banks must ensure MIS receives the full amount inclusive of any bank charges. We do not offer advice or recommendations regarding accommodation.</p>
              <p><strong>Models:</strong> MIS can provide models for a fee. Students are not permitted to bring models from the same professional stream; violation results in immediate dismissal.</p>
              <p><strong>Employer’s Guarantee:</strong> MIS does not directly solicit students employed or sponsored by other organizations for employment during their tenure at the Academy.</p>
            </div>
          </section>

          {/* Section: Legal Standards */}
          <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#F5E6E8] rounded-2xl flex items-center justify-center text-[#D4AF37]">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">5. Legal & Data Protection</h2>
            </div>
            <div className="prose prose-sm max-w-none space-y-4">
              <p><strong>Data Protection:</strong> MIS will not share your details with third parties except as required by the board for registration and certification purposes.</p>
              <p><strong>Intellectual Property:</strong> All website content, including portfolios and curriculum, is the property of Meerra Mevawala. Unauthorized reproduction is prohibited.</p>
              <p><strong>Liability:</strong> We are not liable for allergic reactions if known sensitivities were not disclosed prior to application.</p>
              <p><strong>Governing Law:</strong> These terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in Mumbai.</p>
            </div>
          </section>

          <div className="text-center pt-8">
            <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">For further information, please contact the Head of Department or Creative Director.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
