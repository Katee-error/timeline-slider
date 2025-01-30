import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import type { Swiper as SwiperInterface } from "swiper/types";
import historicalData from "../../data/historical-data.json";
import "swiper/css";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "./events-wrapper.scss";

type ActivePeriod = {
  activePeriod: number;
};

export const EventsWrapper: React.FC<ActivePeriod> = ({ activePeriod }) => {
  const swiperRef = useRef<SwiperType>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const currentPeriod = historicalData.periods.find(
    (period) => period.id === activePeriod
  );

  return (
    <div className="events-wrapper">
      <div className="events-container">
        <Swiper
          className="custom-swiper"
          spaceBetween={0}
          slidesPerView={3}
          onBeforeInit={(swiper: SwiperInterface) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper: SwiperInterface) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {currentPeriod?.events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="event-card">
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-card-description">{event.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="slider-controls">
        {!isBeginning && (
          <button
            className="slider-button prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {!isEnd && (
          <button
            className="slider-button next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};
