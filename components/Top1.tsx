import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type Top1Type = {
  arrowLeft1?: ImageSourcePropType;
  profile?: string;
  bell11?: ImageSourcePropType;

  /** Style props */
  bell11Width?: number | string;
  bell11Height?: number | string;
  bell11BorderRadius?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Top1 = ({
  arrowLeft1,
  profile,
  bell11,
  bell11Width,
  bell11Height,
  bell11BorderRadius,
}: Top1Type) => {
  const bell11Style = useMemo(() => {
    return {
      ...getStyleValue("width", bell11Width),
      ...getStyleValue("height", bell11Height),
      ...getStyleValue("borderRadius", bell11BorderRadius),
    };
  }, [bell11Width, bell11Height, bell11BorderRadius]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.top}>
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={arrowLeft1 || require("../assets/arrowleft-1.png")}
        />
      </Pressable>
      <Text style={styles.profile}>{profile}</Text>
      <Image
        style={[styles.bell11, bell11Style]}
        contentFit="cover"
        source={bell11}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    width: 24,
    height: 24,
  },
  profile: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  bell11: {
    width: 31,
    height: 30,
    overflow: "hidden",
  },
  top: {
    position: "absolute",
    marginLeft: -195,
    top: 37,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    width: 390,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
});

export default Top1;
