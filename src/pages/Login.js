import {
  View,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  Text,
} from "react-native";
import * as yup from "yup";
import { styles } from "../components/Stylesheet";
import { useAuth } from "../components/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailSchema, passwordSchema } from "../schemas/reused";
import { FormField } from "../components/form/FormField";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { useState } from "react";
import FormDebug from "../components/form/FormDebug";
import { firebaseErrorMessages } from "../errorMessages";

const loginSchema = yup.object().shape({
  email: emailSchema.required(),
  password: passwordSchema.optional(),
});

export default function Login() {
  const { login, reset } = useAuth();

  const { handleSubmit, control, setError, setValue, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const values = watch();

  const [formError, setFormError] = useState("");

  const loginHandler = handleSubmit(async (data) => {
    const { email, password } = data;

    if (!password) {
      console.log("There is no password!");
      setError("password", {
        type: "manual",
        message: "Password is required",
      });
      return;
    }

    try {
      await login(email, password);
    } catch (error) {
      console.log(Object.keys(error));
      setFormError(firebaseErrorMessages[error.code]);
      return alert("Sign in failed.");
    }
  });

  const resetHandler = handleSubmit(async (data) => {
    console.log("Reset handler");
    const { email } = data;

    try {
      await reset(email);
      return alert("Check your email for further instructions.");
    } catch {
      return alert("Password reset failed.");
    }
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
        <View>
          <Button onPress={loginHandler}>Log In</Button>
          <Button onPress={resetHandler}>Forgot password?</Button>
        </View>

        {!!formError && (
          <View>
            <Text>{formError}</Text>
          </View>
        )}

        <FormDebug data={values} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
