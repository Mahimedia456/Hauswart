import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import PrimaryButton from "../../shared/PrimaryButton";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function Register() {
  const { t } = useLanguage();
  const router = useRouter();
  const { role = "tenant" } = useLocalSearchParams();

  const isTenant = role === "tenant";

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.register.title}
        onBack={() => router.back()}
      />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {t.register.registeringAs} {t.roles[role]}
          </Text>
        </View>

        <Input label={t.register.name} placeholder="Jane Doe" />
        <Input label={t.register.email} placeholder="jane@example.com" />
        <Input label={t.register.phone} placeholder="(555) 000-0000" />
        <Input label={t.register.password} placeholder="Min. 8 characters" secure />

        {isTenant && (
          <>
            <View style={styles.divider} />
            <Input
              label={t.register.property}
              placeholder="BLDG-101"
              helper={t.register.propertyHint}
            />
          </>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton title={t.register.submit} onPress={() => {}} />
      </View>
    </ScreenWrapper>
  );
}

function Input({ label, placeholder, secure, helper }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure}
        style={styles.input}
      />
      {helper && <Text style={styles.helper}>{helper}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 140,
  },
  badge: {
    alignSelf: "center",
    backgroundColor: "rgba(243,139,20,0.1)",
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: spacing.lg,
  },
  badgeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "600",
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
  helper: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  footer: {
    position: "absolute",
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg,
  },
});
