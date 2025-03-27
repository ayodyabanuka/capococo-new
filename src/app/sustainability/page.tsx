'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Sustainability = () => {
  return (
    <div className=' mx-4 lg:mx-10 overflow-hidden'>
      <div className="flex flex-col gap-7 my-10 rounded-4xl h-full lg:h-[70vh] justify-center items-center px-0 lg:px-16 bg-[url('/sustainabilityback.png')] bg-center bg-cover">
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col items-center text-center gap-5 py-32'
        >
          <div className='text-5xl font-extrabold text-[#C1903C]'>
            Embracing Rural Roots
          </div>
          <div className='font-bold text-xl md:text-3xl mt-10 lg:w-1/2 mx-4 lg:mx-0 text-[#C1903C]'>
            Our journey to create Capo Coco king coconut villages across the
            island
          </div>
          <div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center lg:w-1/2 mx-4 lg:mx-0'>
            Unveiling Sri Lanka&apos;s first-ever King Coconut Village, a
            remarkable project stemming from our collaboration with The Coconut
            Research Institute of Sri Lanka and the Mahaweli Authority of Sri
            Lanka – MASL. Our mission is to bring high-quality Sri Lankan King
            Coconut products to the global market while simultaneously uplifting
            the local farmers&apos; economic status.
          </div>
        </motion.div>
      </div>
      <motion.div className='flex flex-col gap-20 items-center text-center  lg:w-1/2 mx-auto py-20'>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center mx-4 lg:mx-0'
        >
          We put CSR and ESG on the forefront of our development. Green and
          socially responsible is the key for our business implementation.
          Ethical business behavior and a strong corporate governance make sure
          the Company will adhere to its strategy, its business principles and
          fulfil its goals to create a win-win-win business benefitting the
          Company and its stakeholders.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5'
        >
          <div className='text-3xl text-[#C1903C] font-bold'>
            Zero Concept Climate{' '}
          </div>
          <div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center  mx-4 lg:mx-0'>
            Prevention of pollution and emissions to air, water and soil,
            environmental protection, and combating climate change by
            streamlining of farms, utilizing renewable and clean energy sources,
            planting and/or keeping large trees to capture CO2, and using
            beneficial crop rotation systems to retain the nutrients and
            fertility of the soil. Targeting to become carbon neutral.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5'
        >
          <motion.div className='text-3xl text-[#C1903C] font-bold'>
            Zero Concept Waste
          </motion.div>
          <motion.div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center  mx-4 lg:mx-0'>
            Treat and recycle all waste generated or dispose for waste to energy
            solutions.
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5'
        >
          <motion.div className='text-3xl text-[#C1903C] font-bold'>
            Sustainable farming{' '}
          </motion.div>
          <motion.div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center  mx-4 lg:mx-0'>
            Introducing, promotion of, and supporting organic and sustainable
            farm practice.
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5'
        >
          <motion.div className='text-3xl text-[#C1903C] font-bold'>
            Community support
          </motion.div>
          <motion.div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center  mx-4 lg:mx-0'>
            Provide support to rural farmer communities. Our business provides
            contributions from several angles including water management and
            sustainable consumption of water, giving smallholder farmers offtake
            opportunities for organic crop cultivation, facilitating access to
            crop insurance, farmer training and education programs and providing
            them support enabling them to improve their standard of living.
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5'
        >
          <motion.div className='text-3xl text-[#C1903C] font-bold'>
            Water management{' '}
          </motion.div>
          <motion.div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center  mx-4 lg:mx-0'>
            Water management – Irrigation system implementation, water treatment
            and purification, provide access to clean water.
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5'
        >
          <motion.div className='text-3xl text-[#C1903C] font-bold'>
            Human Rights, Social Responsibility & Gender equality{' '}
          </motion.div>
          <motion.div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center  mx-4 lg:mx-0'>
            Employment through gender and physical ability equality, empowerment
            of women, paying fair rates for our raw materials and fair wages to
            the staffs and farmers.
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5'
        >
          <motion.div className='text-3xl text-[#C1903C] font-bold'>
            Corporate Governance
          </motion.div>
          <motion.div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center  mx-4 lg:mx-0'>
            Our principles for good corporate governance aim to lay the
            foundation for long-term value creation, to the benefit of the
            stakeholders impacted by our business. Sustainability, transparency,
            accountability, and equal treatment underpin confidence in our
            business, both internally and externally, and constitute key
            elements in our efforts to develop and maintain a sound corporate
            business culture.
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5'
        >
          <motion.div className='text-3xl text-[#C1903C] font-bold'>
            Packaging
          </motion.div>
          <motion.div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center  mx-4 lg:mx-0'>
            Our packaging shall satisfy the most stringent food safety measures.
            We strive to use recycled or recyclable materials.
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5'
        >
          <motion.div className='text-3xl text-[#C1903C] font-bold'>
            Certifications
          </motion.div>
          <motion.div className='font-normal text-lg md:text-2xl text-[#C1903C] text-left md:text-center mx-4 lg:mx-0'>
            We always strive to facilitate and obtain the highest standards of
            certificates, for all markets. For every brand, every product, and
            throughout the value chain. Factory certification: ISO 22000, FSSC
            22000, Halal, CDA, HACCP. Products: EU Flower, EU Eco Label, USDA
            Organic, other market specific organic certifications.
          </motion.div>
        </motion.div>
      </motion.div>
      <div className='flex justify-center items-center flex-wrap gap-10 py-10'>
        <Image src={'/logos/1.png'} alt={''} width={50} height={100} />
        <Image src={'/logos/2.jpg'} alt={''} width={50} height={100} />
        <Image src={'/logos/3.png'} alt={''} width={100} height={200} />
        <Image src={'/logos/4.png'} alt={''} width={50} height={100} />
        <Image src={'/logos/5.png'} alt={''} width={100} height={200} />
        <Image src={'/logos/6.png'} alt={''} width={50} height={100} />
        <Image src={'/logos/7.png'} alt={''} width={100} height={200} />
        <Image src={'/logos/8.png'} alt={''} width={50} height={100} />
        <Image src={'/logos/9.webp'} alt={''} width={50} height={100} />
        <Image src={'/logos/10.svg'} alt={''} width={50} height={100} />
        <Image src={'/logos/11.jpg'} alt={''} width={50} height={100} />
      </div>
    </div>
  );
};

export default Sustainability;
