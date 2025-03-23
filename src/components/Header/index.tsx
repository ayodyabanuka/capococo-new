'use client';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Menutoggle from './Menutoggle';
import MobileNav from './sideNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const router = usePathname();
  const NavList = [
    {
      title: 'HOME',
      link: '/',
    },
    {
      title: 'ABOUT US',
      link: '/about-us',
    },
    {
      title: 'PRODUCT PORTFOLIO',
      link: '/product-portfolio',
    },
    {
      title: 'PROCESSING',
      link: '/processing',
    },
    {
      title: 'SUSTAINABILITY',
      link: '/sustainability',
    },
    {
      title: 'CONTACT US',
      link: '/contact-us',
    },
  ];

  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div>
      <motion.div
        initial={false}
        animate={isOpen}
        variants={headerVariant}
        className={`w-full flex justify-center`}
      >
        <div className='hidden lg:flex items-center  w-full justify-between p-5 max-w-screen-2xl mx-auto px-10'>
          <Link href={'/'}>
            <Image src={'/logo.png'} width={90} height={90} alt={'logo'} />
          </Link>
          <div className='flex gap-5 text-[#42454A] text-[14px]'>
            {NavList.map((item) => (
              <Link key={item.title} href={item.link}>
                <div
                  className={`${
                    router === item.link
                      ? 'bg-[#C1903C]  text-white px-2 py-1 rounded-lg'
                      : 'px-2 py-1 hover:bg-[#C1903C] rounded-lg hover:text-white transition-all ease-in-out'
                  }`}
                >
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='lg:hidden flex justify-between bg-white text-black p-5'>
          <div className='bg-white'>
            <AnimatePresence>
              <Menutoggle toggle={() => toggleOpen()} isOpen={isOpen} />
            </AnimatePresence>

            <div className='flex flex-row'>
              <AnimatePresence>
                {!isOpen && (
                  <div className='flex justify-center items-center space-x-1 absolute top-[21px] right-3'></div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <MobileNav isOpen={isOpen} toggleOpen={toggleOpen} />
          <Link href={'/'}>
            <Image src={'/logo.png'} width={70} height={70} alt={'logo'} />
          </Link>
          <div className='text-black'></div>
        </div>
      </motion.div>
    </div>
  );
};

const headerVariant = {
  open: {
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    opacity: 1,
    transition: {
      delay: 0.8,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default Header;
