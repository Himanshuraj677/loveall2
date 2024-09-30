import React from "react";

export const Avatar = ({ className }) => {
  return (
    <svg
      className={`avatar ${className}`}
      fill="none"
      height="96"
      viewBox="0 0 96 96"
      width="96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_77_2403)">
        <rect className="rect" fill="url(#paint0_linear_77_2403)" height="96" rx="48" width="96" />
        <path
          className="path-3"
          d="M18.6364 24H77.3636C79.96 24 82 26.1273 82 28.9091V66.5455C82 69.3273 79.96 71.4545 77.3636 71.4545H18.6364C16.0091 71.4545 14 69.3273 14 66.5455V28.9091C14 26.1273 16.0091 24 18.6364 24ZM40.9218 37.0909V58.3636L58.5709 47.5636L40.9218 37.0909ZM64.2273 78H31.4636C30.5364 78 29.9182 77.3455 29.9182 76.3636C29.9182 75.3818 30.5364 74.7273 31.4636 74.7273H64.5364C65.4636 74.7273 66.0818 75.3818 66.0818 76.3636C66.0818 77.3455 65.1545 78 64.2273 78Z"
          fill="#FFD0D9"
        />
      </g>
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_77_2403"
          x1="0"
          x2="96"
          y1="48"
          y2="48"
        >
          <stop className="stop" stopColor="#FD3B84" />
          <stop className="stop" offset="1" stopColor="#FFA48D" />
        </linearGradient>
        <clipPath className="clip-path" id="clip0_77_2403">
          <path
            className="path-3"
            d="M0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
