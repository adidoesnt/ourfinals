import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Modules from "./pages/AllModules";
import Marketplace from "./pages/Marketplace";
import Settings from "./pages/Settings";
import Chat from "./pages/Chat";
import AdditionalInfo from "./pages/AdditionalInfoSubmission";

const Stack = createStackNavigator();
const AdditionalInfoStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export function SignedInTabs() {
  return (
    <Tabs.Navigator initialRouteName="Profile">
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Modules" component={Modules} />
      <Tabs.Screen name="Marketplace" component={Marketplace} />
      <Tabs.Screen name="Chat" component={Chat} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
}

export function MissingAdditionalInfoStack() {
  return (
    <AdditionalInfoStack.Navigator initialRouteName="Additional Information">
      <AdditionalInfoStack.Screen name="Additional Information" component={AdditionalInfo} />
    </AdditionalInfoStack.Navigator>
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
