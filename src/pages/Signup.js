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
    const { email, password, confirmPassword } = data;

    console.log("Received information, trying to sign in");
    console.log(data);

    const suffix = email.split("@")[1];
    if (suffix === "u.nus.edu" || suffix === "nus.edu.sg") {
      try {
        await signup(email, password);
      } catch {
        return alert("Sign up failed.");
      }
    } else {
      return alert("Signups are currently open to NUS students only.");
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

      {/* New Signup form */}
      <View>
        <FormField
          control={control}
          name="email"
          label="Email"
          placeholder="yourname@nus.edu.sg"
        ></FormField>
        <FormField
          control={control}
          name="password"
          label="Password"
        ></FormField>
        <FormField
          control={control}
          name="passwordConfirmation"
          label="Confirm Password"
        ></FormField>

        <TouchableOpacity onPress={handleSubmit(signupHandler)}>
          <Text>Sign up button</Text>
        </TouchableOpacity>
      </View>
      {/*  */}

      <SafeAreaView style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </SafeAreaView>
      <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={signupHandler}>
          <Text style={styles.button}>Sign up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
