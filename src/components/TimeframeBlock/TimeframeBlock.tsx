import React, { useState, useCallback, useMemo } from 'react';
import { mockData, Timeframe } from '../data/data';
import EventsSlider from '../EventsSlider/EventsSlider';
import CircleNavigator from '../CircleNavigator/CircleNavigator';
import AnimatedYear from '../AnimatedYear/AnimatedYear';
import styles from './TimeframeBlock.module.scss';

interface TimeframeWithSegment extends Timeframe {
  segmentNumber: number;
}

const TimeframeBlock: React.FC = () => {
  const [activeTimeframeIndex, setActiveTimeframeIndex] = useState(0);

  const sortedData: TimeframeWithSegment[] = useMemo(() => {
    return [...mockData]
      .sort((a, b) => a.startYear - b.startYear)
      .map((item, index) => ({
        ...item,
        segmentNumber: index + 1,
      }));
  }, []);

  const data = sortedData;

  const activeTimeframe = useMemo(
    () => data[activeTimeframeIndex],
    [data, activeTimeframeIndex],
  );

  const handleTimeframeChange = useCallback((index: number) => {
    setActiveTimeframeIndex(index);
  }, []);

  return (
    <div className={styles.timeframeBlock}>
      <h1 className={styles.title}>Исторические даты</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.yearsContainer}>
          <AnimatedYear
            targetYear={activeTimeframe.startYear}
            className={styles.startYear}
          />
          <AnimatedYear
            targetYear={activeTimeframe.endYear}
            className={styles.endYear}
          />
        </div>
        <CircleNavigator
          data={data}
          activeIndex={activeTimeframeIndex}
          onTimeframeChange={handleTimeframeChange}
        />
      </div>
      <EventsSlider key={activeTimeframe.id} events={activeTimeframe.events} />
    </div>
  );
};

export default TimeframeBlock;
