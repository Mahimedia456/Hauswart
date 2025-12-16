import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import PrimaryButton from "../../shared/PrimaryButton";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function ResetPassword() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.resetPassword.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        <Text style={styles.heading}>
          {t.resetPassword.title}
        </Text>

        <Text style={styles.subtitle}>
          {t.resetPassword.subtitle}
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>
            {t.register.password}
          </Text>

          <TextInput
            secureTextEntry
            placeholder="Enter new password"
            style={styles.input}
          />

          <Text style={styles.hint}>
            {t.register.passwordHint}
          </Text>

          <Text style={[styles.label, { marginTop: spacing.lg }]}>
            Confirm New Password
          </Text>

          <TextInput
            secureTextEntry
            placeholder="Re-enter new password"
            style={styles.input}
          />
        </View>

        <View style={{ flex: 1 }} />
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          title={t.resetPassword.submit}
          onPress={() => router.replace("/login")}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.xl,
  },
  form: {
    marginTop: spacing.lg,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: spacing.xs,
    color: colors.textPrimary,
  },
  input: {
    height: 54,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
  },
  hint: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 6,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});
