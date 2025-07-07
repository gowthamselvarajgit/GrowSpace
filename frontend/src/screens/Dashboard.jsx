import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-web";
import { Header } from "@react-navigation/stack";
import StorageWidget from "../components/StorageWidget";
import FileTypeCard from "../components/FileTypeCard";

const Dashboard = () => {
  return (
    <ScrollView className="flex-1 px-4 py-6 bg-white">
      <Header name="Gowtham" />
      <StorageWidget usedGB={3.2} />
      <View className="flex-row justify-between mt-4">
        <FileTypeCard label={Picture} count={896} />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
