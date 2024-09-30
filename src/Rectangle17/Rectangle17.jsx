import React from "react";

export const Rectangle17 = ({ className }) => {
  return (
    <svg
      className={`rectangle-17 ${className}`}
      fill="none"
      height="153"
      viewBox="0 0 246 153"
      width="246"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_120_149)">
        <path
          className="path-3"
          d="M17.0623 0.501832C10.1334 0.501832 4.51649 6.11875 4.51649 13.0476V131.762C4.51649 138.691 10.1334 144.308 17.0623 144.308H228.938C235.867 144.308 241.484 138.691 241.484 131.762V13.0476C241.484 6.11878 235.867 0.501832 228.938 0.501832H17.0623Z"
          shapeRendering="crispEdges"
          stroke="#727272"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="152.839"
          id="filter0_d_120_149"
          width="246"
          x="0"
          y="0"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="4" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="2" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_120_149" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_120_149"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
