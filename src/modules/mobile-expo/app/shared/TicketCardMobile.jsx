import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

export default function TicketCardMobile({ ticket }) {
  if (!ticket) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{ticket.title}</Text>
      <Text style={styles.meta}>
        {ticket.category} • {ticket.date}
      </Text>
      <Text style={styles.status}>{ticket.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  meta: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary,
  },
});
