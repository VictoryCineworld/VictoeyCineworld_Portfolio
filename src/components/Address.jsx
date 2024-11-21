import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>Victory Cineworld, Tapadia
        Terrace, Adalat Rd, opposite Distric Court ,Kotla Colony, Chhatrapati
        Sambhajinagar (Aurangabad), Maharashtra-431001
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:hello@victorycineworld.com">
          hello@victorycineworld.com
        </a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +91 8459686970">+216 21 184 010</a>
        <br/>
        <a href="Tel: +91 8459686970">+91 9689 896 </a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
