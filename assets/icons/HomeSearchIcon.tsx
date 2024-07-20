import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const HomeSearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      clipPath="url(#a)"
    >
      <Path d="M11.55 20.1a8.55 8.55 0 1 0 0-17.1 8.55 8.55 0 0 0 0 17.1ZM21 21l-1.8-1.8" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HomeSearchIcon;
