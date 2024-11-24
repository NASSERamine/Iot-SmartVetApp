import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Top2Type = {
  signal?: ImageSourcePropType;
};

const Top2 = ({ signal }: Top2Type) => {
  return (
    <View style={styles.top}>
      <Image style={styles.signalIcon} contentFit="cover" source={signal} />
      <Text style={styles.text}>9:30</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  text: {
    top: "5.88%",
    left: "0%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorWhitesmoke_200,
    textAlign: "left",
    position: "absolute",
  },
  top: {
    width: 340,
    height: 17,
  },
});

export default Top2;
