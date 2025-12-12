import React from 'react';
import { User, Phone, Calendar, ClipboardList, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookingModalProps {
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col h-full w-full overflow-hidden font-[Almarai]"
    >
      {/* Top Header Section - Cream Background */}
      <div className="bg-[#F9F7EF] py-6 px-4 text-center relative shadow-sm z-10">
         <button 
           onClick={onClose} 
           className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full hover:bg-black/5 transition-colors group"
           aria-label="Close"
         >
           <X className="w-6 h-6 text-gray-500 group-hover:text-gray-800" />
         </button>
         
         <h2 className="text-2xl md:text-3xl font-bold text-[#2a4d69] mb-2">مواعيد عمل العيادة</h2>
         <p className="text-[#2a4d69] text-xs md:text-sm font-normal">
           السبت، الأحد، الثلاثاء، الأربعاء — 11:30ص | 10:00م
         </p>
      </div>

      {/* Gold Separator */}
      <div className="w-full h-2 bg-[#C8B36E] shrink-0"></div>

      {/* Main Content - Dark Blue Background */}
      <div className="flex-1 bg-[#3B6079] flex items-center justify-center p-4 overflow-y-auto">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="bg-[#F0F2F5] rounded-[2rem] p-6 md:p-10 w-full max-w-lg shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#3B6079] text-center mb-8">الحجز</h3>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Name Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#3B6079] transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="الاسم ثلاثي" 
                className="w-full pr-12 pl-4 py-4 bg-white border-none rounded-xl focus:ring-2 focus:ring-[#3B6079]/50 text-right placeholder-gray-400 text-gray-700 shadow-sm outline-none transition-all"
              />
            </div>

            {/* Phone Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                {/* Mirror the phone icon for RTL context */}
                <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-[#3B6079] transition-colors transform scale-x-[-1]" />
              </div>
              <input 
                type="tel" 
                placeholder="رقم الهاتف (مثال: 01124859707 أو +201124859707)" 
                className="w-full pr-12 pl-4 py-4 bg-white border-none rounded-xl focus:ring-2 focus:ring-[#3B6079]/50 text-right placeholder-gray-400 text-gray-700 shadow-sm outline-none transition-all text-sm"
              />
            </div>

            {/* Date Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400 group-focus-within:text-[#3B6079] transition-colors" />
              </div>
              <input 
                type="text"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                    if(!e.target.value) e.target.type = 'text';
                }}
                placeholder="اختر تاريخ الحجز" 
                className="w-full pr-12 pl-4 py-4 bg-white border-none rounded-xl focus:ring-2 focus:ring-[#3B6079]/50 text-right placeholder-gray-400 text-gray-700 shadow-sm outline-none transition-all cursor-pointer"
              />
            </div>

            {/* Visit Type Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ClipboardList className="h-5 w-5 text-gray-400 group-focus-within:text-[#3B6079] transition-colors" />
              </div>
              <select 
                className="w-full pr-12 pl-4 py-4 bg-white border-none rounded-xl focus:ring-2 focus:ring-[#3B6079]/50 text-right text-gray-700 shadow-sm outline-none appearance-none transition-all cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-400">اختر نوع الزيارة</option>
                <option value="checkup">كشف جديد</option>
                <option value="consultation">استشارة</option>
                <option value="followup">متابعة</option>
              </select>
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-[#6C8596] hover:bg-[#5a7282] text-white font-bold py-4 px-4 rounded-xl shadow-lg mt-8 transition-colors text-lg"
            >
              احجز الآن
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BookingModal;