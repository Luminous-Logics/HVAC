import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/images/logo-white.svg";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Send Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s0zuqcu",
        "template_di3n5wr",
        formData,
        "ZzC2Nh_257Fqy2DBo"
      )
      .then((result) => {
        // Show success toast
        toast.success("Email sent successfully!");

        // Reset form fields
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      })
      .catch((error) => {
        // Show error toast
        toast.error("Failed to send email. Please try again!");
      });
  };

  return (
    <>
      <ToastContainer />
      {/* Modal */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex flex-wrap p-0">
              <button
                type="button"
                className="close button-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>

              {/* Left Section */}
              <div className="col-md-8 p-10">
                <h4 className="mb-2 primary-text">No Spamming!</h4>
                <h5 className="primary-text fs-2">Please leave your details</h5>
                <p className="mb-2 primary-text fs-2 cont-sub">
                  We will be on your side soon :)
                </p>
                <form onSubmit={sendEmail}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control border-radius-10"
                      placeholder="Your Name*"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className="form-control border-radius-10"
                      placeholder="Contact Number*"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control border-radius-10"
                      placeholder="Email*"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control border-radius-10"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button
                    data-dismiss="contactModal"
                    type="submit"
                    className="btn bg-btn-primarycl w-100 border-radius-10"
                    data-bs-dismiss="modal"
                  >
                    Submit <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              </div>

              {/* Right Section */}
              <div className="col-md-4 bg-primary text-white p-4 mob-hidden">
                <div>
                  <img className="logo-main" src={logo} alt="Sabah Hvac" />
                </div>
                <div className="d-flex flex-column justify-content-between mt-100">
                  <div className="d-flex">
                    <div>
                      <Icon
                        icon="heroicons:map-pin-16-solid"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="data-contact">
                      <p className="mb-1 contact-p">
                        Faisal Al Omar Complex, Al Othman Street, Kuwait City,
                        Hawally.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mt-4">
                    <div>
                      <Icon
                        icon="fluent:call-24-filled"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="data-contact">
                      <p className=" mb-0">Contact Us</p>
                      <p>+965 60353965</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
