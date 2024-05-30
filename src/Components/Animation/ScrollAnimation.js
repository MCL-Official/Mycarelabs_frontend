// src/ScrollAnimation.js
import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './ScrollAnimation.css'; // Make sure to create this CSS file

const ScrollAnimation = () => {
  const ref = useRef();
  const [style, api] = useSpring(() => ({ opacity: 0, transform: 'translateY(50px)' }));

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        api.start({ opacity: 1, transform: 'translateY(0px)', config: { mass: 1, tension: 200, friction: 20 } });
      } else {
        api.start({ opacity: 0, transform: 'translateY(50px)', config: { mass: 1, tension: 200, friction: 20 } });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [api]);

  return (
    <animated.div ref={ref} style={style} className="scroll-animation">
      <h2>Scroll to see the animation</h2>
      <p>This is the animated content that will appear on scroll.</p>
    </animated.div>
  );
};

export default ScrollAnimation;
