import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { spacing } from "@/constants/spacing";
import { colors } from "@/constants/colors";
import useLanguage from "@/hooks/useLanguage";
import ScreenWrapper from "@/shared/ScreenWrapper";


const NOTIFICATIONS = [
  {
    id: "1",
    type: "ticket",
    title: "Leaking Faucet #402",
    message: "Maintenance visit scheduled for tomorrow at 10:00 AM.",
    time: "2m ago",
    ticketId: "402",
    read: false,
  },
  {
    id: "2",
    type: "message",
    title: "Front Desk",
    message: "A package has arrived for you.",
    time: "1h ago",
    ticketId: "2045",
    read: false,
  },
  {
    id: "3",
    type: "announcement",
    title: "Elevator Maintenance",
    message: "Elevator B will be out of service.",
    time: "1d ago",
    read: true,
  },
];

export default function Notifications() {
  const router = useRouter();
  const { t } = useLanguage();

  const handlePress = (item) => {
    if (item.type === "ticket") {
      router.push(`/tenant/tickets/${item.ticketId}`);
    }
    if (item.type === "message") {
      router.push(`/tenant/chat/${item.ticketId}`);
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={styles.title}>{t.notifications.title}</Text>
        <Pressable>
          <Text style={styles.markRead}>{t.notifications.markAll}</Text>
        </Pressable>
      </View>

      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
            style={[
              styles.card,
              !item.read && styles.unread,
            ]}
          >
            <View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </Pressable>
        )}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "700" },
  markRead: { color: colors.primary, fontWeight: "600" },

  card: {
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  unread: {
    backgroundColor: colors.primarySoft,
  },
  cardTitle: { fontWeight: "700", fontSize: 15 },
  cardDesc: { color: colors.textSecondary, marginTop: 4 },
  time: { fontSize: 11, color: colors.textMuted, marginTop: 6 },
});
