import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    if (name == "phone"){
      const errorMessage = document.getElementById("error-message");
      if (!e.target.validity.valid) {
        errorMessage.textContent = "Please enter a valid 10-digit phone number.";
      } else {
        errorMessage.textContent = "";
      }
    }
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    let res = await fetch(props.data.actionURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message, phone })
    })
    
    if (res?.ok){
      alert("Message sent successfully")
      e.target.reset()
    }

    clearState()
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone number"
                        required
                        pattern="[0-9]{10}"
                        onChange={handleChange}
                      />
                      <span id="error-message" style={{color: "red", fontWeight: "bolder"}}></span>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        // required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.google_maps : "/"}>
                      <i className="fa fa-map-marker"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Sigma Computer. Developed with ❤️ by{" "}
            <a href="https://www.instagram.com/henish.patel.77/" target="_blank">
              Henish Patel
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
