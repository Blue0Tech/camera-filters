import React from "react";
import { Image, View } from "react-native";

const Filter1 = ({
  face: {
    bounds: {
      size: { height, width }
    },
    LEFT_EYE,
    RIGHT_EYE,
    NOSE_BASE // renamed all properties as the old names don't exist
  }
}) => {
  const filterWidth = width * 3.5;
  const filterHeight = height * 0.7;
  const src = require("../assets/filters/crown-pic1.png");

  const transformAngle = (
    angleRad = Math.atan(
      (RIGHT_EYE.y - LEFT_EYE.y) /
        (RIGHT_EYE.x - LEFT_EYE.x)
    )
  ) => (angleRad * 180) / Math.PI;

  return (
    <View
      style={{
        position: "absolute",
        left: LEFT_EYE.x - filterWidth * 0.46,
        right: RIGHT_EYE.x - filterWidth * 0.15,
        top: NOSE_BASE.y - filterHeight * 1.5
      }}
    >
      <Image
        source={src}
        style={{
          width: filterWidth,
          height: filterHeight,
          resizeMode: "contain",
          transform: [{ rotate: `${transformAngle()}deg` }]
        }}
      />
    </View>
  );
};

export default Filter1;