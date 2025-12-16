import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";
import BackIcon from "./icons/BackIcon"; // SVG

export default function MobileHeader({ title, onBack }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack} style={styles.back}>
        <BackIcon width={22} height={22} color={colors.textPrimary} />
      </Pressable>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },
  back: {
    marginRight: spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.textPrimary,
  },
});
