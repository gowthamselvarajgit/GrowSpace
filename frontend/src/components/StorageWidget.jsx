import { View, Text } from "react-native";
import React from "react";
import { ProgressBar } from "react-native-web";

const StorageWidget = ({ usedGB = 0 }) => {
  const percentage = usedGB / 5;

  return (
    <View className="mx-5 bg-blue-600 rounded-2xl p-5 shadow-lg flex-row items-center">
      <Image
        source={require("../assets/images/cloud.png")}
        className="w-14 h-14 mr-4"
        resizeMode="contain"
      />

      <View className="flex-1">
        <Text className="text-white text-lg font-semibold font-outfit">
          Storage Used
        </Text>
        <Text className="text-white text-sm mb-2">
          {usedGB.toFixed(2)} GB of %GB used
        </Text>
        <ProgressBar
          progress={percentage}
          color="#FFD700"
          style={{ height: 8, borderRadius: 6 }}
        />
      </View>
    </View>
  );
};

export default StorageWidget;
