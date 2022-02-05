import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Marketplace from "./pages/Marketplace";
import Settings from "./pages/Settings";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export function SignedInTabs() {
  return (
    <Tabs.Navigator initialRouteName="Profile">
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Marketplace" component={Marketplace} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
}

export function SignedOutStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
