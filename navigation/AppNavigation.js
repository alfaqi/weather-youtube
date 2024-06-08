import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function AppNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
