import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function EmergencyContact() {
  const router = useRouter();
  const { t } = useLanguage();

  const call = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const email = (address) => {
    Linking.openURL(`mailto:${address}`);
  };

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.emergency.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        {/* Emergency Services */}
        <Text style={styles.sectionTitle}>
          {t.emergency.services}
        </Text>

        <ServiceCard
          label={t.emergency.fire}
          number="112"
          color={colors.error}
          onPress={() => call("112")}
        />

        <ServiceCard
          label={t.emergency.police}
          number="110"
          color={colors.info}
          onPress={() => call("110")}
        />

        <ServiceCard
          label={t.emergency.medical}
          number="112"
          color={colors.success}
          onPress={() => call("112")}
        />

        {/* Divider */}
        <View style={styles.divider} />

        {/* Property Management */}
        <Text style={styles.sectionTitle}>
          {t.emergency.propertyManagement}
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            {t.emergency.facilityContact}
          </Text>
          <Text style={styles.cardSubtitle}>
            {t.emergency.facilityHint}
          </Text>

          <View style={styles.manager}>
            <Text style={styles.managerName}>John Doe</Text>
            <Text style={styles.managerRole}>
              {t.emergency.propertyManager}
            </Text>
          </View>

          <Pressable
            style={styles.actionRow}
            onPress={() => call("+15551234567")}
          >
            <Text style={styles.actionLabel}>
              +1 (555) 123-4567
            </Text>
            <Text style={styles.actionHint}>
              {t.common.tapToCall}
            </Text>
          </Pressable>

          <Pressable
            style={styles.actionRow}
            onPress={() => email("emergency@hauswart.com")}
          >
            <Text style={styles.actionLabel}>
              emergency@hauswart.com
            </Text>
            <Text style={styles.actionHint}>
              {t.common.tapToEmail}
            </Text>
          </Pressable>
        </View>

        {/* Notice */}
        <View style={styles.notice}>
          <Text style={styles.noticeText}>
            {t.emergency.notice}
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Components                          */
/* ---------------------------------- */

function ServiceCard({ label, number, onPress, color }) {
  return (
    <View style={styles.serviceCard}>
      <View>
        <Text style={styles.serviceLabel}>{label}</Text>
        <Text style={styles.serviceNumber}>{number}</Text>
      </View>

      <Pressable
        style={[styles.callBtn, { backgroundColor: color + "22" }]}
        onPress={onPress}
      >
        <Text style={[styles.callText, { color }]}>
          Call
        </Text>
      </Pressable>
    </View>
  );
}

/* ---------------------------------- */
/* Styles                              */
/* ---------------------------------- */

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: spacing.md,
  },

  serviceCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },

  serviceLabel: {
    fontSize: 15,
    fontWeight: "600",
  },

  serviceNumber: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },

  callBtn: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
  },

  callText: {
    fontWeight: "700",
    fontSize: 13,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
  },

  cardSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },

  manager: {
    marginBottom: spacing.md,
  },

  managerName: {
    fontSize: 14,
    fontWeight: "700",
  },

  managerRole: {
    fontSize: 12,
    color: colors.textMuted,
  },

  actionRow: {
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  actionLabel: {
    fontSize: 14,
    fontWeight: "600",
  },

  actionHint: {
    fontSize: 12,
    color: colors.textMuted,
  },

  notice: {
    backgroundColor: colors.backgroundSoft,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  noticeText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
