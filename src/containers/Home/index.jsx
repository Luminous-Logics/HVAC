import React, { useState } from "react";
import images from "../../assets/images";
import TabComponent from "../../components/TabComponent";
import ContactModal from "../../components/ContactModal";
import ScrollButton from "../../components/ScrollButton";
import BlogSwiper from "../../components/BlogSwipper";
import PhoneComponent from "../../components/PhoneComponent";
import HVACSwiper from "../../components/HvacSwipper";
import SwimmingpoolTab from "../../components/SwimmingpoolTab";
import ElectricalTab from "../../components/ElectricalTab";
import TradingTab from "../../components/TradingTab";
import HeroSection from "../../components/HeroSection";

const Home = () => {
  const blogs = [
    {
      image: images.blog1,
      title: 'Top 5 Tips for Preparing Your HVAC System for Winter',
    },
    {
      image: images.blog2,
      title: 'How Smart Thermostats Save Money and Energy',
    },
    {
      image: images.blog3,
      title: "Signs It's Time to Replace Your Air Conditioner",
    },
    {
      image: images.blog4,
      title: 'The Benefits of Regular Duct Cleaning',
    },
  ];
  const [activeTab, setActiveTab] = useState('hvac');
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* <section id="hero" className="hero section dark-background">
        <img src={images.heroimage} alt="sabah hvac" data-aos="fade-in" />
        <div className="container d-flex flex-column align-items-center mt-25">
          <p data-aos="fade-up" data-aos-delay="200">From Climate Control to Swimming Pools, Electrical Works, and Beyond</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-2 text-center">Creating Comfort, Efficiency, & Elegance</h2>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <ScheduleServiceLink modalTarget="#contactModal">Schedule a Service</ScheduleServiceLink>
          </div>
        </div>
      </section> */}
     

      {/* Expert HVAC Solutions */}

      <HVACSwiper />

      {/* Why Sabah? */}
      <section id="why-sabah" className="services-2 section light-background">
      <img src={images.doodlebg} alt="doodle" className="doodle-bg"/>
        <div className="container">
          <div className="row">
            <p data-aos="fade-up" data-aos-delay="200">Why Al Sabah?</p>
            <div className="col-md-9 col-sm-12 position-relative">
              <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Experience the Difference</h2>
              <p className="why-para" data-aos="fade-up" data-aos-delay="200">
                Al Sabah HVAC Solutions is a licensed HVAC service provider established to meet Kuwait’s growing demand for high-quality, reliable HVAC systems. With a vision for expansion into international markets, we are committed to delivering excellence
                in every project we undertake
              </p>
            </div>
            <div className="col-md-3">
                <PhoneComponent />
            </div>
          </div>
          <div className="row gy-4 mt-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="sabah-box d-flex position-relative">
                <h1>Why Choose Us</h1>
                <div className="hover-absolute">
                  <img src={images.union} alt="union" className="service-img image" />
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="sabah-box position-relative d-flex align-items-end">
                <div className="hover-absolute-top">
                  <img src={images.team} alt="team" className="service-img image"/>
                </div>
                <div className="sabah-content">
                  <h5>Expert Team</h5>
                  <p className="wit-80">Decades of combined experience in the design, installation, and maintenance of HVAC systems, swimming pool solutions, and electrical works, ensuring top-notch quality in every project.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
              <div className="sabah-box position-relative d-flex align-items-end">
                <div className="hover-absolute-top">
                  <img src={images.end} alt="End-to-End Solution" className="service-img image"/>
                </div>
                <div className="sabah-content">
                  <h5>End-to-End Solutions</h5>
                  <p>From installation to after-sales support, we cover all your needs in HVAC systems, swimming pool setups, and electrical works, delivering seamless and reliable services.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div className="sabah-box position-relative d-flex align-items-end justify-content-start">
                <div className="hover-absolute-top">
                  <img src={images.customer} alt="Customer-Centric Approach" className="service-img image"/>
                </div>
                <div className="sabah-content">
                  <h5>Customer-Centric Approach</h5>
                  <p className="wit-80">Tailored services to meet unique customer requirements</p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="sabah-box position-relative d-flex align-items-end">
                <div className="hover-absolute-top">
                  <img src={images.future} alt="Future-Ready" className="service-img image"/>
                </div>
                <div className="sabah-content">
                  <h5>Future-Ready</h5>
                  <p>Adapting to industry advancements, we are preparing for global trade and exports in HVAC products, swimming pool solutions, and electrical systems, offering sustainable and innovative services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <section id="features" className="features section">
      <div className="container">
              <div className="row">
                <p data-aos="fade-up" data-aos-delay="200">Experience the Future of Comfort</p>
                <div className="col-md-9 col-sm-12">
                  <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Explore our Services</h2>
                </div>
              </div>
            </div>             
         <div className='container'>
           {/* Row with columns */}
           <div className="row" id="servicetabs">
               {/* Tab Button for Home */}
                <div className="col-md-6 mt-4" data-aos="fade-left" data-aos-delay="300">
                   <div className="sabah-box position-relative d-flex align-items-end" id="pills-hvac-tab"  role="tab" aria-controls="pills-hvac" aria-selected={activeTab === 'hvac'}   onClick={() => handleTabClick('hvac')}>
                          <div className="hover-absolute-middle">
                              <img src={images.hvac} alt="team" className="service-img image"/>
                          </div>
                          <div className="sabah-content">
                              <h5>HVAC</h5>
                              <p className="wit-60">Explore our comprehensive services designed to keep your spaces comfortable, energy-efficient, and worry-free all year round. We’ve got you covered with solutions tailored to your needs </p>
                           </div>
                     </div>
             </div>
             <div className="col-md-6 mt-4" data-aos="fade-right" data-aos-delay="300">
               {/* Tab Button for swimming */}
               <div className="sabah-box position-relative d-flex align-items-end" id="pills-swimming-tab"  role="tab" aria-controls="pills-swimming" aria-selected={activeTab === 'swimming'}   onClick={() => handleTabClick('swimming')}>
                               <div className="hover-absolute-middle">
                                 <img src={images.swimming} alt="team" className="service-img image"/>
                               </div>
                               <div className="sabah-content">
                                 <h5>Swimming</h5>
                                 <p className="wit-60">Dive into our top-notch services designed to make your swimming experience safe, clean, and enjoyable. From maintenance to custom solutions, we ensure your pool stays in perfect condition, so you can swim worry-free all year round.</p>
                               </div>
                   </div>
             </div>
             <div className="col-md-6 mt-4" data-aos="fade-left" data-aos-delay="300">
              {/* Tab Button for swimming */}
              <div className="sabah-box position-relative d-flex align-items-end" id="pills-electrical-tab"  role="tab" aria-controls="pills-electrical" aria-selected={activeTab === 'electrical'}   onClick={() => handleTabClick('electrical')}>
                               <div className="hover-absolute-middle">
                                 <img src={images.electrical} alt="team" className="service-img image"/>
                               </div>
                               <div className="sabah-content">
                                 <h5>Electrical</h5>
                                 <p className="wit-60">Power up your spaces with our reliable and energy-efficient electrical services. From installations to maintenance, we deliver customized solutions to keep your systems safe, functional, and future-ready. Trust us for a hassle-free experience!</p>
                               </div>
                   </div>
             </div>
             <div className="col-md-6 mt-4" data-aos="fade-right" data-aos-delay="300">
              {/* Tab Button for swimming */}
              <div className="sabah-box position-relative d-flex align-items-end" id="pills-trading-tab"  role="tab" aria-controls="pills-trading" aria-selected={activeTab === 'trading'}   onClick={() => handleTabClick('trading')}>
                               <div className="hover-absolute-middle">
                                 <img src={images.trading} alt="team" className="service-img image"/>
                               </div>
                               <div className="sabah-content">
                                 <h5>Trading</h5>
                                 <p className="wit-60">Explore our innovative trading solutions crafted to maximize your potential and minimize risks. Whether you're a seasoned trader or just starting, we provide tools, insights, and support tailored to your goals for consistent success in the markets.</p>
                               </div>
                   </div>
             </div>
           </div>
       
           {/* Tab Content */}
           <div className="tab-content" id="pills-tabContent">
             <div className={`tab-pane fade ${activeTab === 'hvac' ? 'show active' : ''}`} id="pills-hvac" role="tabpanel" aria-labelledby="pills-hvac-tab" >
             <div className="container">
              <div className="row">
                <p data-aos="fade-up" data-aos-delay="200">Our Complete HVAC Solutions</p>
                <div className="col-md-9 col-sm-12">
                  <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Your Comfort, Our Expertise</h2>
                  <p className="why-para" data-aos="fade-up" data-aos-delay="200">Explore our comprehensive services designed to keep your spaces comfortable, energy-efficient, and worry-free all year round. We’ve got you covered with solutions tailored to your needs.</p>
                </div>
                <div className="col-md-3">
                <PhoneComponent />
                </div>
              </div>
            </div>                       
             <TabComponent />
             </div>
             <div className={`tab-pane fade ${activeTab === 'swimming' ? 'show active' : ''}`} id="pills-swimming" role="tabpanel" aria-labelledby="pills-swimming-tab">
             <div className="container">
              <div className="row">
                <p data-aos="fade-up" data-aos-delay="200">Crafting Relaxation, One Pool at a Time</p>
                <div className="col-md-9 col-sm-12">
                  <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Dive into Luxury with Swimming Pool Solutions</h2>
                  <p className="why-para" data-aos="fade-up" data-aos-delay="200"> Al-Sabah Kuwait is your trusted partner for all swimming pool needs. With expertise in every aspect of swimming pool construction, installation, design, and maintenance, we ensure you enjoy a seamless experience from start to finish.</p>
                </div>
                <div className="col-md-3">
                <PhoneComponent />
                </div>
              </div>
            </div>           
               <SwimmingpoolTab />
             </div>
             <div className={`tab-pane fade ${activeTab === 'electrical' ? 'show active' : ''}`} id="pills-electrical"  role="tabpanel" aria-labelledby="pills-electrical-tab">
             <div className="container">
              <div className="row">
                <p data-aos="fade-up" data-aos-delay="200">Powering Projects with Safety and Precision</p>
                <div className="col-md-9 col-sm-12">
                  <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Comprehensive Electrical Solutions for Every Need</h2>
                  <p className="why-para" data-aos="fade-up" data-aos-delay="200">"At Al Sabah, we deliver end-to-end electrical solutions that cater to residential, commercial, and industrial needs. Whether it’s new installations, upgrades, or repairs, our team ensures top-notch quality, safety, and reliability in every project.</p>
                </div>
                <div className="col-md-3">
                <PhoneComponent />
                </div>
              </div>
            </div>         
              <ElectricalTab />
             </div>
             <div className={`tab-pane fade ${activeTab === 'trading' ? 'show active' : ''}`} id="pills-trading" role="tabpanel" aria-labelledby="pills-trading-tab">
             <div className="container">
              <div className="row">
                <p data-aos="fade-up" data-aos-delay="200">Quality Products, Exceptional Value</p>
                <div className="col-md-9 col-sm-12">
                  <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Your Trusted Trading Partner</h2>
                  <p className="why-para" data-aos="fade-up" data-aos-delay="200">"Explore our wide range of trading solutions designed to provide you with top-quality products across various industries. With a commitment to excellence, we bridge the gap between quality and affordability.</p>
                </div>
                <div className="col-md-3">
                <PhoneComponent />
                </div>
              </div>
            </div>    
            <TradingTab />
             </div>
           </div>
         </div>

        
        {/* <img src={images.doodlebg} alt="" className="doodle-bg" data-aos="zoom-in"/> */}

      </section>

      <section id="blogs" className="blogs section light-background">
        <div className="container">
          <div className="row">
            <p data-aos="fade-up" data-aos-delay="200">Blogs</p>
            <div className="col-md-9 col-sm-12">
              <h2 data-aos="fade-up" data-aos-delay="200" className="mt-2 hvac-heading">Experience the Difference</h2>
              <p className="why-para" data-aos="fade-up" data-aos-delay="200">Expert Advice, Seasonal Tips, and the Latest in HVAC Innovations to Keep You Comfortable</p>
            </div>
            <div className="col-md-3 align-content-center">
            <PhoneComponent />
            </div>
          </div>
        </div>

        <BlogSwiper blogs={blogs} />
        <img src={images.doodlebg} alt="doodle" className="doodle-bg" data-aos="zoom-in"/>

      </section>
      <ScrollButton />
      <ContactModal />
    </>
  );
};

export default Home;
