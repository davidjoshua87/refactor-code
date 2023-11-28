import  { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check when the user has scrolled down
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 200;

      // Set the visibility of the button based on the scroll position
      setIsVisible(scrollTop > scrollThreshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        className="bg-[#1BA0E1]  hover:bg-[#1BA0E1]-700 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;