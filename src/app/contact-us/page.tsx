'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import sendContactForm from '../lib/api';

const initValues = { name: '', email: '', message: '' };

const initState = { isLoading: false, error: '', values: initValues };
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [state, setState] = useState(initState);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(formData);
      setState(initState);
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <div className='mx-4 lg:mx-10 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 180 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
        className=' text-black grid  my-10 gap-7 p-4 lg:p-20 rounded-3xl h-[1097px]  bg-[#FFF4E2]'
      >
        <form
          onSubmit={onSubmit}
          className='bg-white p-4 md:p-10 w-full rounded-3xl grid grid-cols-2 col-span-2'
        >
          <div className='grid col-span-2 text-center items-center place-items-center'>
            <div className='text-5xl font-extrabold text-[#C1903C]'>
              Get in Touch
            </div>
            <div className='font-bold text-[25px] text-[#C1903C] '>
              We like to hear from you!
            </div>
            <div className='font-normal text-[18px] w-2/3 text-[#C1903C] '>
              Your feedback matters. Please share your questions and thoughts.
              We are ready to assist you.
            </div>
          </div>

          <div className='grid col-span-2 grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
            <div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-black'
              >
                Full Name
              </label>
              <input
                type='name'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='bg-[#FFF4E2]  text-red-900 placeholder-red-700 text-sm rounded-lg block w-full p-2.5'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-black'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='bg-[#FFF4E2]  text-red-900 placeholder-red-700 text-sm rounded-lg block w-full p-2.5'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-black'
            >
              Message
            </label>
            <textarea
              id='message'
              rows={10}
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              className='block p-2.5 w-full text-sm text-gray-900 bg-[#FFF4E2] rounded-lg '
            ></textarea>
          </div>
          <button
            type='submit'
            className='col-span-2 text-white bg-[#C1903C] hover:bg-[#826129] h-fit font-medium rounded-lg text-sm py-4 px-5 mb-2 '
          >
            Send Message
          </button>
        </form>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: 180 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
        className='grid md:hidden justify-center bg-[#FFF4E2] '
      >
        <form onSubmit={onSubmit} className='bg-white p-10 w-full rounded-3xl'>
          <div className='grid col-span-1 text-center '>
            <div className='text-[35px] font-extrabold text-[#C1903C]'>
              Get in Touch
            </div>
            <div className='font-normal text-[18px] text-[#C1903C] '>
              We like to hear from you!
            </div>
            <div className='font-normal text-[18px]  text-[#C1903C] '>
              Your feedback matters. Please share your questions and thoughts
              and we are ready to assist you.
            </div>
          </div>

          <div>
            <label
              htmlFor='name'
              className='block mb-2 mt-4 text-sm font-medium text-black'
            >
              Full Name
            </label>
            <input
              type='name'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='bg-[#FFF4E2] col-span-1 text-sm rounded-lg block w-full p-2.5'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block mb-2 mt-4 text-sm font-medium text-black'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='bg-[#FFF4E2] col-span-1 text-red-900 placeholder-red-700 text-sm rounded-lg block w-full p-2.5'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block mb-2 mt-4 text-sm font-medium text-black'
            >
              Message
            </label>
            <textarea
              id='message'
              rows={10}
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              className='block p-2.5 w-full text-sm text-gray-900 bg-[#FFF4E2] rounded-lg '
            ></textarea>
          </div>
          <button
            type='submit'
            className=' text-white bg-[#C1903C] hover:bg-[#826129] w-full h-fit mt-4 font-medium rounded-lg text-sm py-4 px-5 mb-2 '
          >
            Send Message
          </button>
        </form>
      </motion.div> */}
    </div>
  );
};

export default ContactUs;
