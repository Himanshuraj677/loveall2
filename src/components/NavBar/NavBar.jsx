import PropTypes from "prop-types";
import React from "react";
import loveAllLogoWhiteText1 from "../appuser/love-all-logo-white-text-1.png";
import "./nav-bar.css";

export const NavBar = ({ property1, className, overlapGroupClassName, basilSearchSolidClassName, divClassName }) => {
  return (
    <div className={`nav-bar ${className}`}>
      <div className="overlap">
        <div className="text-wrapper-4">Home</div>
        <div className="text-wrapper-5">About us</div>
        <div className="text-wrapper-6">Charity Media</div>
        <div className="text-wrapper-7">Stores</div>
        <div className="group-6">
          <div className="group-7">
            <div className={`overlap-group-2 ${overlapGroupClassName}`}>
              <img className={`basil-search-solid ${basilSearchSolidClassName}`} alt="Basil search solid" />
              <div className={`text-wrapper-8 ${divClassName}`}>“Discounts”</div>
            </div>
          </div>
        </div>
        <button className="button">
          <button className="button-2">Log In</button>
        </button>
        <img className="love-all-logo-white" alt="Love all logo white" src={loveAllLogoWhiteText1} />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};