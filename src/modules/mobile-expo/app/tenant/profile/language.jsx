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

const LANGUAGES = [
  {
    code: "en",
    label: "English (US)",
  },
  {
    code: "de",
    label: "Deutsch",
  },
];

export default function LanguageSelector() {
  const router = useRouter();
  const { t, lang, setLang } = useLanguage();

  const handleSelect = (code) => {
    setLang(code);
    router.back();
  };

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.language.title}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        <Text style={styles.heading}>
          {t.language.heading}
        </Text>

        <Text style={styles.subtitle}>
          {t.language.subtitle}
        </Text>

        <View style={styles.list}>
          {LANGUAGES.map((item) => {
            const isActive = lang === item.code;

            return (
              <Pressable
                key={item.code}
                onPress={() => handleSelect(item.code)}
                style={[
                  styles.item,
                  isActive && styles.itemActive,
                ]}
              >
                <Text
                  style={[
                    styles.label,
                    isActive && styles.labelActive,
                  ]}
                >
                  {item.label}
                </Text>

                {isActive && (
                  <View style={styles.check} />
                )}
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Styles                             */
/* ---------------------------------- */

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: spacing.sm,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
    lineHeight: 22,
  },
  list: {
    gap: spacing.md,
  },
  item: {
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  labelActive: {
    fontWeight: "700",
    color: colors.primary,
  },
  check: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
});
