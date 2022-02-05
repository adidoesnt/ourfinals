import { StatusBar } from "expo-status-bar";
import { View, Text, Image, SafeAreaView, Button } from "react-native";
import { styles } from "../components/Stylesheet";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        source={require("../../assets/highres_transparent_logo.png")}
      />
      <Text>An on-demand peer tutoring platform</Text>
      <Text>by students, for students.</Text>
      <SafeAreaView style={styles.join}>
        <View style={styles.logInButton}>
          <Button
            title="Log in"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
        <View style={styles.signUpButton}>
          <Button
            title="Sign up"
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
