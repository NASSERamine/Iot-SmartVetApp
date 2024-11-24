import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Info = () => {
  return (
    <View style={[styles.info, styles.infoPosition]}>
      <Image
        style={[styles.avatarIcon, styles.infoPosition]}
        contentFit="cover"
        source={require("../assets/avatar.png")}
      />
      <Text style={styles.choudaryAoun}>Choudary Aoun</Text>
      <Text style={styles.choudaryaoun121gmailcom}>
        choudaryaoun121@gmail.com
      </Text>
      <Image
        style={[styles.infoChild, styles.infoChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-33.png")}
      />
      <View style={[styles.totalCalcutaions, styles.infoChildPosition]}>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.weight, styles.ageTypo]}>Weight</Text>
          <Text style={[styles.kg, styles.textTypo]}>80kg</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.height, styles.ageTypo]}>Height</Text>
          <Text style={[styles.text, styles.agePosition]}>97”</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.age, styles.agePosition]}>Age</Text>
          <Text style={[styles.text1, styles.textTypo]}>20</Text>
        </View>
      </View>
      <Image
        style={styles.menuDotsVertical1Icon}
        contentFit="cover"
        source={require("../assets/menudotsvertical-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  infoPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  infoChildPosition: {
    left: "50%",
    position: "absolute",
  },
  ageTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.inputLabel_size,
    marginTop: -12.5,
    fontFamily: FontFamily.robotoRegular,
  },
  textTypo: {
    color: Color.colorGray_400,
    marginTop: 4.5,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  agePosition: {
    marginLeft: -10.5,
    top: "50%",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  avatarIcon: {
    top: 7,
    left: 11,
    borderRadius: Border.br_6xl,
    width: 40,
    height: 40,
  },
  choudaryAoun: {
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 63,
    top: 17,
    position: "absolute",
  },
  choudaryaoun121gmailcom: {
    top: 33,
    fontSize: FontSize.size_2xs,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: 63,
    position: "absolute",
  },
  infoChild: {
    marginLeft: -157,
    top: 57,
    maxHeight: "100%",
    width: 315,
  },
  weight: {
    marginLeft: -18.5,
    top: "50%",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  kg: {
    marginLeft: -15.5,
    top: "50%",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  parentShadowBox: {
    height: 43,
    width: 101,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
  },
  height: {
    marginLeft: -17.5,
    top: "50%",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  text: {
    color: Color.colorGray_400,
    marginTop: 4.5,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  age: {
    color: Color.colorGray_200,
    fontSize: FontSize.inputLabel_size,
    marginTop: -12.5,
    fontFamily: FontFamily.robotoRegular,
  },
  text1: {
    marginLeft: -7.5,
    top: "50%",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  totalCalcutaions: {
    marginLeft: -177,
    top: 67,
    flexDirection: "row",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_md,
  },
  menuDotsVertical1Icon: {
    left: 327,
    width: 24,
    height: 24,
    top: 17,
    overflow: "hidden",
    position: "absolute",
  },
  info: {
    marginLeft: -179,
    top: 116,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
    width: 358,
    height: 124,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    overflow: "hidden",
    left: "50%",
  },
});

export default Info;
