import { KeyboardAvoidingView, View, SafeAreaView, Image } from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { styles } from "../components/Stylesheet";
import { useAuth } from "../components/AuthContext";
import { emailSchema, passwordSchema } from "../schemas/reused";
import { FormField } from "../components/form/FormField";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";

const signupSchema = yup.object().shape({
  email: emailSchema.required(),
  password: passwordSchema.required(),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "The passwords do not match")
    .label("Password confirmation"),
});

export default function Signup() {
  const { signup } = useAuth();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(signupSchema),
  });

  const signupHandler = handleSubmit(async (data) => {
    const { email, password } = data;

    try {
      await signup(email, password);
    } catch {
      return alert("Sign up failed.");
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
          placeholder="your NUS email"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
        />
        <FormField
          control={control}
          name="password"
          label="Password"
          secureTextEntry
        />
        <FormField
          control={control}
          name="passwordConfirmation"
          label="Confirm Password"
          secureTextEntry
        />

        <View>
          <Button onPress={signupHandler}>Sign Up</Button>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
