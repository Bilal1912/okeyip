"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LightBulbIcon, CurrencyBangladeshiIcon, ClipboardDocumentIcon, BuildingOfficeIcon, BanknotesIcon, ClipboardDocumentCheckIcon, EyeIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';
import PublicationsPreview from '@/Components/PublicationsPreview';
import { content } from '../../tailwind.config';

const cardVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 32px 64px -12px rgb(0, 48, 91)"
  }
};

const slideImages = [
  '/image/greenery.avif',
  '/image/ele.avif',
  '/image/Frame-6.png',
  '/image/Frame-7.png'
];

const services = [
  {
    title: "Patents",
    icon: <LightBulbIcon className="h-12 w-12" />,
    features: ["Patent Searches", "Legal Opinions", "Filing and Prosecution", "Renewals"]
  },
  {
    title: "Trade Marks & Domains",
    icon: <CurrencyBangladeshiIcon className="h-12 w-12" />,
    features: ["Trade Mark Searches", "Legal Opinions", "Filings", "Renewals"]
  },
  {
    title: "Copy Right & Designs",
    icon: <ClipboardDocumentIcon className="h-12 w-12" />,
    features: ["Copyright Protection", "Design Registration", "Recordals & Renewals"]
  },
  {
    title: "Anti-Counterfeiting",
    icon: <ClipboardDocumentCheckIcon className="h-12 w-12" />,
    features: ["Infringement Notices", "Counterfeit Monitoring", "Product Investigations"]
  },
  {
    title: "Litigation",
    icon: <BuildingOfficeIcon className="h-12 w-12" />,
    features: ["Litigation", "Dispute", "Resolutions", "Oppostions", "Enforcement of IP Rights", "Infringement Matters"]
  },
  {
    title: "CORPORATE COMMERCIAL",
    icon: <BanknotesIcon className="h-12 w-12" />,
    features: ["IP Commercial", "Agreements", "Licensing", "Technology Transfer", "Investments"]
  },
  {
    title: "Product Registration",
    icon: <BanknotesIcon className="h-12 w-12" />,
    desc: "Approval & Registration of",
    features: ["Foods", "Drugs", "Cosmetics", "Medical Devices"]
  },
  {
    title: "Watch Services",
    icon: <EyeIcon className="h-12 w-12" />,
    features: ["Trademark Watch Services", "IP Search"]
  },
  {
    title: "IP Consulting",
    icon: <BuildingLibraryIcon className="h-12 w-12" />,
    features: ["IP Due Deligence", "IP Risk Analysis", "IP Valutation"]
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
    {
      image: slideImages[0],
      title: 'Welcome to Okey IP Law Firm',
      subtitle: 'Your one-stop solution on intellectual matters',
      button: null,
      description: ""
    },
    {
      image: slideImages[1],
      content: 'We are a Nigerian Law Firm that specializes in trademarks, patents, and related intellectual property services in Nigeria.',
      button: { text: 'Read About Us', link: '/about' },
      description: ""
    },
    {
      image: slideImages[2],
      title: 'We Can Make a Difference in Securing your Innovations',
      button: { text: 'See What We Do', link: '/services' },
      description: ""
    },
    {
      image: slideImages[3],
      title: '',
      button: { text: '', action: () => setShowHistory(true) }
    }
  ];

  const nextSlide = () => setCurrentSlide(prev => (prev === 3 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? 3 : prev - 1));

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="relative bg-white">
      {/* Hero Slider Section */}
      <section className="relative pt-16 h-[60vh] w-full overflow-hidden bg-white">
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-30 -translate-y-1/2 text-white hover:text-gray-200 transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-30 -translate-y-1/2 text-white hover:text-gray-200 transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        <AnimatePresence initial={false}>
          {!isMobile ? (
            slides.map((slide, index) => (
              index === currentSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex transform scale-120 items-center justify-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: index <= 1 ? 'calc(50% - 15%) center' : 'calc(50% 15%) center',
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-20/95 via-blue-20/80 to-transparent w-[45%] ml-auto" />
                  <div className="container mx-auto px-4 relative z-10 ml-[45%] md:ml-[40%] lg:ml-[35%] xl:ml-[20%]">
                    <div className="space-y-3 md:space-y-4 lg:space-y-6 text-left max-w-[600px]">
                      {index === 0 && (
                        <>
                          <motion.h1
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white drop-shadow-lg"
                          >
                            {slide.title}
                          </motion.h1>
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-poppins font-medium text-white/90 drop-shadow">
                            {slide.subtitle}
                          </p>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <motion.h1
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight font-ubuntu text-white drop-shadow-lg"
                          >
                            <div className='font-poppins font-extralight'>
                              {slide.content}
                            </div>
                          </motion.h1>
                          <Link
                            href={slide.button.link}
                            className="inline-block px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-2 bg-transparent text-white rounded-4xl border-2 border-white hover:bg-blue-600/10 transition text-sm sm:text-base md:text-lg"
                          >
                            {slide.button.text}
                          </Link>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="w-full max-w-screen-2xl px-4 mx-auto text-xl sm:text-2xl md:text-4xl lg:text-xl -mt-[30px] ml-[300px] font-ubuntu font-extralight text-white drop-shadow-lg tracking-wider"
                          >
                            {slide.title}
                          </motion.h2>
                          {slide.button.link ? (
                            <Link
                              href={slide.button.link}
                              className="inline-block min-w-[300px] px-8 py-3 sm:px-12 sm:py-4 md:px-16 md:py-4 bg-transparent text-white rounded-4xl border-2 border-white hover:bg-blue-600/10 transition text-sm sm:text-base md:text-lg ml-[430px] tracking-wider"
                            >
                              {slide.button.text}
                            </Link>
                          ) : (
                            <button
                              onClick={slide.button.action}
                              className="inline-block px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-none text-[rgb(0,48,91)] rounded-lg hover:bg-gray-100 transition text-sm sm:text-base md:text-lg"
                            >
                              {slide.button.text}
                            </button>
                          )}
                          <div className="grid grid-cols-1 max-w-5xl mx-auto px-7 md:px-18 text-justify">
                            <div className="relative text-center text-white ">
                              <div className="absolute bottom-[-230px] left-180 max-w-[100%] md:max-w-[400%]">
                                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/100 font-poppins w-120 font-bold bg-auto leading-relaxed drop-shadow text-justify">
                                  The Nok culture, known for its distinctive terracotta sculptures, flourished in what is now Nigeria between approximately 500 BCE and 200 CE, and is named after the village of Nok where the first artifacts were discovered in 1928.
                                </p>
                              </div>
                              <div className="absolute bottom-[-230px] right-100 max-w-[100%] md:max-w-[40%]">
                                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/100 w-120 font-bold font-poppins leading-relaxed drop-shadow text-justify">
                                  The Queen Mother Pendant Mask: Iyoba, also known as the Queen Idia mask, is a 16th-century ivory mask believed to depict Queen Idia, the mother of Oba Esigie, a king of the Benin Kingdom, and is a symbol of the Benin dynasty.
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white drop-shadow-lg"
                          >
                            {slide.title}
                          </motion.h2>
                          <div className="absolute bottom-[-300px] left-180 max-w-[100%] md:max-w-[400%]">
                            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/100 font-poppins w-120 font-bold bg-auto leading-relaxed drop-shadow text-justify">
                              This free-standing brass head cast in the lost wax technique was discovered in 1938 at Wunmonije Compound in Ife, Nigeria. It was found by accident during house building works together with sixteen other brass and copper heads and the upper half of a brass figure.
                            </p>
                          </div>
                          <div className="absolute bottom-[-250px] right-[1100] max-w-[100%] md:max-w-[40%]">
                            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/100 w-120 font-bold font-poppins leading-relaxed drop-shadow text-justify">
                              Vase with Rope from Igbo-Ukwu, Nigeria, c. 9th–11th century C.E., leaded bronze, 12 11/16 inches (National Museum, Lagos, Nigeria)
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            ))
          ) : (
            <motion.div
              key="mobile-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slideImages[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
              <div className="container mx-auto px-4 relative z-10 flex items-center justify-center text-center">
                <div className="max-w-[90%] space-y-4">
                  <h1 className="text-3xl font-bold font-poppins text-white drop-shadow-lg">
                    Welcome to Okey IP Law Firm
                  </h1>
                  <p className="text-lg font-poppins font-medium text-white/90 drop-shadow">
                    Your one-stop solution on intellectual matters
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-0 ">
            <div
              className="bg-[rgb(0,48,91)] p-2 shadow-lg flex items-center justify-center"
              style={{ minHeight: '200px' }}
            >
              <h2 className="text-6xl font-bold font-poppins text-white text-center">
                Welcome!
              </h2>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <p className="text-lg text-gray-600 mb-6 text-justify">
                Okey IP is a full-service intellectual property law firm specializing in trademarks, patents, 
                designs, copyright and enforcement of these rights. Our firm has been developed through 
                sound business principles, responsiveness to corporate and individual needs, understanding our 
                clients&apos; objectives and providing practical and clear solutions. Okey IP is based in Abuja, 
                the Federal Capital Territory and the IP centre of Nigeria and has been listed in the World Trademark Review Yearbook.
              </p>
              <Link href="/about">
                <button className="bg-[rgb(0,48,91)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(40,84,158)] transition-all duration-300 font-poppins font-medium">
                  Read More...
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-extralight text-[rgb(0,48,91)] text-center mb-8 md:mb-12">
          OUR SERVICES
        </h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-1xl transition-all duration-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8">
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-[rgb(0,48,91)]">
                    <div className="text-[rgb(0,48,91)] group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[rgb(0,48,91)] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[rgb(0,48,91)]">
                        <svg className="w-4 h-4 mr-2 text-[rgb(0,48,91)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PublicationsPreview />

      <style jsx global>{`
        .chevron-icon {
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>
    </div>
  );
}

const ChevronLeft = ({ className }) => (
  <svg className={`${className} chevron-icon`} fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={`${className} chevron-icon`} fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" d="M9 5l7 7-7 7" />
  </svg>
);

const XMarkIcon = ({ className }) => (
  <svg className={`${className} chevron-icon`} fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

