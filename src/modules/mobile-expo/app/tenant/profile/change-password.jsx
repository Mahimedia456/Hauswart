import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import PrimaryButton from "../../shared/PrimaryButton";
import useLanguage from "../../hooks/useLanguage";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

export default function ChangePassword() {
  const router = useRouter();
  const { t } = useLanguage();

  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <ScreenWrapper>
      {/* HEADER */}
      <MobileHeader
        title={t.changePassword.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        {/* CURRENT PASSWORD */}
        <View style={styles.field}>
          <Text style={styles.label}>
            {t.changePassword.current}
          </Text>
          <TextInput
            secureTextEntry
            value={current}
            onChangeText={setCurrent}
            placeholder={t.changePassword.currentPlaceholder}
            style={styles.input}
          />
        </View>

        {/* NEW PASSWORD */}
        <View style={styles.field}>
          <Text style={styles.label}>
            {t.changePassword.new}
          </Text>
          <TextInput
            secureTextEntry
            value={next}
            onChangeText={setNext}
            placeholder={t.changePassword.newPlaceholder}
            style={styles.input}
          />
          <Text style={styles.hint}>
            {t.changePassword.hint}
          </Text>
        </View>

        {/* CONFIRM PASSWORD */}
        <View style={styles.field}>
          <Text style={styles.label}>
            {t.changePassword.confirm}
          </Text>
          <TextInput
            secureTextEntry
            value={confirm}
            onChangeText={setConfirm}
            placeholder={t.changePassword.confirmPlaceholder}
            style={styles.input}
          />
        </View>

        <View style={{ flex: 1 }} />
      </View>

      {/* FOOTER ACTION */}
      <View style={styles.footer}>
        <PrimaryButton
          title={t.changePassword.submit}
          onPress={() => {
            // API call later
            router.back();
          }}
        />
      </View>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Styles                              */
/* ---------------------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },

  field: {
    marginBottom: spacing.lg,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },

  input: {
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
    fontSize: 15,
    color: colors.textPrimary,
  },

  hint: {
    marginTop: 6,
    fontSize: 12,
    color: colors.textMuted,
  },

  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});
