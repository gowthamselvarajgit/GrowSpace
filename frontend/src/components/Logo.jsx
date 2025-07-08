import { View, Text, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View className="items-center">
      <Image
        source={require("../assets/images/logo.jpg")}
        className="w-[100px] h-24 mb-4"
        resizeMode="contain"
      />
    </View>
  );
};

export default Logo;
