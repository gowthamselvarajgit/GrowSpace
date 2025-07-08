import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header"; // ✅ Your custom Header
import StorageWidget from "../components/StorageWidget";
import FileTypeCard from "../components/FileTypeCard";

const Dashboard = () => {
  return (
    <ScrollView className="flex-1 px-4 py-6 bg-white">
      <Header name="Gowtham" />
      <StorageWidget usedGB={3.2} />
      <View className="flex-row justify-between mt-4">
        <FileTypeCard label="Pictures" count={896} color="bg-blue-500" />
        {/* Add more FileTypeCards if needed */}
      </View>
    </ScrollView>
  );
};

export default Dashboard;
