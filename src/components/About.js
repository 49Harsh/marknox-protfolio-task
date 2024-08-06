import React from 'react';
import { motion, useInView } from 'framer-motion';
import webImage from '../images/project-1.svg'

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-12 text-center text-white"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3"
          >
            <div className="w-72 h-72 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
              <img
                src={webImage}
                alt='Profile'
                loading='lazy'
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Hello! I'm a passionate web developer with experience in creating responsive and user-friendly websites. I specialize in React.js, Tailwind CSS, and modern JavaScript.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My goal is to build applications that are not only functional but also provide a great user experience. I'm always eager to learn new technologies and improve my skills.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new coffee shops, reading tech blogs, or contributing to open-source projects.
              </p>
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://harsh-org-portfolio.netlify.app/"
                target='_blank'
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;