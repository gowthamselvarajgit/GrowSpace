import { View, Text } from "react-native";
import React from "react";

const FileTypeCard = ({ label, count, color }) => {
  return (
    <View className={`w-[30%] p-4 rounded-xl items-center ${color}`}>
      <Text className="text-white text-lg font-bold">{count}</Text>
      <Text className="text-white text-sm">{label}</Text>
    </View>
  );
};

export default FileTypeCard;
