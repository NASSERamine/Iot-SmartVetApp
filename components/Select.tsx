import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  FontSize,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

export type SelectType = {
  /** Variant props */
  decoration?: string;
  helper?: boolean;
  icon?: boolean;
  state?: string;
  style?: 1;
};

const Select = ({
  decoration = "Outline",
  helper = false,
  icon = false,
  state = "Default",
  style = 1,
}: SelectType) => {
  return (
    <View style={styles.select}>
      <View style={[styles.inputContent, styles.inputContentFlexBox]}>
        <View style={[styles.inputContent1, styles.inputContentFlexBox]}>
          <Text style={[styles.label, styles.labelFlexBox]}>Account Type</Text>
          <Text style={[styles.placehoder, styles.labelFlexBox]}>Select</Text>
        </View>
        <Image
          style={styles.fichevronDownIcon}
          contentFit="cover"
          source={require("../assets/fichevrondown.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContentFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  labelFlexBox: {
    textAlign: "left",
    fontFamily: FontFamily.inputPlaceholder,
    alignSelf: "stretch",
  },
  label: {
    fontSize: FontSize.inputLabel_size,
    color: Color.black4,
  },
  placehoder: {
    fontSize: FontSize.inputPlaceholder_size,
    color: Color.black2,
  },
  inputContent1: {
    justifyContent: "space-between",
  },
  fichevronDownIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_sm,
  },
  select: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.inputDefaultBackground,
    width: 286,
    height: 58,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default Select;
