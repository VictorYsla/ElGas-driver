import React from "react";
import { SvgCss } from "react-native-svg";

const EmailIcon = ({ width, height, color }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.95 24.71"><defs><style>.cls-1{fill:${color};}</style></defs><title>envelop</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M18.47,15.34a1.78,1.78,0,0,1-1-.33L.78,3.28A1.8,1.8,0,0,1,1.81,0H35.14a1.8,1.8,0,0,1,1,3.28L19.51,15A1.81,1.81,0,0,1,18.47,15.34ZM7.52,3.61l11,7.71,11-7.71Z"/><path class="cls-1" d="M35.14,24.71H1.81A1.8,1.8,0,0,1,0,22.91V2.68A1.81,1.81,0,0,1,2.85,1.21l15.62,11,15.63-11A1.81,1.81,0,0,1,37,2.68V22.91A1.8,1.8,0,0,1,35.14,24.71ZM3.63,21.1H33.32V6.17L19.51,15.89a1.77,1.77,0,0,1-2.08,0L3.63,6.17Z"/></g></g></svg>`;

  const EmailSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <EmailSvg />;
};

export default EmailIcon;
