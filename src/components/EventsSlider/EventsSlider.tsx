import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Event } from '../data/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './EventsSlider.module.scss';

interface EventsSliderProps {
  events: Event[];
}

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className={styles.slide}>
            <div className={styles.eventCard}>
              <h4 className={styles.eventDate}>{event.date}</h4>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsSlider;
