import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native-web";

const Landingcreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar barStyle="dark-content" backgroundColor="#d9f99d" />
      <Text className="text-3xl font-bold mb-4">Welcome to GrowSpace</Text>
    </View>
  );
};

export default Landingcreen;
