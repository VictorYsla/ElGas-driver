import React from "react";
import { SvgCss } from "react-native-svg";

const CalendarDriverIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.91 47.83"><defs><style>.cls-1{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.46px;}.cls-2{fill:#2e2e2d;}</style></defs><title>calendar-driver</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M33.32,10.57l-25.76.06a5.85,5.85,0,0,0-5.83,5.85V40.25A5.85,5.85,0,0,0,7.57,46.1H33.33a5.85,5.85,0,0,0,5.85-5.85V16.42A5.85,5.85,0,0,0,33.32,10.57Z"/><rect class="cls-2" x="10.83" width="4.02" height="16.1" rx="2.01"/><rect class="cls-2" x="25.87" width="4.02" height="16.1" rx="2.01"/><rect class="cls-2" x="7.53" y="19.41" width="4.2" height="4.2"/><rect class="cls-2" x="15" y="19.41" width="4.2" height="4.2"/><rect class="cls-2" x="22.47" y="19.41" width="4.2" height="4.2"/><rect class="cls-2" x="29.94" y="19.41" width="4.2" height="4.2"/><rect class="cls-2" x="7.53" y="24.78" width="4.2" height="4.2"/><rect class="cls-2" x="15" y="24.78" width="4.2" height="4.2"/><rect class="cls-2" x="22.47" y="24.78" width="4.2" height="4.2"/><rect class="cls-2" x="29.94" y="24.78" width="4.2" height="4.2"/><rect class="cls-2" x="7.53" y="30.14" width="4.2" height="4.2"/><rect class="cls-2" x="15" y="30.14" width="4.2" height="4.2"/><rect class="cls-2" x="22.47" y="30.14" width="4.2" height="4.2"/><rect class="cls-2" x="29.94" y="30.14" width="4.2" height="4.2"/><rect class="cls-2" x="7.53" y="35.51" width="4.2" height="4.2"/><rect class="cls-2" x="15" y="35.51" width="4.2" height="4.2"/><rect class="cls-2" x="22.47" y="35.51" width="4.2" height="4.2"/></g></g></svg>`;

  const CalendarDriverSvg = () => (
    <SvgCss xml={xml} height={height} width={width} />
  );

  return <CalendarDriverSvg />;
};

export default CalendarDriverIcon;
