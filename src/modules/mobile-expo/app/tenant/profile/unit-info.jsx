import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function UnitInformation() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.unit.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        {/* Unit Details */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t.unit.details}</Text>

          <InfoRow label={t.unit.property} value="Highland Towers" />
          <InfoRow label={t.unit.building} value="Block A" />
          <InfoRow label={t.unit.unit} value="402" />
          <InfoRow label={t.unit.floor} value="4th" />
          <InfoRow label={t.unit.type} value="2 Bed Standard" />
        </View>

        {/* Facility Manager */}
        <Text style={styles.sectionTitle}>
          {t.unit.facilityManagement}
        </Text>

        <View style={styles.card}>
          <View style={styles.managerRow}>
            <View style={styles.avatar} />
            <View>
              <Text style={styles.managerName}>Hans Müller</Text>
              <Text style={styles.managerRole}>
                {t.unit.facilityManager}
              </Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <Pressable style={styles.actionBtn}>
              <Text style={styles.actionText}>
                {t.common.call}
              </Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Text style={styles.actionText}>
                {t.common.email}
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Info Notice */}
        <View style={styles.notice}>
          <Text style={styles.noticeText}>
            {t.unit.notice}
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Components                          */
/* ---------------------------------- */

function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
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

  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: spacing.md,
    color: colors.textPrimary,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  label: {
    fontSize: 13,
    color: colors.textMuted,
  },

  value: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },

  managerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.backgroundSoft,
  },

  managerName: {
    fontSize: 16,
    fontWeight: "700",
  },

  managerRole: {
    fontSize: 13,
    color: colors.textSecondary,
  },

  actionRow: {
    flexDirection: "row",
    gap: spacing.md,
  },

  actionBtn: {
    flex: 1,
    backgroundColor: colors.backgroundSoft,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  actionText: {
    color: colors.primary,
    fontWeight: "600",
  },

  notice: {
    backgroundColor: colors.infoBg,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.infoBorder,
  },

  noticeText: {
    fontSize: 13,
    color: colors.infoText,
    lineHeight: 20,
  },
});
