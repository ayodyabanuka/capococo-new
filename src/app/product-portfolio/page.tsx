'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const ProductPortfolio = () => {
  return (
    <div className='mx-4 lg:mx-10 overflow-hidden text-[#C1903C]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-10 place-items-center gap-10'>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5 text-center md:text-left'
        >
          <div className='font-bold text-3xl'>
            Coconut waters – Nature’s own energy drink
          </div>
          <div className='flex flex-col gap-3 font-normal text-lg'>
            <div>
              <span className='font-bold'>Cultivation and processing:</span> We
              source premium quality tender coconuts and king coconuts from
              plantations close to the factories for immediate supply. Plucking
              only the young and fresh nuts and efficient processing in the
              factory ensure premium freshness and quality. Tapping the coconut
              waters on aluminium cans and glass bottles retains the refreshing
              taste and ensure a long shelf life.
            </div>
            <div>
              <span className='font-bold'>Our products:</span> We offer premium
              pure organic king coconut water and tender (green) coconut water
              tapped on aluminum cans and glass bottles. Served chilled with a
              twist of lime gives a refreshing and smooth taste.
            </div>
            <div>
              <span className='font-bold'>Preferred beverage choices:</span>{' '}
              <li>Non-alcoholic drinks</li>
              <li>To quinch thirst </li>
              <li>To provide natural recovery and hydration after workouts</li>
              <li>Healthy, natural sports drinks</li>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <Image
            src={'/portfolio1.jpg'}
            alt={'portfolio1'}
            loading='eager'
            quality={100}
            width={900}
            height={900}
            className='rounded-3xl'
          />
        </motion.div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-10 place-items-center gap-10'>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5 text-center md:text-left'
        >
          <div className='font-bold text-4xl border-t-2 border-b-2 text-center py-2'>
            Sri Lanka - the origin of the King!
          </div>
          <div className='flex flex-col gap-3 font-normal text-lg'>
            <span className='font-bold'>
              Sourcing the very best – single origin product!
            </span>
            <div>
              {' '}
              Our King Coconuts grow exclusively in Sri Lanka's tropical
              microclimate in rich soil. The nut is called Thambili in Singalese
              which means orange color. King coconut palms grow mostly in the
              wild without any human interaction. King coconut is a different
              variety than the green coconut which is available around the
              world. They are primarily found in an area called the “coconut
              triangle” which stretches between three cities in the island
              country. This means that Capo Coco King Coconut Water is a single
              origin product.
            </div>
            <div>
              <span className='font-bold'>Sole purpose: </span> The King coconut
              is used exclusively for its juice as it does not have a husk,
              while the green coconut has multiple uses, including the use of
              its flesh in food products and its husk for matting. This means
              that there are no conflicts of interest between the potential uses
              of coconut by-products: for the king coconut it is all about the
              juice. King Coconut water is also naturally sweeter with twice the
              electrolytes and 35% less sugar than other coconut waters
            </div>
            <div>
              <span className='font-bold'>Age: </span> Capo Coco King Coconut
              Water is made from large, mature, eight months old, bright orange
              colored king coconuts. They are harvested with extreme care by
              hand and lowered from the tall palm trees using ropes and pulleys
              to avoid damaging the precious nuts. Most other coconut waters
              come from either concentrates, mature coconuts, or unripe green
              coconuts which are harvested when they are just 3 – 4 months old
              which is done to prevent more of the water turning into coconut
              flesh.
            </div>
            <div>
              <span className='font-bold'>
                From tree to table – a life cycle approach:{' '}
              </span>{' '}
              Our cultivation is organic and sustainable. We use the nut shells
              for compost or as growing medium for various plants. We aim at
              creating zero unutilized waste and emissions. Our packaging is
              made of recyclable materials. We aim to leaving a minimal
              environment footprint.
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <Image
            src={'/portfolio2.png'}
            alt={'portfolio1'}
            loading='eager'
            quality={100}
            width={900}
            height={900}
            className='rounded-3xl'
          />
        </motion.div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-10 place-items-center gap-10'>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='grid grid-cols-2 md:grid-cols-3 gap-4'
        >
          <div className='flex flex-col items-center justify-evenly text-sm'>
            <div className='flex flex-col font-bold text-3xl'>
              “Nature’s own supercharger”
            </div>
            <div className='flex flex-col'>
              <span className='underline font-bold'>PHOSPHATE</span> Helps with
              tissue growth and repairs, and helps build cell membranes and DNA
            </div>
            <div className='flex flex-col'>
              <span className='underline font-bold'>CALCIUM </span> Makes bone
              structures and feeth stronger
            </div>
            <div className='flex flex-col'>
              <span className='underline font-bold'>POTASSIUM</span> Helps the
              heart beat at a steady, consistent rate and maintains muscle
              function
            </div>
            <div className='flex flex-col'>
              <span className='underline font-bold'>IRON</span> Helps boost
              hemoglobin formation and can help improve muscle function
            </div>
          </div>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <div className='text-2xl font-bold text-center'>
              ELECTROLYTES IN KING COCONUT WATER
            </div>
            <Image
              src={'/portfolio3.png'}
              alt={'portfolio1'}
              loading='eager'
              quality={100}
              width={900}
              height={900}
              className='rounded-3xl'
            />
          </div>
          <div className='flex md:hidden flex-col gap-2 items-center justify-center'>
            <Image
              src={'/portfolio3.png'}
              alt={'portfolio1'}
              loading='eager'
              quality={100}
              width={900}
              height={900}
              className='rounded-3xl'
            />
          </div>
          <div className='flex flex-col  items-center justify-evenly text-sm'>
            <div className='flex flex-col'>
              <span className='underline font-bold'>SODIUM</span> Helps regulate
              muscle control and control blood pressure
            </div>

            <div className='flex flex-col'>
              <span className='underline font-bold'>CHLORIDE </span> CHLORIDE
              Helps the metabolism function correctly, combines with hydrogen in
              the stomach to break down proteins and absorb other metallic
              minerals
            </div>
            <div className='flex flex-col'>
              <span className='underline font-bold'>MAGNESIUM</span> Acts as a
              co-factor in many of the body’s enzyme activities <br /> Retains
              good muscle function <br /> Retains healthy bone structure <br />{' '}
              Reduces fatigue and exthaustion
            </div>
            <div className='flex flex-col'>
              <span className='underline font-bold'>BICARBONATE</span> Acts as a
              buffer to regulate pH levels in the body
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col gap-5 text-center md:text-left'
        >
          <div className='font-bold text-3xl'>All natural – No added sugar</div>
          <div className='flex flex-col gap-3 font-normal text-lg'>
            <div>
              King Coconuts are a rich source of B-complex vitamins, amino
              acids, and electrolytes, which are minerals like potassium,
              calcium, sodium, magnesium, chloride and phosphates. The liquid
              within King Coconuts has more magnesium and calcium than an
              orange, and more potassium than a banana. It will naturally
              replenish the body’s loss of electrolytes by sweating during
              exercise or any other type of exertion. This helps prevent
              dehydration and fatigue. King Coconuts contain bioactive enzymes
              which aid in digestion and help with the body’s metabolism.
              Studies have proven the water to have strong antioxidant
              properties.
            </div>
            <div>
              <span className='font-bold'>Key benefits</span>{' '}
              <li>Delicious and fresh taste</li>
              <li>High level of electrolytes </li>
              <li>Gives good restitution and hydration</li>
              <li>Medical benefits</li>
            </div>
          </div>
        </motion.div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 my-10 h-full text-white justify-between items-center px-0 '>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className="flex items-center flex-col lg:flex-row justify-center bg-center h-full lg:h-[70vh] rounded-3xl p-10 bg-cover bg-[url('/kingback.png')]"
        >
          <motion.div className='flex flex-col col-span-2 text-center md:text-left'>
            <div className='font-bold text-5xl md:text-7xl'>King</div>
            <div className='font-bold text-2xl md:text-5xl'>Coconut Water</div>
            <div className='mt-9 text-sm md:text-lg'>
              Immerse yourself in the royal realm of this beverage, a single
              origin product harvested in a tropical paradise. Our King Coconut
              water is more than just a beverage – it is an experience packed
              with elctrolytes and nutrition that reflects the essence of the
              tropics. The ultimate organic energy booster with a unique taste
              and multiple benefits.
            </div>
            <div className='my-6 text-lg'>
              <Link
                href={'/product-portfolio/king-coconut'}
                className='bg-transparent border  w-fit px-4 py-2 rounded-full hover:bg-white hover:text-[#C1903C]'
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div>
            <Image
              src={'/king_can.png'}
              width={200}
              quality={100}
              className='scale-100  lg:hidden -rotate-12'
              height={200}
              alt={''}
            />
            <Image
              src={'/king_can.png'}
              width={2000}
              quality={100}
              className='scale-75 hidden lg:block -rotate-12'
              height={2000}
              alt={''}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className="flex items-center flex-col justify-center lg:flex-row-reverse h-full lg:h-[70vh] p-10 rounded-3xl bg-center bg-cover bg-[url('/tenderback.png')]"
        >
          <motion.div className='col-span-2 flex flex-col text-center md:text-right'>
            <div className='font-bold text-5xl md:text-7xl'>Tender</div>
            <div className='font-bold text-2xl md:text-5xl'>Coconut Water</div>
            <div className='mt-9 text-sm md:text-lg'>
              Enjoy the natural refreshing and hydrating experience of tender
              coconut water, sourced directly from the green plantations that
              cover the landscapes of Sri Lanka. With each sip you will feel the
              embrace of the warm breeze among the palm trees and appreciate the
              nature-given goodness this beverage embodies.
            </div>
            <div className='my-6 text-lg'>
              <Link
                href={'/product-portfolio/tender-coconut'}
                className='bg-transparent border w-fit px-4 py-2 rounded-full hover:bg-white hover:text-green-700'
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div>
            <Image
              src={'/tender_can.png'}
              width={200}
              quality={100}
              className='scale-100 lg:hidden rotate-12'
              height={200}
              alt={''}
            />
            <Image
              src={'/tender_can.png'}
              width={2000}
              quality={100}
              className='scale-75 hidden lg:block rotate-12'
              height={2000}
              alt={''}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPortfolio;
