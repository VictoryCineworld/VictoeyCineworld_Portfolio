import React, { useState } from "react";
import Modal from "react-modal";
import heroVideo from "../../assets/logoanimation.mp4";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import Social from "../Social";

const heroContent = {
  heroVideo: heroVideo,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Victory Cineworld",
  heroDesignation: "Visual Storytellers",
  heroDescriptions: `Victory Cineworld delivers stunning visuals and compelling narratives. We specialize in crafting high-quality videos and designs that captivate your audience and drive results. From corporate videos to social media campaigns, we've got you covered. Let's create something extraordinary together.`,
  heroBtn: "more about us",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroVideo
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <div>
            {/* Mobile Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="d-sm-block d-lg-none"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Desktop Video */}
            <video
              className="col-lg-4 bg position-fixed d-none d-lg-block"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "34%",
                height: "89%",
                objectFit: "cover",
                top: 40,
                left: 36,
              }}
            />

            {/* Heading */}
            <h1
              className="text-uppercase poppins-font"
              style={{ fontSize: "2.8rem", fontWeight: "600" }} // Adjusted size
            >
              {heroContent.heroTitleName}
              <div>
                <span style={{ fontSize: "2rem", fontWeight: "600" }}>
                  {heroContent.heroDesignation}
                </span>
              </div>
            </h1>

            {/* Description */}
            <p className="open-sans-font ">{heroContent.heroDescriptions}</p>

            {/* Button */}
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
            
            
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          
            
          
          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>US</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              <Index />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
