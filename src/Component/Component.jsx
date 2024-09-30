import React from "react";
import "./component.css";

export const Component = ({ className, cardClassName }) => {
  return (
    <div className={`component ${className}`}>
      <div className={`card ${cardClassName}`}>
        <div className="group">
          <img className="love-all-logo-black" alt="Love all logo black" />
          <div className="group-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="div-wrapper">
                  <div className="text-wrapper">SOCIAL LOYALTY CARD</div>
                </div>
                <div className="div">
                  <div className="text-wrapper-2">YOUR NAME</div>
                  <div className="group-2">
                    <div className="text-wrapper-3">XXXX</div>
                    <div className="group-3">
                      <div className="ellipse" />
                      <div className="ellipse-2" />
                      <div className="ellipse-3" />
                      <div className="ellipse-4" />
                    </div>
                    <div className="group-4">
                      <div className="ellipse" />
                      <div className="ellipse-2" />
                      <div className="ellipse-3" />
                      <div className="ellipse-4" />
                    </div>
                    <div className="group-5">
                      <div className="ellipse" />
                      <div className="ellipse-2" />
                      <div className="ellipse-3" />
                      <div className="ellipse-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tap-here-to-get-the-wrapper">
            <p className="tap-here-to-get-the">TAP HERE TO GET THE CARD</p>
          </div>
        </div>
      </div>
    </div>
  );
};
