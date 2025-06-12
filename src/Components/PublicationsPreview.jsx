// components/PublicationsPreview.jsx
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon } from '@heroicons/react/24/outline';

const publications = [
  {
    id: 1,
    title: 'Data privacy and protection in Nigeria – what you need to know',
    excerpt: '',
    image: '/image/data-privacy.jpeg',
    date: '2025-02-05'
  },
  {
    id: 2,
    title: 'Nigeria’s Geographical Indications Bill: a new era for indigenous product protection',
    excerpt: '',
    // image: '/news/2.jpg',
    date: '2025-02-30'
  },
  {
    id: 3,
    title: 'Recurring issues and delays at the Trademark Registry - why stakeholder confidence is being eroded',
    excerpt: '',
    // image: '/news/3.jpg',
    date: '2024-02'
  },
];

export default function PublicationsPreview() {
  return (
    <section className="py-16 bg-[rgb(var(--color_46))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[rgb(0,48,91)] mb-4">Our Recent Publications</h2>
          <p className="text-blue-900 max-w-2xl mx-auto">
            Stay updated with our latest legal insights and industry developments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication) => (
            <Link 
              key={publication.id}
              href={`/news?publication=${publication.id}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48">
                {/* <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <CalendarIcon className="h-5 w-5" />
                  <span className="text-sm">
                    {new Date(publication.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {publication.title}
                </h3>
                <p className="text-gray-600">{publication.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/news"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition-colors"
          >
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  );
}