import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ScheduleServiceLink from './ScheduleServiceLink'; // Default import
import images from "../assets/images";


const HVACSwiper = () => {
 
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={false}
      pagination={{clickable:true}}
      autoplay={true}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
    >
      {/* Slide 1: Introductory Section */}
      <SwiperSlide>
         {/* Expert HVAC Solutions */}
              <section id="hvacsolutions" className="services-2 section light-background">
                
                <div className="container zin-dt">
                  <div className="row">
                    <p data-aos="fade-up" data-aos-delay="200">Experience the Future of Comfort</p>
                    <div className="col-md-9 col-sm-12">
                      <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Expert HVAC Solutions</h2>
                    </div>
                    <div className="col-md-3">
                      <div className="service-btn mt-3">
                      <ScheduleServiceLink modalTarget="#contactModal" className={"link-started"}>Schedule a Service</ScheduleServiceLink>
                      </div>
                    </div>
                    <div className="service-box align-items-center mt-2" data-aos="fade-up" data-aos-delay="200">
                      <ul>
                        <li>
                          <p>✅ Custom HVAC Design</p>
                          <p>✅ Energy-Efficient Solutions</p>
                        </li>
                        <li>
                          <p>✅ 24/7 Emergency Services</p>
                          <p>✅ Certified Technicians You Can Trust</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gy-4">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <h4 className="title">Residential</h4>
                          <div className="service-iconbottom">
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                              <ul>
                                <li><p><b>Installation </b>Central air conditioning systems, ductless systems, heat pumps, and more.</p></li>
                                <li><p><b>Maintenance & Repairs</b> Regular servicing and on-call repair for all HVAC systems.</p></li>
                                <li><p><b>Energy Efficiency Upgrades</b> Retrofitting older systems with energy-efficient components. </p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                     
                             
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.ResidentialImage} alt="Residential" className="service-img image" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <h4 className="title">Commercial</h4>
                          <div className="service-iconbottom">
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                              <ul>
                                <li><p><b>Customized Systems </b> Designing and installing systems for offices, malls, restaurants, and more.</p></li>
                                <li><p><b>Industrial Ventilation</b> Creating tailored solutions for warehouses, factories, and plants.</p></li>
                                <li><p><b>Maintenance Contracts</b> Comprehensive contracts to keep your systems running smoothly.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                     
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.CommercialImage} alt="Commercial" className="service-img image"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <div className="service-icontop">
                            <i className="bi bi-arrow-right"></i>
                          </div>
                          <h4 className="title data-bottom">Industrial</h4>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                            <ul>
                                <li><p><b>Large-Scale Systems</b> Installing and maintaining HVAC systems for industrial facilities.</p></li>
                                <li><p><b>Specialized Services</b> Process cooling, heating, and air quality management for specific industries.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.IndustrialImage} alt="Industrial" className="service-img image"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <div className="service-icontop"><i className="bi bi-arrow-right"></i></div>
                          <h4 className="title data-bottom">Consultancy</h4>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                            <ul>
                                <li><p><b>Expert advice </b>on selecting, upgrading or designing HVAC systems tailored to your needs.</p></li>
                                <li><p><b>Energy audits and sustainability</b> assessments for your HVAC systems.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                             
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.ConsultancyImage} alt="Consultancy"  className="service-img image"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={images.doodlebg} alt="doodle" className="doodle-bg" data-aos="zoom-in"/>
                <img src={images.spark} alt="spark doodle" className="spark" data-aos="zoom-out"/>
              </section>
   
      </SwiperSlide>

      {/* Slide 2: Swimming Pool Section */}
      <SwiperSlide className="bg-slider">
         {/* Expert HVAC Solutions */}
              <section id="swimmingpool" className="services-2 section light-background">
                
                <div className="container zin-dt">
                  <div className="row">
                    <p data-aos="fade-up" data-aos-delay="200">Dive into Excellence with Our Solutions</p>
                    <div className="col-md-9 col-sm-12">
                      <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Swimming Pool Services</h2>
                    </div>
                    <div className="col-md-3">
                      <div className="service-btn mt-3">
                      <ScheduleServiceLink modalTarget="#contactModal" className={"link-started"}>Schedule a Service</ScheduleServiceLink>
                      </div>
                    </div>
                    <div className="service-box align-items-center mt-2" data-aos="fade-up" data-aos-delay="200">
                      <ul>
                        <li>
                          <p>✅ Custom Pool Designs</p>
                          <p>✅ Reliable Pump System Installations</p>
                        </li>
                        <li>
                          <p>✅ Regular Maintenance Services</p>
                          <p>✅ Expert Construction & Installation</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gy-4">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <h4 className="title">Residential</h4>
                          <div className="service-iconbottom">
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                              <ul>
                                <li><p><b>Transform </b> your home into a haven with bespoke swimming pools designed to reflect your style and meet your needs.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                     
                             
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.ResidentialImage} alt="Residential" className="service-img image" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <h4 className="title">Commercial</h4>
                          <div className="service-iconbottom">
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                              <ul>
                                <li><p>From resorts to recreational centers, we deliver durable and efficient pool solutions for commercial properties.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                     
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.CommercialImage} alt="Commercial" className="service-img image"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <div className="service-icontop">
                            <i className="bi bi-arrow-right"></i>
                          </div>
                          <h4 className="title data-bottom">Industrial</h4>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                            <ul>
                                <li><p>Industrial-grade swimming pools, ensuring high performance and longevity for large-scale facilities.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.IndustrialImage} alt="Industrial" className="service-img image"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <div className="service-icontop"><i className="bi bi-arrow-right"></i></div>
                          <h4 className="title data-bottom">Consultancy</h4>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                            <ul>
                                <li><p>Our experts guide you at every step, from planning to execution, ensuring your vision becomes a reality.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                             
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.ConsultancyImage} alt="Consultancy"  className="service-img image"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={images.doodlebg} alt="doodle" className="doodle-bg" data-aos="zoom-in"/>
                <img src={images.spark} alt="spark doodle" className="spark" data-aos="zoom-out"/>
              </section>
   
      </SwiperSlide>

       {/* Slide 3: Residential Section */}
       <SwiperSlide>
         {/* Expert HVAC Solutions */}
              <section id="electricalwork" className="services-2 section light-background">
                
                <div className="container zin-dt">
                  <div className="row">
                    <p data-aos="fade-up" data-aos-delay="200">Powering Your Projects with Expert Electrical Solutions</p>
                    <div className="col-md-9 col-sm-12">
                      <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Electrical Works</h2>
                    </div>
                    <div className="col-md-3">
                      <div className="service-btn mt-3">
                      <ScheduleServiceLink modalTarget="#contactModal" className={"link-started"}>Schedule a Service</ScheduleServiceLink>
                      </div>
                    </div>
                    <div className="service-box align-items-center mt-2" data-aos="fade-up" data-aos-delay="200">
                      <ul>
                        <li>
                          <p>✅ Specialized Pool Electrical Services</p>
                          <p>✅ Full-Scale Electrical System Installations</p>
                        </li>
                        <li>
                          <p>✅ Maintenance & Repairs You Can Trust</p>
                          <p>✅ Premium Quality Electrical Materials</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row gy-4">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <h4 className="title">Residential</h4>
                          <div className="service-iconbottom">
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                              <ul>
                                <li><p>Safe and efficient electrical systems tailored for modern living spaces.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                     
                             
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.ResidentialImage} alt="Residential" className="service-img image" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <h4 className="title">Commercial</h4>
                          <div className="service-iconbottom">
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                              <ul>
                                <li><p>Comprehensive electrical solutions for offices, retail spaces, and other commercial properties.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                     
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.CommercialImage} alt="Commercial" className="service-img image"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <div className="service-icontop">
                            <i className="bi bi-arrow-right"></i>
                          </div>
                          <h4 className="title data-bottom">Industrial</h4>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                            <ul>
                                <li><p>Robust and scalable electrical systems for factories, plants, and large-scale projects.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.IndustrialImage} alt="Industrial" className="service-img image"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                      <div className="service-item d-flex position-relative h-100 residential-ser">
                        <div className="service-tittle">
                          <div className="service-icontop"><i className="bi bi-arrow-right"></i></div>
                          <h4 className="title data-bottom">Consultancy</h4>
                        </div>
                        <div className="service-details ">
                          <div className="card-service-details">
                            <div className="left-data">
                            <ul>
                                <li><p>Leverage our expertise for innovative and cost-effective electrical designs and implementations.</p></li>
                              </ul>
                            </div>
                            <div className="right-data d-block">
                            <ScheduleServiceLink modalTarget="#contactModal" className={"btn-started"}>Schedule a Service</ScheduleServiceLink>                             
                            </div>
                          </div>
                        </div>
                        <div className="hover-container">
                          <img src={images.ConsultancyImage} alt="Consultancy"  className="service-img image"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={images.doodlebg} alt="doodle" className="doodle-bg" data-aos="zoom-in"/>
                <img src={images.spark} alt="spark doodle" className="spark" data-aos="zoom-out"/>
              </section>
   
      </SwiperSlide>


    
    </Swiper>
  );
};

export default HVACSwiper;
