import React, { useState, useEffect, useRef } from "react";
import { Map, Block } from "_atoms";
import { Dimensions } from "react-native";
import { Marker } from "react-native-maps";
import { getPosition } from "_utils";
import { useGlobalState } from "_globalState";
import { Spacing } from "_styles";
const { width, height } = Dimensions.get("window");
const AddressMap = ({ route, geo_location }) => {
  const [region, setRegion] = useState({ longitude: 13.933837890625, latitude: 25.94224024434832 });
  console.log("location is", geo_location);
  const [coordinate, setCoordinate] = useState({ longitude: 0, latitude: 0 });
  let mapRef = useRef(null);
  useEffect(() => {
    if (route != "Settings") {
      getPosition(pos => {
        console.log(geo_location);
        const position = {
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude
        };
        console.log(position);
        setRegion(position);
        setCoordinate(position);
      });
    } else {
      const position = {
        longitude: 13.933837890625,
        latitude: 25.94224024434832
      };
      console.log(position);
      setRegion(position);
      setCoordinate(position);
      console.log(mapRef)
     
    }
  }, []);

  return (
    <Block
      style={{
        height: height * 0.4,
        borderRadius: Spacing.RADIUS,
        overflow: "hidden"
      }}
    >
      <Map
        mapRef={mapRef}
        onPress={e => {
          mapRef.current.animateToRegion({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.0059397161733585335,
            longitudeDelta: 0.005845874547958374
          });
          setCoordinate(e.nativeEvent.coordinate);
        }}
        style={{ flex: 1 }}
        region={{ ...region, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
      >
        <Marker coordinate={coordinate} />
      </Map>
    </Block>
  );
};

export default AddressMap;
