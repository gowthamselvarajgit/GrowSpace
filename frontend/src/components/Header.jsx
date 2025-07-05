import { View, Text } from "react-native";
import React from "react";

const Header = ({ name }) => {
  return (
    <View className="mt-8 px-5">
      <Text className="text-lg text-gray-500 font-outfit">Hi {name}</Text>
      <Text className="text-2xl font-bold font-outfit text-gray-800">
        Manage your file
      </Text>
    </View>
  );
};

export default Header;
