import * as React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Heartrate = () => {
  return (
    <ScrollView style={styles.heartrate}>
      <Image
        style={styles.circleIcon}
        contentFit="cover"
        source={require("../assets/circle.png")}
      />
      <Text style={[styles.heartRate, styles.textTypo]}>Heart Rate</Text>
      <Text style={[styles.text, styles.textTypo]}>3500</Text>
      <Image
        style={styles.walkIcon}
        contentFit="cover"
        source={require("../assets/walk-icon1.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  circleIcon: {
    top: 66,
    left: 21,
    width: 130,
    height: 130,
    position: "absolute",
  },
  heartRate: {
    marginLeft: -14.5,
    top: 17,
    fontSize: FontSize.size_smi,
  },
  text: {
    marginLeft: -22.5,
    top: 120,
    fontSize: FontSize.size_xl,
  },
  walkIcon: {
    top: 6,
    left: 6,
    borderRadius: Border.br_9xs,
    width: 30,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  heartrate: {
    top: 306,
    left: 14,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 208,
    maxHeight: 208,
    position: "absolute",
  },
});

export default Heartrate;
