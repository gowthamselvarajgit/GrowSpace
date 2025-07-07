import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import AvatarPicker from "../components/AvatarPicker";
import { useNavigation } from "@react-navigation/native";

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required(),
  country: Yup.string().required("Country is required"),
  avatar: Yup.mixed().required("Please select an avatar"),
});

export default function UserProfileScreen() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1"
    >
      <ScrollView
        className="bg-white px-6 pt-20"
        keyboardShouldPersistTaps="handled"
      >
        <Text className="text-3xl font-bold text-slate-800 mb-1">
          Complete Your Profile
        </Text>
        <Text className="text-lg text-slate-500 mb-6">
          Help us personalize your experience
        </Text>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            avatar: null,
          }}
          validationSchema={ProfileSchema}
          onSubmit={(values) => {
            console.log("Profile submitted:", values);
            navigation.navigate("Dashboard"); // navigate to Dashboard
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            setFieldValue,
          }) => (
            <>
              {/* Avatar Preview */}
              {values.avatar && (
                <View className="items-center mb-4">
                  <Image
                    source={values.avatar}
                    className="w-24 h-24 rounded-full border-2 border-blue-500"
                  />
                </View>
              )}

              <Text className="text-slate-700 font-semibold mb-2">
                Select Your Avatar
              </Text>
              <AvatarPicker
                selectedAvatar={values.avatar}
                onSelect={(avatar) => setFieldValue("avatar", avatar)}
              />
              {touched.avatar && errors.avatar && (
                <Text className="text-red-600 text-sm mt-1">
                  {errors.avatar}
                </Text>
              )}

              {/* First + Last Name */}
              <View className="flex-row gap-3 my-3">
                <View className="flex-1">
                  <TextField
                    placeholder="First Name"
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                  />
                  {touched.firstName && errors.firstName && (
                    <Text className="text-red-600 text-sm">
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
                    <Text className="text-red-600 text-sm">
                      {errors.lastName}
                    </Text>
                  )}
                </View>
              </View>

              <TextField
                placeholder="Email"
                keyboardType="email-address"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              {touched.email && errors.email && (
                <Text className="text-red-600 text-sm mt-1">
                  {errors.email}
                </Text>
              )}

              <TextField
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={values.phone}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
              />
              {touched.phone && errors.phone && (
                <Text className="text-red-600 text-sm mt-1">
                  {errors.phone}
                </Text>
              )}

              <TextField
                placeholder="Country"
                value={values.country}
                onChangeText={handleChange("country")}
                onBlur={handleBlur("country")}
              />
              {touched.country && errors.country && (
                <Text className="text-red-600 text-sm mt-1">
                  {errors.country}
                </Text>
              )}

              <TouchableOpacity
                className="bg-blue-600 rounded-xl py-3 mt-6 items-center"
                onPress={handleSubmit}
              >
                <Text className="text-white text-lg font-bold">
                  Save Profile
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
