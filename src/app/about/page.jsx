'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { LockClosedIcon, ShieldCheckIcon, CodeBracketIcon, CommandLineIcon } from '@heroicons/react/24/outline';



export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');
  const [hoveredSolution, setHoveredSolution] = useState(null);

  const solutions = [
    { id: 1, title: 'Code Protection', icon: <CodeBracketIcon className="h-8 w-8" /> },
    { id: 2, title: 'API Security', icon: <CommandLineIcon className="h-8 w-8" /> },
    { id: 3, title: 'Data Encryption', icon: <LockClosedIcon className="h-8 w-8" /> },
    { id: 4, title: 'Threat Monitoring', icon: <ShieldCheckIcon className="h-8 w-8" /> },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] -mt-40 bg-white flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 py-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[rgb(0,48,91)] mx-auto w-full max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl font-extralight mb-6 text-justify leading-tight">
                About <span className="text-[rgb(0,48,91)] font-extralight">OKEY IP</span>
              </h1>
              <p className="text-base text-[rgb(0,48,91)] font-extralight text-justify">
                Okey IP is a full-service intellectual property law firm specializing in trademarks, patents, designs, copyright and enforcement of these rights. Our firm has been developed through sound business principles, responsiveness to corporate and individual needs, understanding our clients' objectives and providing practical and clear solutions. Okey IP is based in Abuja, the Federal Capital Territory and the IP centre of Nigeria and has been listed in the World Trademark Review Yearbook. <br /> <br />
        ​
                At Okey IP, our deep industry insights and local market knowledge allow us to anticipate and address your intellectual property needs. At a time of significant change in the Intellectual property industry, we are determined to always challenge ourselves to bring new and original ways of thinking to the intellectual property matters faced by our clients. <br /> <br />
        ​
                Since its establishment in 2016, our principle has been to provide the highest quality legal services available anywhere in the intellectual property industry and to recruit, retain and advance the brightest legal talent. We seek long-term partnering relationships with clients to ultimately provide the best solution for their needs. <br /> <br />
              </p>
            </motion.div>
          </div>
        </section>
      <section className="relative h-[20vh] w-full md:h-[20vh] lg:h-[45vh]"> 
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/image/hexee.avif"
                alt="Innovation security"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
              {/* 👇 Responsive heading */}
              <h1 className="mb-4 text-3xl font-extralight text-[rgb(0,48,91)] md:mb-6 md:text-5xl lg:text-6xl">
                Properly Securing your Innovations is what we do
              </h1>

              {/* 👇 Responsive button */}
              <Link href={'/services'}>
                <button className="bg-blue-700 text-white px-4 py-3 font-extralight hover:bg-grey-900-pointer transition-all duration-300">
                  Learn More About Our Services
                </button>
              </Link>
              
            </div>
          </section>
    </div>
  );
}








