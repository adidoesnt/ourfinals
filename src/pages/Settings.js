import { SafeAreaView, Text } from "react-native";
import { useAuth } from "../components/AuthContext";
import { Button } from "../components/Button";

export default function Settings() {
  const { logout } = useAuth();
  return (
    <SafeAreaView>
      <Button onPress={logout}>Logout</Button>
    </SafeAreaView>
  );
}
