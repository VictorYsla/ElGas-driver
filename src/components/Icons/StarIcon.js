import React from "react";
import { SvgCss } from "react-native-svg";

const StarIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.56 16.7"><defs><style>.cls-1{fill:#ffb500;}</style></defs><title>star</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="8.78 0 10.85 6.38 17.56 6.38 12.13 10.32 14.2 16.7 8.78 12.76 3.35 16.7 5.42 10.32 0 6.38 6.71 6.38 8.78 0"/></g></g></svg>`;

  const StarSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <StarSvg />;
};

export default StarIcon;
