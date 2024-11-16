import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const BACKEND_BASE_URL = "https://sigmacomputer.pythonanywhere.com"

const App = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [backendData, setBackendData] = useState(null)
  const fetchBackendData = async () => {
    let data = await fetch(BACKEND_BASE_URL+"/site/data");
    setBackendData(await data.json())
  }

  useEffect(() => {
    setLandingPageData(JsonData);
    fetchBackendData()
  }, []);

  if (landingPageData == null || backendData == null){
    return <div></div>
  }

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} aboutUs={backendData?.about_us} />
      <Services data={backendData?.courses.map(item => {
        return {
          "name": item.title,
        }
      })} />
      <Gallery data={backendData?.gallery.map((item) => {
        return {
          title: item.title,
          largeImage: item.image,
          smallImage: item.image
        }
      })} />
      <Testimonials data={backendData?.client.map(item => {
        return {
          img: item.image,
          name: item.name,
          text: item.comment
        }
      })} />
      <Team data={backendData.team} />
      <Contact data={{
        actionURL: BACKEND_BASE_URL+"/api/contact/",
        address: backendData.address,
        phone: backendData.phone_number,
        email: backendData.email,
        facebook: backendData.facebook,
        instagram: backendData.instagram,
        youtube: backendData.youtube,
        google_maps: backendData.google_maps
      }} />
    </div>
  );
};

export default App;
