import React from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-b from-gray-900 to-black text-white border-b border-gray-500 sticky">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          My Portfolio
        </motion.h1>
        <nav className="hidden md:flex space-x-4">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-300">
              {item}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-700 py-2"
        >
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 text-sm hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;