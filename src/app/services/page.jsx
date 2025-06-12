// app/services/page.jsx
'use client';
import { motion } from 'framer-motion';
import { LightBulbIcon, CurrencyBangladeshiIcon, EyeIcon, BuildingLibraryIcon, ClipboardDocumentIcon, BuildingOfficeIcon, BanknotesIcon, ClipboardDocumentCheckIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';

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

const cardVariants = {
  hover: { 
    y: -10,
    scale: 1.02,
    boxShadow: "0 32px 64px -12px rgb(0,48,91)"
  }
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extralight text-[rgb(0,48,91)] mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-[rgb(0,48,91)] max-w-2xl mx-auto">
          Our professional services are proactive and top-notch. We make sure your innovations are well secured.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-8">
                  {/* Icon Container */}
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-[rgb(0,48,91)]">
                    <div className="text-[rgb(0,48,91)] group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[rgb(0,48,91)] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>

                  {/* Features List */}
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

      {/* CTA Section */}
      <section className="bg-[rgb(0,48,91)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extralight text-white mb-6">With our Services, Your Satisfaction Guaranteed
          </h2>
          
          <Link href={'/contact'}>
          <button className="bg-white text-[rgb(0,48,91)] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
            Schedule Consultation
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}