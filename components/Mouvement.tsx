import * as React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Mouvement = () => {
  return (
    <ScrollView style={styles.mouvement}>
      <Text style={styles.movement}>Movement</Text>
      <Text style={[styles.steps, styles.textPosition]}>Steps</Text>
      <Text style={[styles.text, styles.textPosition]}>125</Text>
      <Image
        style={styles.mouvementChild}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Image
        style={styles.walkIcon}
        contentFit="cover"
        source={require("../assets/walk-icon.png")}
      />
      <Image
        style={styles.walkIcon}
        contentFit="cover"
        source={require("../assets/walk-icon.png")}
      />
      <Text style={styles.movement}>Movement</Text>
      <Image
        style={styles.mouvementChild}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    marginLeft: -78.5,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  movement: {
    marginLeft: -16.5,
    top: 17,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    color: Color.colorGray_300,
    position: "absolute",
  },
  steps: {
    top: 219,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_100,
  },
  text: {
    top: 238,
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.colorGray_300,
    marginLeft: -78.5,
  },
  mouvementChild: {
    top: 85,
    left: 13,
    width: 146,
    height: 113,
    position: "absolute",
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
  mouvement: {
    top: 532,
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
    height: 264,
    maxHeight: 264,
    position: "absolute",
  },
});

export default Mouvement;
