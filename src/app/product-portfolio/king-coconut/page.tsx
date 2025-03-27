import Image from 'next/image';

const KingCoconut = () => {
  return (
    <div className='mx-4 lg:mx-10 overflow-hidden text-[#C1903C]'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-20'>
        <div className='flex flex-col items-center justify-center gap-5'>
          <Image
            src={'/king_bottle.png'}
            alt={'portfolio1'}
            loading='eager'
            quality={100}
            width={300}
            height={300}
            className=''
          />
        </div>
        <div className='flex flex-col justify-center items-center col-span-2 gap-8'>
          <div className='font-bold text-4xl'>King Coconut Water</div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-cols-2 gap-10 place-items-center'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src={'/king_bottle.png'}
                  alt={'portfolio1'}
                  loading='eager'
                  quality={100}
                  width={150}
                  height={150}
                  className=''
                />
                <div className='text-center'>
                  200ML (6.8 FL OZ) <br /> GLASS BOTTLE
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src={'/king_can.png'}
                  alt={'portfolio1'}
                  loading='eager'
                  quality={100}
                  width={150}
                  height={150}
                  className=''
                />
                <div className='text-center'>
                  250ML (8.5 FL OZ) <br /> ALUMINIUM CAN
                </div>
              </div>
            </div>
            <div>
              <Image
                src={'/king.png'}
                alt={'portfolio1'}
                loading='eager'
                quality={100}
                width={750}
                height={750}
                className=''
              />
            </div>
          </div>
          <div className='w-full'>
            Capo Coco King Coconut Water is a premium beverage designed by
            nature. A healthy choice to stay refreshed and hydrated. This
            product is made in Sri Lanka – the home of King Coconut. Indigenous
            to Sri Lanka, this exclusive coconut is grown based on organic
            principles and offers a smoother and richer taste and contains no
            fat. King coconut water consists of natural sucrose, fructose, and
            glucose.
          </div>
          <div className='w-full'>
            <div className='font-bold'>BENEFITS</div>
            <div>
              Energy booster | High level of natural electrolytes | No added
              sugar | Non-genetically modified | Isotonic | No fat | Gluten free
              | Raw | Vegan
            </div>
          </div>
          <div className='w-full'>
            <div className='font-bold'>INGREDIENTS</div>
            <div>
              100% King Coconut Water, Ascorbic Acid. Made from young, fresh,
              orange king coconuts. Never from concentrate.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KingCoconut;
