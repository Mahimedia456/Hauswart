import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  BackHandler,
  ToastAndroid,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import PrimaryButton from "../../shared/PrimaryButton";
import MobileHeader from "../../shared/MobileHeader";

import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import { radius } from "../../constants/radius";
import useLanguage from "../../hooks/useLanguage";
import { onboardingSlides } from "../data/onboardingSlides";

const { width } = Dimensions.get("window");

export default function Onboarding() {
  const { t } = useLanguage();
  const router = useRouter();

  const flatListRef = useRef(null);
  const lastBackPress = useRef(0);

  const [index, setIndex] = useState(0);
  const isLast = index === onboardingSlides.length - 1;

  /* ------------------------------------------------------ */
  /* ANDROID BACK HANDLING                                  */
  /* ------------------------------------------------------ */
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // Go to previous slide if not first
        if (index > 0) {
          flatListRef.current?.scrollToIndex({
            index: index - 1,
            animated: true,
          });
          return true;
        }

        // Double-tap to exit on first slide
        const now = Date.now();
        if (now - lastBackPress.current < 2000) {
          BackHandler.exitApp();
          return false;
        }

        lastBackPress.current = now;
        ToastAndroid.show(
          "Press back again to exit",
          ToastAndroid.SHORT
        );
        return true;
      }
    );

    return () => backHandler.remove();
  }, [index]);

  /* ------------------------------------------------------ */
  /* ACTIONS                                                */
  /* ------------------------------------------------------ */
  const goNext = () => {
    if (isLast) {
      router.replace("/role-select");
    } else {
      flatListRef.current?.scrollToIndex({
        index: index + 1,
        animated: true,
      });
    }
  };

  /* ------------------------------------------------------ */
  /* UI                                                     */
  /* ------------------------------------------------------ */
  return (
    <ScreenWrapper>
      {/* Header */}
      <MobileHeader title="" onBack={null} />

      {/* Centered Content */}
      <View style={styles.content}>
        <FlatList
          ref={flatListRef}
          data={onboardingSlides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.listContent}
          onMomentumScrollEnd={(e) => {
            setIndex(
              Math.round(e.nativeEvent.contentOffset.x / width)
            );
          }}
        renderItem={({ item }) => {
  const Icon = item.Icon;

  // ✅ Safety fallback (prevents white screen forever)
  const slide = t.onboarding?.[item.key] || {
    title: "",
    description: "",
  };

  return (
    <View style={styles.slide}>
      <View style={styles.icon}>
        <Icon />
      </View>

      <Text style={styles.title}>{slide.title}</Text>

      <Text style={styles.desc}>{slide.description}</Text>
    </View>
  );
}}
        />
      </View>

      {/* Pagination */}
      <View style={styles.dots}>
        {onboardingSlides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === index && styles.dotActive,
            ]}
          />
        ))}
      </View>

      {/* CTA */}
      <View style={styles.footer}>
        <PrimaryButton
          title={
            isLast
              ? t.onboarding.getStarted
              : t.onboarding.next
          }
          onPress={goNext}
        />
      </View>
    </ScreenWrapper>
  );
}

/* ------------------------------------------------------ */
/* STYLES                                                 */
/* ------------------------------------------------------ */
const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  listContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  slide: {
    width,
    alignItems: "center",
    paddingHorizontal: spacing.xl,
  },

  icon: {
    marginBottom: spacing.xl,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: spacing.sm,
  },

  desc: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: width * 0.78,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: spacing.md,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
    marginHorizontal: 4,
  },

  dotActive: {
    backgroundColor: colors.primary,
    width: 18,
    borderRadius: radius.md,
  },

  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});
