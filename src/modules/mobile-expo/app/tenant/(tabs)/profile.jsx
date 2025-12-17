import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/shared/ScreenWrapper";
import useLanguage from "@/hooks/useLanguage";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";


/* ---------------------------------- */
/* Reusable UI Helpers                */
/* ---------------------------------- */
function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.card}>{children}</View>
    </View>
  );
}

function Item({ label, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.item}>
      <Text style={styles.itemText}>{label}</Text>
    </Pressable>
  );
}

/* ---------------------------------- */
/* Main Screen                         */
/* ---------------------------------- */
export default function Profile() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      <Text style={styles.title}>{t.profile.title}</Text>

      {/* ACCOUNT */}
      <Section title={t.profile.account}>
        <Item
          label={t.profile.edit}
          onPress={() => router.push("/tenant/profile/edit")}
        />
        <Item
          label={t.profile.password}
          onPress={() => router.push("/tenant/profile/change-password")}
        />
        <Item
          label={t.profile.unit}
          onPress={() => router.push("/tenant/profile/unit-info")}
        />
        <Item
          label={t.profile.emergency}
          onPress={() => router.push("/tenant/profile/emergency")}
        />
      </Section>

      {/* PREFERENCES */}
      <Section title={t.profile.preferences}>
        <Item
          label={t.profile.language}
          onPress={() => router.push("/tenant/profile/language")}
        />
        <Item
          label={t.profile.notifications}
          onPress={() => router.push("/tenant/profile/notifications")}
        />
      </Section>

      {/* SUPPORT & LEGAL */}
      <Section title={t.profile.support}>
        <Item
          label={t.profile.help}
          onPress={() => router.push("/tenant/profile/help-center")}
        />
        <Item
          label={t.profile.privacy}
          onPress={() => router.push("/tenant/profile/privacy-policy")}
        />
        <Item
          label={t.profile.terms}
          onPress={() => router.push("/tenant/profile/terms")}
        />
      </Section>

      {/* LOGOUT */}
      <Pressable
        style={styles.logout}
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.logoutText}>{t.profile.logout}</Text>
      </Pressable>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Styles                              */
/* ---------------------------------- */
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },

  section: {
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textMuted,
    marginBottom: spacing.sm,
    textTransform: "uppercase",
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },

  item: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.textPrimary,
  },

  logout: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    paddingVertical: spacing.md,
    alignItems: "center",
  },
  logoutText: {
    color: colors.error,
    fontWeight: "700",
    fontSize: 15,
  },
});
