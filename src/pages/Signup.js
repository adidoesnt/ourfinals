import {
  KeyboardAvoidingView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { styles } from "../components/Stylesheet";
import { useAuth } from "../components/AuthContext";
import { emailSchema, passwordSchema } from "../schemas/reused";
import { FormField } from "../components/form/FormField";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";

const signupSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "The passwords do not match")
    .label("Password confirmation"),
});

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { signup } = useAuth();

  async function signupHandler(data) {
    const { email, password } = data;

    try {
      await signup(email, password);
    } catch {
      return alert("Sign up failed.");
    }
  }

  const { handleSubmit, control } = useForm({
    defaultValues: {},
    resolver: yupResolver(signupSchema),
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../../assets/highres_transparent_logo.png")}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.formContainer}>
        <FormField
          control={control}
          name="email"
          label="Email"
          placeholder="yourname@nus.edu.sg"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
        ></FormField>
        <FormField
          control={control}
          name="password"
          label="Password"
          secureTextEntry
        ></FormField>
        <FormField
          control={control}
          name="passwordConfirmation"
          label="Confirm Password"
          secureTextEntry
        ></FormField>

        <View>
          <Button onPress={handleSubmit(signupHandler)}>Sign Up</Button>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
