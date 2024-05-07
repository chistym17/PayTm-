import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SlideInFromRight = ({ children, duration = 500}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          } else {
            setShouldAnimate(false);
          }
        });
      },
      { threshold: 0.5 } // Change the threshold as needed
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '50%',
      }}
    >
      <div
        style={{
          transition: `transform ${duration}ms ease-in-out`,
          transform: shouldAnimate ? 'translateX(0)' : 'translateX(100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

SlideInFromRight.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

export default SlideInFromRight;
