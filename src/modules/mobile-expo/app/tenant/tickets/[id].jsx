import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

/* -------------------------------------------------- */
/* DUMMY DATA                                         */
/* -------------------------------------------------- */

const TICKET = {
  id: "#8821",
  title: "Leaking Pipe",
  category: "Plumbing",
  priority: "High Priority",
  status: "In Progress",
  createdAt: "Oct 24, 10:30 AM",

  location: {
    property: "Sunset Apartments",
    unit: "4B",
    area: "Kitchen",
  },

  description:
    "The pipe under the sink has been dripping since last night. Water is pooling on the floor and I can't stop it. I’ve placed a bucket underneath but it fills every few hours.",

  attachments: [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ],

  timeline: [
    {
      title: "Work in Progress",
      time: "Today, 10:00 AM",
      desc: "Technician arrived on site.",
    },
    {
      title: "Assigned to Mario P.",
      time: "Oct 24, 4:00 PM",
    },
    {
      title: "Ticket Created",
      time: "Oct 24, 3:30 PM",
    },
  ],

  lastMessage: {
    sender: "Mario P.",
    time: "10:05 AM",
    text:
      "I'll be there in about 30 minutes. Please make sure the area is clear.",
  },
};

/* -------------------------------------------------- */

export default function TicketDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>←</Text>
        </Pressable>

        <Text style={styles.headerTitle}>
          {t.ticketDetail.title}
        </Text>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>
            {TICKET.status}
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* SUMMARY */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.meta}>{TICKET.id}</Text>
            <Text style={styles.meta}>
              {TICKET.createdAt}
            </Text>
          </View>

          <Text style={styles.title}>{TICKET.title}</Text>

          <View style={styles.tagRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>
                {TICKET.category}
              </Text>
            </View>
            <View style={styles.priority}>
              <Text style={styles.priorityText}>
                {TICKET.priority}
              </Text>
            </View>
          </View>
        </View>

        {/* LOCATION */}
        <Text style={styles.section}>
          {t.ticketDetail.location}
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>
            {t.ticketDetail.property}
          </Text>
          <Text style={styles.value}>
            {TICKET.location.property}
          </Text>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>
                {t.ticketDetail.unit}
              </Text>
              <Text style={styles.value}>
                {TICKET.location.unit}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>
                {t.ticketDetail.area}
              </Text>
              <Text style={styles.value}>
                {TICKET.location.area}
              </Text>
            </View>
          </View>
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.section}>
          {t.ticketDetail.description}
        </Text>
        <View style={styles.card}>
          <Text style={styles.desc}>
            {TICKET.description}
          </Text>
        </View>

        {/* ATTACHMENTS */}
        <Text style={styles.section}>
          {t.ticketDetail.attachments}
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.attachRow}>
            {TICKET.attachments.map((img, i) => (
              <Image
                key={i}
                source={{ uri: img }}
                style={styles.image}
              />
            ))}
          </View>
        </ScrollView>

        {/* STATUS TIMELINE */}
        <Text style={styles.section}>
          {t.ticketDetail.progress}
        </Text>

        <View style={styles.card}>
          {TICKET.timeline.map((step, i) => (
            <View key={i} style={styles.timelineItem}>
              <View style={styles.dot} />
              <View>
                <Text style={styles.timelineTitle}>
                  {step.title}
                </Text>
                <Text style={styles.timelineTime}>
                  {step.time}
                </Text>
                {step.desc && (
                  <Text style={styles.timelineDesc}>
                    {step.desc}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* MESSAGES */}
        <Text style={styles.section}>
          {t.ticketDetail.messages}
        </Text>

        <View style={styles.card}>
          <Text style={styles.msgName}>
            {TICKET.lastMessage.sender}
          </Text>
          <Text style={styles.msgTime}>
            {TICKET.lastMessage.time}
          </Text>
          <Text style={styles.msgText}>
            {TICKET.lastMessage.text}
          </Text>

          <Pressable
            style={styles.chatBtn}
            onPress={() =>
              router.push(
                `/tenant/tickets/${id}/chat`
              )
            }
          >
            <Text style={styles.chatText}>
              {t.ticketDetail.openChat}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

/* -------------------------------------------------- */
/* STYLES                                             */
/* -------------------------------------------------- */

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    justifyContent: "space-between",
  },
  back: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  statusBadge: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
  },

  container: {
    padding: spacing.lg,
    paddingBottom: 140,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    marginTop: spacing.md,
    gap: spacing.md,
  },

  meta: {
    fontSize: 11,
    color: colors.textMuted,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: spacing.sm,
  },

  tagRow: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  tag: {
    backgroundColor: colors.backgroundSoft,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 12,
  },
  priority: {
    backgroundColor: "#FFE5E5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  priorityText: {
    color: "#C62828",
    fontSize: 12,
    fontWeight: "600",
  },

  section: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },

  label: {
    fontSize: 12,
    color: colors.textMuted,
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
  },

  desc: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSecondary,
  },

  attachRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },

  timelineItem: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginTop: 6,
  },
  timelineTitle: {
    fontWeight: "600",
  },
  timelineTime: {
    fontSize: 11,
    color: colors.textMuted,
  },
  timelineDesc: {
    fontSize: 12,
    color: colors.textSecondary,
  },

  msgName: {
    fontWeight: "700",
  },
  msgTime: {
    fontSize: 11,
    color: colors.textMuted,
  },
  msgText: {
    fontSize: 14,
    marginVertical: spacing.sm,
  },
  chatBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: spacing.md,
  },
  chatText: {
    color: colors.white,
    fontWeight: "700",
  },
});
