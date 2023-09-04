import React from "react";
import { useTheme } from "@mui/material/styles";

const Logo = ({ size = "medium", width, height }) => {
  const theme = useTheme();

  // Using theme's spacing to define standard sizes
  const sizes = {
    small: theme.spacing(3), // 24px by default
    medium: theme.spacing(4), // 32px by default
    large: theme.spacing(6), // 48px by default
  };

  // If width and height props are provided, they override the size prop
  const finalWidth = width || sizes[size];
  const finalHeight = height || sizes[size];

  return (
    <svg viewBox="0 0 256 256" width={finalWidth} height={finalHeight}>
      <g>
        <g fillOpacity="0" fill="#dddddd">
          <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
        </g>
        <g fill={theme.palette.primary.main}>
          <g transform="scale(5.12,5.12)">
            <path d="M13,4c-4.963,0 -9,4.037 -9,9v24c0,4.963 4.037,9 9,9h24c4.963,0 9,-4.037 9,-9v-24c0,-4.963 -4.037,-9 -9,-9zM25,9l14,8v16l-14,8l-14,-8v-16zM25,12.5l-11,6.5v12l11,6.5l11,-6.5v-12z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
