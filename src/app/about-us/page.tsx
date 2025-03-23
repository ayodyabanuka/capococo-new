'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
const AboutUs = () => {
  return (
    <div className='mx-4 lg:mx-10 overflow-hidden'>
      <div className='flex flex-col gap-10 items-center p-4 lg:p-20 bg-[#FFF4E2] rounded-3xl m-10 mx-auto max-w-screen-2xl pb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 h-fit gap-10 justify-center items-center px-0 '>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <div className='block'>
              <Image
                src={'/about-us.jpg'}
                alt={'about-us'}
                loading='eager'
                quality={100}
                width={900}
                height={900}
                className='rounded-[60px]'
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className='px-4 lg:p-0 bg-white/5  rounded-3xl h-fit'
          >
            <div className='font-bold text-4xl lg:text-[60px] text-[#C1903C] lg:leading-[55px]'>
              About Us
            </div>
            <div className='font-light text-justify md:text-left text-lg lg:text-[28px] mt-3 lg:leading-[35px] text-[#C1903C]'>
              At the heart of our brand lies an extraordinary story of passion
              and authenticity. Born on a tropical island, Capo Coco was founded
              with a single mission – to share the goodness of these natural
              treasures with the world. Our journey is a tribute to the art of
              preserving purity of nature in every drop, bringing you more than
              just a beverage.
            </div>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 h-fit justify-center items-center px-0 gap-10 bg-[#FFF4E2]  rounded-3xl '>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className='block lg:hidden'
          >
            <div className='block'>
              <Image
                src={'/about-us2.png'}
                alt={'about-us2'}
                loading='eager'
                quality={100}
                width={900}
                height={900}
                className='rounded-[60px]'
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className='px-4 lg:p-0 bg-white/5  rounded-3xl h-fit'
          >
            <div className='font-bold text-4xl lg:text-[60px] text-[#C1903C] lg:leading-[55px]'>
              Sri Lanka – The Island of Coconuts
            </div>
            <div className='font-light text-lg text-justify md:text-left lg:text-[28px] mt-3 lg:leading-[35px] text-[#C1903C]'>
              Sri Lanka is a world leading exporter of coconuts. The tropical
              island in the Indian Ocean is the home of the King Coconut. We
              offer premium pure organic king coconut water and tender coconut
              water. The best options for instant refreshment, hydration, and
              restitution!
            </div>
            <div className='font-semibold text-2xl lg:text-[28px] mt-3 lg:leading-[35px] text-[#C1903C]'>
              “Nature&apos;s Own Super Charger”
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className='hidden lg:block'
          >
            <div className='block'>
              <Image
                src={'/about-us2.png'}
                alt={'about-us2'}
                loading='eager'
                quality={100}
                width={900}
                height={900}
                className='rounded-[60px]'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
