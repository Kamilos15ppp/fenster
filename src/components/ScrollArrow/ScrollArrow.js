import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Wrapper } from './ScrollArrow.css';

function ScrollArrow() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const handleOnClick = () => window.scroll(0, 0);

  useEffect(() => {
    const element = ref.current;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 160) {
        gsap.to(element, { duration: 0.8, scale: 1 });
      } else if (window.scrollY < 160) {
        gsap.to(element, { duration: 0.8, scale: 0 });
      }
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <Wrapper ref={ref} onClick={handleOnClick}>
      <span>^</span>
    </Wrapper>
  );
}

export default ScrollArrow;
