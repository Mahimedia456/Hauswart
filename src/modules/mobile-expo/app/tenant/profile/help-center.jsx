import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function HelpCenter() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.help.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        {t.help.faqs.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.question}>{item.q}</Text>
            <Text style={styles.answer}>{item.a}</Text>
          </View>
        ))}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  question: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
    color: colors.textPrimary,
  },
  answer: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
