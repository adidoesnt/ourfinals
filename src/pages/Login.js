import { View, KeyboardAvoidingView, Image, SafeAreaView } from "react-native";
import * as yup from "yup";
import { styles } from "../components/Stylesheet";
import { useAuth } from "../components/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailSchema, passwordSchema } from "../schemas/reused";
import { FormField } from "../components/form/FormField";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";

const loginSchema = yup.object().shape({
  email: emailSchema.required(),
  password: passwordSchema.optional(),
});

export default function Login() {
  const { login, reset } = useAuth();

  const { handleSubmit, control, setError } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

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
    } catch {
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
          <Button onPress={loginHandler}>Sign Up</Button>
          <Button onPress={resetHandler}>Forgot password?</Button>
        </View>
        {/* <TextInput
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
        /> */}
      </SafeAreaView>

      {/* <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={loginHandler}>
          <Text style={styles.button}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetHandler}>
          <Text style={styles.button}>Forgot Password?</Text>
        </TouchableOpacity>
      </SafeAreaView> */}
    </KeyboardAvoidingView>
  );
}
