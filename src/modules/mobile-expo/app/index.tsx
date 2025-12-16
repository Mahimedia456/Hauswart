import { Redirect } from "expo-router";

export default function Index() {
  // Temporary: send user to login
  return <Redirect href="/auth/screens/Splash" />;
}
