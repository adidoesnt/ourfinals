import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./components/AuthContext";
import { SignedOutStack, SignedInTabs } from "./Stacks";
import { Text } from "react-native";

export const Router = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <SignedInTabs /> : <SignedOutStack />}
    </NavigationContainer>
  );
};
