'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import 'leaflet/dist/leaflet.css';
import nextDynamic from 'next/dynamic';
import L from 'leaflet';

// Fix marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Dynamically import Leaflet components (disable SSR)
const MapContainer = nextDynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = nextDynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = nextDynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = nextDynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const position = [9.0340712, 7.479537]; // Abuja coordinates

  return (
    <div className="min-h-screen bg-blue-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[rgb(0,48,91)] text-center mb-8 font-poppins">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-800/10 rounded-full">
                <FiMail className="w-6 h-6 text-[rgb(0,48,91)]" />
              </div>
              <div>
                <h3 className="text-[rgb(0,48,91)] font-poppins font-semibold">Email</h3>
                <p className="text-[rgb(0,48,91)]">info@okeyip.com</p>
                <p className="text-[rgb(0,48,91)]">okey@okeyip.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-800/10 rounded-full">
                <FiPhone className="w-6 h-6 text-[rgb(0,48,91)]" />
              </div>
              <div>
                <h3 className="text-[rgb(0,48,91)] font-poppins font-semibold">Phone</h3>
                <p className="text-[rgb(0,48,91)]">+ (234) 909 677 4972</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-800/10 rounded-full">
                <FiMapPin className="w-6 h-6 text-[rgb(0,48,91)]" />
              </div>
              <div>
                <h3 className="text-[rgb(0,48,91)] font-poppins font-semibold">Address</h3>
                <p className="text-[rgb(0,48,91)]">
                  Okey IP Law Firm<br />
                  Suit G2 Ocean Centre, Apo-Gudu Express Way<br />
                  Abuja FCT | 900242 | Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[rgb(0,48,91)] font-poppins mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-[rgb(0,48,91)] focus:border-transparent text-[rgb(0,48,91)] placeholder-blue-400"
                  placeholder="Full Name"
                  required
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[rgb(0,48,91)] font-poppins mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-[rgb(0,48,91)] focus:border-transparent text-[rgb(0,48,91)] placeholder-blue-400"
                  placeholder="Email"
                  required
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[rgb(0,48,91)] font-poppins mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg focus:ring-2 focus:ring-[rgb(0,48,91)] focus:border-transparent text-[rgb(0,48,91)] placeholder-blue-400"
                  placeholder="Your message..."
                  required
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[rgb(0,48,91)] text-white font-poppins font-semibold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-96 w-full rounded-2xl shadow-lg overflow-hidden">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                OKEY IP,<br /> LAW FIRM
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
