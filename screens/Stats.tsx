import * as React from "react";
import { StyleSheet, View } from "react-native";
import Top1 from "../components/Top1";
import StatusBar1 from "../components/StatusBar1";
import { Color } from "../GlobalStyles";
import Navbar from "../components/Navbar";

const Stats = () => {
  return (
    <View style={styles.stats}>
      <Navbar/>
    
      <Top1
        arrowLeft1={require("../assets/arrowleft-11.png")}
        profile="Stats For Week"
        bell11={require("../assets/bell-1-1.png")}
        bell11Width={31}
        bell11Height={30}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Stats;
