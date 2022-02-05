import { SafeAreaView, Text } from "react-native";
import { useAuth } from "../components/AuthContext";
import { Button } from "../components/Button";
import AdditionalInfoSubmission from "../pages/AdditionalInfoSubmission";

export default function Settings() {
  const { logout } = useAuth();
  return (
    <SafeAreaView>
      <AdditionalInfoSubmission />
      <Button onPress={logout}>Logout</Button>
    </SafeAreaView>
  );
}
