import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const MapsZoomLevels2City = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mapsZoomLevels2City}>
      <Image
        style={[styles.mapOfBirminghamCity, styles.topPosition]}
        contentFit="cover"
        source={require("../assets/map-of-birmingham-city.png")}
      />
     
      <View style={[styles.top, styles.topPosition]}>
        <Pressable
          style={styles.arrowLeft1}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/arrowleft-11.png")}
          />
        </Pressable>
        <Text style={styles.location}>Location</Text>
        <Image
          style={styles.bell11}
          contentFit="cover"
          source={require("../assets/bell-1-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    left: "50%",
    position: "absolute",
  },
  mapOfBirminghamCity: {
    marginTop: -348.5,
    marginLeft: -527.5,
    top: "50%",
    width: 1056,
    height: 699,
  },
  unionIcon: {
    width: 25,
    height: 38,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    width: 24,
    height: 24,
  },
  location: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_300,
    textAlign: "left",
    width: 134,
  },
  bell11: {
    width: 31,
    height: 30,
    overflow: "hidden",
  },
  top: {
    marginLeft: -195.5,
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    width: 390,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.colorWhite,
  },
  mapsZoomLevels2City: {
    top: 37,
    left: -1,
    width: 391,
    height: 807,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
});

export default MapsZoomLevels2City;
