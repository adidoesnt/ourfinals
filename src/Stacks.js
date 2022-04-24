import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Modules from "./pages/AllModules";
import Marketplace from "./pages/Marketplace";
import Settings from "./pages/Settings";
import AddAssignment from "./pages/AddAssignment";
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

export function AddAssignmentStack() {
  return (
    <Stack.Navigator initialRouteName="Add a New Assignment">
      <Stack.Screen name = "Add a New Assignment" component={AddAssignment}/>
    </Stack.Navigator>
  );
}