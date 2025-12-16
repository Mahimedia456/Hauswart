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

  export default function ForgotPassword() {
    const { t } = useLanguage();
    const router = useRouter();

    return (
      <ScreenWrapper>
        <MobileHeader
          title={t.forgotPassword.title}
          onBack={() => router.back()}
        />

        <View style={styles.container}>
          <Text style={styles.heading}>
            {t.forgotPassword.title}
          </Text>

          <Text style={styles.subtitle}>
            {t.forgotPassword.subtitle}
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>
              {t.login.email}
            </Text>

            <TextInput
              placeholder="name@example.com"
              style={styles.input}
              keyboardType="email-address"
            />
          </View>

          {/* PUSH FOOTER DOWN */}
          <View style={{ flex: 1 }} />
        </View>

        <View style={styles.footer}>
          <PrimaryButton
            title={t.forgotPassword.submit}
            onPress={() => router.push("/verify-otp")}
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
    footer: {
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.lg,
    },
  });
