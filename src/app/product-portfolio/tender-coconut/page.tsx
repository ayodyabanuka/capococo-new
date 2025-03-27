import Image from 'next/image';

const TenderCoconut = () => {
  return (
    <div className='mx-4 lg:mx-10 overflow-hidden text-[#31a65a]'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-20'>
        <div className='flex flex-col items-center justify-center gap-5'>
          <Image
            src={'/tender_bottle.png'}
            alt={'portfolio1'}
            loading='eager'
            quality={100}
            width={300}
            height={300}
            className=''
          />
        </div>
        <div className='flex flex-col justify-center items-center col-span-2 gap-8'>
          <div className='font-bold text-4xl'>Tender Coconut Water</div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-cols-2 gap-10 place-items-center'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  src={'/tender_bottle.png'}
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
                  src={'/tender_can.png'}
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
                src={'/coco.png'}
                alt={'portfolio1'}
                loading='eager'
                quality={100}
                width={600}
                height={600}
                className=''
              />
            </div>
          </div>
          <div className='w-full'>
            Capo Coco Tender Coconut Water is a premium beverage designed by
            nature. A healthy choice to stay refreshed and hydrated. This
            product is made in Sri Lanka – the island of Coconuts. Our tender
            coconut is grown naturally and offers a refreshing and delightful
            taste. Tender coconut water consists of natural sucrose and
            fructose.
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
              100% Tender Coconut Water, Ascorbic Acid. Made from young, fresh,
              green coconuts. Never from concentrate.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderCoconut;
