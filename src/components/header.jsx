import React from "react";
import BG from "../intro-bg.jpg"

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro" style={{
        background: `url(${props.headerImage ? props.headerImage : BG}) center center no-repeat`,
        backgroundSize: "cover",
        width: "100%",
        backgroundColor: "#e5e5e5",
        WebkitBackgroundSize: "cover",
        padding: 0,
        display: "table"
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
