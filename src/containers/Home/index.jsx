import React,{useState} from "react";
import images from "../../assets/images";
import TabComponent from "../../components/TabComponent";
import ContactModal from "../../components/ContactModal";
import ScheduleServiceLink from '../../components/ScheduleServiceLink'; // Default import
import ScrollButton from "../../components/ScrollButton";
import BlogSwiper from "../../components/BlogSwipper";
import PhoneComponent from "../../components/PhoneComponent";
import HVACSwiper from "../../components/HvacSwipper";
import ServiceTabs from "../../components/ServiceTabs";
import SwimmingpoolTab from "../../components/SwimmingpoolTab";
import ElectricalTab from "../../components/ElectricalTab";
import TradingTab from "../../components/TradingTab";

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

      <section id="hero" className="hero section dark-background">
        <img src={images.heroimage} alt="sabah hvac" data-aos="fade-in" />
        <div className="container d-flex flex-column align-items-center mt-25">
          <p data-aos="fade-up" data-aos-delay="200">From Climate Control to Swimming Pools, Electrical Works, and Beyond</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="mt-2 text-center">Creating Comfort, Efficiency, & Elegance</h2>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <ScheduleServiceLink modalTarget="#contactModal">Schedule a Service</ScheduleServiceLink>
          </div>
        </div>
      </section>
     

      {/* Expert HVAC Solutions */}

      <HVACSwiper />
      {/* <section id="hvacsolutions" className="services-2 section light-background">
        
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
      </section> */}
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
         <div className='container mt-4'>
           {/* Row with columns */}
           <div className="row" id="servicetabs">
               {/* Tab Button for Home */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
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
             <div className="col-md-6">
               {/* Tab Button for swimming */}
               <div className="sabah-box position-relative d-flex align-items-end" id="pills-swimming-tab"  role="tab" aria-controls="pills-swimming" aria-selected={activeTab === 'swimming'}   onClick={() => handleTabClick('swimming')}>
                               <div className="hover-absolute-middle">
                                 <img src={images.swimming} alt="team" className="service-img image"/>
                               </div>
                               <div className="sabah-content">
                                 <h5>Swimming</h5>
                                 <p className="wit-60">Explore our comprehensive services designed to keep your spaces comfortable, energy-efficient, and worry-free all year round. We’ve got you covered with solutions tailored to your needs </p>
                               </div>
                   </div>
             </div>
             <div className="col-6 mt-4">
              {/* Tab Button for swimming */}
              <div className="sabah-box position-relative d-flex align-items-end" id="pills-electrical-tab"  role="tab" aria-controls="pills-electrical" aria-selected={activeTab === 'electrical'}   onClick={() => handleTabClick('electrical')}>
                               <div className="hover-absolute-middle">
                                 <img src={images.electrical} alt="team" className="service-img image"/>
                               </div>
                               <div className="sabah-content">
                                 <h5>Electrical</h5>
                                 <p className="wit-60">Explore our comprehensive services designed to keep your spaces comfortable, energy-efficient, and worry-free all year round. We’ve got you covered with solutions tailored to your needs </p>
                               </div>
                   </div>
             </div>
             <div className="col-6 mt-4">
              {/* Tab Button for swimming */}
              <div className="sabah-box position-relative d-flex align-items-end" id="pills-trading-tab"  role="tab" aria-controls="pills-trading" aria-selected={activeTab === 'trading'}   onClick={() => handleTabClick('trading')}>
                               <div className="hover-absolute-middle">
                                 <img src={images.trading} alt="team" className="service-img image"/>
                               </div>
                               <div className="sabah-content">
                                 <h5>Trading</h5>
                                 <p className="wit-60">Explore our comprehensive services designed to keep your spaces comfortable, energy-efficient, and worry-free all year round. We’ve got you covered with solutions tailored to your needs </p>
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
                  <p className="why-para" data-aos="fade-up" data-aos-delay="200">"At Al Sabah, we deliver end-to-end electrical solutions that cater to residential,
commercial, and industrial needs. Whether it’s new installations, upgrades, or
repairs, our team ensures top-notch quality, safety, and reliability in every project.</p>
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
                  <p className="why-para" data-aos="fade-up" data-aos-delay="200">"Explore our wide range of trading solutions designed to provide you with top-quality
products across various industries. With a commitment to excellence, we bridge the
gap between quality and affordability.</p>
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
