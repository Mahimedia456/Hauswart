import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  BackHandler,
} from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import PrimaryButton from "../../shared/PrimaryButton";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import { radius } from "../../constants/radius";
import useLanguage from "../../hooks/useLanguage";

const ROLES = ["technician", "tenant"];

export default function RoleSelect() {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState("facilityManager");

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        router.replace("/onboarding");
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.roleSelect.title}
        onBack={() => router.replace("/onboarding")}
      />

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subtitle}>{t.roleSelect.subtitle}</Text>

        {ROLES.map((role) => {
          const active = selectedRole === role;
          return (
            <Pressable
              key={role}
              onPress={() => setSelectedRole(role)}
              style={[styles.card, active && styles.active]}
            >
              {active && <View style={styles.check} />}
              <Text style={styles.cardTitle}>
                {t.roleSelect[role].title}
              </Text>
              <Text style={styles.cardDesc}>
                {t.roleSelect[role].description}
              </Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {t.roleSelect[role].badge}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton
          title={t.roleSelect.continue}
          onPress={() =>
            router.push({ pathname: "/login", params: { role: selectedRole } })
          }
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: spacing.lg,
    paddingBottom: 160,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  card: {
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  active: {
    borderColor: colors.primary,
    backgroundColor: "rgba(243,139,20,0.06)",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  badge: {
    backgroundColor: colors.backgroundSoft,
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});
