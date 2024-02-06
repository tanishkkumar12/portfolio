import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';


const Services = () => {
  return (
  <div>
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {}
          <div className='text-center flex xl:w-[50vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 xl:ml-1'>My services <span className='text-accent'>.</span></motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Highly skilled and innovative Software Developer and Full Stack developer
 with a proficient in designing and developing dynamic and user-friendly
 websites. Proficient in React.js, Node.js, and various web development
 frameworks. Adept at translating client requirements into functional and
 visually appealing designs. With good knowledge in Artificial Intelligence
 and implementation in projects.</motion.p>
          </div>
          {}
          <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className='w-full xl:max-w-[65%]'>
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb/>

    </div>
  </div>
  );
};

export default Services;
