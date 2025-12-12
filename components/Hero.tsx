import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onBookClick: () => void;
  onInquiryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick, onInquiryClick }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white">
      {/* Right Content (Text) - Because of RTL, this appears on the right naturally */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 z-10 flex flex-col items-start justify-center text-right">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2a4d69] mb-4 leading-tight">
            دكتور نور الدين <br /> مصطفى
          </h1>
          
          <h2 className="text-gray-600 text-lg md:text-xl font-medium mb-6 leading-relaxed max-w-lg">
            مدرس م التركيبات الثابته ماجستير التركيبات الثابته <br />
            جامعة الأزهر جامعة مصر للعلوم والتكنولوجيا
          </h2>
          
          <p className="text-gray-500 font-bold mb-8">
            السبت، الأحد، الثلاثاء، الأربعاء
          </p>

          <div className="flex flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookClick}
              className="px-8 py-3 bg-[#335c6e] text-white font-bold rounded-full shadow-lg hover:bg-[#23404d] transition-colors text-lg min-w-[140px]"
            >
              احجز الآن
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onInquiryClick}
              className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-full shadow-md hover:bg-gray-200 transition-colors text-lg min-w-[140px]"
            >
              استعلام
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Left Content (Image) - Because of RTL, this appears on the left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full md:w-1/2 h-[50vh] md:h-screen relative"
      >
        {/* The Image */}
        <div className="absolute inset-0 w-full h-full">
            <img 
                src="https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/global/article/gscp/amed/this-interior-modern-dental-clinic.jpg" 
                alt="Dental Chair" 
                className="w-full h-full object-cover object-center"
            />
        </div>

        {/* The White Fade Overlay - Crucial for the "Premium" blend effect */}
        {/* Gradient that fades from white (right) to transparent (left) to blend the image into the text section */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white w-full h-full md:via-white/20 md:to-white/100 pointer-events-none" />
        {/* Additional heavy white fade on the right edge (which connects to the text section in RTL) */}
        <div className="absolute right-0 top-0 w-32 md:w-64 h-full bg-gradient-to-l from-white to-transparent" />
        {/* Fade at the bottom for mobile connection to map */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent md:hidden" />
      </motion.div>
    </section>
  );
};

export default Hero;