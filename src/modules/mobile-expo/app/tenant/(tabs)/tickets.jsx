import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import ScreenWrapper from "@/shared/ScreenWrapper";
import TenantHeader from "@/shared/TenantHeader";
import TicketCard from "@/shared/TicketCardMobile";
import TicketFilterChips from "@/tenant/components/TicketFilterChips";
import EmptyState from "@/tenant/components/EmptyState";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import useLanguage from "@/hooks/useLanguage";


/* -------------------------------------------------- */
/* DUMMY DATA                                         */
/* -------------------------------------------------- */

const TICKETS = [
  {
    id: "4921",
    title: "Leaking faucet in master bathroom",
    category: "Plumbing",
    status: "inProgress",
    date: "Oct 24, 2023",
  },
  {
    id: "4890",
    title: "AC unit making loud rattling noise",
    category: "HVAC",
    status: "open",
    date: "Oct 20, 2023",
  },
  {
    id: "4812",
    title: "Lobby door lock jammed",
    category: "Security",
    status: "onHold",
    date: "Oct 15, 2023",
  },
  {
    id: "4755",
    title: "Light bulb replacement in hallway",
    category: "Electrical",
    status: "completed",
    date: "Sep 30, 2023",
  },
];

/* -------------------------------------------------- */

export default function TenantTickets() {
  const { t } = useLanguage();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("active"); // active | history

  const filteredTickets =
    activeTab === "active"
      ? TICKETS.filter(
          (t) => t.status !== "completed"
        )
      : TICKETS.filter(
          (t) => t.status === "completed"
        );

  return (
    <ScreenWrapper>
      {/* HEADER */}
      <TenantHeader title={t.tickets.title} />

      {/* TABS */}
      <View style={styles.tabs}>
        <Pressable
          style={[
            styles.tab,
            activeTab === "active" && styles.tabActive,
          ]}
          onPress={() => setActiveTab("active")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "active" &&
                styles.tabTextActive,
            ]}
          >
            {t.tickets.myTickets}
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.tab,
            activeTab === "history" && styles.tabActive,
          ]}
          onPress={() => setActiveTab("history")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "history" &&
                styles.tabTextActive,
            ]}
          >
            {t.tickets.history}
          </Text>
        </Pressable>
      </View>

      {/* FILTERS */}
      {activeTab === "active" ? (
        <TicketFilterChips />
      ) : (
        <Pressable style={styles.calendarFilter}>
          <Text style={styles.calendarText}>
            {t.tickets.filterByDate}
          </Text>
        </Pressable>
      )}

      {/* LIST */}
      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        {filteredTickets.length === 0 ? (
          <EmptyState
            title={t.tickets.emptyTitle}
            subtitle={t.tickets.emptyDesc}
          />
        ) : (
          filteredTickets.map((ticket) => (
            <Pressable
              key={ticket.id}
              onPress={() =>
                router.push(
                  `/tenant/tickets/${ticket.id}`
                )
              }
            >
              <TicketCard ticket={ticket} />
            </Pressable>
          ))
        )}
      </ScrollView>

      {/* FAB – CREATE TICKET (ONLY ACTIVE TAB) */}
      {activeTab === "active" && (
        <Pressable
          style={styles.fab}
          onPress={() =>
            router.push("/tenant/tickets/create")
          }
        >
          <Text style={styles.fabIcon}>＋</Text>
        </Pressable>
      )}
    </ScreenWrapper>
  );
}

/* -------------------------------------------------- */
/* STYLES                                             */
/* -------------------------------------------------- */

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    marginTop: spacing.sm,
  },

  tab: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grey100,
    alignItems: "center",
    justifyContent: "center",
  },

  tabActive: {
    backgroundColor: colors.primary,
  },

  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
  },

  tabTextActive: {
    color: colors.white,
  },

  calendarFilter: {
    marginTop: spacing.md,
    marginHorizontal: spacing.lg,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.grey100,
    alignItems: "center",
    justifyContent: "center",
  },

  calendarText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "500",
  },

  list: {
    padding: spacing.lg,
    paddingBottom: 140,
    gap: spacing.md,
  },

  fab: {
    position: "absolute",
    bottom: 90,
    right: spacing.lg,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },

  fabIcon: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "700",
  },
});
