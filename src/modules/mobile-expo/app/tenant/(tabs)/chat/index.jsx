import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../../shared/ScreenWrapper";
import MobileHeader from "../../../shared/MobileHeader";
import EmptyState from "../../components/EmptyState";
import { colors } from "../../../constants/colors";
import { spacing } from "../../../constants/spacing";
import useLanguage from "../../../hooks/useLanguage";

/* -------------------------------------------------- */
/* DUMMY CHAT THREADS                                 */
/* -------------------------------------------------- */

const CHAT_THREADS = [
  {
    ticketId: "TK-2045",
    title: "Leaking pipe in kitchen",
    lastMessage:
      "A plumber is dispatched and will arrive shortly.",
    time: "10:30 AM",
    unread: true,
  },
  {
    ticketId: "TK-1998",
    title: "AC noise in bedroom",
    lastMessage: "Issue marked as In Progress.",
    time: "Yesterday",
    unread: false,
  },
  {
    ticketId: "TK-1874",
    title: "Light bulb replacement",
    lastMessage: "Ticket completed successfully.",
    time: "Sep 30",
    unread: false,
  },
];

/* -------------------------------------------------- */

export default function TenantChatThreads() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <ScreenWrapper>
      {/* Header */}
      <MobileHeader
        title={t.chat.title}
        rightIcon="notifications"
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {CHAT_THREADS.length === 0 ? (
          <EmptyState
            title={t.chat.emptyTitle}
            subtitle={t.chat.emptySubtitle}
          />
        ) : (
          CHAT_THREADS.map((item) => (
            <Pressable
              key={item.ticketId}
              style={styles.threadCard}
              onPress={() =>
                router.push(`/tenant/chat/${item.ticketId}`)
              }
            >
              <View style={styles.rowTop}>
                <Text style={styles.ticketId}>
                  #{item.ticketId}
                </Text>
                <Text style={styles.time}>
                  {item.time}
                </Text>
              </View>

              <Text
                style={styles.title}
                numberOfLines={1}
              >
                {item.title}
              </Text>

              <View style={styles.rowBottom}>
                <Text
                  style={[
                    styles.preview,
                    item.unread && styles.unreadText,
                  ]}
                  numberOfLines={1}
                >
                  {item.lastMessage}
                </Text>

                {item.unread && (
                  <View style={styles.unreadDot} />
                )}
              </View>
            </Pressable>
          ))
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

/* -------------------------------------------------- */
/* STYLES                                             */
/* -------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 140,
  },

  threadCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },

  rowTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  ticketId: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "600",
  },

  time: {
    fontSize: 11,
    color: colors.textMuted,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },

  rowBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  preview: {
    fontSize: 13,
    color: colors.textSecondary,
    flex: 1,
    marginRight: 8,
  },

  unreadText: {
    color: colors.textPrimary,
    fontWeight: "600",
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});
