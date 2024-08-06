import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);
  const codeRef = useRef(null);
  const isInView = useInView(codeRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    tl.fromTo(
      section.querySelector('h1'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Set hasAnimated to true after initial animation
    setHasAnimated(true);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8"
        >
          I'm a web developer passionate about creating amazing experiences.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Get in touch
        </motion.button>

        <motion.div
          ref={codeRef}
          className="mt-12 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView || hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg overflow-hidden">
            <pre className="text-green-400 text-xs sm:text-sm md:text-base whitespace-pre-wrap break-words">
              <code>{`
        // Example
        const webDevelopmentSkills = {
          frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue'],
          backend: ['Node.js', 'Express', 'Python', 'Django'],
          database: ['MongoDB', 'PostgreSQL', 'MySQL'],
          tools: ['Git', 'Docker', 'AWS', 'Webpack']
        };

            `}</code>
            </pre>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Home;