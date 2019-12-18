import React from "react";
import FastImage from "react-native-fast-image";

const Image = props => {
  const { style, uri, source, resizeMode } = props;
  return (
    <FastImage
      {...props}
      style={style}
      source={
        source
          ? source
          : {
              uri,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.web
            }
      }
      resizeMode={FastImage.resizeMode[resizeMode]}
    />
  );
};

export default Image;
