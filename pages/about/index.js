/* eslint-disable react/jsx-key */
import React, {useState} from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Full Stack Development :- Node.js, React.js, Wordpress and MySQL',
        icons: [
          
          <FaReact />,
          <SiNextdotjs />,
          <FaWordpress />,
        ],
      },
      {
        title: 'Web Development :- HTML, CSS, JavaScript, Python',
        icons: [<FaHtml5 />,
        <FaCss3 />,
        <FaJs />],
      },
      {
        title: 'Software :- Development, Testing, QA, SDLC',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Version Control :- Git',
       
      },
      {
        title: 'Project Management :- Agile Methodologies',
       
      },
    ],
  },
  {
    title: 'achievements',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'Internship',
    info: [
      {
        title: 'Web Development - Vault of Codes || AICTE || 2023 - 2024',
      },
      {
        title: 'Python Programming with DSA - YBI Foundation || JUN 2023 - AUG 2023',
        
      },
      {
        title: 'Artificial Intelligence - YBI Foundation || 2023',
      
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: ' Build a natural language processing solution with Azure AI Language: MICROSOFT (JAN 2024)',
        
      },
      {
        title: 'Build an Azure AI Vision solution: MICROSOFT (JAN 2024)',
        
      },
      {
        title: 'Create an intelligent document processing solution with Azure AI Document Intelligence: MICROSOFT (JAN 2024)',
        
      },
      {
        title: 'Google Cloud Big Data and Machine Learning Fundamentals: GOOGLE (NOV 2023)',
        
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import CountUp from 'react-countup';


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles/>
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        {/* <Avatar /> */}
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'>Captivating <span className='text-accent'>stories</span> birth magnificent designs.</motion.h2>
          <motion.p variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>1 Year ago, I began full stack developer. Since then, I  have done projects, and some Internships.</motion.p>
          {}
          <motion.div variants={fadeIn('right', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden' className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={5} duration={5  } /> +
                </div>
                <div>Finished Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
        {}
        <motion.div variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden' className='flex flex-col w-full xl:max-w-[48%]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={()=> setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  {}
                  <div className='font-light mb-2 md:mb-0'>
                    {item.title}
                  </div>
                  <div className='hidden md:flex'>.</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {}
                    {item.icons?.map((icon, itemIndex) =>{
                      return <div className='text-2xl text-white'>{icon}</div>
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
