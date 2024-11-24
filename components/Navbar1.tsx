import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Navbar1 = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  
    return (
      <View style={styles.navbar}>
        {/* Home Button */}
        <Pressable style={styles.navButton} onPress={() => navigation.navigate("PersonalInfo")}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
  
        {/* Activity Button */}
        <Pressable style={styles.navButton} onPress={() => navigation.navigate("Stats")}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/activity.png")}
          />
        </Pressable>
  
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
  
        {/* Location Button */}
        <Pressable style={styles.navButton} onPress={() => navigation.navigate("Map")}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/location-on.png")}
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
      height: 90,
      flexDirection: "row", // Aligns items in a row
      justifyContent: "space-around", // Distributes space evenly around items
      alignItems: "center", // Centers items vertically
      backgroundColor: "#f8f8f8",
      borderTopWidth: 1,
      borderTopColor: "#ccc",
    },
    navButton: {
      width: 70,  // Agrandit la taille des icônes
      height: 70,
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      width: 50,  // Agrandit la taille des images
      height: 50
      ,
    },
    addButton: {
      width: 70,
      height: 70,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10, // Slight overlap above the navbar
    },
    addButtonText: {
      fontSize: 30,  // Agrandit le "+" au centre
      color: "#4A90E2",
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  
  export default Navbar1;
  