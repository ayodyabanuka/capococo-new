'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen p-4 md:p-10 overflow-hidden'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start p-10 lg:justify-between h-[55vh] lg:h-[100vh] w-full bg-[url("/home-top.png")] bg-no-repeat bg-cover bg-center rounded-2xl md:rounded-4xl'>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <Image
            src={'/logo.png'}
            alt={''}
            width={300}
            height={300}
            className='md:h-fit lg:mt-20 h-24 w-fit aspect-auto hidden lg:block'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='text-xl font-bold md:text-5xl lg:text-7xl text-center text-[#C1903C] lg:mt-32 hidden lg:block'
        >
          Premium <br className='hidden md:block' /> Coconut{' '}
          <br className='hidden md:block' /> Water
        </motion.div>
      </div>
      <div className='text-3xl font-bold md:text-5xl lg:text-7xl text-center text-[#C1903C] lg:mt-32 block lg:hidden py-5'>
        Premium Coconut Water
      </div>
      <div className='text-black px-0  lg:px-10 xl:px-0'>
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 items-center p-10 lg:my-10 md:h-[80vh] lg:h-[90vh] rounded-4xl mt-fit bg-cover bg-[url('/home-bg.png')]">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className=' lg:p-20 flex flex-col text-center lg:text-left'
          >
            <div className='font-extrabold text-5xl lg:text-7xl text-[#C1903C] lg:leading-[80px]'>
              Pure Organic Goodness in every Sip
            </div>
            <div className='font-medium md:text-lg lg:text-[30px] mt-10 text-[#C1903C] leading-6 lg:leading-[35px] '>
              Hydrate and refresh with Capo Coco – produced by nature
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className=' hidden h-full md:flex relative lg:mb-32 scale-110'
          >
            <motion.div
              className='absolute bottom-20'
              animate={{ rotate: [1, 8, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Image
                src={'/home/back.png'}
                alt={''}
                width={3000}
                height={3000}
                className='h-fit w-fit '
              />
            </motion.div>
            <motion.div
              className='absolute right-20 bottom-30'
              animate={{ rotate: [-2, -12, -2] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Image
                src={'/home/water-right.png'}
                alt={''}
                width={2000}
                height={2000}
                className='h-fit w-fit '
              />
            </motion.div>
            <motion.div
              className='absolute left-5 bottom-30 scale-125'
              animate={{ rotate: [-6, -12, -6] }}
              transition={{ repeat: Infinity, duration: 3, delay: 2 }}
            >
              <Image
                src={'/home/tender.png'}
                alt={''}
                width={2000}
                height={2000}
                className='h-fit w-fit '
              />
            </motion.div>
            <motion.div
              className='absolute left-32 bottom-10 scale-125'
              animate={{ rotate: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Image
                src={'/home/tender-bottle.png'}
                alt={''}
                width={2000}
                height={2000}
                className='h-fit w-fit '
              />
            </motion.div>
            <motion.div
              className='absolute left-42 bottom-30 scale-150'
              animate={{ rotate: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Image
                src={'/home/water-left.png'}
                alt={''}
                width={2000}
                height={2000}
                className='h-fit w-fit '
              />
            </motion.div>
            <motion.div
              className='absolute right-35 bottom-10 scale-125'
              animate={{ rotate: [-2, -6, -2] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Image
                src={'/home/king-bottle.png'}
                alt={''}
                width={2000}
                height={2000}
                className='h-fit w-fit '
              />
            </motion.div>

            <motion.div
              className='absolute right-12 bottom-0 scale-130'
              animate={{ rotate: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Image
                src={'/home/king-coconut.png'}
                alt={''}
                width={2000}
                height={2000}
                className='h-fit w-fit '
              />
            </motion.div>
          </motion.div>
        </div>
        <div className=''>
          <div className="flex flex-col md:hidden rounded-2xl text-[#C1903C] w-full bg-cover h-[400px] bg-[url('/home-bg.png')]">
            <div className='flex justify-center items-center pl-10 pt-32'>
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: 'easeOut', duration: 1 }}
                className='w-[390px] sm:w-screen  h-full  relative lg:mb-32 mt-50 md:mt-0 scale-75'
              >
                <motion.div
                  className='absolute bottom-30'
                  animate={{ rotate: [1, 8, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Image
                    src={'/home/back.png'}
                    alt={''}
                    width={3000}
                    height={3000}
                    className='h-fit w-fit scale-105'
                  />
                </motion.div>
                <motion.div
                  className='absolute right-0 bottom-30'
                  animate={{ rotate: [-2, -12, -2] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Image
                    src={'/home/water-right.png'}
                    alt={''}
                    width={2000}
                    height={2000}
                    className='h-fit w-fit scale-90'
                  />
                </motion.div>
                <motion.div
                  className='absolute -left-30 bottom-20'
                  animate={{ rotate: [-6, -12, -6] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 2 }}
                >
                  <Image
                    src={'/home/tender.png'}
                    alt={''}
                    width={2000}
                    height={2000}
                    className='h-fit w-fit scale-75'
                  />
                </motion.div>
                <motion.div
                  className='absolute -left-10 bottom-10'
                  animate={{ rotate: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Image
                    src={'/home/tender-bottle.png'}
                    alt={''}
                    width={2000}
                    height={2000}
                    className='h-fit w-fit scale-90'
                  />
                </motion.div>
                <motion.div
                  className='absolute left-1 bottom-30'
                  animate={{ rotate: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Image
                    src={'/home/water-left.png'}
                    alt={''}
                    width={2000}
                    height={2000}
                    className='h-fit w-fit scale-90'
                  />
                </motion.div>
                <motion.div
                  className='absolute right-10 bottom-10'
                  animate={{ rotate: [-2, -6, -2] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Image
                    src={'/home/king-bottle.png'}
                    alt={''}
                    width={2000}
                    height={2000}
                    className='h-fit w-fit scale-90'
                  />
                </motion.div>

                <motion.div
                  className='absolute right-0 bottom-0'
                  animate={{ rotate: [0, -7, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Image
                    src={'/home/king-coconut.png'}
                    alt={''}
                    width={2000}
                    height={2000}
                    className='h-fit w-fit scale-90'
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className='mt-0 text-center md:text-start md:hidden bg-white/60 px-4  py-10 backdrop-blur-md rounded-3xl'
          >
            <div className='font-extrabold text-4xl xl:text-[70px] text-[#C1903C] text-center lg:leading-[55px]'>
              Pure Organic Goodness in every Sip
            </div>
            <div className='font-medium text-center text-[20px] md:text-justify mt-6 text-[#C1903C] leading-[30px] '>
              Hydrate and refresh with Capo Coco – produced by nature
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
