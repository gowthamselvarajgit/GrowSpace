import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import { useNavigation } from "@react-navigation/native";

// Validation schema
const ProfileSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  country: Yup.string().required("Country is required"),
});

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <ScrollView
        className="flex-1 bg-[#f5f7fa]"
        contentContainerStyle={{ paddingTop: 80, paddingHorizontal: 24 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-3xl font-bold text-slate-900 font-outfit mb-2">
          Complete Your Profile
        </Text>
        <Text className="text-xl text-slate-500 font-outfit mb-6">
          Help us personalize your experience
        </Text>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
          }}
          validationSchema={ProfileSchema}
          onSubmit={(values) => {
            console.log("Profile submitted:", values);
            navigation.navigate("HomeScreen");
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              {/* First & Last Name */}
              <View className="flex-row gap-4 mb-2">
                <View className="flex-1">
                  <TextField
                    placeholder="First Name"
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                  />
                  {touched.firstName && errors.firstName && (
                    <Text className="text-red-500 text-sm font-outfit">
                      {errors.firstName}
                    </Text>
                  )}
                </View>

                <View className="flex-1">
                  <TextField
                    placeholder="Last Name"
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                  />
                  {touched.lastName && errors.lastName && (
                    <Text className="text-red-500 text-sm font-outfit">
                      {errors.lastName}
                    </Text>
                  )}
                </View>
              </View>

              {/* Email */}
              <TextField
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text className="text-red-500 text-sm mb-2 font-outfit">
                  {errors.email}
                </Text>
              )}

              {/* Phone Number */}
              <TextField
                placeholder="Phone Number"
                value={values.phone}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                keyboardType="phone-pad"
              />
              {touched.phone && errors.phone && (
                <Text className="text-red-500 text-sm mb-2 font-outfit">
                  {errors.phone}
                </Text>
              )}

              {/* Country TextField */}
              <TextField
                placeholder="Country"
                value={values.country}
                onChangeText={handleChange("country")}
                onBlur={handleBlur("country")}
              />
              {touched.country && errors.country && (
                <Text className="text-red-500 text-sm mb-2 font-outfit">
                  {errors.country}
                </Text>
              )}

              {/* Submit Button */}
              <TouchableOpacity
                onPress={handleSubmit}
                className="bg-blue-600 mt-4 py-3 rounded-xl items-center"
              >
                <Text className="text-white font-bold text-lg font-outfit">
                  Save Profile
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserProfileScreen;
