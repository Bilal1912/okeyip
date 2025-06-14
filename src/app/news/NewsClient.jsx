// app/news/page.jsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChatBubbleLeftIcon,
  TrashIcon,
  CalendarIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/outline';

const NewsClient = () => {
  const searchParams = useSearchParams();
  const publicationId = searchParams.get('publication');

  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample publications data (keep all your original publications exactly as they were)
  const [publications] = useState([
    {
      id: 1,
      title: 'Data privacy and protection in Nigeria – what you need to know',
      image: '/image/data-privacy.jpeg',
      date: '2025-02-05',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>

      Hyacinth Chijioke

     . The foundation for data privacy and protection is found in Section 37 of the 1999 Constitution <br /><br />
     . The Freedom of Information Act 2011 and the Data Protection Act 2023 establish a robust legal framework for privacy and protection <br /><br />
     . A Federal High Court decision concerning the app 'Truecaller' highlights the importance of understanding how data is collected and processed <br /><br />

The world is now more digital than ever, making it easy for private and personal information to be shared online without the
owner’s consent. In many cases, sensitive details, photos or other private information end up in the public domain without
permission. This highlights the urgent need for a strong legal framework to protect data and ensure its privacy. <br /><br />

        <p className='font-extrabold text-xl'>Legal Framework</p> <br />
In Nigeria, data privacy and protection refer to laws that safeguard personal information while giving individuals the right to control
how their data is collected, used and shared. The foundation for this protection is found in Section 37 of the 1999 Constitution of
the Federal Republic of Nigeria, as amended, which explicitly guarantees and protects the privacy of citizens, including their homes,
correspondence and communication, as follows: “The privacy of citizens, their homes, correspondence, telephone conversations and
telegraphic communications is hereby guaranteed and protected.” <br /><br />
Several laws have been enacted to address data privacy and protection, establishing a robust legal framework to safeguard the
personal information of individuals. Key among these laws are the following: <br /><br />

. The Freedom of Information Act 2011 – this law gives the public access to government records to promote transparency.
However, Section 14 (1) ensures that sensitive personal information about individuals cannot be disclosed without permission. <br /><br />

. The Nigeria Data Protection Act 2023 – signed into law by President Bola Ahmed Tinubu on 14 June 2023, this actstrengthens the protection of personal data, requiring data controllers or processors, under Section 40, to report breaches tothe National Data Protection Commission within 72 hours of discovery and to document such breaches in their datap rotection policies. <br /><br />

        <p className='font-extrabold text-xl'>Recent Decision</p> <br /> <br />

        In addition to these laws, recent court cases have significantly influenced the enforcement of data privacy in Nigeria. A prominent
case is Olumide Babalola LP v True Software Scandinavia AB (Case FHC/A
BJ/CS/1432/2019
), which involved allegations against
the app 'Truecaller' for collecting users’ phone numbers worldwide – including the phone number of one of the applicants – without
their consent. The applicants argued that their right to privacy had been violated, citing provisions from the Nigeria Data Protection
Regulation. However, after reviewing the case, the Federal High Court clarified that ‘Truecaller’ did not directly collect the phone
numbers. Instead, users (data controllers) who granted the app access to their contact lists were responsible. Consequently, the
court dismissed the case for lack of merit. This judgment underscores the importance of understanding how data is collected and
processed and who bears responsibility for privacy breaches.

        <p className='font-extrabold text-xl'>Comment</p> <br /> <br />

        As technology continues to advance at a rapid pace, the need to safeguard private data while balancing the interests of internet
users becomes increasingly critical. Nigeria has made commendable progress in establishing a robust legal framework to protect
individuals' personal information. These laws ensure that private data cannot be shared or disclosed without proper consent,
effectively preventing infringements of individuals’ rights.


      </p>
     },
    
     {
      id: 2,
      title: 'Nigeria’s Geographical Indications Bill: a new era for indigenous product protection',
      image: '/image/',
      date: '2025-02-05',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>
        . Indigenous goods have long lacked adequate legal protection <br /><br />
. The formal submission of the draft Geographical Indications Bill marks a defining moment in Nigeria’s IP journey <br /><br />
. The bill offers a comprehensive, fit-for-purpose legal framework that can revolutionise how the country protects and
commercialises its indigenous products <br /><br />

        <p className='font-extrabold text-xl'>Background</p> <br /> <br />

Nigeria is home to over 250 ethnic groups – and with them comes a rich legacy of traditional knowledge, craftsmanship and region-
specific products. From kilishi (spicy, dried meat), ijebu garri (flour made from cassava), yaji (a spice blend), fura (a millet dough
ball), kunun gyada (gruel) and Ofada rice to aso oke (a hand-woven fabric) and adire (a textile art form), these indigenous goods
are a testament to centuries of cultural heritage and regional expertise. Yet, they lacked adequate legal protection, leaving them
open to imitation, counterfeiting and cultural exploitation. This begged the need for geographical indications (GIs) to bridge that
gap. <br /><br />
A GI is a sign used on products that have a specific geographical origin and possess qualities, a reputation or characteristics
inherently linked to that place. The concept underpins global success stories such as Champagne in France, Scotch whisky in
Scotland, Parmesan cheese in Italy and Swiss watches from Switzerland. These are safeguarded by national laws and international
treaties such as the Paris Convention (1883), the Madrid Agreement (1891), the Lisbon Agreement (1958, revised by the Geneva
Act 2015), and the Agreement on Trade-Related Aspects of Intellectual Property Rights (1994
). Despite being a signatory to many
of these treaties, Nigeria has historically lagged in implementing them – leaving a crucial vacuum in its IP framework.  <br /><br />

        <p className='font-extrabold text-xl'>A Momentous Shift</p> <br /> <br />

That is now changing. On 4 February 2025 Nigeria reached a defining moment in its IP journey with the formal submission of the
draft Geographical Indications Bill – a landmark achievement resulting from over three years of rigorous collaboration. This
milestone was made possible through the steadfast efforts of the Trademarks Registry, the Nigerian Technical Working Group on
Geographical Indications and, most notably, the EUIPO via the EU-funded AfrIPI project. This coalition of stakeholders worked
tirelessly to establish a solid legislative foundation for GI protection in Nigeria. <br /><br />
Until now, the only semblance of GI protection existed under Section 43 of the Trademarks Act, which protects certification marks
and prohibits the use of fraudulent or false marks on goods contained in the Merchandise Marks Act. However, this was insufficient
to meet Nigeria’s complex cultural and commercial realities. The new bill offers a comprehensive, fit-for-purpose legal framework
that can revolutionise how Nigeria protects and commercialises its indigenous products. <br /><br />

        <p className='font-extrabold text-xl'>Comment</p> <br /> <br />

The economic potential is staggering. In the European Union alone, GI-protected agricultural products generated over €74.76 billion
in sales in 2020. For Nigeria, similar protections could unlock new trade opportunities, boost non-oil exports, and significantly
increase rural incomes. <br /><br />
However, the impact of GI protection goes beyond economics. It empowers local communities, preserves traditional practices, raises
quality standards and enhances tourism. It offers producers the legal tools to build trusted brands rooted in origin, heritage, and
excellence – while helping the country combat the exploitation of its cultural assets on the global stage. <br /><br />
The submission of the GI bill is more than legislative progress: it is a declaration. Nigeria is asserting its right to define, protect and
benefit from the value of its cultural identity. It signals a shift from raw commodity exportation to value-added branding, where
authenticity becomes a competitive advantage. With the unwavering support of partners such the EUIPO and AfrIPI, Nigeria is
stepping boldly into a future where IP protection is not just about law, but about national pride, economic transformation and
cultural preservation. <br /><br />
The time has come for Nigerian products to gain the global recognition they deserve – not as imitations or curiosities, but as
authentic, protected and proudly Nigerian.


      </p>
    }, 
    
    {
      id: 3,
      title: 'Trademark Infringement by Company Names in Nigeria- THE SANOFI CASE',
      image: '/image/',
      date: '2024-02',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>
       <p className='font-extrabold text-4xl'> Trademark Infringement by Company Names in Nigeria- THE SANOFI CASE  </p> <br /> <br />


       The Federal High Court of Nigeria recently made a landmark judgement which should permanently resolve the conflicts between registered trademarks and company names in Nigeria. <br /><br />

In 2019, the French multinational pharmaceutical company, Sanofi S.A. lodged a complaint at the Corporate Affairs Commission (CAC), demanding that three Nigerian companies Sanofi Integrated Services Limited, Sanofi Nigeria Enterprises Limited and Sanofi Nigerian Enterprise which incorporated its registered trademark, “Sanofi” into their company names, alter the names of their companies as the use SANOFI by the companies is an infringement of their existing Sanofi trademark. <br /><br />


The CAC issued a directive to the three companies to voluntarily change their names, however the companies failed to comply with this directive. As such, Sanofi S.A. instituted an action for trademark infringement at the Federal High Court. The presiding judge, Justice Omotosho upheld the directive of CAC, granted injunction and damages against the infringing companies for trademark infringement. <br /><br />


The judgement of the Federal High Court will undoubtedly put to bed the conflict between prior registered trademarks and company names in Nigeria. Most importantly, the judgement is in compliance with the provisions of the Companies and Allied Matters Act (CAMA), the principal legislation governing companies’ registrations in Nigeria. <br /><br />


Section 30(4) of the Act provides that <br />

<p className='italic'>“Nothing in this Act precludes the Commission from requiring a company to change its name if it discovers that such a name conflicts with an existing trade mark or business name registered in Nigeria prior to the registration of the company and the consent of the owner of the trade mark or business name was not obtained.” </p> <br /><br />


The provision of this section is clear and unambiguous. A trademark which was registered in Nigeria prior to the registration of a company name takes priority over the company name. The vested rights in the registered trademark are protected by this provision against all forms of unauthorized use by a third party. <br /><br />


In addition, Section 852(1) of CAMA 2020 expanded the scope of protection of trademarks. The section states thus: <br />

<p className='italic'> “an applicant can object to a registered company name, limited liability partnership, limited partnership, business name or incorporated trustees on the ground that it is: <br />

"(a) the same as a name associated with the applicant in which he has goodwill; or <br />

 (b) sufficiently similar to such a name that its use in Nigeria would be likely to mislead by suggesting a connection between the company, limited liability partnership, limited partnership, business name or incorporated trustee and the applicant”. <br />

(d) in the opinion of the Commission, would violate or conflict with any existing trademark or business name registered in Nigeria or body corporate formed under this Act unless the consent of the owner of the trade mark, business name or trustees of the body corporate has been obtained </p> <br /> <br />


From the section 852 (1), the application to the CAC for the alteration of company names that are in conflict with an existing trademark in Nigeria can be initiated by either: <br />

. Owner of a prior registered trademark or <br /> <br />

. An Applicant that has a goodwill to protect or <br /> <br />

. the CAC. <br /> <br />  


Sections 30(4) and 852 (1) of CAMA are fundamental in ensuring that due diligence is exercised by individuals seeking to register a company or business in Nigeria to ensure that the names are not in conflict with an existing trademark. <br /> <br />


Finally, the judgement would boost the confidence of Investors and rights owners in the Nigerian judiciary, thereby increasing FDIs and economic growth of the country.  Also, it will encourage right owners to assert and enforce their legal rights in Nigeria and further strengthen the importance of trademark protection as a panacea of economic development in the  country.  
      </p>,
    },

    {
      id: 4,
      title: 'Harnessing IP rights to drive innovation and sustainable development in Nigeria',
      image: '/image/innovation.jpeg',
      date: '2024-05-13',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>

. The Patents and Designs Registry organised a symposium to highlight the intersection of intellectual property and the
SDGs adopted by the United Nations <br /><br />
. SDG 9 focuses on creating strong infrastructure, fostering inclusive industrialisation and encouraging innovation <br /><br />
. Certain strategies can be implemented to drive innovation and sustainable development through IP rights, including
improving IP legislation and enforcement <br /><br />

IP rights have become a powerful tool to drive innovation and sustainable development in today's global economy. Nigeria has
recognised their role in achieving Sustainable Development Goal 9
(SDG 9)
on industry, innovation and infrastructure. The Patents
and Designs Registry, under the auspices of the Federal Ministry of Trade and Investment, organised a World IP Day Symposium on
25 April 2024 to highlight the intersection of intellectual property and the SDGs. The event emphasised the importance of
innovation and creativity in shaping a shared future and provided a platform for stakeholders to discuss the role of intellectual
property in Nigeria's development agenda and global SDG efforts. <br /> <br />

     <p className='font-extrabold'> The importance of IP rights</p> 

     In recent years, Nigeria's IP landscape has transformed, with the government recognising the potential of IP rights to drive economic
growth, create employment opportunities, and address social and environmental challenges. IP rights such as patents, trademarks,
copyrights and trade secrets are crucial for protecting intellectual creations, encouraging innovation, and attracting investment in
research and development. This leads to the emergence of new technologies, products and services, boosting economic growth and
enhancing the quality of life. <br /><br />
IP rights are vital for fostering innovation and sustainable development in Nigeria's various sectors. For example, by granting patent
protection and other IP rights to innovators in renewable energy, Nigeria has promoted the development of sustainable
technologies, addressing the country's energy needs and contributing to SDG 9 by encouraging sustainable industrialisation and
innovation for a greener future. <br /><br />


     <p className='font-extrabold'> Strategies for harnessing IP rights</p> <br /><br />

     Nigeria can harness the full potential of IP rights by adopting a holistic approach that addresses the key challenges facing the
country. To drive innovation and sustainable development through IP rights, the following strategies, among others, can be
implemented <br /><br />

     <p className='font-extrabold'> Improving IP legislation and enforcement</p> <br /><br />

     Nigeria can improve its IP legislation by updating existing laws and regulations to not only address emerging IP issues, but also
align itself with international standards and best practices. This includes reviewing and amending laws related to patents,
trademarks, copyrights and trade secrets to ensure they provide adequate protection for IP rights. Strengthening enforcement
mechanisms is also essential to combat IP infringement effectively, as well as ensuring that the authorities have the capacity and
resources to enforce these laws. <br /><br />

     <p className='font-extrabold'> Encouraging Innovation</p> <br /><br />

    Promoting domestic innovation through IP rights protection can stimulate entrepreneurship, create a culture of creativity and drive
sustainable development. This can lead to the development of new industries and technologies that contribute to sustainable
industrialisation. The government can provide tax incentives for companies investing in research and development, as well as grants
and subsidies to support innovative projects. These incentives can help offset the costs associated with innovation and encourage
companies to invest in developing new technologies and products. <br /><br />

     <p className='font-extrabold'> Fostering Collaboration</p> <br /><br />

Collaboration between industry, academia and government can foster innovation and knowledge sharing. Government-funded
research programmes can encourage collaboration between researchers and industry partners. This can provide access to funding,
expertise and best practices in IP management and innovation. Participating in international IP forums and conferences can also
help showcase Nigeria's innovations and attract foreign direct investment and partnerships. <br /><br />

     <p className='font-extrabold'> Comment</p> <br /><br />

     By effectively implementing these strategies, Nigeria can use IP rights to drive innovation, economic growth and sustainable
development, aligning itself with SDG 9. This goal focuses on creating strong infrastructure, fostering inclusive industrialisation and
encouraging innovation. Prioritising IP rights is crucial for Nigeria to drive innovation and sustainable development.



      </p>
    },  


    {
      id: 5,
      title: 'The Pros and Cons of the proposed New Trademark Online Filing Platform in Nigeria.',
      image: '/image/',
      date: '2024-02',
      content: <p className='text-black font-extralight'>
        
        <p className='font-extrabold text-4xl'>The Pros and Cons of the proposed New Trademark Online Filing Platform in Nigeria.
     </p> <br /> <br />

     <p className='font-extrabold'> Introduction</p> 
      
      There are two filing systems in Nigeria, the Online filing system and IPAS, the Intellectual Property Automated System. These systems are channels used by applicants to file trademark and other maintenance applications in Nigeria. The systems were introduced in 2012 and 2013 respectively.
      
      Prior to 2012, trademark applications in Nigeria were filed manually (paper filings). Though functional, this system was slow, problematic and rift with losses and mismanagement of documents. Agents faced numerous challenges, hence the intervention of the supervising Ministry.  <br />
      
      <p className='font-extrabold'>Genesis </p> 
      
      The Ministry of Trade and Investment, the Supervising Ministry of the Registries, in September, 2012 introduced the online filing system for the first time in Nigeria in order to tackle the problems associated with the manual system.  <br />
      
      
      The first online platform created under this system was user-friendly and highly functional with an easy-to-use interface for both the agents and the staff. <br />
      
      
      However, in September 2020, a second and the current online platform was introduced with the aim to upgrade the old platform. Unfortunately, instead of improving on the first platform, the current platform has fallen short of expectation, creating and generating more problems at various turns rather than resolving them. 
      
      
      <p className='font-extrabold'>Bitter-Sweet</p>
      
      The current filing platform turned into misery for everyone, though compared to the manual system of filing Trademark applications, it is relatively a better system, but a far cry from the first online platform.  <br />
      
      
      However, it can boast of automatic issuance of filing receipts at the time of filing the application and issuance of registration certificates within a reasonable timeframe. Otherwise, the platform is a massive failure.    <br />
      
      
      <p className='font-extrabold'>Really Bad</p>
      
      As much as that a few changes were made on the current online platform, Agents and Staff are faced with numerous challenges from using the platform. They problems include: <br />
      
      1. Disappearance of Trademark Applications after payment of filing fees without trace and no means of retrieving the application or payment.    <br />
      
      2. Agents are unable to file recordal applications, such as assignment, merger, etc. as no such provisions was made on the platform  <br />
      
      3. Notices of opposition cannot be filed through the platform <br />
      
      4. Searches cannot be conducted on the platform.  <br />
      
      5. Inability to access applications made on the old filing platform. <br />
      
      6. Successful office actions cannot be revised and acceptance letters issued.  <br />
      
      
      These problems have brought a standstill in what should have been an easy-to-run platform. Worse still, there are no available options and Applicants are left out in the cold. <br /><br />
      
      
      <p className='font-extrabold'>Third time lucky?</p>
      
      Recently, there have been efforts to introduce a new and a third online platform, with the intention of completely over hauling the current online platform. The Registrar of Trademarks have promised stakeholders that the new platform will address the shortcomings of the current platform. If properly designed, the proposed platform will ensure the smooth processing of applications.  <br />
      
      
      However, a failure to properly address the shortcomings of the current platform in the proposed platform will be another waste of money, time, and a disaster for trademark prosecutions in Nigeria.  <br />
      
      
     <p className='font-extrabold'> My Take</p>
      
      It is expected that the proposed new online platform will address the problems currently been encountered on the current online platform. <br />
      
      
      Also, the Registry MUST ensure that both the old, current and proposed platforms are merged or at least a data migration from the the old and current platforms to the proposed platform, therefore making it possible to access trademarks filed at the inception of online system to date.   <br />
      
      
      Further, the proposed platform MUST provide online publication of trademark journals and completely eliminate paper publications. <br />
      
      
      Anything less, will be a colossal failure.</p>,
    },
        {
      id: 6,
      title: 'NIGERIA: CHALLENGES IN PROCESSING APPLICATIONS ON THE NEW IPO PLATFORM',
      image: '/image/intlect.jpg',
      date: '2024-02',
      content: <p className='text-[rgb(0,48,91)] font-extralight font-poppins text-align'>
        The Nigerian Trademark Office (TMO) commenced online applications of IP matters in 2012 as a result of the failure of the old manual system of filing applications. The new online system made filing of applications easy and accessible with the introduction of an online filing platform. In 2021, the TMO launched a new filing platform as a replacement and improvement to the first platform launched in 2012. The new platform introduced various new features. <br />


Ironically these new features have now posed challenges for ease in migration from the previous old platform to the new platform. Though, it could be argued that the new platform has significantly lessened the difficulties in filing and processing applications, however, recently a few challenges have arisen that has ultimately brought the flow of applications to a grinding halt. <br /><br />


<p className='text-[rgb(0,48,91)] font-bold '>Registration/payment of sealing fees</p>

In Nigeria as in other jurisdictions, the registration of trademarks is processed after the expiration of the statutory opposition period of two months. This simply implies that regardless of when the payment of sealing fees by an Applicant, the registration of the trademark cannot be processed until the expiration of the statutory period. The essence is to prevent issuance of registration certificate for trademarks that may be opposed. <br /><br />

 

On the 21st of October 2021, the first trademarks journal featuring applications filed via the new IPO platform was published. The opposition period has since elapsed in December 2021 which means that applicants may proceed to make payments for registration certificates. This has proven to be an impossible feat at the moment due to the inadequate provision for payment of sealing fees on the new platform. Since, online applications cannot be processed manually, applicants and IPO agents are left with no recourse. <br /> <br />


<p className='font-extrabold'>Lack of provision for Recordals</p> <br />

The new platform does not have a provision for processing recordals, from change of name, address, assignments, merger etc. This has caused several backlogs as these applications cannot be processes since the launch of the new platform. <br />


<p className='font-extrabold'>Change of Agent</p>


Another major hurdle is takeover of applications. The new IPO platform design makes it impossible for applications filed by one agent to be accessed by another agent. This feature becomes a major concern when an Applicant changes its agents. The new agent is unable to access the filing information of the application. For instance, a new agent on record cannot make payment for sealing fees for trademarks filed by a different agent at the application stage. <br /> <br />


The fanfare that came with the introduction of the new platform has now been replaced with outcry by Staff and Stakeholders at the TMO. Since the expiration of the statutory opposition period for the two trademark journals published last year, 2021, applicants are expected to proceed with the registration of their trademarks. This process has now been halted by the inept new platform and there seems to be no solution in sight. This has brought filing and processing affected applications to a standstill. It is imperative that the TMO rectifies this anomaly as soon as possible in order to avoid further unnecessary delays and backlogs of applications at the TMO.
      </p>,
    },
    {
      id: 7,
      title: 'Introduction of Utility Model Patents in Nigeria',
      image: '/image/intlect.jpg',
      date: '2024-02',
      content: <p className='text-[rgb(0,48,91)] font-extralight font-poppins text-align'>
       The Nigeria Patent law provides for formal examination of Patents as against substantive examination in most developed countries.  Section 4 of Patents and Designs Act of Nigeria provides that once the patent application satisfies the statutory requirements as to form and relates to only one invention, the Registrar will grant the patent without enquiry if the 3 three basic criteria of registrability are met or whether the specification sufficiently discloses the invention. Therefore, patents are granted at the risk of the patentee and without guarantee of their validity in Nigeria.   


However, recently, the Nigerian Patent Registry strangely and contrary to the Nigeria Patents and Designs Act, refused some patent registrations on the basis that their specifications are not registrable. Thereby casually strolling into the zone of substantive examination without any legal or statutory backing. This recent actions by the Registry have impressed on the Stakeholders that the Nigerian Patent Registry now offers substantive examination.

The Registry has further unwittingly expanded its powers by directing Applicants whose Patent applications have failed short of the Registry’s ‘substantive examination’ to file the applications as utility models patents. Yet again, registration of Utility Model Patents in Nigeria is not provided by the Patents and Designs Act.   <br /><br />


<p className='text-[rgb(0,48,91)] font-bold '>Utility Model Potents</p>

The strict criteria for Patent registration which exclude valuable inventions from protection where the inventions do not meet the three basic criteria of novelty, inventive step and capable of industrial application has made the introduction of utility model patent registration in Nigeria a very important, step.

The World Intellectual Property Organization, WIPO defines utility model patent as an exclusive right granted for an invention, which allows the right holder to prevent others from commercially using the protected invention without his authorization, for a limited period. It is one of three kinds of patents and may be granted to anyone who invents or discovers any new and useful process, machine, article of manufacture or composition of matter or any new or useful improvement. It is also, referred to as 'petty patents', ‘innovation patents', 'minor patents' or 'small patents', utility model patents have already been embraced by a number of jurisdictions in Africa, from Egypt, Senegal, Rwanda, ARIPO to OAPI.   <br /><br />


Some features of utility model patents include: <br />

1. It confers exclusive protection rights for the product and not process. <br />

2. It is more appropriate for incremental invention. <br />

3. Only a preliminary procedural examination is required for the grant of utility patents. There is no substantive examination for utility patent grant. <br />

4. The rights conferred for the utility patents are similar to those granted by patent laws but have a shorter term. <br />

5. The span of protection usually varies from 5-15 years. <br />

6. The duration of registration of utility patents is less because utility patents are usually not examined prior to registration. <br />


The advantages of Utility Models protection are numerous including protection of minor improvements on inventions; the registration is faster; it protects the Inventors from been commercially victimized by big companies; the registration of invention with low inventiveness etc. Also, it is a panacea for technology development in developing countries like Nigeria and it encourages local inventions in various sectors. <br /> <br />


<p className='text-[rgb(0,48,91)] font-bold '>Summary</p><br /><br />

However, the concern of stakeholders on the recent recognition and registration of Utility Model Patents in Nigeria is the lack of legal provision and framework. The Patent and Design Acts of Nigeria does not provide for utility model patent registration, therefore any such registration may not be enforced nor recognized by the Courts.
      </p>,
    },
    {
      id: 8,
      title: 'PRIORITY CLAIMS AND INTELLECTUAL PROPERTY RIGHTS IN NIGERIA',
      image: '/image/pub1.jpeg',
      date: '2022-09',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>The importance of protection of trademark in these modern times is well known. In Nigeria, Protection of trademark rights is concluded when a mark has undergone the complete registration process and the certificate of registration issued by the Trademark Registry. A plethora of advantages avail a proprietor of a registered trademark including exclusive right over use of the trademark and prevention of a third party from taking advantage of the reputation of the trademark without authorization.    <br /> <br />


      However, Trademark protection is territorial and must be filed in each country where protection is sought. The accruing rights and protection were available to a registered trademark within the jurisdiction. This created some problems where identical or similar trademark registered in a particular jurisdiction and has garnered goodwill can be taken advantage of by another Applicant in a different jurisdiction. The prevalence of this mishap has been curbed through the introduction of right of priority encapsulated under several treaties. <br /> <br />


      The first of these treaties, the Convention for the Protection of Industrial Property, as amended (the Convention) was adopted in 1883. Under this system, the registration of a mark in one jurisdiction that is party to the convention automatically grants subsequent applications made in other party states, priority over other identical or similar marks in the same class using a single application, so far as the other applications are filed within a specified time frame.  The major advantage is that the subsequent applications will be regarded as if they had been filed on the same day as the first application.   <br /> <br />

      

      Nigeria being a signatory and party to the convention had incorporated the convention into its legal system. However, both the Trademark and Patent laws of Nigeria requires the relevant Minister (Trade and Investment) to make a declaration to be published in the Federal Gazette specifying countries that will be accorded “Convention Country” status for purposes of filing convention applications and claiming priority rights. The Minister is yet to make this declaration in respect of Trademarks in Nigeria, though the necessary declaration has been made in the case of Patents and Designs since 1971, recognizing all the Paris Union member-countries as Convention Countries. <br /> <br />


      As such and as a matter of law, no priority claim ought to be accorded to trademark applications in Nigeria, however in practice, a priority claim can be included at the filing stage of a trademark application, but since it does not have its rooting on a functional law, it is merely ceremonial at best.  As a result, Nigerian IPR holders or foreign holders with interest in the Nigerian market are severely limited in the scope of the protection that is available to them under the current legal framework in the country.  <br /> <br />


      A critical question is why a legislation of such importance has not been fully implemented in a country that boasts of having the highest number of trademark applications annually in Africa.  The non-implementation of the convention has now caused the recent calls by stakeholders not only for the Minister to make the necessary declaration in the case of trademarks, also for the Parliament to domesticate all IP related treaties that Nigeria is a party to and amend the very outdated trademark law of Nigeria.  If the necessary actions are not taken, albeit on time, these deficiencies in the system will continue to put a question mark on the readiness of the Nigerian government towards protecting IPRs, diminish investors’ confidence and reduce ease of doing business in the country. <br /> <br />


      Therefore, it would be of utmost importance for the Nigerian Government to take the necessary steps towards protecting IPRs in Nigeria by creating the necessary legal and administrative frameworks for implementation and enforcement of IPRs. 

       </p>,
    },
    {
      id: 9,
      title: 'NEW COMPANY LAW OF NIGERIA AND RECOGNITION OF WELL-KNOWN TRADEMARKS',
      image: '/image/Companies.jpg',
      date: '2022-08',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>Recently, Nigeria passed into law the Companies and Allied Matters Act, 2020 ("CAMA 2020") to replace the old 1990 Act. CAMA 2020 is the primary legislation governing the formation and management of companies in Nigeria. The new law made far reaching provisions easing doing business in the country.  <br /><br />

 

      One of the amendments, is the procedure for change of a Company name. Section 30 of the Companies and Allied Matters Act, 2020 in its entirety deals with change of company name, be it voluntarily or involuntarily.  Section 30 (3) deals with voluntary change of name while Section 30 (1) (d) deals with involuntary change of name. <br /> <br />
      
      
      The old law in Section 31 (4) vests the Corporate Affairs Commission, CAC, with the powers of changing a company name that is found to conflict with a prior existing trademark. This power is retained in the new law in section 30 (1) (d).  <br />  <br />
      
      
      However, Section 852(1)(d) of CAMA 2020 further expanded the scope of protection of trademarks. The section states that an applicant can object to a registered company name, limited liability partnership, limited partnership, business name or incorporated trustees on the ground that it is: <br />
      
      "(a) the same as a name associated with the applicant in which he has goodwill; or <br />
       (b) sufficiently similar to such a name that its use in Nigeria would be likely to mislead by suggesting a connection between the company, limited liability partnership, limited partnership, business name or incorporated trustee and the applicant”. <br />
      
      
      Flowing from above, a mandatory change can be initiated by the owner of a prior registered trademark or an Applicant that has a goodwill in Nigeria. This supports the argument that an owner of a well-known trademark not registered but has goodwill in Nigeria can apply to Corporate Affairs Commission, CAC, to mandate the change of a company’s name that conflicts with its trademark.    <br /><br />
      
        
      
      This new section recognizes the application of TRIPS Agreement and Article 6bis of the Paris convention on well-known trademarks in Nigeria. Nigeria been a signatory to these treaties, is obliged to enforce both treaties, but the treaties cannot be enforced as they have not been domesticated under Nigerian law.  Section 12 (1) of the Constitution of the Federal Republic of Nigeria, as amended, states that no treaty between the Federation and other country shall have the force of law except to the extent to which any such treaty has been enacted into law by the National Assembly. <br /> 
      
      
      Section 3 of the Trademarks Act of Nigeria further strengthens this position. It provides that no person shall be entitled to institute any proceeding to prevent, or to recover damages for, the infringement of an unregistered trademark; but nothing in this Act shall be taken to affect rights of action against any person for passing off goods as the goods of another person or the remedies in respect thereof.  <br /><br />
      
      
      <p className='font-extrabold'>Conclusion</p>
      
      A trademark symbolizes the goodwill garnered by the owner within a territory which the consuming public recognizes. A Proprietor of an unregistered trademark may be unable to object to the registration of a Company with similar or identical to its well-known mark because the current trademark law does not protect unregistered well-known trademarks. <br />  
      
      However, the CAC relying on the powers of section 852(1)(d) may mandate a change of company name although the trademark is not registered in Nigeria.  <br />
      
      The new section is indeed a daring provision, that may be hampered by the substantive trademark law and non-enforceability of both the Paris Convention and TRIPPS in Nigeria because of noncompliance with Section 12 of the Constitution.     </p>,
    },
    {
      id: 10,
      title: 'THE DIGITILIZATION OF TRADEMARK RECORDS, AN ANTICIPATORY EVOLVEMENT',
      image: '/image/Digit.png',
      date: '2022-08',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>
       <p className='font-extrabold'>Introduction</p> <br /><br />

The digitalization of the Nigerian Trademark Registry records has been an evolving journey. From the manual filing process to the online filing process of 2012 and the Industrial Property Automation System (IPAS) of 2014. These evolvements have been consistent in showing the eagerness for digitalization by the Registry. The manual system was occasioned by delays in processing applications and almost nonexistent record keeping. While the online system breached this gap and fast-tracked the filing process thereby creating a major overhaul. The question still bothers on the extent of this overhaul.  <br /><br />


<p className='font-extrabold'>Trademark Record/Database </p>

The first stage in processing a trademark application, search, is still conducted manually. Irrespective of filing an application online, the search must be conducted manually at the search room with index cards (paper card cut at the time of filing each trademark application in Nigeria). This process is not only mundane but has established a certain level of inconsistency over the years. As the search reports has a margin of error of about 5% because of human factor. <br />


The defect of manual search became pronounced, during the recent lockdown in Nigeria because of COVID 19 pandemic. Several trademark applications filed online could not be processed as searches could only be conducted manually.   Again, all other stages of processing the application are still conducted manually at the Registry. <br />


Also, pursuant to Section 20 (1) & (2) of the Nigerian Trademarks Act, a notice of opposition must be filed within two months of the proposed mark publication. Where there is no opposition, Applicants are then allowed to pay for sealing fees and proceed to register their marks. This process should ordinarily be seamless; however, the lacuna of the manual system sets in yet again. The confirmation of payment receipts and other opposition checks are still conducted manually by the Registry. This has caused major delays and backlogs in the unit. The situation is worsened by inadequate number of staff at the Opposition unit.  <br /> <br />


These facts above and many more government bureaucracy stall the processing of trademark application in Nigeria. <br />

 

<p className='font-extrabold'>The Way Forward</p> 

An attempt at complete digitalization of trademark records and processes in Nigeria commenced in October 2015 by the World Intellectual Property Organization (WIPO). In 2015, WIPO commenced capturing of data and information of manually filed trademarks. This process aided trademark maintenance, registration and recordals while reducing the need for manual file search. However, it is worthy to note that only about 70% of the previously filed/registered trademarks have been captured so far.  Most paper files of the manually filed trademarks were either lost, damaged or missing, therefore could not be captured.  <br />


In light of the above, there is an urgent need to fully automate the Registry records. The Registrar of Trademarks recently confirmed that the Honorable Minister for Industry, Trade, and Investment (The supervising Ministry of the Registry) has approved the full digitalization of the Registry in the 2021 Nigerian budget. <br />


The approval of this budget will positively enhance different segments of the Registry such as the modernization and acceleration of work process and service delivery, the increase in the credibility of documents issued by the Office, the facilitation of electronic searches, improve on the staff number and provide more assurance to parties that may be interested in investing in the Nigerian economy.
      </p>,
    },
    {
      id: 11,
      title: 'The New Online Trademark Filing Platform in Nigeria; More Questions Than Answers.',
      image: '/image/typing.png',
      date: '2022-08',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>The Federal High Court of Nigeria recently made a landmark judgement which should permanently resolve the conflicts between registered trademarks and company names in Nigeria.  <br /> <br />


      In 2019, the French multinational pharmaceutical company, Sanofi S.A. lodged a complaint at the Corporate Affairs Commission (CAC), demanding that three Nigerian companies Sanofi Integrated Services Limited, Sanofi Nigeria Enterprises Limited and Sanofi Nigerian Enterprise which incorporated its registered trademark, “Sanofi” into their company names, alter the names of their companies as the use SANOFI by the companies is an infringement of their existing Sanofi trademark. <br /> <br />
      
      
      The CAC issued a directive to the three companies to voluntarily change their names, however the companies failed to comply with this directive. As such, Sanofi S.A. instituted an action for trademark infringement at the Federal High Court. The presiding judge, Justice Omotosho upheld the directive of CAC, granted injunction and damages against the infringing companies for trademark infringement. <br />
      
      
      The judgement of the Federal High Court will undoubtedly put to bed the conflict between prior registered trademarks and company names in Nigeria. Most importantly, the judgement is in compliance with the provisions of the Companies and Allied Matters Act (CAMA), the principal legislation governing companies’ registrations in Nigeria. <br /> <br />
      
      
      Section 30(4) of the Act provides that
      
      “Nothing in this Act precludes the Commission from requiring a company to change its name if it discovers that such a name conflicts with an existing trade mark or business name registered in Nigeria prior to the registration of the company and the consent of the owner of the trade mark or business name was not obtained.” <br /><br />
      
      
      The provision of this section is clear and unambiguous. A trademark which was registered in Nigeria prior to the registration of a company name takes priority over the company name. The vested rights in the registered trademark are protected by this provision against all forms of unauthorized use by a third party. <br /><br />
      
      
      In addition, Section 852(1) of CAMA 2020 expanded the scope of protection of trademarks. The section states thus:
      
      “an applicant can object to a registered company name, limited liability partnership, limited partnership, business name or incorporated trustees on the ground that it is: <br /><br />
      
      "(a) the same as a name associated with the applicant in which he has goodwill; or <br />
      
       (b) sufficiently similar to such a name that its use in Nigeria would be likely to mislead by suggesting a connection between the company, limited liability partnership, limited partnership, business name or incorporated trustee and the applicant”. <br />
      
      (d) in the opinion of the Commission, would violate or conflict with any existing trademark or business name registered in Nigeria or body corporate formed under this Act unless the consent of the owner of the trade mark, business name or trustees of the body corporate has been obtained <br /> <br />
      
      
      From the section 852 (1), the application to the CAC for the alteration of company names that are in conflict with an existing trademark in Nigeria can be initiated by either:
      
      Owner of a prior registered trademark or
      
      An Applicant that has a goodwill to protect or
      
      the CAC.  
      
      
      Sections 30(4) and 852 (1) of CAMA are fundamental in ensuring that due diligence is exercised by individuals seeking to register a company or business in Nigeria to ensure that the names are not in conflict with an existing trademark.
      
      
      Finally, the judgement would boost the confidence of Investors and rights owners in the Nigerian judiciary, thereby increasing FDIs and economic growth of the country.  Also, it will encourage right owners to assert and enforce their legal rights in Nigeria and further strengthen the importance of trademark protection as a panacea of economic development in the  country.  </p>,
    },
    {
      id: 12,
      title: 'The Impact of the Covid-19 Lock down Enforcement on Trademarks Practice in Nigeria.',
      image: '/image/covid.png',
      date: '2022-08',
      content: <p className='text-[rgb(0,48,91)]'>

By Okechukwu Onyekanma and Kimi Onana <br /><br />

<p className='text-[rgb(0,48,91)] font-extrabold'>Introduction</p> <br />

The President of the Federal Republic of Nigeria on 30th March announced a lockdown in major cities due to Covid-19 pandemic. The order was further extended on 13 April 2020 for another 2 weeks and likely will be extended for a further 2 weeks. The Federal Capital Territory, Abuja being a major city and the hub of intellectual property practice in Nigeria has since been on total lock down. <br /> <br /><br />

<p className='text-[rgb(0,48,91)] font-extrabold'>State of Play</p> <br />

Nigeria, a developing country adopted the online filing system for trademarks and related matters in 2012. While still adopting and adjusting to this system, Applicants have found filing of trademarks difficult in this uncertain period as proper planning and preparative measures were not taken by the Registry prior to the lockdown. <br /> <br />


Although Applicants are still able to file applications of their trademarks online during this period, unfortunately this is where it ends as the applications do not make further progress after filing. The reason being that all other aspects of the process are still conducted manually at the Registry. As such, the applications remain unattended and will remain so until the lock down has ended. Leaving Applicants in limbo as to whether their applications will proceed further and be accepted by the Registry. <br /> <br /> 


Also, searches and other trademark prosecution are now impossible as these cannot be conducted online. It is inevitable that this lack of action  and failure to give further insight on these situations by the Registry will bring about further backlog in an already congested Registry. <br /> <br />


Trademarks opposition proceedings are also caught up. Rule 48 of the Nigeria Trademark Regulations provides that any person may file a notice of opposition within two months from the date of the publication of the trademarks Journal. The last journal was published on 28 February 2020. As such, persons who have interests to oppose any trademark registration have until 28 April 2020 to file notices of opposition. Filing of these notices can no longer be possible during the lockdown. Though, the Registry released a notice that all opposition deadlines are extended due to the lockdown. However, this creates another problem; can the Trademark Rules can be amended by a mere notice. This will be another source of controversy in post Covid -19 era for the Registry. <br /> <br />

<p className='text-[rgb(0,48,91)] font-extrabold'>Conclusion</p> <br /> <br />

Proprietors are still filing trademarks and other Intellectual property rights without knowing whether these applications will be accepted for registration. Thereby, leaving these applications vulnerable and without protection in Nigeria. <br /><br />



Also, the lockdown may cause a hitch on the first to file rule of Nigeria. As prior trademarks filed on an earlier date may lose priority to more recently filed trademark during examination. This will be an Examiner’s nightmare. Therefore, it has become expedient that the Registry takes steps to nip this situation in the bud and avoid the exposure of trademarks to abuse in the country. The pre online filing system era of trademarks in Nigeria was blighted by delay, backlogs, unaccountability, loss of applications and lack of proper records. <br /><br />

The Registry is yet to deal with the backlogs occasioned during the said era, compounding it further will be a little too much to handle. As such, the Registry should implement measures to ensure that trademark applications and prosecution are attended to albeit electronically during the lockdown to avoid chaos in post covid-19 era. <br /><br />


Okechukwu Onyekanma <br /><br />

Kimi Onana


      </p>
    },
    {
      id: 13,
      title: 'NIGERIA TRADEMARKS DEVELOPMENT: THE INAUGURATION OF A NEW TRIBUNAL...',
      image: '/image/gavel.png',
      date: '2022-07',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>

The recent facelift of the trade mark opposition tribunal in Nigeria has received significant recognition through the past weeks and is indeed a welcome development. Suffice it to say that with the new development comes more responsibilities and realistic efficiency. In this piece is a brief background of how the trademark opposition operates, the effects of the inauguration of a new tribunal and suggestions on how to keep the tribunal effective.  <br /><br />

<p className='text-[rgb(0,48,91)] font-extrabold'>Trademark Oppostiton in Nigeria</p> <br /> <br />

When a trademark passes the examination and acceptance stages which follow after an application is made to the Registry, it is advertised/published in the Nigerian Trademarks Journal. This advertisement opens a two months long period for opposition from the date of the advertisement. Opposition of trademarks is provided for in section 20 (1) & (2) of the Nigerian Trademarks Act which states that the grounds for opposition must be stated while filing a notice of opposition. <br /> <br />

The notice of the opposition is served on the applicant who has a period of one month to respond with a counter statement which is served on the opponent, after which both parties file statutory declarations. No further document is filed and parties at this point wait for a hearing date when they get to present their arguments before a tribunal.


<p className='text-[rgb(0,48,91)] font-extrabold'>The New Tribunal</p> <br /> <br />

On the 19th day of June 2019, the tribunal was reconstituted into four functional units to handle different opposition matters. The essence of this is to make opposition proceedings faster and bring an end to the issue of backlogs which has plagued the tribunal for the longest time. <br /><br />

A new tribunal room was also inaugurated as the former room was a far cry from what can be obtained in proper court room/tribunal settings. The new room is a great development in terms of structure and arrangement, proceedings are now conducted diligently and with more decorum, and there is a better filing/record system. Files and opposition matters are now assigned to different officers with the names of the officers registered on the assigned files. This is to ensure proper accountability and efficiency in the handling of matters at the tribunal. <br /><br />

<p className='text-[rgb(0,48,91)] font-extrabold'>The Way Forward?</p> <br /> <br />

With these new developments, it is the hope of all and sundry that there will be remarkable changes in the dispensation of opposition matters brought to the tribunal. However, there are some suggestions the opposition unit can put into consideration to achieve its aim. <br /><br />

One of the suggestions is for designated personnel to ensure that the whole process involved in the notice of opposition is swiftly attended to and parties are served timeously. As already stated above, oppositions arise from published journals as such where journals are promptly published, there will be no room for backlogs as oppositions arising from one publication can easily be treated, either completely or to a large extent, before a new publication. <br /> <br />

It is also important that the opposition unit keeps this same energy at all times as consistency will definitely help it achieve its aim





      </p>,
    },
    {
      id: 14,
      title: 'Ownership of a Trademark – The Kasea case',
      image: '/image/trade.png',
      date: '2022-07',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>

<p className='text-[rgb(0,48,91)] font-extrabold'>Uche Bishop Enterprises company limited & 5ors V Patrick Nwagu (Carrying on business under the name and style of VINELIGHT GLOBAL LINK & 2 ors. Judgement given on 22nd Day of November 2018.)</p> <br /> <br />

<p className='text-[rgb(0,48,91)] font-extrabold'>Background</p> <br /> <br />

Patrick Nwagu (VINELIGHT GLOBAL LINK) and Uche Bishop Enterprises are both importers of motorcycles and spares parts from Guangzhou Haojin Motor cycle Co. Ltd, a Chinese company and manufacturers of the KASEA brand of motorcycles and spare parts like Haojin, Stallion, Qingqi and so on. <br /><br />


VINELIGHT GLOBAL LINK registered the trademark, KASEA in class 12 in Nigeria without the consent of Guangzhou Haojin Motor cycle Co. Ltd. Subsequently, Uche Bishop Enterprises company limited and 5 ors applied for the registration of “HERO KASEA”, “SUPERIOR KASEA” AND “ROYAL KASEA”. Hence VINELIGHT GLOBAL LINK instituted an action of infringement against them. <br /><br />


While, in 2016 Guangzhou Haojin Motor cycle Co. Ltd, filed an application for the registration of the trademark, but their application was refused on the grounds that it is in conflict with the KASEA trademark registered by VINELIGHT GLOBAL LINK. It is important to note that Guangzhou Haojin Motor cycle Co. Ltd was not a party in this suit. <br /><br />


At the trial at the Federal High court, the plaintiff/1st respondent, VINELIGHT, sought an injunction restraining Uche Bishop Enterprises company limited from infringing, misrepresenting and passing-off on the Trademark KASEA. The Plaintiff also requested for a Delivery upon oath of all offensive products and general damages for infringement or passing-off of the plaintiffs registered mark. <br /><br />


During the trial, VINELIGHT admitted that the company is not a manufacturer but an importer of KASEA products. However, the company refused to reveal the source of the products. The Defendant/appellant’s, Uche Bishop Enterprises Company Limited also admitted to being importers of KASEA products, however they revealed the source of their KASEA products to be Guangzhou Haojin Motorcycle. They filed evidence of the SONCAP and Product Certificate issued after its conformity assessment by Guangzhou Haojin Motorcycle with Brand Name KASEA and KS Model numbers. <br /><br />


The trial court ruled in favour of the plaintiffs. The Trial judge held that the registration of the trademark KASEA by the plaintiff entitled him to the protection of his trademark and the use of same to the exclusion of the Appellants in line with Section 5(1) of the Trademarks Act of Nigeria (referred to as the Act). The court awarded damages of about USD60,000. <br /><br />

<p className='text-[rgb(0,48,91)] font-extrabold'>Appeal</p> <br /> <br />


The defendant/Appellant appealed the decision at the Court of Appeal.  Two issues were raised, whether the 1st Respondent had successfully proved that he was entitled to the use of KASEA trademark to the exclusion of the Appellants which entitles him to the reliefs sought and if the Learned Trial Judge ought to have awarded the 1st Responded the damages. <br /><br />


The Appellate court ruled in favour of the appellant holding that the 1st respondent had failed to prove that he was entitled to the use of the KASEA trademark to the exclusion of the Appellant, particularly as there was no proof that KASEA Trademark originated by him. <br /><br />


The Appellate court placed great weight on the Sections 7 of the Act, stating that although Section 5 of the act gives exclusive right to the registered owner, the exclusive right to the use of that trade mark in relation to those goods is subject to Section 7. The section provides that a proprietor will not be allowed to interfere with the registration of a Trademark by any person that has continuously used the trademark from a date prior to the registration date of the proprietor’s trademark in relation to those goods of the proprietor. The court cited the case of Virgin Enterprises Ltd v. Richday Beverages where it was held that the exception can be raised as proper defence. <br /><br />


Also, the Appeal court opined that both parties to the suit are not the true owners of the KASEA trademark as envisaged by section 18 of the Act which requires true inventors/proprietors of a mark to register the trademark with the intention of using it. The true owner was identified as Guangzhou Haojin Motorcycle, the manufacturers of KASEA products.  <br /><br />


Further the Appeal Court stated that the registration of KASEA by the 1st respondent and 1st appellant were invalid as Guangzhou Haojin Motorcycle did not authorize the parties to register the KASEA trademark. <br /><br />


This judgement may have altered ‘the first to register rule’ in Nigeria.  As it clearly protects brand owners from scrupulous business partners despite being “second in law” to register. <br /><br />


This is indeed good news for brand owners as the opinion of the judge confirms that in some cases, unregistered trademarks can be protected by statute regardless of the provisions of section 3 of the Act which states in part, that the infringement of unregistered trademarks can only be protected by an action in passing off. <br /><br />


Finally, it is now established that the source of a trademark may determine the validity and ownership of the trademark in Nigeria despite the first to register rule.
      </p>,
    },
    {
      id: 15,
      title: 'Growth in IP awareness in Nigeria: comedian takes on Friesland Foodsand UACN Foods',
      image: '/image/flag.avif',
      date: '2022-07',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>

<p className='text-[rgb(0,48,91)] font-extrabold'>By Nkechi Echeanyanwu (Okey IP)</p> <br /> <br />

Nigerian comedian Oga Sabinus owns the registered trademark SOMETHING HOOGE in Class 36 <br /><br />

The comedian’s management agency filed legal notices against Friesland Foods for using the phrase ‘something hooge’ toadvertise its milk product <br /><br />

It also demanded the sum of N100 million from UACN Foods for using the animated image of the comedian in an advertfor a sausage roll <br /><br />

<p className='text-[rgb(0,48,91)] font-extrabold'>Background</p> <br /> <br />

IP rights protection aims to protect the limited right to exclude others from using original works of authorship, inventions ortrademarks, among others, without the permission of the owner. It also encourages innovators to invest time and money inintellectual property with a view to gaining financial benefits. Further, it creates a safe space for creative expression to thrivewithout third-party interference. <br /><br />


While most of Nigeria’s population lacks a true understanding of how IP rights can promote innovation in the economic sector,IP rights awareness has recently grown and gained traction in Nigeria. <br /><br />


<p className='text-[rgb(0,48,91)] font-extrabold'>Sabinus v Friesland Foods and UACN Foods</p> <br />

Recent cases involving Nigerian comedian and skit maker Chukwuemeka Ejekwu, popularly known as Oga Sabinus (an AfricaMagic Viewers' Choice Awards winner), are instructive in this respect. <br /><br />


In 2021 Sabinus filed and registered his trademark SOMETHING HOOGE (Application No NG/TM/O/2021/48316) in Class 36.Recently, the comedian’s management agency filed legal notices against Friesland Foods Wamco Nigeria Plc, the producers ofthe popular evaporated Peak milk, for the unauthorised use of the comedian’s trademark. Friesland Foods, in an Instagram postdated 24 May 2022, had used the phrase ‘something hooge’ to advertise its Peak milk product. <br /><br />


The comedian’s agency also demanded the sum of N100 million (approximately $240,000) from United African Company ofNigeria Foods (UACN Foods) for using the animated image of the comedian striking a pose in an advert for the Gala sausageroll. The images of both unauthorised uses are reproduced below: <br /><br />

<Image src="/image/sabi.avif" alt="sabinus" width={900} height={400} /> <br /><br />

It is accepted that the phrase ‘something hooge’ was filed and registered by the comedian. As such, he is entitled to theprotection afforded to a trademark proprietor. However, a case of infringement may not have been strictly established by theuse of the trademark by Friesland Foods for an online advertisement, which was outside of the protection of Class 36. Class 36covers “insurance; financial services; real estate agency services; building society services; banking; stockbroking; financialservices provided via the Internet; issuing of tokens of value in relation to bonus and loyalty schemes; provision of financialinformation”, while Class 35 covers “advertisements” and similar matters. <br /><br />


Further, the question remained as to whether Sabinus could claim damages based on dilution of his trademark, as the phrase“something hooge”, prior to its registration by the comedian, had been used in popular ‘street language’ and could be classifiedas generic or commonplace. Common words and phrases can be trademarked if the applicant can demonstrate that the phrasehas acquired a secondary meaning distinct from its original meaning. That secondary meaning must identify a particular good or service. <br /><br />


In respect of the UACN Foods case, although the animated image of Sabinus is yet to be registered as a trademark, the lattercan still bring an action under the common law principle of passing off, which is codified in Section 3 of the Trademark Act (rightof an unregistered trademark owner to sue for passing off).
<br></br>

<p className='text-[rgb(0,48,91)] font-extrabold'>Comment</p> <br /> <br />

These cases have drawn attention to, and increased the visibility of, the importance of IP rights protection in Nigeria. Celebritiesand other business entities are now more interested in protecting their various brands. As such, there has been a recent spike inIP applications in Nigeria. Hopefully, this interest will be sustained and further encouraged by the government by making theprocessing of applications as seamless as possible.

      </p>,
    },
    {
      id: 16,
      title: 'INTRODUCTION OF PRODUCT AUTHENTICATION MARK (PAM)',
      image: '/image/SON.avif',
      date: '2018-09',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>The standards organization of Nigeria has introduced PRODUCT AUTHENTICATION MARK in line with Section 5 of the SON Act No. 14 of 2015 and to ensure the authenticity and traceability of products certified to have met the requirements of the relevant Nigeria Industrial Standards or other approved specifications in Nigeria. <br /><br />


The Mark would appear on all imported products into Nigeria from the third quarter of 2018. <br /><br />

Importers of SONCAP Certified products shall apply for issuance of PAM by completing an application form online, on SON website: <a href="https://www.son.gov.ng" target="_blank" rel="noopener noreferrer">www.son.gov.ng</a>.</p>,
    },
    {
      id: 17,
      title: 'NIGERIA, CHINA TO BLACKLIST, PROSECUTE 7 IMPORTERS OF SUBSTANDARD, LIFE ENDANGERING PRODUCTS',
      image: '/image/NIG-CHI.avif',
      date: '2018-09',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>Seven companies importing substandard and life-endangering products into Nigeria from China are set to be blacklisted and their promoters prosecuted in both countries as the fight against dumping into Nigeria takes a new dimension. The exercise, according to the Director General, Standards Organisation of Nigeria (SON), Mr. Osita Aboloma would be a continuous one. <br /><br />


The companies are among those identified to have persistently circumvented Nigeria’s import regime by their deliberate and consistent refusal to comply with the Standards Organisation of Nigeria off-shore Conformity Assessment Programme (SONCAP).</p>,
    },
    {
      id: 18,
      title: 'NAFDAC’s STATEMENT ON THE STATUS OF THE MOBILE AUTHENTICATION SERVICE',
      image: '/image/NAFDAC.avif',
      date: '2018-09',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>Following the concerns of the House of Representatives about ensuring that the Mobile Authentication Service (MAS) Scheme is reactivated and applied to all drugs purchased in the country, the National Agency for Food and Drugs Administration Control (NAFDAC) in partnership with Clinton Health Access Initiative (CHAI) have presented guidelines to strengthen the implementation and enforcement of the MAS. <br /><br />


Professor Moji Adeyeye, the Director-General, NAFDAC has said that the MAS scheme is one of the anti-counterfeiting strategies to detect substandard and falsified medical products imported or manufactured in the country, these guidelines would strengthen its implementation and enforcement by stakeholders in Nigeria. While presenting these guidelines, she said some challenges were encountered during the process of implementation which include, absence of formal Memorandum of Understanding with service providers, reporting template and the guidelines for the procurements of the MAS scheme, a steering committee was reconstituted to address the issues. <br /><br />


Prof. Adeyeye also noted that the reporting template was developed and circulated to MAS service providers to enhance reporting of its activities, adding that the guidelines published with the support of CHAI spells out the roles and responsibilities of stakeholders, especially holders of Certificate of Registration, the scheme’s service providers and NAFDAC. MAS provides a platform to empower over 167 million subscribers on the Nigerian mobile network to verify the authenticity of antimalarials, antibiotics and other medicines currently on the scheme. <br /><br />


Dr. Chizoba Fashana, representing the country manager of CHAI said the problem of the implantation and regulatory framework of the MAS project is the late review of the scheme, adding that the organization is working with stakeholders to support the development of the guidelines and its structure in order to reduce Nigeria’s underperformance in drugs.</p>,
    },
    {
      id: 19,
      title: 'Getting tough on counterfeiters in Nigeria',
      image: '/image/Drugs.avif',
      date: '2017-08',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>The National Agency for Food and Drug Administration and Control (NAFDAC*) has recently submitted a Bill to the Nigerian National Assembly seeking a life jail term for counterfeiters found to be dealing in counterfeit regulated products in Nigeria. This NAFDAC Bill is to amend the current Counterfeit and Fake Drugs and Unwholesome Processed Foods (Miscellaneous Provisions) Act by introducing the death penalty for counterfeiting offences, a whistle blowing policy and provisions on compensation and punishment where false information is provided to NAFDAC. <br /><br />


This is a promising development and is on the back of a recent raid by NAFDAC where they arrested and prosecuted five people for alleged illegal production and distribution of counterfeit regulated products including codeine, cough syrup and powdered milk in Nigeria. <br /><br />


Although it is not expected that this Bill will reach legislation soon as the passing of Bills typically takes many years in Nigeria, it does give some insight into how NAFDAC currently view counterfeiters. <br /><br />


Our services include full registration of products, as currently set out by NAFDAC. Information on NAFDAC product categories and the registration procedure is available here. We also offer enforcement services in line with NAFDAC leglislation. <br /><br />


For more information on NAFDAC or assistance with product registration in Nigeria, please contact us. <br /><br />


*NAFDAC is a Nigerian federal agency under the Federal Ministry of Health. It regulates and controls the manufacture, importation, exportation, advertisement, distribution, sale and use of food, drugs, cosmetics, medical devices, chemicals and packaged water.</p>,
    },
    {
      id: 20,
      title: 'COSON v Etisalat - copyright infringement',
      image: '/image/Copyr.avif',
      date: '2017-07',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>COSON has filed a lawsuit of NGN12B against Emerging Markets Telecommunications Services Ltd, the parent company of ETISALAT at the Federal High Court, Lagos.  <br /><br />


In the suit no. FHC/L/C3/363/17, COSON is asking the court for four different declarations of copyright infringement against ETISALAT flagship centres within Nigeria and for Etisalat to deliver and forfeit to COSON all infringing copies of the Plaintiff. <br /><br />


The suit comes up after an earlier 11 billion Nigerian Naira (35 million US Dollar) suit filed in 2016 by COSON against ETISALAT was struck out.</p>,
    },
    {
      id: 21,
      title: 'Okafor’s Law movie - copyright infringed',
      image: '/image/tony.avif',
      date: '2017-07',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>

        <p className='text-[rgb(0,48,91)] font-extrabold'>Raconteaur Productions Limited v Dioni Visions Entertainment, Omoni Oboli & Anor “Okafor’s Law” Movie premiere - Copyright Infringement (motion picture)</p> <br /> <br />

        A Federal High Court in Lagos on 24 March 2017 issued an interim order, suspending the release and launch of the movie "Okafor’s Law". The court also issued an Anton Piller order directing the seizure of alleged infringing materials. The movie was produced and directed by a popular Nollywood Producer, Omoni Oboli. <br /><br />


The suit was brought by Raconteaur Productions Limited on behalf of one, Jude Idada, a Canada-based writer, who claimed that Oboli’s movie was developed from his work without giving him credit or remuneration.  <br /><br />


The movie which was billed for premiere on March 24 2017, in Lagos, was cancelled as a result of the court order. However, on 30 March, the court vacated the interim order based on a motion on notice by the defendants. It therefore set the hearing for the substantive suit to early April.


      </p>,
    },
    {
      id: 22,
      title: 'Confusion over QLINKs rightful Owner',
      image: '/image/secga.avif',
      date: '2017-05',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>

<p className='text-[rgb(0,48,91)] font-extrabold'>Facts</p> <br /> <br />

In 2002 Ocean Waves Corporation Limited applied for the registration in Class 9 in Nigeria of the trademark QLINK. The company has been using the mark since 1996. The application was accepted and subsequently advertised in the October 2002 Trademark Journal. <br /><br />


FAPA Company Limited opposed the application and subsequently applied for registration of the trademark in the same class. The registry advised FAPA to seek redress in the Federal High Court based on Section 13(3) of the Trademarks Act. <br /><br />


Section 13(3) states that where separate applications are made by different persons to be registered in respect of the same goods or description of goods, as proprietors of trademarks that are identical to or closely resemble each other, the registrar may refuse to register any of them until their rights have been determined by the court or settled by agreement in a manner approved by either the courts or the registrar. <br /><br />


Based on Section 13(3), FAPA sued Ocean Waves in the Federal High Court, claiming proprietorship of the trademark. The matter was struck out for being premature. FAPA appealed to the Court of Appeal, but eventually withdrew the appeal voluntarily. <br /><br />


In 2014 Ocean Waves brought a suit – Ocean Waves v Registrar of Trademarks – to the court claiming ownership of QLINK in Class 9. It also sought a declaratory order demanding, among other things, that its name be entered in the register as owner of the trademark. The reliefs were granted and Ocean Waves was duly entered in the register as proprietor of the trademark. <br /><br />


As a result, FAPA filed a fresh action against Ocean Waves and the registrar of trademarks, asking the court to overturn the orders. FAPA argued that the judgment was null on the grounds that it breached its constitutional rights to a fair hearing, as the judgment directly and adversely affected its interests. <br /><br />


The trial judge declined jurisdiction on the grounds that it had no powers to review or set aside the ruling of the court of coordinate jurisdiction. Dismissing the suit, the judge upheld the preliminary objection filed by Ocean Waves in this respect. FAPA therefore appealed to the Court of Appeal.  <br /><br />

 

The main issues were: <br />

whether the trial judge was right when he entertained the preliminary objection; and   <br /><br />

whether the trial judge was right when he held that he had no jurisdiction to review the judgment of another court of coordinate jurisdiction. <br /><br />


<p className='text-[rgb(0,48,91)] font-extrabold'>Decision</p> <br /> <br />

The Court of Appeal held that since the question of jurisdiction was not a mere irregularity, but relied on the competence of the court, the trial court was right in entertaining the preliminary objection because a preliminary objection regarding jurisdiction and issues of law can be raised at any stage or for the first time on appeal. <br /><br />


A judge cannot sit or review an appeal regarding the decision of another judge of coordinate jurisdiction, but can set aside a decision of another judge where it is null and void. <br /><br />


The decision was referred to the Federal High Court for a new trial. <br /><br />

<p className='text-[rgb(0,48,91)] font-extrabold'>Comment</p> <br /> <br />

It should not always be expected that a fair hearing is the foundation of every case. Where this foundation is not met, any derivative decision is likely to fail. However, in FAPA the appeal was voluntarily withdrawn. It may be implied that the company relinquished its interest in the trademark. As a result, FAPA’s interest and rights over the trademark were accepted. <br /><br />


The court in Ocean Waves may have acted properly when it refused to treat FAPA as an interested party whose interest would be directly and adversely affected by the judgment. Following the decision, FAPA’s interest in the trademark ceased. <br /><br />


The confusion regarding QLINK’s rightful owner is based around Nigeria’s first-to-file rule. Brand owners seeking to rely on trademark registration in Nigeria must be aware that Nigeria follows the first-to-file rule not only for patents, but trademarks as well. <br /><br />


The rule means that the first person to apply for and register a trademark automatically acquires title over the mark and priority over any other person who has been using the marks before its registration, irrespective of whether the mark is well known and has acquired a reputation or goodwill through prolonged use. This rule was applied in Intel Corporation v Dusayo Investment (NIG) Ltd and Nabisco Inc v Allied Biscuits Company Limited. <br /><br />


It is imperative that brand owners seek registration in Nigeria as a priority when preparing or planning to enter the market, especially if they wish to avoid losing their rights. <br /><br />


The legal regime regarding trademarks and other IP laws in Nigeria must be amended to bring them into line with international standards. Nigeria’s existing trademark law was enacted in 1965, having been copied from the UK Trademarks Act 1938. The United Kingdom has since enacted a new law, yet trademark rights in Nigeria are still governed by a law conceived in 1938, making it obsolete. This has created numerous loopholes and instigated many disputes regarding the protection of IP rights in Nigeria. <br /><br />


Written for and first published by World Trademark Review, May 2017



      </p>,
    },
    {
      id: 23,
      title: 'New 2017 Nigerian Trade Mark Journal',
      image: '/image/journal.avif',
      date: '2017-05',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>The Trademark Registry in Nigeria has released a new trademark journal, dated 2nd May 2017. The Journal is titled Vol 1, No. 1 and is the first journal to be published in over a year, the last journal was published in March 2016. <br /><br />


There are four thousand (4,000) trade mark applications listed in the hard copy, all of which were filed through the manual filing system IPAS. These applications filed between 2012 and 2015. Currently, there is no information from the Registry as to why this journal is only advertising applications filed through the IPAS system or if a separate journal for e-filings will be published in the near future. <br /><br />


There is a considerable backlog at the Nigerian Registry which released its journals, at best, only annually. While approximately 20,000 trade mark applications are filed annually in Nigeria, there are approximately 30,000 applications in which have been filed and which have not yet been published. It is vital that that Registry publishes more journals this year to cater for the backlog of applications still awaiting publication. <br /><br />


Please email Okey IP for more information on the recently released journal.</p>,
    },
    {
      id: 24,
      title: 'IP in Nigeria: Developments from the last year',
      image: '/image/stats.avif',
      date: '2017-03',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>
        
<p className='text-[rgb(0,48,91)] font-extrabold'>IP Filing Statistics from the Nigerian Registry for the full year of 2016</p> <br /> <br />

 

Patent applications:   908 <br /><br />

Trade mark applications:   19,362 <br /><br />

  

60% of trade marks and 55% of patent applications were filed using the IPAS (manual filing system) while 40% and 45% were filed online via the e-Filing system. A significant increase from 2015, where only 17% and 34% (respectively) were filed via IPAS. Demand for patent protection is increasing - Shell, Chevron, Glaxo, Unilever, Novartis and Pfizer are leading patent filers in Nigeria.


<p className='text-[rgb(0,48,91)] font-extrabold'>Trademark, Patent and Design Registry</p> <br /> <br />

A leadership tussle at the Registry in the middle of the year caused much disruption. Mr. Williams Amuga had been appointed as the acting Registrar in 2015. However, in June this year, Mrs. Adebola Adegoke from the Federal Ministry of Justice was appointed as the substantive Registrar. This was met with concern from the trade union in the Ministry of Trade and Investment who mobilized its members and resisted the appointment. Eventually, Amuga was re-appointed and is still acting. <br /><br />

Only one trade mark journal was published in 2016, which caused a severe backlog of pending applications. <br /><br />


<p className='text-[rgb(0,48,91)] font-extrabold'>Nigeria Copyright Commission ('NCC') Enforcement Actions</p> <br /> <br />

The NCC was very active in 2016. It conducted various raids in different parts of the country.  During the raids, pirated books and materials worth several millions of US dollars were confiscated. <br />

The NCC also shut down various pirates transmitting illegal signals of satellite channels, mainly in the southern parts of the country. This resulted in 12 new cases by the NCC. <br />


Mobile communication giant in Nigeria, MTN, was involved in many high profile copyright cases. In one case, MTN paid an undisclosed amount as compensation to a Nigerian artist for unauthorized use of his sound recording as a ring back tune.  MTN reached a settlement after the NCC instituted a criminal action against the company. Regardless of the settlement the commission has continued to pursue criminal prosecution against the company. <br /><br />


<p className='text-[rgb(0,48,91)] font-extrabold'>Notable IP Cases in Nigeria - Pending Cases </p> <br /> <br />



1. Mi-fone International DMCC v. Xiaomi Inc. – trade mark infringement.  <br /><br />

2. Liberty Williams v. MTN Nigeria Communications Limited – copyright infringement.  <br /><br />

3. Copyright Society of Nigeria (COSON) v. MTN - copyright infringement on musical works.  <br /><br />

4. Musical Copyright Society of Nigeria LTD/GTE (MCSN) v. Nigerian Copyright Commission.  <br /><br />

5. Temitope Akinyemi v. The Sun Publishing Limited - copyright infringement.  <br /><br />

6. Copyright Society of Nigeria v. Federal Radio Corporation of Nigeria - account for royalties.  <br /><br />

7. Rolling Innovations and Investment Limited & Anor. v. Ecobank Nigeria Limited-breach of confidentiality. <br /><br />


<p className='text-[rgb(0,48,91)] font-extrabold'>IP Bills in Parliament: The Copyright Bill and IPCOM  </p> <br /> <br />

Copyright Bill - The Bill has been withdrawn for further consultation. <br /><br />
   

IPCOM Bill - Passed its second reading in Parliament on 19 January 2017. This is a major development and takes us one step further to the long awaited Bill becoming law in Nigeria.  </p>,
    },
    {
      id: 25,
      title: 'Nigerias acting president works to boost economy',
      image: '/image/handshake.avif',
      date: '2017-03',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>In the absence of President Buhari, Osinbajo has shown himself as a modern day leader.  His leadership style and crisis management has been totally different from his boss. <br /><br />

 

When Nigerians took to the streets to vent their frustrations in the face of economic hardship, Osinbajo responded that the people were exercising their constitutional rights.  Instead of implementing the existing protocol of cracking down opposition. <br /><br />


When the labour leaders protested against bad working conditions, Osinbajo visited them and talked to them. A different approach from the substantive president. <br /><br />


Osinbajo has visited the Niger Delta, Nigeria’s restive oil region, where he’s been saying the right things. He reprimanded the locals for vandalising oil installations on the one hand and on the other, reminded them that they are stakeholders in the Nigerian project - why destroy what is essentially yours? <br /><br />


Osibanjo has shown that he is a diplomat, while the substantive president is more of an enforcer. This posture has enabled the Nigerian Naira to appreciate against the US Dollar in the last week.</p>,
    },
    {
      id: 26,
      title: 'First Come, First Serve in Nigeria',
      image: '/image/jaz.avif',
      date: '2017-01',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>
        
        Global brands having acquired the major success in the western and Asian markets are now focusing their sights on Africa. Africa's steady growth in urbanisation figures and rapidly expanding middle class makes its retail market an attractive investment opportunity to brands looking to expand their client bases. A 2014 report by GEOPoll states that Africa is home to 100,000 dollar millionaires, an increase in 7.4% over last year, moreover, the number of Nigerian Millionaires is expected to grow by 47% over the next four years. <br /><br />

        In 2015 Nigeria reached a pinnacle point being Africa’s largest economy by gross domestic product (GDP), being the result of contributing factors as earlier explained. To understand this financial independence and the avenues all leading to one common goal, we breaking down this flourishing country into sectors: Manufacturing, Mining, Pharmaceutical, Chemical, Biotech, to name a few. Nigeria contributes to the electronics & software sector firstly by having the most  mobile users in Africa by far (167 million, followed by Egypt with 92 million), as well as providing international connectivity with the SAT-3/WASC fiber optic submarine cable (CIA Factbook). Africa’s oil mining sector is mainly headed by Nigeria, whilst 65% of this country’s electricity is from fossil fuels and 33% is from hydroelectric plants.  These powerful solutions are an indication of strength in infrastructure, local government investments, and international partnerships. <br /><br />


This surge in the growing middle class along with recent technological advances, cheaper shipping costs and the internet has meant that Africans have been exposed to and are demanding for the expansion of retail the options available locally and embracing international brands. <br /><br />


Africans exposure to international brands has made it easier for big brands such as fast food chains KFC and Dominos Pizza to move into the African Market as the goodwill and a well established reputation exists before they even enter the market. While banking on a brands reputation preceding them is an incentive to taking the chance and moving into the African market, a great threat lie’s at the heart of Africa’s largest economy Nigeria. Brand owners seeking to rely on trade mark registration in Nigeria must be aware that Nigeria follows the first to file rule not only for patents but applies it to trade marks as well. <br /><br />


The first to file rule means that the first person to apply to and successfully registers an IP right automatically acquires not only title over the said trade mark but priority over any other person who has been using that trade mark prior to the registration of that mark, irrespective of whether the mark is a well known mark, has acquired a reputation or goodwill through use of the mark for many years. <br /><br />


Nigeria has a particularly strict application of the “first-to-file” rule, add to that the little to no recognition of common law rights (for example rights acquired through use), regardless of whether you have built up a reputation, the loyal clientele, the emotional attachment to your differentiated service or goods and the situation becomes quite dire.  What is even more discouraging, is that this strict application is backed by judicial precedent such as this examples below. <br /><br />


In the case of Intel Corporation V Dusayo Investment (NIG) Ltd. & Registrar of Trademarks, 2006, The Federal High Court Held that Intel cannot register its famous trademark in the same class (09) as the defendants since the defendants filed and registered the trademark before them in Nigeria.  Same decision was reached in the older case of Nabisco Inc V Allied Biscuits Company Limited 1998. The trademark in dispute was the well-known mark “RITZ and Device” in class 30 between a Nigerian company and a multinational. The Registrar of trademarks held that since the Nigerian company applied and registered the said trademark before the multinational, the application of the multinational must be refused. The Supreme Court upheld the Registrars decision. <br /><br />


Taking in the current state of affairs in Nigeria, it is imperative that brand owners to seek registration in Nigeria as priority when preparing and/or planning to enter into the market especially in view to avoid losing their rights in this lucrative market. <br /><br />


      </p>,
    },
    {
      id: 27,
      title: 'Winning with Global Innovation in 2016',
      image: '/image/global.avif',
      date: '2016-10',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>

      The Global Innovation Index 2016 was released in August. Co-published by WIPO, the Index provides an annual ranking of the innovation capabilities and performance of 128 countries and economies. <br /><br />


Nigeria ranked number 114, climbing 14 places from the 2015 results. <br /><br />


We see a positive outcome for Nigeria (and the rest of the African countries), as increasing levels of R&D boost the country’s economy. For investors, this highlights the importance of technology and science in an economy. It also links directly to what supports long term economic growth. <br /><br />


Lagos Minister of Science and Technology, Mr Ogbonnaya Onu said “I want to say this that no nation has been great without science and technology. Nigeria is the largest country in Africa with the largest number of black people and we have over the years not paid sufficient attention to science and technology.”  <br /><br />

 

Sources: Vanguard, Nigeria, World Intellectual Property Organisation (WIPO), The Global Innovation Index (GII) 

      </p>,
    },
    {
      id: 28,
      title: 'Recurring issues and delays at the Trademark Registry - why stakeholder confidence is being eroded',
      image: '/image/flag.png',
      date: '2024-02-19',
      content: <p className='text-[rgb(0,48,91)] font-extralight'>

       .  The second online fiing platform introduced in 2021 created some challenges that have remained unresolved <br /><br />
. A major concern is the validity of trademarks that have expired and cannot be renewed on the platform <br /><br />
. There is a huge backlog of recordal applications filed since 2021 <br /><br />

Ever since the online system for filing trademark, patent and design applications was introduced in Nigeria in 2012, there has
been a plethora of issues and challenges associated with the system. <br /><br />
In 2021 the Trademark Registry informed IP stakeholders in Nigeria of the shutdown of the old online filing platform and the
introduction of a new one. The new platform was meant to be an improvement of the former platform to ease filings and other
maintenance applications. However, instead of bringing improvements, the new platform has created headaches for users and
has been operationally worse than the old platform. These challenges have continued unresolved, thus upsetting the entire
registration process for IP rights in Nigeria - which could potentially create some legal issues for the continued validity of these
rights. <br /><br />

<p className='text-[rgb(0,48,91)] font-extrabold'>Recurrent Issues  </p> <br /> <br />

Some of the main issues are detailed below: <br /><br />
Inaccessibility of the old filing system - it has become impossible to access information and trademark applications on the old
filing platform, as the platform has been unresponsive for close to a year. This has delayed the examination of applications filed
on the platform since 2021 and rendered applications filed since the introduction of the online system in 2012 up to 2021
inaccessible. <br /> <br />
Consolidation of the old and new platforms - the inability to consolidate/merge the platforms has caused delays in filing
trademark renewals and other maintenance requests for applications filed on the old platform. The major concern is the validity
of the trademarks as, in most cases, their term has expired. <br /><br />
Irreversibility of refusal decisions - it is impossible to reverse the refusal of a trademark after a successful office action/appeal.
The examiners and other of ofcers at the registry are also affected to the extent that, once an application has been examined, the
application cannot be recalled or accessed for review by the examiner. <br /><br />
Inability to file recordals - the filing platform has no provision for the filing of recordal applications, including assignments and
mergers. As such, there is a huge backlog of recordal applications filed since 2021 that cannot be filed or recorded at the
registry. <br /><br />
Additional issues that have remained unresolved are: <br /><br />
poor record keeping at the registry; <br /><br />
protracted opposition proceedings; and <br /><br />
a continued reliance on manual searches. <br /><br />

<p className='text-[rgb(0,48,91)] font-extrabold'>Comment  </p> <br /> <br />

It is crucial that the registry take some major steps to regain the confidence of stakeholders. <br /><br />
Firstly, adequate provisions should be made for the electronic filing system. This would help with filing recordals, accessing files
and conducting preliminary searches, thus avoiding unnecessary delays. <br /><br />
Secondly, the trademark registry should digitalise all the physical files, converting hard copies of documents into computer-
readable formats. This would help to ensure that, where a physical file is lost, damaged or missing, the trademark owner’s
rights are not jeopardised. <br /><br />
Finally, the confidence of stakeholders that their rights are being protected in Nigeria is gradually being eroded, as the legal
status of their marks is being questioned - especially the status of applications filed since 2021 - and there is uncertainty as to
the validity of trademarks that have expired and cannot be renewed on the platform. <br /><br />
There is thus an urgent need to address the issues outlined above to regain the confidence of stakeholders.





      </p>
    },  
  ]);

  // Generate archive from publications
  const [archive] = useState(() => {
    const counts = publications.reduce((acc, post) => {
      const month = new Date(post.date).toLocaleString('default', { month: 'long', year: 'numeric' });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});
    
    return Object.entries(counts).map(([month, count]) => ({
      month,
      count,
      date: new Date(month)
    })).sort((a, b) => b.date - a.date);
  });

  // Filter publications based on selected month
  const filteredPublications = selectedMonth
    ? publications.filter(post => {
        const postMonth = new Date(post.date).toLocaleString('default', { month: 'long', year: 'numeric' });
        return postMonth === selectedMonth;
      })
    : publications;

  // Pagination calculations 
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const paginatedPublications = filteredPublications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to first page when filter changes 
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMonth]);

  // Comment functionality 
  const handleAddComment = (postId) => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        text: commentText,
        author: 'You',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newComment]
      }));
      setCommentText('');
    }
  };

  const handleDeleteComment = (postId, commentId) => {
    setComments(prev => ({
      ...prev,
      [postId]: prev[postId].filter(c => c.id !== commentId)
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            <AnimatePresence mode='wait'>
              {paginatedPublications.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-blue-50 rounded-2xl shadow-xl overflow-hidden text-justify"
                >
                  <div 
                    className="cursor-pointer" 
                    onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                  >
                    <div className="relative h-128 bg-black/5">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-fit"
                        sizes="(max-width: 768px) 100vw, 100vw"
                        onError={(e) => {
                          // Hide the image element if it fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[rgb(0,48,91)] mb-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span className="text-sm">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h2 className="text-2xl font-extralight text-[rgb(0,48,91)]">{post.title}</h2>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedPost === post.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-black/10"
                      >
                        <div className="p-6 space-y-6">
                          <p className="text-black/80 leading-relaxed">{post.content}</p>
                          
                          {/* Comments Section  */}
                          <div className="space-y-6">
                            <div className="flex items-center gap-2 text-black">
                              <ChatBubbleLeftIcon className="h-5 w-5" />
                              <h3 className="font-medium">Comments ({comments[post.id]?.length || 0})</h3>
                            </div>

                            <div className="space-y-4">
                              {comments[post.id]?.map(comment => (
                                <div key={comment.id} className="flex gap-3 group">
                                  <div className="flex-1 bg-black/5 rounded-xl p-4">
                                    <div className="flex justify-between items-start mb-2">
                                      <span className="font-medium text-sm text-black">{comment.author}</span>
                                      <span className="text-black/50 text-xs">{comment.timestamp}</span>
                                    </div>
                                    <p className="text-black/80">{comment.text}</p>
                                  </div>
                                  <button
                                    onClick={() => handleDeleteComment(post.id, comment.id)}
                                    className="opacity-0 group-hover:opacity-100 text-red-500 transition-opacity"
                                  >
                                    <TrashIcon className="h-5 w-5" />
                                  </button>
                                </div>
                              ))}
                            </div>

                            <div className="flex gap-4">
                              <input
                                type="text"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                                placeholder="Add a comment..."
                                className="flex-1 rounded-xl border border-black/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <button
                                onClick={() => handleAddComment(post.id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-blue-50 text-[rgb(0,48,91)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-100"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page 
                        ? 'bg-[rgb(0,48,91)] text-white' 
                        : 'bg-blue-50 text-[rgb(0,48,91)] hover:bg-blue-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-blue-50 text-[rgb(0,48,91)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-100"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Archive Sidebar */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-black">Archive</h3>
                {selectedMonth && (
                  <button
                    onClick={() => setSelectedMonth(null)}
                    className="text-blue-500 text-sm flex items-center gap-1 hover:text-blue-600"
                  >
                    <ArrowUturnLeftIcon className="h-4 w-4" />
                    Clear Filter
                  </button>
                )}
              </div>
              <div className="space-y-4">
                {archive.map((item) => (
                  <button
                    key={item.month}
                    onClick={() => setSelectedMonth(selectedMonth === item.month ? null : item.month)}
                    className={`w-full text-left text-black flex justify-between items-center p-3 rounded-xl transition-colors ${
                      selectedMonth === item.month
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-black/5'
                    }`}
                  >
                    <span>{item.month}</span>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      selectedMonth === item.month
                        ? 'bg-white/20'
                        : 'bg-black/5 text-black/80'
                    }`}>
                      {item.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsClient;
