import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type ButtonsType = {
  label?: string;

  /** Variant props */
  half?: boolean;
  state?: string;
  style?: string;
  type?: string;

  /** Style props */
  component5Position?: string;
  component5Top?: number | string;
  component5Left?: number | string;

  /** Action props */
  onComponent5Press?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Buttons = ({
  half = false,
  state = "Default",
  style = "Filled",
  type = "Frame 308",
  label,
  component5Position,
  component5Top,
  component5Left,
  onComponent5Press,
}: ButtonsType) => {
  const component5Style = useMemo(() => {
    return {
      ...getStyleValue("position", component5Position),
      ...getStyleValue("top", component5Top),
      ...getStyleValue("left", component5Left),
    };
  }, [component5Position, component5Top, component5Left]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.component5, component5Style]}
      onPress={onComponent5Press}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inputPlaceholder,
    color: Color.colorWhite,
    textAlign: "center",
  },
  component5: {
    position: "absolute",
    top: 679,
    left: 62,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorSlateblue,
    width: 286,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_mid,
  },
});

export default Buttons;
