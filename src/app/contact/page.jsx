'use client';
import { useState, useCallback } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const center = {
  lat: 9.0340712,
  lng: 7.4795370,
};

const ContactPage = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading Maps...</p>;

  return (
    <div className="min-h-screen bg-blue-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[rgb(0,48,91)] text-center mb-8 font-poppins">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Info */}
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

        {/* Google Map */}
        <div className="h-96 w-full rounded-2xl shadow-lg overflow-hidden">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={center}
            options={{
              scrollwheel: false,
              disableDefaultUI: true,
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
