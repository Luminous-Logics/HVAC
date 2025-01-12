import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import images from '../assets/images';
import ScheduleServiceLink from './ScheduleServiceLink';

const HeroSection = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="hero">
        <img src={images.herohvac} alt="sabah hvac" data-aos="fade-in" />
        <div className="container d-flex flex-column align-items-center mt-25">
          <p data-aos="fade-up" data-aos-delay="200">From Climate Control to Swimming Pools, Electrical Works, and Beyond</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-2 text-center">Creating Comfort, Efficiency, & Elegance</h2>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <ScheduleServiceLink modalTarget="#contactModal">Schedule a Service</ScheduleServiceLink>
          </div>
        </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide className="hero">
        <img src={images.heroswimming} alt="sabah hvac" data-aos="fade-in" />
        <div className="container d-flex flex-column align-items-center mt-25">
          <p data-aos="fade-up" data-aos-delay="200">From Climate Control to Swimming Pools, Electrical Works, and Beyond</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-2 text-center">Creating Comfort, Efficiency, & Elegance</h2>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <ScheduleServiceLink modalTarget="#contactModal">Schedule a Service</ScheduleServiceLink>
          </div>
        </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide className="hero">
        <img src={images.heroelectric} alt="sabah hvac" data-aos="fade-in" />
        <div className="container d-flex flex-column align-items-center mt-25">
          <p data-aos="fade-up" data-aos-delay="200">From Climate Control to Swimming Pools, Electrical Works, and Beyond</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-2 text-center">Creating Comfort, Efficiency, & Elegance</h2>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <ScheduleServiceLink modalTarget="#contactModal">Schedule a Service</ScheduleServiceLink>
          </div>
        </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide className="hero">
        <img src={images.hertrade} alt="sabah hvac" data-aos="fade-in" />
        <div className="container d-flex flex-column align-items-center mt-25">
          <p data-aos="fade-up" data-aos-delay="200">From Climate Control to Swimming Pools, Electrical Works, and Beyond</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-2 text-center">Creating Comfort, Efficiency, & Elegance</h2>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <ScheduleServiceLink modalTarget="#contactModal">Schedule a Service</ScheduleServiceLink>
          </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default HeroSection;
