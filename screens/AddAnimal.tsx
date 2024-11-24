import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const AddAnimal = () => {
  const [animalName, setAnimalName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [temperature, setTemperature] = useState("");
  const [animalType, setAnimalType] = useState("Cow");

  const navigation = useNavigation<NavigationProp<any>>();

  const handleSubmit = () => {
    if (animalName && weight && age && temperature) {
      console.log({
        animalName,
        weight,
        age,
        temperature,
        animalType,
      });
      alert("Animal information submitted!");
      navigation.navigate("Home");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <View style={styles.addAnimal}>
      <View style={styles.formContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Add Animal</Text>

          {/* Animal Name */}
          <TextInput
            style={styles.input}
            placeholder="Animal Name"
            value={animalName}
            onChangeText={setAnimalName}
          />

          {/* Weight */}
          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />

          {/* Age */}
          <TextInput
            style={styles.input}
            placeholder="Age (years)"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />

          {/* Temperature */}
          <TextInput
            style={styles.input}
            placeholder="Temperature (°C)"
            keyboardType="numeric"
            value={temperature}
            onChangeText={setTemperature}
          />

          {/* Animal Type */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={animalType}
              onValueChange={(itemValue: string) => setAnimalType(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Cow" value="Cow" />
              <Picker.Item label="Dog" value="Dog" />
              <Picker.Item label="Cat" value="Cat" />
              <Picker.Item label="Sheep" value="Sheep" />
            </Picker>
          </View>

          {/* Submit Button */}
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  innerContainer: {
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  addAnimal: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
    justifyContent: "center",
  },
});

export default AddAnimal;
