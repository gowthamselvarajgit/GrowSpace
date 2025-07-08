import React, { useEffect, useRef } from "react";
import { View, Dimensions } from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";

const VideoLanding = () => {
  const videoRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LandingScreen");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: "rgba(16, 90, 251, 1)" }}
    >
      <Video
        ref={videoRef}
        source={require("../assets/videos/VideoLogo.mp4")}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        resizeMode="contain"
        shouldPlay
        isLooping={false}
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            navigation.replace("LandingScreen");
          }
        }}
      />
    </View>
  );
};

export default VideoLanding;
