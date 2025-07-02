import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const avatars = [
  require("../assets/images/avatar1.avif"),
  require("../assets/images/avatar2.jpg"),
  require("../assets/images/avatar3.jpg"),
  require("../assets/images/avatar4.avif"),
  require("../assets/images/avatar5.avif"),
  require("../assets/images/avatar6.avif"),
  require("../assets/images/avatar7.avif"),
  require("../assets/images/avatar8.avif"),
  require("../assets/images/avatar9.avif"),
  require("../assets/images/avatar10.avif"),
  require("../assets/images/avatar11.jpg"),
  require("../assets/images/avatar12.avif"),
  require("../assets/images/avatar13.avif"),
  require("../assets/images/avatar14.avif"),
  require("../assets/images/avatar15.avif"),
  require("../assets/images/avatar16.avif"),
  require("../assets/images/avatar17.avif"),
];

const AvatarPicker = ({ selectedAvatar, onSelect }) => {
  return (
    <FlatList
      data={avatars}
      horizontal
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const isSelected = selectedAvatar === item;
        return (
          <TouchableOpacity
            onPress={() => onSelect(item)}
            style={[styles.avatarWrapper, isSelected && styles.selectedBorder]}
          >
            <Image source={item} style={styles.avatar} />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default AvatarPicker;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  avatarWrapper: {
    marginRight: 12,
    padding: 2,
    borderRadius: 50,
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: "#2563eb",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
});
