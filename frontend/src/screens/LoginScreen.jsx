import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import TextField from "../components/TextField";

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginScreen = () => {
  return (
    <ScrollView
      className="flex-1 bg-[#f5f7fa]"
      contentContainerStyle={{ paddingTop: 80, paddingHorizontal: 24 }}
      keyboardShouldPersistTaps="handled"
    >
      <Text className="text-4xl font-bold text-slate-900 font-outfit mb-1">
        Welcome Back 👋
      </Text>
      <Text className="text-2xl text-slate-500 font-outfit mb-6">
        Login to your account
      </Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
          // You can call your login API here
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
            {/* Email */}
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

            {/* Password */}
            <TextField
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text className="text-red-500 text-sm mb-4 font-outfit">
                {errors.password}
              </Text>
            )}

            {/* Submit Button */}
            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-blue-600 mt-4 py-3 rounded-xl items-center"
            >
              <Text className="text-white font-bold text-lg font-outfit">
                Login
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default LoginScreen;
