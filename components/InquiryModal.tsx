import React from 'react';
import { User, Phone, Calendar, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface InquiryModalProps {
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center h-full w-full bg-[#3B6079] font-[Almarai]"
    >
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* User Icon Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="mb-8 p-4 bg-white rounded-full shadow-lg z-10"
      >
        <User className="w-8 h-8 text-[#3B6079]" />
      </motion.div>

      {/* Card */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="bg-[#F0F2F5] w-full max-w-md mx-4 rounded-lg p-8 shadow-2xl"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Phone Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                 {/* Mirror phone icon for RTL */}
                <Phone className="h-5 w-5 text-[#3B6079] transform scale-x-[-1]" />
              </div>
              <input 
                type="tel" 
                placeholder="رقم الهاتف" 
                className="w-full pr-12 pl-4 py-4 bg-white border-none rounded-lg text-right placeholder-gray-400 text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-[#3B6079]/20 transition-all font-medium"
              />
            </div>

            {/* Date Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-[#3B6079]" />
              </div>
              <input 
                type="text"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                    if(!e.target.value) e.target.type = 'text';
                }}
                placeholder="اختر تاريخ الحجز" 
                className="w-full pr-12 pl-4 py-4 bg-white border-none rounded-lg text-right placeholder-gray-400 text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-[#3B6079]/20 transition-all cursor-pointer font-medium"
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-[#6C8596] hover:bg-[#5a7282] text-white font-bold py-4 px-4 rounded-xl shadow-md transition-colors text-xl mt-4"
            >
              استعلام
            </motion.button>

        </form>
      </motion.div>
    </motion.div>
  );
};

export default InquiryModal;