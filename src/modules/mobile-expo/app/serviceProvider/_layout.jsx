import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export default function ServiceProviderLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary }}>
      <Tabs.Screen name="screens/Dashboard" options={{
        title: "Home",
        tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />
      }} />
      <Tabs.Screen name="screens/JobsList" options={{
        title: "Jobs",
        tabBarIcon: ({ color }) => <Ionicons name="briefcase-outline" size={22} color={color} />
      }} />
      <Tabs.Screen name="screens/Maintenance" options={{
        title: "Calendar",
        tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={22} color={color} />
      }} />
      <Tabs.Screen name="screens/Profile" options={{
        title: "Profile",
        tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} />
      }} />
    </Tabs>
  );
}
