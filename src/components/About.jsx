import React from 'react';
import { motion } from 'framer-motion';
import { styles} from '../styles';
import { services} from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {

  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' variants={fadeIn("right", "tween", 0.5 * index, 0.75)}>
        <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[25px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>  

    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-6`} >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' variants={fadeIn("","",0.1,1)}>  
      As a software engineer, I am passionate about using technology to solve complex problems and make a positive impact on the world. 
      <br/>With a strong foundation in computer science principles and a thirst for learning, I am always seeking new opportunities to grow and develop my skills. 
      <br/>I am always excited to with team of like-minded individuals; with whom I can contribute my skills and learn from experienced professionals. 
      <br/>I am eager to make a meaningful contribution to the field of software engineering and be a part of a team that is driving innovation and change.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

    </>
  )
}

export default SectionWrapper (About, "about");