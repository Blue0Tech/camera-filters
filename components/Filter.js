import React from "react";
import { Image, View } from "react-native";

let data = [
  {id: "filter1", src: require('../assets/filters/crown-pic1.png')},
  {id: "filter2", src: require('../assets/filters/crown-pic2.png')},
  {id: "filter3", src: require('../assets/filters/crown-pic3.png')},
  {id: "filter4", src: require('../assets/filters/flower-pic1.png')},
  {id: "filter5", src: require('../assets/filters/flower-pic2.png')},
  {id: "filter6", src: require('../assets/filters/flower-pic3.png')},
  {id: "filter7", src: require('../assets/filters/hair-pic1.png')},
  {id: "filter8", src: require('../assets/filters/hair-pic2.png')},
  {id: "filter9", src: require('../assets/filters/hair-pic3.png')},
  {id: "filter10", src: require('../assets/filters/other-pic1.png')},
  {id: "filter11", src: require('../assets/filters/other-pic2.png')},
  {id: "filter12", src: require('../assets/filters/other-pic3.png')},
];

const Filter = ({
  face: {
    bounds: {
      size: { height, width }
    },
    LEFT_EYE,
    RIGHT_EYE,
    NOSE_BASE // renamed all properties as the old names don't exist
  },
  filter
}) => {
  const filterWidth = width * 3.5;
  const filterHeight = height * 0.7;
  const src = data.find(item => item.id == filter).src;

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

export default Filter;