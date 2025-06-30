import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: require("../assets/images/celebration.png"),
    title: "Welcome to GrowSpace",
    subtitle:
      "Safely store and access all your files in one private space—anytime, anywhere.",
  },
  {
    id: 2,
    image: require("../assets/images/security.png"),
    title: "Secure and Private",
    subtitle:
      "Enjoy complete privacy with secure cloud storage and encrypted protection.",
  },
  {
    id: 3,
    image: require("../assets/images/person-with-file.png"),
    title: "Organize Your Files",
    subtitle: "Keep your documents organized and instantly available when you need them.",
  },
];

const LandingScreen = () => {
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slideIndex);
  };

  return (
    <View className="flex-1 bg-blue-600 pt-20 pb-10">
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View
            key={slide.id}
            className="w-screen items-center px-6 justify-between"
          >
            <Image
              source={slide.image}
              className="w-full h-1/2 rounded-2xl"
              resizeMode="contain"
            />

            <View className="items-center px-4">
              <Text className="text-white text-3xl font-bold tracking-wide text-justify mb-2">
                {slide.title}
              </Text>
              <Text className="text-white text-justify text-lg font-medium opacity-90 leading-relaxed">
                {slide.subtitle}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                index < slides.length - 1
                  ? scrollRef.current?.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    })
                  : navigation.navigate("LoginScreen")
              }
              className="bg-white px-6 py-3 rounded-2xl w-[80%] items-center mt-10 shadow-xl active:opacity-80"
            >
              <Text className="text-blue-600 text-lg font-bold tracking-wide">
                {index < slides.length - 1 ? "Next" : "Get Started"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Dot Indicators */}
      <View className="flex-row justify-center mt-4">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentSlide === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default LandingScreen;
