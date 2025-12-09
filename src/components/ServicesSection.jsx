import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Laptop, Fingerprint, LayoutDashboard, Presentation, Sparkles, CheckCircle2 } from 'lucide-react';

const services = {
  hero: {
    id: 'hero',
    label: 'Hero Section',
    icon: <Target className="w-6 h-6" />,
    deliveryDays: 3,
    urgentDays: 1,
    basePrice: 229,
    urgentFee: 100,
    title: 'Hero Section',
    description: 'Redesigning your hero section to be more conversion-friendly, visually engaging, and impactful.',
    needs: ['Screenshots or Link of the Website Hero', 'A little brief of what you are expecting'],
    gets: ['Figma file of Revamped Landing Page']
  },
  landing: {
    id: 'landing',
    label: 'Landing Page',
    icon: <Laptop className="w-6 h-6" />,
    deliveryDays: 15,
    urgentDays: 5,
    basePrice: 829,
    urgentFee: 300,
    title: 'Landing Page',
    description: 'A complete redesign to enhance user experience, boost conversions, and align with your brand goals.',
    needs: ['Website Link', 'A little brief of what you are expecting'],
    gets: ['Figma file of Revamped Landing Page']
  },
  logo: {
    id: 'logo',
    label: 'Logo',
    icon: <Fingerprint className="w-6 h-6" />,
    deliveryDays: 5,
    urgentDays: 2,
    basePrice: 199,
    urgentFee: 100,
    title: 'Brand Logo',
    description: 'Crafting a memorable and timeless logo that perfectly encapsulates your brand identity.',
    needs: ['Current Logo (if any)', 'Brand Values & Color preferences'],
    gets: ['Vector files (SVG, EPS, AI)', 'Brand Guidelines helper']
  },
  app: {
    id: 'app',
    label: 'App/Dashboard Screens',
    icon: <LayoutDashboard className="w-6 h-6" />,
    deliveryDays: 10,
    urgentDays: 4,
    basePrice: 390,
    urgentFee: 250,
    title: 'App/Dashboard Screens',
    description: 'Redesigning your app or website screens for a seamless, modern, and user-friendly experience.',
    hasSlider: true,
    sliderOptions: [
      { value: 0, label: '1 to 3 Screens', price: 390 },
      { value: 1, label: '4 to 7 Screens', price: 690 },
      { value: 2, label: '8 to 12 Screens', price: 990 },
      { value: 3, label: '12+ Screens', price: 1390 },
    ],
    needs: ['Screenshots or Figma file containing screens', 'A little brief of what you are expecting'],
    gets: ['Figma file of Revamped screens', 'Cohesive Design']
  },
  deck: {
    id: 'deck',
    label: 'Pitch Deck',
    icon: <Presentation className="w-6 h-6" />,
    deliveryDays: 7,
    urgentDays: 3,
    basePrice: 450, 
    urgentFee: 150,
    title: 'Pitch Deck',
    description: 'Revamping your pitch deck for a more compelling, visually polished, and investor-ready presentation.',
    hasSlider: true,
    sliderLabelPrefix: 'Up to',
    sliderOptions: [
      { value: 0, label: '8 Slides', price: 450 },
      { value: 1, label: '12 Slides', price: 650 },
      { value: 2, label: '18 Slides', price: 900 },
      { value: 3, label: '25 Slides', price: 1200 },
    ],
    needs: ['Screenshots or Pitch Deck File', 'A little brief of what you are expecting'],
    gets: ['Revamped Figma Slide Deck file']
  }
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('landing');
  const [isUrgent, setIsUrgent] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setIsUrgent(false);
    setSliderIndex(0);
  };

  const currentService = services[activeTab];

  const calculatePrice = () => {
    let price = currentService.basePrice;
    if (currentService.hasSlider && currentService.sliderOptions) {
      price = currentService.sliderOptions[sliderIndex].price;
    }
    if (isUrgent) price += currentService.urgentFee;
    return price;
  };

  const finalPrice = calculatePrice();
  const finalDelivery = isUrgent ? currentService.urgentDays : currentService.deliveryDays;
  const currentSliderLabel = currentService.sliderOptions ? currentService.sliderOptions[sliderIndex].label : '';

  return (
    <div className="w-full py-20 px-4 flex flex-col items-center bg-[#FFFFFF]">
      
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-revamp-black mb-1">What do you want us to</h2>
        <h2 className="text-4xl md:text-5xl font-serif italic text-revamp-black">Revamp</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-[600px] mx-auto">
        {Object.values(services).map((service) => (
          <button
            key={service.id}
            onClick={() => handleTabChange(service.id)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === service.id ? 'bg-black text-white shadow-md scale-105 z-10' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {service.label}
            {activeTab === service.id && <Sparkles className="w-3.5 h-3.5 text-white" />}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 w-full max-w-[500px] relative overflow-hidden mx-auto"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 text-revamp-black shrink-0">
              {currentService.icon}
            </div>
            <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 tracking-wide">
              {finalDelivery} Days Delivery
            </span>
          </div>
          <h3 className="text-3xl font-bold text-revamp-black mb-3 leading-tight">
            {currentService.title} <span className="font-serif italic font-normal">Revamp</span>
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">{currentService.description}</p>
          {currentService.hasSlider && currentService.sliderOptions && (
            <div className="mb-8 select-none">
              <div className="flex justify-between items-center mb-5">
                <span className="text-sm font-medium text-gray-500">
                  {currentService.sliderLabelPrefix ? `${currentService.sliderLabelPrefix} ` : ''}
                  <span className="text-revamp-black font-semibold">{currentSliderLabel}</span>
                </span>
              </div>
              <div className="relative h-2.5 bg-gray-100 rounded-full w-full mx-auto">
                <div className="absolute top-0 bottom-0 left-0 bg-gray-200 rounded-full transition-all duration-300" 
                     style={{ width: `${(sliderIndex / (currentService.sliderOptions.length - 1)) * 100}%` }}></div>
                <div className="flex justify-between items-center absolute -top-1.5 left-0 right-0">
                  {currentService.sliderOptions.map((opt, idx) => (
                    <button key={idx} onClick={() => setSliderIndex(idx)}
                      className={`relative w-6 h-6 rounded-full border-[3px] transition-all duration-300 focus:outline-none ${
                        sliderIndex === idx ? 'bg-revamp-black border-revamp-black ring-4 ring-gray-100 scale-110 z-10' : 
                        idx < sliderIndex ? 'bg-gray-300 border-gray-300' : 'bg-white border-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="mb-4">
            <div className="text-4xl font-bold text-revamp-green tracking-tight">${finalPrice}</div>
          </div>
          <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => setIsUrgent(!isUrgent)}>
            <div className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 ${isUrgent ? 'bg-black' : 'bg-gray-200'}`}>
              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isUrgent ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
            <span className="text-sm text-gray-500 select-none">Urgent delivery ({currentService.urgentDays} days)</span>
          </div>
          <button className="w-full bg-revamp-black text-white font-semibold py-4 rounded-xl bg-black/90 transition-all shadow-lg hover:shadow-xl transform active:scale-[0.99] duration-200 mb-8">
            Revamp my {currentService.label.split('/')[0]}
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 border-t border-gray-100 pt-6">
            <div>
              <h4 className="font-bold text-sm mb-3 text-revamp-black">What we'll need</h4>
              <ul className="space-y-3">
                {currentService.needs.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-600 leading-snug">
                    <div className="w-3.5 h-3.5 rounded-full border border-gray-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 text-revamp-black">What you get</h4>
              <ul className="space-y-3">
                {currentService.gets.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-600 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-revamp-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServicesSection;
