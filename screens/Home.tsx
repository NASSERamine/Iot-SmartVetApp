import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Top1 from "../components/Top1";

import { FontSize, FontFamily, Color } from "../GlobalStyles";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.welcomeBackParent}>
        <Text style={[styles.welcomeBack, styles.welcomeBackFlexBox]}>
          Welcome Back!
        </Text>
        
      </View>
      
      <Top1
        arrowLeft1={require("../assets/menu-bar.png")}
        profile="Home"
        bell11={require("../assets/avatar.png")}
        bell11Width={40}
        bell11Height={40}
        bell11BorderRadius={25}
      />
     
     
      <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeBackFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  welcomeBack: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: "#2b2929",
  },
 
  welcomeBackParent: {
    position: "absolute",
    top: 131,
    left: 16,
    width: 138,
    gap: 11,
  },
  home: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Home;
