import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import images from "../assets/images";
import ScheduleServiceLink from "../components/ScheduleServiceLink";

const SwimmingpoolTab = () => {
  const tabData = [
    {
      id: "swimmingpool-services",
      title: "AC",
      heading: "Swimming Pool Services",
      image: images.swimmingpool,
      subDetails: [
        {
          heading: "Swimming Pool Construction",
          content:
            "We specialize in building swimming pools tailored to your unique needs and preferences. Whether you want a residential, commercial, or recreational pool, we ensure quality craftsmanship and adherence to international standards.",
        },
        {
          heading: "Installation",
          content:
            "From pool liners to advanced filtration systems, our team ensures flawless installation of all pool components. Our expertise guarantees that your pool operates efficiently and reliably.",
        },
        {
          heading: "Custom Pool Design",
          content:
            "Our design team brings your vision to life with creative, aesthetic, and functional swimming pool designs. From infinity pools to kid-friendly recreational designs, we work closely with clients to achieve their dream pool.",
        },
        {
          heading: "Pump System Installation",
          content:
            "The heart of any swimming pool is its pump system. We provide top-notch installation and integration of pumps and associated plumbing, ensuring optimal water circulation and filtration.",
        },
        {
            heading: "Swimming Pool Maintenance",
            content:
              "Regular maintenance is essential for a clean and safe swimming pool. Our services include water quality testing, cleaning, equipment checks, and repair work to keep your pool in pristine condition.",
          },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="swiper-tabs-container container">
    

      {/* Swiper Content */}
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        navigation={false}
        onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
        initialSlide={activeTab}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Delay in milliseconds
          disableOnInteraction: false, // Keep autoplay active after user interaction
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {tabData.map((tab, index) => (
          <SwiperSlide key={index}>
            <div className={`tab-pane fade ${activeTab === index ? "active show" : ""}`} id={tab.id} role="tabpanel" aria-labelledby={`${tab.id}-tab`}>
              <div className="row">
                <div className="col-md-4">
                  <div className="feature-img" data-aos="fade-up" data-aos-delay="300" >
                    <img src={tab.image} alt="Sabah hvac" className="img-fluid" style={{borderRadius:'10px'}} />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="features-detail">
                    <h1 data-aos="fade-up" data-aos-delay="300">{tab.heading}</h1>
                    <div className="row">
                      {tab.subDetails.map((detail, i) => (
                        <div className="col-md-6" key={i}>
                          <div className="sub-details">
                            <h5 data-aos="fade-up" data-aos-delay="300">{detail.heading}</h5>
                            <p data-aos="fade-up" data-aos-delay="300">{detail.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                      <ScheduleServiceLink modalTarget="#contactModal">Schedule a Service</ScheduleServiceLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default SwimmingpoolTab;
