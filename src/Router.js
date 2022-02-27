import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./components/AuthContext";
import { SignedOutStack, SignedInTabs, MissingAdditionalInfoStack } from "./Stacks";

export const Router = () => {
  const { isAuthenticated, additionalInfoSubmitted } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? (additionalInfoSubmitted ? <SignedInTabs /> : <MissingAdditionalInfoStack />) : <SignedOutStack />}
    </NavigationContainer>
  );
};
