import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import TextField from "../components/TextField";

// Yup validation schema
const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [agree, setAgree] = useState(true); // To allow form submission

  return (
    <ScrollView
      className="flex-1 bg-[#f5f7fa]"
      contentContainerStyle={{ paddingTop: 80, paddingHorizontal: 24 }}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <Text className="text-4xl font-bold text-slate-900 font-outfit mb-1">
        Let’s Get Started
      </Text>
      <Text className="text-2xl text-slate-500 font-outfit mb-6">
        Create your own account
      </Text>

      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          if (!agree) return;
          console.log("Form submitted:", values);
          navigation.navigate("UserProfileScreen"); // Navigate to UserProfileScreen on successful submission
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextField
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {touched.email && errors.email && (
              <Text className="text-red-500 text-sm mb-2 font-outfit">
                {errors.email}
              </Text>
            )}

            <TextField
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text className="text-red-500 text-sm mb-2 font-outfit">
                {errors.password}
              </Text>
            )}

            <TextField
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              secureTextEntry
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text className="text-red-500 text-sm mb-4 font-outfit">
                {errors.confirmPassword}
              </Text>
            )}

            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-blue-600 mt-4 py-3 rounded-xl items-center"
            >
              <Text className="text-white font-bold text-lg font-outfit">
                Sign Up
              </Text>
            </TouchableOpacity>

            <View className="items-center mt-6">
              <Text className="text-base text-slate-600 font-outfit">
                Already have an account?{" "}
                <Text
                  onPress={() => navigation.navigate("LoginScreen")}
                  className="text-blue-600 underline font-medium"
                >
                  Sign in
                </Text>
              </Text>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default SignUpScreen;
