import React from "react";
import { SvgCss } from "react-native-svg";

const AddressMarker = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.16 64.78"><defs><style>.cls-1{fill:#ffb500;}.cls-2{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.26px;}</style></defs><title>address-marker</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M39.16,19.58c0,10.81-19.58,45.2-19.58,45.2S0,30.39,0,19.58a19.58,19.58,0,0,1,39.16,0Z"/><polyline class="cls-2" points="7.48 20.25 19.77 7.61 32.06 20.25"/><polyline class="cls-2" points="11.2 20.07 11.2 31.15 17.78 31.15 17.78 26.13 21.41 26.13 21.41 31.32 28.34 31.32 28.34 20.07"/><circle class="cls-2" cx="19.81" cy="17.57" r="2.87"/></g></g></svg>`;

  const AddressSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <AddressSvg />;
};

export default AddressMarker;
