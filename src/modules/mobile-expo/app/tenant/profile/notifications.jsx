import {
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function NotificationPreferences() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.notifications.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        {/* Notification Options */}
        <Section title={t.notifications.options}>
          <ToggleRow label={t.notifications.ticketUpdates} />
          <ToggleRow label={t.notifications.chatMessages} />
          <ToggleRow label={t.notifications.announcements} />
          <ToggleRow label={t.notifications.reminders} defaultOff />
        </Section>

        {/* Notification Channels */}
        <Section title={t.notifications.channels}>
          <ToggleRow label={t.notifications.push} />
          <ToggleRow label={t.notifications.email} defaultOff />
        </Section>
      </View>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Reusable Components                */
/* ---------------------------------- */

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>{children}</View>
    </View>
  );
}

function ToggleRow({ label, defaultOff }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={!defaultOff}
        trackColor={{
          false: colors.border,
          true: colors.primary,
        }}
        thumbColor={colors.white}
      />
    </View>
  );
}

/* ---------------------------------- */
/* Styles                             */
/* ---------------------------------- */

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textMuted,
    textTransform: "uppercase",
    marginBottom: spacing.sm,
    paddingLeft: spacing.xs,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.textPrimary,
  },
});
