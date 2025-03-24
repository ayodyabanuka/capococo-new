'use client';

import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

const MainContainer = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <div className='h-screen flex items-center justify-center'>
      <Image
        src={'/logo.png'}
        alt={''}
        width={100}
        height={100}
        className='animate-bounce'
      />
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default MainContainer;
