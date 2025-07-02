import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import { useNavigation } from "@react-navigation/native";
import AvatarPicker from "../components/AvatarPicker";

// Validation Schema
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
  avatar: Yup.mixed().required("Please select an avatar"),
});

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.flex}
    >
      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Complete Your Profile</Text>
        <Text style={styles.subtitle}>Help us personalize your experience</Text>

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
            setFieldValue,
          }) => (
            <>
              {/* Avatar Preview */}
              {values.avatar && (
                <View style={styles.avatarPreviewContainer}>
                  <Image source={values.avatar} style={styles.avatarPreview} />
                </View>
              )}

              {/* Avatar Picker */}
              <Text style={styles.avatarLabel}>Select Your Avatar</Text>
              <AvatarPicker
                selectedAvatar={values.avatar}
                onSelect={(avatar) => setFieldValue("avatar", avatar)}
              />
              {touched.avatar && errors.avatar && (
                <Text style={styles.error}>{errors.avatar}</Text>
              )}

              {/* First & Last Name */}
              <View style={styles.row}>
                <View style={styles.flex}>
                  <TextField
                    placeholder="First Name"
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                  />
                  {touched.firstName && errors.firstName && (
                    <Text style={styles.error}>{errors.firstName}</Text>
                  )}
                </View>
                <View style={styles.flex}>
                  <TextField
                    placeholder="Last Name"
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                  />
                  {touched.lastName && errors.lastName && (
                    <Text style={styles.error}>{errors.lastName}</Text>
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
                <Text style={styles.error}>{errors.email}</Text>
              )}

              {/* Phone */}
              <TextField
                placeholder="Phone Number"
                value={values.phone}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                keyboardType="phone-pad"
              />
              {touched.phone && errors.phone && (
                <Text style={styles.error}>{errors.phone}</Text>
              )}

              {/* Country */}
              <TextField
                placeholder="Country"
                value={values.country}
                onChangeText={handleChange("country")}
                onBlur={handleBlur("country")}
              />
              {touched.country && errors.country && (
                <Text style={styles.error}>{errors.country}</Text>
              )}

              {/* Submit Button */}
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.submitButton}
              >
                <Text style={styles.submitText}>Save Profile</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  flex: { flex: 1 },
  background: { backgroundColor: "#f5f7fa" },
  content: { paddingTop: 80, paddingHorizontal: 24 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  subtitle: { fontSize: 18, color: "#64748b", marginBottom: 24 },
  row: { flexDirection: "row", gap: 12, marginBottom: 12 },
  error: { color: "#dc2626", fontSize: 12, marginTop: 4 },
  avatarLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "#334155",
  },
  avatarPreviewContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  avatarPreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#2563eb",
  },
  submitButton: {
    backgroundColor: "#2563eb",
    marginTop: 24,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
