import React, { useState } from "react";
import Modal from "react-modal";
import heroVideo from "../../assets/logoanimation.mp4";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroVideo: heroVideo,
  //heroImage:"https://i.pinimg.com/474x/fb/d2/64/fbd264aee57005378e0204f2596c32ea.jpg",
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
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            {/* <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            /> */}

            <video
              autoPlay
              loop
              muted
              playsInline
              className="d-sm-block d-lg-none"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%", // Makes the video round
                objectFit: "cover", // Ensures the video fills the 300x300 area
              }}
            >
              <source src={heroVideo} type="video/mp4" />
              <source src="path/to/hero.webm" type="video/webm" />{" "}
              {/* Optional fallback */}
            </video>

            <video
              className="col-lg-4 bg position-fixed d-none d-lg-block"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "33%",
                height: "89%",
                objectFit: "cover",
                position: "",
                top: 40,
                left: 36,
              }}
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}.
              <div >
              <span>{heroContent.heroDesignation}</span>
              </div>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
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
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>US</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
