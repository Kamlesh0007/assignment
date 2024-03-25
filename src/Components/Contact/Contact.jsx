import React, { useState } from "react";
import { Link } from "react-router-dom";
import callIcon from "/assets/img/icon/call.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null, // Clear previous errors when input changes
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = "Invalid phone number format";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit data
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      // Form has errors, display error messages
      setFormErrors(errors);
    }
  };

  return (
    <div
      className="contact-area contact-page overflow-hidden default-padding"
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-tact-stye-one col-lg-5 pr-50 pr-md-15 pr-xs-15">
            <div className="contact-style-one-info">
              <div className="top-info">
                <h2 className="gradient-text">Let's Talk</h2>
                <div className="call">
                  <img src={callIcon} alt="Call Icon" />
                  <Link className="phone-link" to="tel:+4733378901">
                    +4733378901
                  </Link>
                </div>
              </div>
              {/* Display success message */}
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
              <ul className="contact-address">
                <li>
                  <div className="info">
                    <h4>Location</h4>
                    <p>
                      55 Main Street, The Grand Avenue <br /> 2nd Block, New
                      York City
                    </p>
                  </div>
                </li>
                <li>
                  <div className="info">
                    <h4>Official Email</h4>
                    <Link to="mailto:info@digital.com.com">
                      info@digital.com
                    </Link>
                  </div>
                </li>
              </ul>
              <p className="copyright">
                &copy; 2023 Ventix. All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-tact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15 mt-md-50 mt-xs-50">
            <div className="contact-form-style-one">
              <form
                onSubmit={handleSubmit}
                className="contact-form contact-form mt-30"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name*"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {/* Display name error */}
                      {formErrors.name && (
                        <span className="alert-error alert-msg">
                          {formErrors.name}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {/* Display email error */}
                      {formErrors.email && (
                        <span className="alert-error alert-msg">
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone*"
                        type="email"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {/* Display phone error */}
                      {formErrors.phone && (
                        <span className="alert-error alert-msg">
                          {formErrors.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group comments">
                      <textarea
                        className="form-control"
                        id="comments"
                        name="message"
                        placeholder="Tell Us About Project *"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {formErrors.message && (
                        <span className="alert-error alert-msg">
                          {formErrors.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button type="submit" name="submit" id="submit">
                      <FontAwesomeIcon icon={faPaperPlane} /> Get in Touch
                    </button>
                  </div>
                </div>
                {/* Alert Message */}
                <div className="col-lg-12 alert-notification">
                  <div id="message" className="alert-msg"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
