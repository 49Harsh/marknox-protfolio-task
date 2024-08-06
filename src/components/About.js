import React from 'react';
import { motion, useInView } from 'framer-motion';
import webImage from '../images/project-1.svg'

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-white"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="w-64 h-64 mx-auto rounded-full">
              <img
                src={webImage}
                alt='webimage'
                loading='lazy'
                width={256}  
                height={256} 
                className="rounded-full" 
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-lg text-white mb-4">
              Hello! I'm a passionate web developer with experience in creating responsive and user-friendly websites. I specialize in React.js, Tailwind CSS, and modern JavaScript.
            </p>
            <p className="text-lg text-white mb-4">
              My goal is to build applications that are not only functional but also provide a great user experience. I'm always eager to learn new technologies and improve my skills.
            </p>
            <p className="text-lg text-white">
              When I'm not coding, you can find me exploring new coffee shops, reading tech blogs, or contributing to open-source projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;