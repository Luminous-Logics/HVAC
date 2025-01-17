import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const ScrollButton = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Hidden by default

  // Track the scroll position and footer visibility
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const footer = document.getElementById('contactus');
    const footerPosition = footer ? footer.offsetTop : 0;

    if (scrollPosition > 100 && scrollPosition < footerPosition - 60) {
      setIsFixed(true);
      setIsVisible(true);
    } else if (scrollPosition >= footerPosition - 60) {
      setIsFixed(false);
      setIsVisible(false);
    } else {
      setIsFixed(false);
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // WhatsApp message URL
  const whatsappMessage = "Hello, I am interested in your services. Could you please provide more details?";
  const whatsappUrl = `https://wa.me/96560353965?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <button
      className={`scroll-button ${isFixed ? 'fixed' : ''} ${isVisible ? 'visible' : 'hidden'} pulsating`}
      onClick={() => window.open(whatsappUrl, "_blank")}
    >
      <Icon icon="logos:whatsapp-icon" width="20" height="20" className="mr-4" />
    </button>
  );
};

export default ScrollButton;
