import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import images from "../assets/images";
import ScheduleServiceLink from "../components/ScheduleServiceLink";

const ElectricalTab = () => {
  const tabData = [
    {
      id: "electrical-services",
      title: "Service Segments",
      heading: "Electrical Work",
      image: images.electric,
      subDetails: [
        {
          heading: "Electrical System Installations",
          content:
            "Full-scale installation of electrical systems for homes, offices, commercial buildings, and industrial facilities.",
        },
        {
          heading: "Wiring and Rewiring Services",
          content:
            "Safe and efficient wiring or rewiring for new constructions, renovations, or system upgrades.",
        },
        {
          heading: "Electrical Repairs and Troubleshooting",
          content:
            "Quick and reliable repair services to fix faults and ensure seamless electrical performance.",
        },
        {
          heading: "Lighting Solutions",
          content:
            "Design and installation of energy-efficient indoor and outdoor lighting systems, including LED retrofits.",
        },
        {
            heading: "Maintenance Contracts",
            content:
              "Scheduled maintenance services to prevent disruptions and ensure long-term performance.",

          },
          {
            heading: "Safety Compliance Upgrades",
            content:
              "Ensuring your systems comply with the latest electrical safety codes and standards.",

          },
          {
            heading: "Backup Power Systems",
            content:
              "Installation and maintenance of UPS systems, generators, and renewable energy solutions.",

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

export default ElectricalTab;
