import React from "react";
import { SvgCss } from "react-native-svg";

const MoneyMarkerIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.16 64.78"><defs><style>.cls-1{fill:#2e2e2d;}.cls-2{fill:#ffb500;}</style></defs><title>money-marker</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M39.16,19.58c0,10.81-19.58,45.2-19.58,45.2S0,30.39,0,19.58a19.58,19.58,0,0,1,39.16,0Z"/><path class="cls-2" d="M21.34,33.18H20V30.42a9.36,9.36,0,0,1-4.07-1.2c-1.59-1.06-2.36-2.87-2.34-5.44h3.75a6.87,6.87,0,0,0,.54,2.35A2.87,2.87,0,0,0,20,27.34V21.41l-1.12-.33a7.24,7.24,0,0,1-3.74-2.16A5.3,5.3,0,0,1,14,15.57a6.06,6.06,0,0,1,.43-2.34,5.25,5.25,0,0,1,1.18-1.82,5.32,5.32,0,0,1,2.19-1.36A10.26,10.26,0,0,1,20,9.7V7.86h1.35V9.73a6.86,6.86,0,0,1,3.53,1.11,5.44,5.44,0,0,1,2.42,4.82H23.64a5,5,0,0,0-.41-1.81,2.14,2.14,0,0,0-1.89-1.08v5.29a16.91,16.91,0,0,1,4.42,2,4.91,4.91,0,0,1,1.86,4.1,5.51,5.51,0,0,1-2.56,5.08,8.15,8.15,0,0,1-3.72,1.14ZM20,12.8a2.46,2.46,0,0,0-1.79.64,2.42,2.42,0,0,0-.58,1.69A2.18,2.18,0,0,0,18.5,17a5.07,5.07,0,0,0,1.49.7Zm1.35,14.5a3.61,3.61,0,0,0,1.58-.5,2.59,2.59,0,0,0,.86-2.21A2.37,2.37,0,0,0,23,22.7a6.14,6.14,0,0,0-1.63-.83Z"/></g></g></svg>`;

  const MoneyMarkerSvg = () => (
    <SvgCss xml={xml} height={height} width={width} />
  );

  return <MoneyMarkerSvg />;
};

export default MoneyMarkerIcon;
