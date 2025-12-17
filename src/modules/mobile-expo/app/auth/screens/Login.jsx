import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import PrimaryButton from "../../shared/PrimaryButton";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function Login() {
  const { t } = useLanguage();
  const router = useRouter();
  const { role } = useLocalSearchParams();

  const handleLogin = () => {
    if (role === "tenant") {
      router.replace("/tenant/home");
    }

    if (role === "facilityManager") {
      router.replace("/fm/dashboard");
    }

    if (role === "technician") {
      router.replace("/caretaker/dashboard");
    }

    if (role === "serviceProvider") {
      router.replace("/serviceProvider/dashboard");
    }
  };

  return (
    <ScreenWrapper>
      <MobileHeader title="" onBack={() => router.back()} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>{t.login.title}</Text>
          <Text style={styles.subtitle}>{t.login.subtitle}</Text>

          <View style={styles.field}>
            <Text style={styles.label}>{t.login.email}</Text>
            <TextInput
              placeholder="user@company.com"
              style={styles.input}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.field}>
            <View style={styles.passwordHeader}>
              <Text style={styles.label}>{t.login.password}</Text>
              <Pressable
                onPress={() => router.push("/forgot-password")}
              >
                <Text style={styles.link}>{t.login.forgot}</Text>
              </Pressable>
            </View>

            <TextInput
              placeholder="••••••••"
              secureTextEntry
              style={styles.input}
            />
          </View>

          <PrimaryButton
            title={t.login.submit}
            onPress={handleLogin}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {t.login.noAccount}{" "}
              <Text
                style={styles.link}
                onPress={() =>
                  router.push({
                    pathname: "/register",
                    params: { role },
                  })
                }
              >
                {t.login.register}
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  field: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: spacing.sm,
  },
  input: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.backgroundSoft,
  },
  passwordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },
  footer: {
    marginTop: spacing.xl,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
