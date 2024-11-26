import React, { useState } from "react";
import Modal from "react-modal";
import heroVideo from "../../assets/logoanimation.mp4";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

// Social media icons
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const heroContent = {
  heroVideo: heroVideo,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Victory Cineworld",
  heroDesignation: "Elevating Brands, Frame by Frame",
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
        {/* Background Video for Large Screens */}
        <div
          className="col-lg-4 position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroVideo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "none",
            borderRadius: "20px",
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
                borderRadius: "20px",
                objectFit: "cover",
                border: "none",
              }}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Desktop Video */}
            <video
              className="d-none d-lg-block"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "34%",
                height: "69%",
                objectFit: "cover",
                position: "absolute",
                top: 100,
                left: 36,
                borderRadius: "20px",
                border: "none",
              }}
            />

            {/* Heading */}
            <h2 style={{ fontSize: "2.8rem", fontWeight: "600", color: "orange" }}>
              {heroContent.heroTitleName}
            </h2>

            <h2 style={{ fontSize: "1.6rem", fontWeight: "500", color: "white" }}>
              {heroContent.heroDesignation}
            </h2>

            {/* Description */}
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>

            {/* Button and Social Media Icons */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <button className="button" onClick={toggleModalOne}>
                <span className="button-text">{heroContent.heroBtn}</span>
                <span className="button-icon fa fa-arrow-right"></span>
              </button>

              {/* Social Media Icons */}
              <div className="social-icons ms-5 d-flex ">
                <a href="https://www.instagram.com/victory_cineworld/" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaInstagram size={28} color="white" />
                </a>
                <a href="https://www.linkedin.com/company/victorycineworld/" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaLinkedin size={28} color="white" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaTwitter size={28} color="white" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={28} color="white" />
                </a>
              </div>
            </div>
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
