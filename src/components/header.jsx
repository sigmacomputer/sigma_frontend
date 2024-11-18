import React from "react";
import BG from "../intro-bg.jpg"

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro" style={{
        background: `url(${props.headerImage ? props.headerImage : BG}) center center no-repeat`
      }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={{
                  fontSize: "1rem !important"
                }}>
                  {props.headerTitle ? props.headerTitle : props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
