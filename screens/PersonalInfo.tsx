import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Info from "../components/Info";
import Top1 from "../components/Top1";
import StatusBar1 from "../components/StatusBar1";
import Mouvement from "../components/Mouvement";
import Heartrate from "../components/Heartrate";
import { FontFamily, Color } from "../GlobalStyles";
import Navbar from "../components/Navbar";

const PersonalInfo = () => {
  return (
    <View style={styles.personalinfo}>
      <Text style={styles.today}>Today</Text>
      <Info />
      <Top1
        arrowLeft1={require("../assets/arrowleft-1.png")}
        profile="Profile"
        bell11={require("../assets/bell-1-1.png")}
      />
      
      
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  today: {
    position: "absolute",
    marginTop: -143,
    marginLeft: -177,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_400,
    textAlign: "left",
  },
  personalinfo: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PersonalInfo;
