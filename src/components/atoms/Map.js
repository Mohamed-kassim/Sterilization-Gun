import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { ActivityIndicator, InteractionManager } from "react-native";
import { Spacing } from "_styles";
import { Block } from "_atoms";

const Map = props => {
  const [didFinishInitialAnimation, setDidFinishInitialAnimation] = useState(
    false
  );
  const [mapReady, setMapReady] = useState(true);
  const { mapRef, children } = props;
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setDidFinishInitialAnimation(true);
    });
  });

  return (
    <>
      {didFinishInitialAnimation ? (
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          loadingEnabled={true}
          onMapReady={() => {
            setMapReady(true);
          }}
          {...props}
        >
          {didFinishInitialAnimation && mapReady ? children : null}
        </MapView>
      ) : (
        <Block center middle>
          <ActivityIndicator size={Spacing.BASE} color="black" />
        </Block>
      )}
    </>
  );
};

export default Map;
