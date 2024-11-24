import * as React from "react";
import { StyleSheet, View } from "react-native";
import Top2 from "./Top2";
import { Padding, Color } from "../GlobalStyles";

const StatusBar1 = () => {
  return (
    <View style={styles.statusBar}>
      <View style={styles.icons}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
  },
  statusBar: {
    position: "absolute",
    marginLeft: -195,
    top: 0,
    left: "50%",
    backgroundColor: Color.colorSlateblue,
    width: 390,
    overflow: "hidden",
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
  },
});

export default StatusBar1;
