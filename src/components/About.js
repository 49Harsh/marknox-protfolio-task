import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="w-64 h-64 mx-auto bg-gray-300 rounded-full">
              {/* Add your image here */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-4">
              Hello! I'm a passionate web developer with experience in creating responsive and user-friendly websites. I specialize in React.js, Tailwind CSS, and modern JavaScript.
            </p>
            <p className="text-lg mb-4">
              My goal is to build applications that are not only functional but also provide a great user experience. I'm always eager to learn new technologies and improve my skills.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new coffee shops, reading tech blogs, or contributing to open-source projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;