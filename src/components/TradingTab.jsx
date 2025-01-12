import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import images from "../assets/images";
import ScheduleServiceLink from "../components/ScheduleServiceLink";

const TradingTab = () => {
  const tabData = [
    {
      id: "trading-services",
      title: "Service Segments",
      heading: "Trading",
      image: images.trade,
      subDetails: [
        {
          heading: "HVAC Equipment Trading",
          content:
            "Offering reliable and high-performance HVAC equipment from leading brands.",
        },
        {
          heading: "Swimming Pool Accessories",
          content:
            "Supplying premium pool accessories and materials for every need.",
        },
        {
          heading: "Electrical Components",
          content:
            "A curated selection of top-grade electrical equipment and materials",
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

export default TradingTab;
