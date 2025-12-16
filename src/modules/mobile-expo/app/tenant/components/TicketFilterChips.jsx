import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "open", label: "Open" },
  { key: "inProgress", label: "In Progress" },
  { key: "completed", label: "Completed" },
];

export default function TicketFilterChips({ onChange }) {
  const [active, setActive] = useState("all");

  const handlePress = (key) => {
    setActive(key);
    onChange?.(key);
  };

  return (
    <View style={styles.container}>
      {FILTERS.map((item) => {
        const isActive = active === item.key;

        return (
          <Pressable
            key={item.key}
            onPress={() => handlePress(item.key)}
            style={[
              styles.chip,
              isActive && styles.activeChip,
            ]}
          >
            <Text
              style={[
                styles.text,
                isActive && styles.activeText,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#F3F4F6",
  },
  activeChip: {
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.textSecondary,
  },
  activeText: {
    color: colors.white,
    fontWeight: "600",
  },
});
