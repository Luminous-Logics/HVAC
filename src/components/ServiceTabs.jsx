import React, { useState } from 'react';
import images from "../assets/images";

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('hvac');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='container'>
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
      <div className="col-6">
        {/* Tab Button for Profile */}
        <div className="sabah-box position-relative d-flex align-items-end" id="pills-swimming-tab"  role="tab" aria-controls="pills-swimming" aria-selected={activeTab === 'swimming'}   onClick={() => handleTabClick('swimming')}>
                        <div className="hover-absolute-middle">
                          <img src={images.hvac} alt="team" className="service-img image"/>
                        </div>
                        <div className="sabah-content">
                          <h5>Swimming</h5>
                          <p className="wit-60">Explore our comprehensive services designed to keep your spaces comfortable, energy-efficient, and worry-free all year round. We’ve got you covered with solutions tailored to your needs </p>
                        </div>
            </div>
      </div>
      <div className="col-6">
        {/* Tab Button for Contact */}
        <button
          className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
          id="pills-contact-tab"
          onClick={() => handleTabClick('contact')}
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected={activeTab === 'contact'}
        >
          Contact
        </button>
      </div>
      <div className="col-6">
        {/* Additional content or placeholder for other items */}
        {/* You can add more content here as needed */}
      </div>
    </div>

    {/* Tab Content */}
    <div className="tab-content" id="pills-tabContent">
      <div
        className={`tab-pane fade ${activeTab === 'hvac' ? 'show active' : ''}`}
        id="pills-hvac"
        role="tabpanel"
        aria-labelledby="pills-hvac-tab"
      >
        <p>hvac Content</p>
      </div>
      <div
        className={`tab-pane fade ${activeTab === 'swimming' ? 'show active' : ''}`}
        id="pills-swimming"
        role="tabpanel"
        aria-labelledby="pills-swimming-tab"
      >
        <p>swimming Content</p>
      </div>
      <div
        className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
      >
        <p>Contact Content</p>
      </div>
    </div>
  </div>
  );
};

export default ServiceTabs;
