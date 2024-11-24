import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Importing Screens
import Stats from "./screens/Stats";
import Start from "./screens/Start";
import Map from "./screens/Map";
import PersonalInfo from "./screens/PersonalInfo";
import AddAnimal from "./screens/AddAnimal"; // Renamed for clarity
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="AddAnimal" component={AddAnimal} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Stats" component={Stats} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
