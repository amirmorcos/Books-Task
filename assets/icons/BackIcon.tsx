import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67"
    />
  </Svg>
);
export default BackIcon;
