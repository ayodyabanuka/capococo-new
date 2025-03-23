import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-[#FFF4E2] p-10 lg:px-10'>
      <div className='flex max-w-screen-2xl flex-col md:flex-row gap-6 md:gap-0 items-center justify-between mx-auto bg-[#8C6120] p-4 rounded-2xl'>
        <a
          href='mailto:info@capococo.com'
          className='flex items-center border border-[#DF921F] rounded-xl text-white gap-2 p-3 cursor-pointer'
        >
          <div>
            <MdEmail />
          </div>
          <div>info@capococo.com</div>
        </a>
        <div className='text-white'>© {currentYear}. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
