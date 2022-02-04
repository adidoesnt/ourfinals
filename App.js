import { StatusBar } from "expo-status-bar";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Profile from "./src/pages/Profile";
import Marketplace from "./src/pages/Marketplace";
import Settings from "./src/pages/Settings";

import { View, Text, Image, SafeAreaView, Button } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { styles } from "./src/components/Stylesheet";
import { AuthProvider, useAuth } from "./src/components/AuthContext";

function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        source={require("./assets/highres_transparent_logo.png")}
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
        <View style = {styles.signUpButton}>
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

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function SignedInTabs() {
  return (
    <Tabs.Navigator initialRouteName="Profile">
        <Tabs.Screen name="Profile" component={Profile} />
        <Tabs.Screen name="Marketplace" component={Marketplace} />
        <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
}

function SignedOutStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <SignedOutStack/>
        {/* Add signed in tabs here based on currentUser not being null*/}
      </NavigationContainer>
    </AuthProvider>
  );
}
