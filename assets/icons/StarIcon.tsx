import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const StarIcon = (props: SvgProps) => (
  <Svg width={11} height={11} fill="none" {...props}>
    <Path
      fill="#FCC400"
      d="m5.5.5 1.235 3.8h3.996L7.498 6.65l1.235 3.8L5.5 8.1l-3.233 2.35 1.235-3.8L.269 4.3h3.996L5.5.5Z"
    />
  </Svg>
);
export default StarIcon;
