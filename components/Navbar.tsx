import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.navbar}>
      {/* Personal Info Button */}
      <Pressable
        style={styles.navButton}
        onPress={() => navigation.navigate("PersonalInfo")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
      </Pressable>

      {/* Center + Button */}
      <Pressable
        style={styles.addButton}
        onPress={() => navigation.navigate("AddAnimal")}
      >
       <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/add.png")}
        />
      </Pressable>

      {/* Map Button */}
      <Pressable
        style={styles.navButton}
        onPress={() => navigation.navigate("Map")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/location-on.png")}
        />
      </Pressable>

      {/* Stats Button */}
      <Pressable
        style={styles.navButton}
        onPress={() => navigation.navigate("Stats")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/activity.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-around", // Evenly distribute space around items
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingHorizontal: 20,
  },
  navButton: {
    width: 70, // Increased size for larger icons
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 50, // Increased icon size
    height: 50,
  },
  addButton: {
    width: 60,  
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    
    elevation: 5, // Adds shadow on Android
    
   
    
    
  },
 
});

export default Navbar;
