import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const OnboardingSlide = ({ image, title, subtitle, isLast, onPress }) => {
  return (
    <View className="w-full items-center px-6 justify-between">
      <Image
        source={image}
        className="w-full h-1/2 mb-6"
        resizeMode="contain"
      />

      <View className="items-center">
        <Text className="text-white text-3xl font-bold mb-2 tracking-wide text-center">
          {title}
        </Text>
        <Text className="text-white text-center text-lg font-semibold px-4 opacity-90 leading-relaxed">
          {subtitle}
        </Text>
      </View>

      {isLast && (
        <TouchableOpacity
          onPress={onPress}
          className="bg-white px-6 py-3 rounded-2xl w-[80%] items-center mt-10 shadow-xl active:opacity-80"
        >
          <Text className="text-blue-600 text-lg font-bold tracking-wide">
            Get Started
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OnboardingSlide;
