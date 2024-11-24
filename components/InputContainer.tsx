import * as React from "react";
import { TextInput, StyleSheet, View, TextInputProps } from "react-native";

interface InputContainerProps extends TextInputProps {
  placeholder?: string; // Optional placeholder prop
}

const InputContainer: React.FC<InputContainerProps> = ({ placeholder = "Enter value", ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#a9a9a9"
        {...props} // Spread all additional props like `value` and `onChangeText`
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20, // Space between inputs
  },
  input: {
    height: 40,
    borderColor: "#dde2e6",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});

export default InputContainer;
