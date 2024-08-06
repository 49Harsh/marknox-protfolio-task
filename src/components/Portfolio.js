import React from 'react';
import { motion, useInView } from 'framer-motion';
import Projectimg1 from '../images/project-1.svg'
import Projectimg2 from '../images/project2.svg'
import Projectimg3 from '../images/project3.svg'
import Projectimg4 from '../images/project4.svg'

const projects = [
  { id: 1, title: 'E-commerce Website', description: 'A fully functional online store built with React and Node.js', image: Projectimg1 },
  { id: 2, title: 'Weather App', description: 'Real-time weather application using OpenWeatherMap API', image: Projectimg2 },
  { id: 3, title: 'Task Manager', description: 'A productivity app built with React and Firebase', image: Projectimg3 },
  { id: 4, title: 'Portfolio Website', description: 'A responsive portfolio website using React and Tailwind CSS', image: Projectimg4 },
];

const Portfolio = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} id="portfolio" className="py-24 bg-gradient-to-b from-black to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-12 text-white text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-64 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-5">{project.description}</p>
                    <a
                      href="https://harsh-org-portfolio.netlify.app/"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;