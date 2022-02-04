import { AuthProvider } from "./src/components/AuthContext";
import { Router } from "./src/Router";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
