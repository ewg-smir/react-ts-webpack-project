import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

interface AnimatedYearProps {
  targetYear: number;
  className: string;
}

const AnimatedYear: React.FC<AnimatedYearProps> = ({
  targetYear,
  className,
}) => {
  const [currentYear, setCurrentYear] = useState(targetYear);
  const animatedValue = useRef<{ year: number }>({ year: targetYear });
  const yearRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const startYear = animatedValue.current.year;
    gsap.set(animatedValue.current, { year: startYear });
    const tl = gsap.timeline({
      onComplete: () => setCurrentYear(targetYear),
      defaults: { ease: 'power2.inOut' },
    });
    tl.to(
      animatedValue.current,
      {
        year: targetYear,
        duration: 1.0,
        onUpdate: () => {
          setCurrentYear(Math.round(animatedValue.current.year));
        },
      },
      0,
    );

    tl.fromTo(
      yearRef.current,
      { scale: 1 },
      {
        scale: 1.05,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut',
      },
      0,
    );
    return () => {
      tl.kill();
    };
  }, [targetYear, className]);

  return (
    <span ref={yearRef} className={className}>
      {currentYear}
    </span>
  );
};

export default AnimatedYear;
