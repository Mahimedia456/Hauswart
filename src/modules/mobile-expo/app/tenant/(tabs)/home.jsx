import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/shared/ScreenWrapper";
import TenantHeader from "@/shared/TenantHeader";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";


/* -------------------------------------------------- */
/* DUMMY DATA                                         */
/* -------------------------------------------------- */

const TICKETS = {
  open: 3,
  inProgress: 1,
  completed: 12,
};

const RECENT_UPDATES = [
  {
    id: "#4025",
    title: "Kitchen Sink Leak",
    status: "Technician assigned",
    statusColor: colors.info,
    time: "2h ago",
  },
  {
    id: "#3991",
    title: "Lobby Light Bulb",
    status: "Completed",
    statusColor: colors.success,
    time: "Yesterday",
  },
  {
    id: "#4028",
    title: "AC Noise",
    status: "Pending Review",
    statusColor: colors.primary,
    time: "Oct 29",
  },
];

const ANNOUNCEMENTS = [
  {
    id: 1,
    type: "NOTICE",
    title: "Water Shutoff Notice",
    date: "Oct 24",
    desc:
      "Please be advised that water will be unavailable between 10 AM and 2 PM for urgent repairs.",
  },
  {
    id: 2,
    type: "EVENT",
    title: "Community BBQ",
    date: "Oct 30",
    desc:
      "Join your neighbors for a community BBQ this Saturday at the rooftop garden.",
  },
];

/* -------------------------------------------------- */

export default function TenantDashboard() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <ScreenWrapper>
      {/* HEADER */}
      <TenantHeader
        name="Aamir"
        property="Green Tower — Unit 3A"
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* CREATE TICKET CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            {t.tenantDashboard.issueTitle}
          </Text>
          <Text style={styles.cardDesc}>
            {t.tenantDashboard.issueDesc}
          </Text>

          <Pressable
            style={styles.primaryBtn}
            onPress={() => router.push("/tenant/tickets/create")}
          >
            <Text style={styles.primaryText}>
              {t.tenantDashboard.createTicket}
            </Text>
          </Pressable>
        </View>

        {/* MY TICKETS */}
        <Text style={styles.sectionTitle}>
          {t.tenantDashboard.myTickets}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.ticketRow}
        >
          <Pressable onPress={() => router.push("/tenant/tickets")}>
            <TicketBox
              count={TICKETS.open}
              label={t.common.open}
            />
          </Pressable>

          <Pressable onPress={() => router.push("/tenant/tickets")}>
            <TicketBox
              count={TICKETS.inProgress}
              label={t.common.inProgress}
            />
          </Pressable>

          <Pressable onPress={() => router.push("/tenant/tickets")}>
            <TicketBox
              count={TICKETS.completed}
              label={t.common.completed}
            />
          </Pressable>
        </ScrollView>

        {/* RECENT UPDATES */}
        <Text style={styles.sectionTitle}>
          {t.tenantDashboard.recentUpdates}
        </Text>

        {RECENT_UPDATES.map((item) => (
          <Pressable
            key={item.id}
            style={styles.updateCard}
            onPress={() =>
              router.push(`/tenant/tickets/${item.id.replace("#", "")}`)
            }
          >
            <View style={styles.updateHeader}>
              <Text style={styles.updateId}>{item.id}</Text>
              <Text style={styles.updateTime}>{item.time}</Text>
            </View>

            <Text style={styles.updateTitle}>
              {item.title}
            </Text>

            <Text
              style={[
                styles.updateStatus,
                { color: item.statusColor },
              ]}
            >
              {item.status}
            </Text>
          </Pressable>
        ))}

        {/* ANNOUNCEMENTS */}
        <View style={styles.announceHeader}>
          <Text style={styles.sectionTitle}>
            {t.tenantDashboard.announcements}
          </Text>
          <Text style={styles.link}>
            {t.common.viewAll}
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.announceRow}
        >
          {ANNOUNCEMENTS.map((a) => (
            <View key={a.id} style={styles.announceCard}>
              <View style={styles.announceTop}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {a.type}
                  </Text>
                </View>
                <Text style={styles.announceDate}>
                  {a.date}
                </Text>
              </View>

              <Text style={styles.announceTitle}>
                {a.title}
              </Text>
              <Text style={styles.announceDesc}>
                {a.desc}
              </Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </ScreenWrapper>
  );
}

/* -------------------------------------------------- */
/* COMPONENTS                                         */
/* -------------------------------------------------- */

function TicketBox({ count, label }) {
  return (
    <View style={styles.ticketBox}>
      <Text style={styles.ticketCount}>{count}</Text>
      <Text style={styles.ticketLabel}>{label}</Text>
    </View>
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

  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xl,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },
  cardDesc: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    lineHeight: 22,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryText: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: spacing.md,
  },

  ticketRow: {
    gap: spacing.md,
    paddingBottom: spacing.lg,
  },
  ticketBox: {
    width: 120,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  ticketCount: {
    fontSize: 22,
    fontWeight: "700",
  },
  ticketLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },

  updateCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  updateHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  updateId: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "600",
  },
  updateTime: {
    fontSize: 11,
    color: colors.textMuted,
  },
  updateTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
  },
  updateStatus: {
    fontSize: 12,
    fontWeight: "600",
  },

  announceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  link: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },
  announceRow: {
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
  announceCard: {
    width: 260,
    backgroundColor: colors.backgroundSoft,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  announceTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  badge: {
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.textSecondary,
  },
  announceDate: {
    fontSize: 11,
    color: colors.textMuted,
  },
  announceTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  },
  announceDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
});
