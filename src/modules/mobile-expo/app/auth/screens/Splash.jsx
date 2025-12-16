import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Animated,
  BackHandler,
} from "react-native";
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";
import HauswartLogoSvg from "../../shared/HauswartLogoSvg";

export default function Splash() {
  const { t } = useLanguage();
  const router = useRouter();

  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 🚫 Disable Android back on splash
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );

    const animation = Animated.sequence([
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 6,
          tension: 90,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(3500),
    ]);

    animation.start(() => {
      router.replace("/onboarding");
    });

    return () => {
      backHandler.remove();
      animation.stop();
    };
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        {/* Logo Section */}
        <View style={styles.centerBlock}>
          <Animated.View
            style={[
              styles.logoBox,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          >
            <HauswartLogoSvg size={36} color={colors.white} />
          </Animated.View>

          <Animated.Text
            style={[
              styles.appName,
              { opacity: opacityAnim },
            ]}
          >
            {t.appName}
          </Animated.Text>
        </View>

        {/* Loader */}
        <ActivityIndicator
          size="small"
          color={colors.primary}
          style={styles.loader}
        />

        {/* Version */}
        <Text style={styles.version}>
          {t.version} 1.0.0
        </Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.xl,
  },

  centerBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xl,
  },

  logoBox: {
    width: 72,
    height: 72,
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.lg,
  },

  appName: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.textPrimary,
    letterSpacing: 0.3,
  },

  loader: {
    marginBottom: spacing.lg,
  },

  version: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
