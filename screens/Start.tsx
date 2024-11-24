import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import Buttons from "../components/Buttons";
import { Color } from "../GlobalStyles";

const Start = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.start}>
      
      <View style={styles.captureDcran20241122202} />
      <Image
        style={styles.captureDCran20241122202Icon}
        contentFit="cover"
        source={require("../assets/capture-d-cran-20241122-202145removebgpreview-1.png")}
      />
      <Buttons
        half={false}
        state="Default"
        style="Filled"
        type="Frame 308"
        label="Welcome"
        onComponent5Press={() => navigation.navigate("AddAnimal")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  captureDcran20241122202: {
    top: 230,
    left: -33,
    width: 423,
    height: 280,
    position: "absolute",
  },
  
  captureDCran20241122202Icon: {
    top: 192,
    left: -41,
    width: 440,
    height: 318,
    position: "absolute",
  },
  start: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Start;
