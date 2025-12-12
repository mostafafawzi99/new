import React, { useState } from 'react';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import InquiryModal from './components/InquiryModal';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white relative font-[Almarai]">
      <Hero 
        onBookClick={() => setIsBookingOpen(true)} 
        onInquiryClick={() => setIsInquiryOpen(true)}
      />
      <MapSection />
      <Footer />
      
      <AnimatePresence>
        {isBookingOpen && <BookingModal onClose={() => setIsBookingOpen(false)} />}
        {isInquiryOpen && <InquiryModal onClose={() => setIsInquiryOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}