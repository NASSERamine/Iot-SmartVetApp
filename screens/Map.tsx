import * as React from "react";
import { StyleSheet, View } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import MapsZoomLevels2City from "../components/MapsZoomLevels2City";
import { Color } from "../GlobalStyles";

const Map = () => {
  return (
    <View style={styles.map}>
   
      <MapsZoomLevels2City />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Map;
