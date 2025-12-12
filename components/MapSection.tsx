import React from 'react';
import { MapPin, Navigation, Map as MapIcon, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

const MapSection: React.FC = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-200">
      
      {/* Simulated Satellite Map Background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://mt1.google.com/vt/lyrs=s&x=19313&y=13368&z=15" 
            alt="Satellite Map View"
            className="w-full h-full object-cover opacity-90 grayscale-[20%]"
        />
        {/* Map Grid/Labels Simulation Overlay (Optional visual noise to look like a map) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
      </div>

      {/* Map Location Pin (Red) */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <MapPin className="text-red-600 fill-red-600 w-10 h-10 drop-shadow-2xl" />
      </motion.div>

      {/* Info Card - Top Right (RTL: Top Left visually if purely absolute, but map controls usually strictly positioned) */}
      {/* In the reference image, the white box is on the RIGHT side of the map container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-4 right-4 md:top-8 md:right-8 bg-white p-4 rounded-lg shadow-xl max-w-xs md:max-w-sm z-20 flex items-start gap-4"
      >
        <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-800 ltr:text-left text-left" dir="ltr">
                30°22'07.8"N 30°30'26.0"E
            </h3>
            <p className="text-xs text-gray-500 mt-1">9G94+GVQ مدينة السادات</p>
            <a href="#" className="text-blue-500 text-xs mt-2 block hover:underline">
                عرض خريطة أكبر
            </a>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center">
                <Navigation className="text-blue-600 w-5 h-5 transform rotate-45" />
            </div>
            <span className="text-[10px] text-blue-600 font-bold">الاتجاهات</span>
        </div>
      </motion.div>

      {/* Bottom Controls Simulation */}
      <div className="absolute bottom-4 left-4 flex gap-2">
         <div className="w-8 h-8 bg-white shadow rounded flex items-center justify-center cursor-pointer hover:bg-gray-50">
             <MapIcon className="w-4 h-4 text-gray-600" />
         </div>
         <div className="w-8 h-8 bg-white shadow rounded flex items-center justify-center cursor-pointer hover:bg-gray-50">
             <Maximize className="w-4 h-4 text-gray-600" />
         </div>
      </div>
      
      {/* Map Data Copyright Line */}
      <div className="absolute bottom-0 right-0 bg-white/70 px-2 py-0.5 text-[10px] text-gray-600 w-full md:w-auto text-center md:text-right">
        Map data ©2025 Google, Imagery ©2025 CNES / Airbus, Maxar Technologies
      </div>
    </section>
  );
};

export default MapSection;