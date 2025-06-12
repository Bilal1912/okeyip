'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkedinIcon, MailIcon } from '@/components/icons';

export default function TeamPage () {
  // 1) Raw data arrays
  const attorneyGroup = [
    {
      id: 0,
      name: 'Rashidat Obamojure',
      role: '',
      bio: 'Banke is a senior associate at Inns Law Firm with over 14 years of experience in corporate law, litigation, and family law practice. She graduated from Igbinedion University Okada in 2009, where she obtained her Bachelor of Laws degree (LL.B. Hons), and earned her B.L. from the Nigerian Law School, Lagos campus, in 2010. She began her career at Morayo Lebi & Co. and Frontier Solicitors in Lagos before relocating to New Bussa, Niger State, where she gained valuable experience in family law, litigation, and Sharia law practices. In addition to her legal work, Banke provided human rights and pro bono services, particularly in the rural areas of Niger State.In 2021, she joined J.K. Gadzama LLP in Abuja to further advance her career. Banke is also a member of several professional organizations, including the Business Recovery & Insolvency Practitioners Association of Nigeria (BRIPAN), the Nigerian Bar Association (NBA), the NBA Section on Business Law (NBA-SBL), and the International Federation of Women Lawyers (FIDA). "',
      image: '/image/Banke.jpg',
      linkedin: '#',
      email: ''
    },
    {
      id: 2,
      name: 'Nancy Terwase Shikaan',
      role: '',
      bio: 'Nancy is a Legal Practitioner of over 12 years at the Bar with a wealth of knowledge in Litigation and other related legal matters. She is a Graduate of the University of Abuja, Nigeria where she obtained a Bachelor’s degree in law (L.L.B) and a Bachelor of Law Degree (B.L) from the Nigerian Law School, Agbani, Enugu Campus Enugu State. She is resourceful, smart, and efficient. She worked with Emeka Etiaba SAN, Etiaba & Co,. Etiaba Chambers as  Counsel for several years before joining OkeyIP Law Firm as a Senior Associate. She has also worked with Home Securities Ltd as a Personal Assistant to the Executive Chairman. She possesses a sound professional work ethic, is proficient in research, and is a good team player.She is a Member of the Nigerian Bar Association, a Member Association of Professional Negotiators and Mediators, and a certified Project Manager.',
      image: '/image/Nancy.jpeg',
      linkedin: '#',
      email: 'nancy.shikaan@okeyip.com'
    },
    {
      id: 3,
      name: 'Hawkins Nkem',
      role: '',
      bio: 'Hawkins is an Associate with Okey IP Law Firm with wealth of experience in Litigation and over 10 years of experience in the Oil and Gas industry(Contracts/Commercials). He is very resourceful, smart, efficient and pays attention to details.Hawkins, graduated from Madonna University in 2008 where he obtained a Bachelors degree in law (L.L.B) and a Bachelor of Law Degree (B.L) from the Nigerian Law School, Abuja campus, F.C.T Abuja in 2009. He further proceeded to the University of Aberdeen, Scotland, United Kingdom for his Postgraduate program in Oil and Gas Law in 2012. He began his Practice with Emeka O. Nwagwu & Associates (SAN) as a Senior Associate, where He garnered litigation and corporate matters experiences. Thereafter after, he moved on to join Tilone Subsea Limited in Port Harcourt where he started his Corporate Law Practice as the Head of Contracts/ Commercials and Legal Compliance, which also cuts across some aspect of Intellectual Property Law.He is a Member of the Nigerian Bar Association (NBA), a Member of the Association of Professional Negotiators and Mediators (APNM), and a certified Data Scientist.',
      image: '/image/hawkins.jpg',
      linkedin: '#',
      email: 'hawkins.nkem@okeyip.com'
    },
    {
      id: 4,
      name: 'Nzubechi Frank',
      role: '',
      bio: 'Nzubechi is an Head Admin with Okey IP law firm. She assists Attorneys in performing their day-day activities. She acts as the point of contact for all employees, while providing administrative support.She obtained her Bachelors degree in linguistics with Igbo from Imo State University Owerri. She has a diploma in computer operation and application. She is also certified in customer service relationship management and has worked the Advent cable Network Nigeria ACNN TV as the Director of News and News reporter. She has a good interpersonal skill and a very passionate result-oriented personality.',
      image: '/image/Nzube.jpg',
      linkedin: '#',
      email: 'nzube.frank@okeyip.com'
    },
    {
      id: 5,
      name: 'Ilozumba Chiamaka Sylvia',
      role: '',
      bio: 'Chiamaka is a Senior Paralegal Assistant (Patents) with OkeyIP law firm. She assists Attorneys in performing their daily tasks. She also collects and files information appropriately.She obtained her Bachelors degree in Mathematics from the University of Nigeria with Second Class Honors (upper division). She also obtained her NCE in Economics/Mathematics at Nwafor Orizu College of Education Nsugbe, Anambra State.Chiamaka is an experienced Customer Service coordinator and a Mathematician. She has strong organizational and communication skills, she also pays attention to details and is very comfortable working as part of a team',
      image: '/image/Chiamaka.jpg',
      linkedin: '#',
      email: 'chiamka.ilozumba@okeyip.com'
    },
    {
      id: 6,
      name: 'Sonia Chigozirim Ejike-Njoku',
      role: '',
      bio: 'Sonia Chigozirim Ejike-Njoku is a bright and detail-oriented legal professional with a strong foundation in intellectual property law and a keen analytical mind, currently serving as an Intern at Okey IP Law Firm. As a Trainee Associate at Okey IP Law Firm, she is actively involved in high-level legal research, trademark portfolio management, and the drafting of trademark matters. Sonia brings a thoughtful, solutions-oriented approach to client service and legal strategy, combining precision with an ability to navigate complex legal frameworks in a rapidly evolving IP landscape.She holds a Bachelor of Laws (LL.B) degree from Nnamdi Azikiwe University and is expected to complete her B.L. from the Nigerian Law School in 2025. In addition to her legal training, Sonia has earned a Data Science and Analytics diploma and holds a DELF B1 certificate in French, reflecting a multidisciplinary approach and versatile skill set that seamlessly integrates law, technology, and multilingual proficiency.Sonia has gained hands-on legal experience through internships at Bola Olotu SAN & Co., S M Nwosu & Co., and the High Court of the FCT. She has also demonstrated leadership as Head Editor of her university’s Law Journal and has been active in legal education initiatives through her role in an ADR Law Clinic.Sonia’s diverse background and wide-ranging interests complement her legal training, positioning her as a well-rounded professional with the adaptability to thrive in today’s dynamic legal environment.',
      image: '/image/.jpg',
      linkedin: '#',
      email: ''
    },
    {
      id: 7,
      name: 'Okoro Assumpta Ujunwa',
      role: '',
      bio: 'Ujunwa is a Paralegal Assistant (Patents) with OkeyIP law firm. She assists Attorneys in performing their daily tasks. She also collects and files information appropriately.She obtained her Bachelor’s degree in Computer science from  Imo state University  with Second Class Honors (upper division).She obtained good training and experience in intellectual property law during her National youth service at okey Ip law firm.Ujunwa is a computer scientist with basic and advance computer skills which she inputs into carrying out her daily tasks. She has a strong organizational and communication skills, she also pays attention to details and is very comfortable working as part of a team',
      image: '/image/Asumpta.jpg',
      linkedin: '#',
      email: 'asumpta.okoro@okeyip.com'
    },
    {
      id: 8,
      name: 'Onuchukwu Chibuokem',
      role: '',
      bio: 'Ujunwa is a Paralegal Assistant (Patents) with OkeyIP law firm. She assists Attorneys in performing their daily tasks. She also collects and files information appropriately.She obtained her Bachelor’s degree in Computer science from  Imo state University  with Second Class Honors (upper division).She obtained good training and experience in intellectual property law during her National youth service at okey Ip law firm.Ujunwa is a computer scientist with basic and advance computer skills which she inputs into carrying out her daily tasks. She has a strong organizational and communication skills, she also pays attention to details and is very comfortable working as part of a team',
      image: '/image/Onuchukwu.jpg',
      linkedin: '#',
      email: 'onuchukwu.frank@okeyip.com'
    },
    {
      id: 9,
      name: 'Femi Ojomo',
      role: '',
      bio: 'Femi is the Senior Paralegal/Agent in OkeyIP having worked in an administrative capacity at the Trademarks, Patents, and Designs Registries of Nigeria during his National Youth Service. Femi has a diploma in microbiology from the ADEKUNLE AJASIN UNIVERSITY, AKUNGBA, Ondo, Nigeria. Thereafter, He obtained a Bachelor of Science in Biochemistry from the University of Calabar.Femi is an experienced Manager with the skills and the ability to be able to adapt easily and provide solutions to issues, with strong reporting skills.',
      image: '/image/Femi.jpg',
      linkedin: '#',
      email: 'femi.ojomo@okeyip.com'
    },
    {
      id: 10,
      name: 'Uyor Patience Augustine',
      role: '',
      bio: 'Uyor Patience Augustine studied Mass Communication at Federal Polytechnic Bida . She is presently working with Okey IP Law Firm as a  Paralegal Assistant /Agent . She is very experienced and interested in intellectual property law. She have worked on several Patents and finds the field both fascinating and educating. She obtained a good training during her National Youth Service (NYSC) at Federal Ministry of Industry Trade and Investment where she gained experience and knowledge on intellectual property law to enhance her expertise. Her knowledge to the firm is a valuable asset on intellectual property practice.She is a very detail oriented person and always looking for ways to improve and meet up to the company’s goals and objectives. She is very confidential and also have the ability to multi-tasks, meet deadlines, and maintain an organized workflow essential to the firm. Her other skills include; good time management, good communication, interpersonal relationship skills and team work.',
      image: '/image/Patience.jpg',
      linkedin: '#',
      email: ''
    },
    {
      id: 11,
      name: 'Christopher Usman',
      role: '',
      bio: 'Christopher Usman is a graduate of Accounting, having obtained a Higher National Diploma (HND), National Diploma (ND) and an Ordinary Diploma (OND).He completed his National Youth Service at the Federal Ministry of Industry, Trade and Investment where he gained requisite experience at the Account and Patent Office.  He currently works with OkeyIP Law Firm as a Paralegal Assistant/Agent.Christopher has excellent organizational skills with the capacity to deal with multiple tasks at the same time. He excels at accurate recording of transactions, has detailed knowledge of electronic banking systems and is a good communicator.',
      image: '/image/Chris.jpg',
      linkedin: '#',
      email: ''
    },
  ];

  const rightsGroup = [
    {
      id: 12,
      name: 'Okechukwu Onyekanma',
      role: 'Senior Partner',
      bio: 'Okechukwu Onyekanma is the Senior Partner of Okey IP Law Firm. With a career spanning over two decades, Okechukwu has built a formidable reputation as one of Nigeria’s foremost IP authorities—combining deep legal knowledge, strategic foresight, and international experience to shape the firm into a benchmark for innovation-driven legal service. His strong command of legal principles, combined with practical insight and layered legal acumen, positions him as an all-round legal authority capable of navigating today’s rapidly evolving, high-stakes legal and commercial landscapes.Okechukwu began his legal career at Giwa Osagie & Co. in Lagos, specializing in corporate and commercial law before advancing to pivotal roles as Assistant Legal Consultant at PwC Nigeria and later as Senior Legislative Assistant at both the National Assembly (Nigeria) and the Pan African Parliament (South Africa). His legislative expertise culminated in regional parliament where he championed impactful economic and legal reforms.He holds an LL.B from the University of Nigeria and was called to the Nigerian Bar in 2000. He has since complemented his legal education with specialized training from the World Intellectual Property Organization (WIPO) and Harvard University, acquiring multiple certifications in Intellectual Property law, biotechnology, copyright, and trademark systems.Okechukwu is an active member of several prestigious international committees within the Intellectual Property community. He serves as a member of the Committee on Anti-counterfeiting at the International Trademark Association (INTA), the Committee on Patents at the European Trademark Association. Additionally, he is an active member of the Nigerian Bar Association, NBA and Intellectual Practitioners of Nigeria, IPLAN. His expertise and thought leadership are further reflected in numerous publications that address the evolving challenges and innovations within Nigeria’s IP landscape. In addition to his professional accomplishments, he volunteers as Legal Adviser to the Eziome Progressive Union and maintains a strong interest in public speaking, football, reading, and strategic business development.',
      image: '/image/okeychukwu.jpg',
      linkedin: '#',
      email: 'okey@okeyip.com'
    },
    {
      id: 13,
      name: 'Echeanyanwu Nkechi',
      role: 'Partner',
      bio: 'Nkechi is a Senior Associate in Okey IP Law Firm with over 14 years of experience in Litigation, Intellectual Property, and Corporate and Commercial matters having advised clients on the commercialization of patents and Patent Prosecution. Nkechi, began her Law Practice with C.J Amasike & Associates and Kayode and Co, an Intellectual Property firm where she garnered litigation and corporate matters experiences. Thereafter she moved on to join and Opara and Co, where she was the head of Intellectual Property and Corporate practice before joining OkeyIP.   Nkechi studied at the oldest privately owned University in Nigeria, Madonna, where she obtained Bachelor’s degree in law.Nkechi, is a Member of the Nigerian Institute of Management, Nigerian Bar Association, Institute of Chartered Secretaries and Administration of Nigeria, and a Notary Public of the Supreme Court of Nigeria.',
      image: '/image/Nkechi.avif',
      linkedin: '#',
      email: 'necheanyanwu@okeyip.com'
    },
  ];

  // 2) Aggregate groups into teams
  const teams = {
    'Attorneys & Paralegals': attorneyGroup,
    'Partners':      rightsGroup,
  };

  // 3) Hooks and derived state
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeTab, setActiveTab] = useState(Object.keys(teams)[0]);
  const currentGroup = teams[activeTab];

  // 4) Render
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-white flex items-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extralight text-[rgb(0,48,91)] mb-4"
          >
            Meet Our Team
          </motion.h1>
          <p className="text-xl font-extralight text-[rgb(0,48,91)] max-w-2xl mx-auto text-justify">
            Our deep industry insights and local market knowledge allow us to anticipate and address your intellectual property needs. At a time of significant change in the Intellectual property industry, we are determined to always challenge ourselves to bring new and original ways of thinking to the intellectual property matters faced by our clients.
          </p>
        </div>
      </section>

      {/* Team Navigation */}
      <nav className="sticky top-20 bg-white shadow-sm z-20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-6">
            {Object.keys(teams).map((teamKey) => (
              <button
                key={teamKey}
                onClick={() => setActiveTab(teamKey)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === teamKey
                    ? 'bg-[rgb(0,48,91)] text-white'
                    : 'bg-blue-50 text-[rgb(0,48,91)] hover:bg-blue-100'
                }`}
              >
                {teamKey}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentGroup.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group"
              >
                <div
                  className={`bg-black/5 rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedMember === member.id
                      ? 'ring-4 ring-[rgb(0,48,91)]'
                      : 'hover:shadow-2xl'
                  }`}
                  onClick={() =>
                    setSelectedMember(
                      selectedMember === member.id ? null : member.id
                    )
                  }
                >
                  {/* Member Image */}
                  <div className="relative w-full aspect-[5/5] overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={member.id <= 3}
                    />
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-extralight text-[rgb(0,48,91)]">
                      {member.name}
                    </h3>
                    <p className="text-[rgb(0,48,91)]">{member.role}</p>
                    <p className='text-[rgb(0,48,91)]'>{member.email}</p>

                    <AnimatePresence>
                      {selectedMember === member.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 text-gray-600 space-y-4"
                        >
                          <p className='text-justify'>{member.bio}</p>
                          <div className="flex gap-4">
                            <a
                              href={member.linkedin}
                              onClick={(e) => e.stopPropagation()}
                              className="text-[rgb(0,48,91)] hover:text-blue-700"
                            >
                              <LinkedinIcon className="h-6 w-6" />
                            </a>
                            <a
                              href={`mailto:${member.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="text-[rgb(0,48,91)] hover:text-blue-700"
                            >
                              <MailIcon className="h-6 w-6" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

