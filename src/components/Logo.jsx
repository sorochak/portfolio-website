import React from "react";
import { useTheme } from "@mui/material/styles";

const Logo = ({ size = "medium", width, height, color }) => {
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

  // Determine the fill color: use the passed color prop or fall back to a default
  // const fillColor = color || theme.palette.primary.main;

  // Adjust the stroke color based on the theme mode
  const strokeColor = theme.palette.mode === 'dark' ? '#ffffff' : '#000000';

  // Define a filter ID for easy reference
  const glowFilterId = "glow-effect";


  return (
    <svg viewBox="0 0 500 500" width={finalWidth} height={finalHeight} xmlSpace="preserve">
    <desc>Created with Fabric.js 5.3.0</desc>
    <g transform="matrix(-4.225 0 0 -4.225 179.6402641195 196.7164825095)">
      <path style={{
        stroke: strokeColor, strokeWidth: 5, strokeDasharray: "none", strokeLinecap: "butt",
        strokeDashoffset: 0, strokeLinejoin: "miter", strokeMiterlimit: 4, fill: "none",
        fillRule: "nonzero", opacity: 1,
      }} transform=" translate(0, 0)" d="M 20 0 L 40 40 L 0 40 L -40 40 L -20 0 L 0 -40 z" strokeLinecap="round" />
    </g>
    <g transform="matrix(-4.229709207 0 0 -4.229709207 320.8485109747 277.750054375)">
      <path style={{
        stroke: strokeColor, strokeWidth: 5, strokeDasharray: "none", strokeLinecap: "butt",
        strokeDashoffset: 0, strokeLinejoin: "miter", strokeMiterlimit: 4, fill: "none",
        fillRule: "nonzero", opacity: 1,
      }} transform=" translate(0, 0)" d="M 20 0 L 40 40 L 0 40 L -40 40 L -20 0 L 0 -40 z" strokeLinecap="round" />
    </g>
  </svg>
  );
};

export default Logo;
