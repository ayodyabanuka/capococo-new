'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Processing = () => {
  return (
    <div className=' mx-4 lg:mx-10 overflow-hidden'>
      <div className="hidden lg:flex flex-col my-10 rounded-3xl py-30 text-white gap-28 justify-center items-center bg-[url('/ourprocessback.png')] bg-no-repeat bg-cover">
        <div className='text-[40px] font-extrabold text-[#C1903C]'>
          Craftsmanship in Every Drop
        </div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex justify-center gap-10 items-center'
        >
          <div className='flex flex-col  w-1/2 text-left'>
            <div className='text-[40px] font-extrabold text-[#C1903C]'>
              Liquid Gold
            </div>
            <div className='font-normal text-[20px] text-[#C1903C] '>
              Our journey begins in the lush tropical groves of Sri Lanka, where
              our dedicated harvesters handpick each King Coconut at the peak of
              nutrition. The King Coconuts need to be picked after 8 months at
              just the right time, to ensure the finest quality and purity in
              every can.
            </div>
          </div>
          <Image
            src={'/liquidgold.jpg'}
            width={350}
            height={350}
            alt={''}
            className='rounded-4xl aspect-video object-cover'
          ></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex justify-center gap-10 items-center'
        >
          <Image
            src={'/tendercoconut.png'}
            width={350}
            height={350}
            alt={''}
          ></Image>
          <div className='flex flex-col  w-1/2  text-left'>
            <div className='text-[40px] font-extrabold text-[#C1903C]'>
              Tender Coconut
            </div>
            <div className='font-normal text-[20px] text-[#C1903C] '>
              The Tender green coconuts are just as fresh, but picked while they
              are young and tender where the water content is perfect and the
              taste is delightful.
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex justify-center gap-10 items-center'
        >
          <div className='flex flex-col  w-1/2  text-left'>
            <div className='font-normal text-[20px] text-[#C1903C] '>
              Our dedicated quality assurance team ensure premium quality
              throughout the value chain from cultivation, through harvesting,
              processing, tapping, and packing
            </div>
          </div>

          <Image
            src={'/craftmanshipinevery.png'}
            width={350}
            height={350}
            alt={''}
            className=''
          ></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex justify-center gap-10 items-center'
        >
          <Image
            src={'/sealedwithcare.png'}
            width={350}
            height={350}
            alt={''}
            className='scale-125'
          ></Image>
          <div className='flex flex-col  w-1/2  text-left'>
            <div className='text-[40px] font-extrabold text-[#C1903C]'>
              Sealed with Care
            </div>
            <div className='font-normal text-[20px] text-[#C1903C] '>
              Each can is a testament to our committment to quality. Capo Coco
              is sealed with care, ensuring that the purity and freshness are
              preserved from the moment of harvest until you take your first
              sip.
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-24 px-10 lg:hidden py-20 justify-center bg-[url('/sustainabilitybackmobile.png')] rounded-2xl bg-cover">
        <div className='text-[33px] font-extrabold text-[#C1903C] text-center'>
          Craftsmanship in Every Drop
        </div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex justify-center gap-5 items-center'
        >
          <div className='flex flex-col text-center'>
            <div className='text-[33px] font-extrabold text-[#C1903C]'>
              Liquid Gold
            </div>
            <div className='font-normal text-justify text-[20px] text-[#C1903C] '>
              Our journey begins in the lush tropical groves of Sri Lanka, where
              our dedicated harvesters handpick each King Coconut at the peak of
              nutrition. The King Coconuts need to be picked after 8 months at
              just the right time, to ensure the finest quality and purity in
              every can.
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex justify-center gap-5 items-center'
        >
          <div className='flex flex-col text-center'>
            <div className='text-[33px] font-extrabold text-[#C1903C]'>
              Tender Coconut
            </div>
            <div className='font-normal text-justify  text-[20px] text-[#C1903C] '>
              The Tender green coconuts are just as fresh, but picked while they
              are young and tender where the water content is perfect and the
              taste is delightful.
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex justify-center gap-5 items-center'
        >
          <div className='flex flex-col text-center'>
            <div className='font-normal text-justify text-[20px] text-[#C1903C] '>
              Our dedicated quality assurance team ensure premium quality
              throughout the value chain from cultivation, through harvesting,
              processing, tapping, and packing
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex justify-center gap-5 items-center'
        >
          <div className='flex flex-col text-center'>
            <div className='text-[33px] font-extrabold text-[#C1903C]'>
              Sealed with Care
            </div>
            <div className='font-normal text-justify text-[20px] text-[#C1903C] '>
              Each can is a testament to our committment to quality. Capo Coco
              is sealed with care, ensuring that the purity and freshness are
              preserved from the moment of harvest until you take your first
              sip.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Processing;
