import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type Input1Type = {
  label?: string;
  placehoder?: string;

  /** Variant props */
  decoration?: string;
  helper?: boolean;
  icon?: boolean;
  iconPosition?: string;
  state?: string;
  style?: 1;
  type?: string;
};

const Input1 = ({
  decoration = "Outline",
  helper = false,
  icon = false,
  iconPosition = "None",
  state = "Default",
  style = 1,
  type = "Text",
  label,
  placehoder,
}: Input1Type) => {
  return (
    <View style={styles.input}>
      <View style={styles.inputContent}>
        <Text style={[styles.label, styles.labelFlexBox]}>{label}</Text>
        <Text style={[styles.placehoder, styles.labelFlexBox]}>
          {placehoder}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  inputContent: {
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  input: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.inputDefaultBackground,
    width: 286,
    height: 58,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default Input1;
