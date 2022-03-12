import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./components/AuthContext";
import { SignedOutStack, SignedInTabs, MissingAdditionalInfoStack, AddAssignmentStack } from "./Stacks";

export const Router = () => {
  const { isAuthenticated, additionalInfoSubmitted, submittingAssignment } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? 
        (additionalInfoSubmitted ? 
            (submittingAssignment ? <AddAssignmentStack/> 
              : <SignedInTabs/>) 
                : <MissingAdditionalInfoStack />) 
                  : <SignedOutStack />}
    </NavigationContainer>
  );
};
