// components/Footer.jsx
import Link from 'next/link';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Facebook} from '@/Components/SocialIcons';

// , Twitter, Instagram, LinkedIn 

export default function Footer() {
  return (
    <footer className="bg-[rgb(0,48,91)] text-white mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">About Us</h3>
            <p className="text-sm text-blue-100 leading-relaxed text-justify">
            Okey IP is a full-service intellectual property law firm specializing in trademarks, patents, designs, copyright and enforcement of these rights. Our firm has been developed through sound business principles, responsiveness to corporate and individual needs, understanding our clients’ objectives and providing practical and clear solutions. Okey IP is based in Abuja, the Federal Capital Territory and the IP centre of Nigeria and has been listed in the World Trademark Review Yearbook.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Team', path: '/team' },
                { name: 'News', path: '/news' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-blue-100 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="h-5 w-5 mt-1 text-blue-200" />
                <div>
                  <p className="text-sm text-blue-100">info@okeyip.com</p>
                  <p className="text-sm text-blue-100">okey@okeyip.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-blue-200" />
                <p className="text-sm text-blue-100">+234 909 677 4972</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 mt-1 text-blue-200" />
                <p className="text-sm text-blue-100">
                Okey IP Law Firm
                Suit G2 Ocean Centre, Apo-Gudu Express Way | 
                Abuja FCT | 900242 | Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-sm text-blue-300">
            © {new Date().getFullYear()} OKEY . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}