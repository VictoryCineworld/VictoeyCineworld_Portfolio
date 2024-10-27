import React, { useState } from "react";
import Modal from "react-modal";
import heroVideo from "../../assets/hero.mp4";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroVideo: heroVideo,
  //heroImage:"https://i.pinimg.com/474x/fb/d2/64/fbd264aee57005378e0204f2596c32ea.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "steve milner",
  heroDesignation: "web designer",
  heroDescriptions: `I'm a Tunisian based web designer & front‑end developer focused on
  crafting clean & user‑friendly experiences, I am passionate about
  building excellent software that improves the lives of those
  around me.`,
  heroBtn: "more about me",
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
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
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
                  ABOUT <span>ME</span>
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

// import React, { useState } from "react";
// import Modal from "react-modal";
// import heroVideo from "../../assets/hero.mp4"; // Import the video file
// import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
// import cancelImg from "../../assets/img/cancel.svg";
// import Index from "../../components/about/index";

// const heroContent = {
//   heroMobileImage: heroImgMobile,
//   heroTitleName: "Steve Milner",
//   heroDesignation: "Web Designer",
//   heroDescriptions: `I'm a Tunisian-based web designer & front‑end developer focused on
//   crafting clean & user‑friendly experiences. I am passionate about
//   building excellent software that improves the lives of those
//   around me.`,
//   heroBtn: "More about me",
// };

// const Hero = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   function toggleModalOne() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <>
//       <div className="row home-details-container align-items-center">
//         <div className="col-lg-4 position-fixed d-none d-lg-block">
//           {/* Video wrapper with custom size */}
//           <div
//             className="hero-video-wrapper"
//             style={{
//               width: "100%", // Adjust width to match the original image size
//               height: "100vh", // Adjust height to match the original image size
//               overflow: "hidden",
//               position: "relative",
//             }}
//           >
//             <video
//               src={heroVideo}
//               autoPlay
//               loop
//               muted
//               playsInline
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//               }}
//             />
//           </div>
//         </div>
//         <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
//           <div>
//             <img
//               src={heroContent.heroMobileImage}
//               className="img-fluid main-img-mobile d-sm-block d-lg-none"
//               alt="hero man"
//             />
//             <h1 className="text-uppercase poppins-font">
//               I'm {heroContent.heroTitleName}.
//               <span>{heroContent.heroDesignation}</span>
//             </h1>
//             <p className="open-sans-font">{heroContent.heroDescriptions}</p>
//             <button className="button" onClick={toggleModalOne}>
//               <span className="button-text">{heroContent.heroBtn}</span>
//               <span className="button-icon fa fa-arrow-right"></span>
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* End home-details-container */}

//       {/* Start Modal for About More */}
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={toggleModalOne}
//         contentLabel="My dialog"
//         className="custom-modal dark hero"
//         overlayClassName="custom-overlay dark"
//         closeTimeoutMS={500}
//       >
//         <div>
//           <button className="close-modal" onClick={toggleModalOne}>
//             <img src={cancelImg} alt="close icon" />
//           </button>
//           {/* End close icon */}

//           <div className="box_inner about">
//             <div data-aos="fade-up" data-aos-duration="1200">
//               <div className="title-section text-left text-sm-center">
//                 <h1>
//                   ABOUT <span>ME</span>
//                 </h1>
//                 <span className="title-bg">Resume</span>
//               </div>
//               {/* End title */}
//               <Index />
//             </div>
//           </div>
//         </div>
//         {/* End modal box news */}
//       </Modal>
//       {/* End  Modal for About More */}
//     </>
//   );
// };

// export default Hero;
