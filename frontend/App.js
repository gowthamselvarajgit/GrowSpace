import "react-native-gesture-handler";
import "./global.css";
import Landingcreen from "./src/screens/Landingcreen";
import { NavigationContainer, NavigationContext } from "@react-navigation/native";
import VideoLanding from "./src/screens/VideoLanding";
import{createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="VideoLanding" component={VideoLanding} />
      <Stack.Screen name="LandingScreen" component={Landingcreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
