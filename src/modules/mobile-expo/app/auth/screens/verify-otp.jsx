import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useRef } from "react";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import PrimaryButton from "../../shared/PrimaryButton";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function VerifyOtp() {
  const { t } = useLanguage();
  const router = useRouter();
  const inputs = useRef([]);

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.verifyOtp.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        <Text style={styles.heading}>
          {t.verifyOtp.title}
        </Text>

        <Text style={styles.subtitle}>
          {t.verifyOtp.subtitle}
        </Text>

        <View style={styles.otpRow}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <TextInput
              key={i}
              ref={(el) => (inputs.current[i] = el)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={() =>
                inputs.current[i + 1]?.focus()
              }
            />
          ))}
        </View>

        <View style={{ flex: 1 }} />
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          title={t.verifyOtp.submit}
          onPress={() => router.push("/reset-password")}
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
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.lg,
  },
  otpInput: {
    width: 52,
    height: 60,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    backgroundColor: colors.white,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});
