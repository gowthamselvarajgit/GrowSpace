import "react-native-gesture-handler";
import "./global.css";
import { useFonts } from "expo-font";
import { NavigationContainer, NavigationContext } from "@react-navigation/native";
import{createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Landingcreen from "./src/screens/Landingcreen";
import VideoLanding from "./src/screens/VideoLanding";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import Header from "./src/components/Header";
import Dashboard from "./src/screens/Dashboard";

const App = () => {

  const [fontsLoaded] = useFonts({
    "Outfit-Regular": require("../frontend/src/assets/fonts/static/Outfit-Regular.ttf"),
  });

  if(!fontsLoaded) return null;

  return (
  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} > 
      <Stack.Screen name="VideoLanding" component={VideoLanding} />
      <Stack.Screen name="LandingScreen" component={Landingcreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} /> 
      <Stack.Screen name="DashboardScreen" component={Dashboard} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
