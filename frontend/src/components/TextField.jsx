import { TextInput } from "react-native";
import React from "react";

const TextField = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  secureTextEntry,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#94a3b8"
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      className="border border-slate-300 bg-white rounded-xl px-4 py-3 mb-2 text-base font-outfit"
    />
  );
};

export default TextField;
