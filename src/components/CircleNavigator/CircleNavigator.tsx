import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { Timeframe } from '../data/data';
import styles from './CircleNavigator.module.scss';
import { gsap } from 'gsap';

interface TimeframeWithSegment extends Timeframe {
  segmentNumber: number;
}

interface CircleNavigatorProps {
  data: TimeframeWithSegment[];
  activeIndex: number;
  onTimeframeChange: (index: number) => void;
}

const CircleNavigator: React.FC<CircleNavigatorProps> = ({
  data,
  activeIndex,
  onTimeframeChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const angleStep = 360 / data.length;
  const effectiveRadius = 250;
  const totalSegments = data.length;
  const TARGET_ANGLE = -45;
  const INITIAL_OFFSET = 0;
  const DESIRED_TILT = -5;

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + totalSegments) % totalSegments;
    onTimeframeChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % totalSegments;
    onTimeframeChange(newIndex);
  };

  useLayoutEffect(() => {
    const currentActiveAngle = activeIndex * angleStep + INITIAL_OFFSET;
    const requiredRotation = TARGET_ANGLE - currentActiveAngle;
    gsap.to(circleRef.current, {
      rotation: requiredRotation,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  }, [activeIndex, angleStep]);

  useEffect(() => {
    const currentActiveAngle = activeIndex * angleStep + INITIAL_OFFSET;
    const targetRotationCircle = TARGET_ANGLE - currentActiveAngle;

    if (circleRef.current) {
      const wrappers = gsap.utils.toArray(
        circleRef.current.querySelectorAll(`.${styles.numberWrapper}`),
      );
      gsap.to(wrappers, {
        rotation: (i) => {
          const initialPointAngle = i * angleStep + INITIAL_OFFSET;
          return -(targetRotationCircle + initialPointAngle) + DESIRED_TILT;
        },
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }
  }, [activeIndex, angleStep]);

  const currentIndexDisplay = String(activeIndex + 1).padStart(2, '0');
  const totalSegmentsDisplay = String(totalSegments).padStart(2, '0');

  return (
    <div ref={containerRef} className={styles.circleContainer}>
      <div className={styles.controlsWrapper}>
        <div className={styles.segmentCounter}>
          {currentIndexDisplay}/{totalSegmentsDisplay}
        </div>
        <div className={styles.navigationArrows}>
          <button className={styles.arrowButton} onClick={handlePrev}>
            &lt;
          </button>
          <button className={styles.arrowButton} onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
      <div ref={circleRef} className={styles.circle}>
        {data.map((timeframe, index) => {
          const initialAngle = index * angleStep + INITIAL_OFFSET;
          const isActive = index === activeIndex;
          return (
            <div
              key={timeframe.id}
              className={`${styles.point} ${isActive ? styles.active : ''}`}
              onClick={() => onTimeframeChange(index)}
              style={{
                transform: `rotate(${initialAngle}deg) translate(${effectiveRadius}px)`,
              }}
            >
              <div className={styles.dot}>
                <div
                  className={styles.numberWrapper}
                  style={{ transform: `scale(${isActive ? 1 : 0.8})` }}
                >
                  <div className={styles.segmentNumber}>
                    {timeframe.segmentNumber}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleNavigator;
