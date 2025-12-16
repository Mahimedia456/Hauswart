import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export default function FacilityManagerLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary }}>
      <Tabs.Screen name="screens/Dashboard" options={{
        title: "Home",
        tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />
      }} />
      <Tabs.Screen name="screens/TicketsList" options={{
        title: "Tickets",
        tabBarIcon: ({ color }) => <Ionicons name="ticket-outline" size={22} color={color} />
      }} />
      <Tabs.Screen name="screens/TeamOverview" options={{
        title: "Team",
        tabBarIcon: ({ color }) => <Ionicons name="people-outline" size={22} color={color} />
      }} />
      <Tabs.Screen name="screens/Reports" options={{
        title: "Reports",
        tabBarIcon: ({ color }) => <Ionicons name="bar-chart-outline" size={22} color={color} />
      }} />
    </Tabs>
  );
}
