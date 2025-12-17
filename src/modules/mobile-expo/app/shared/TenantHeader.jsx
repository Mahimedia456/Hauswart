import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";

export default function TenantHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Good Morning,</Text>
        <Text style={styles.name}>Aamir</Text>
        <Text style={styles.unit}>Green Tower — Unit 3A</Text>
      </View>

      <View style={styles.right}>
        <Pressable style={styles.bell}>
          <Bell size={20} color="#555" />
          <View style={styles.dot} />
        </Pressable>

        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 13,
    color: "#777",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  unit: {
    fontSize: 12,
    color: colors.primary,
    marginTop: 2,
    fontWeight: "500",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  bell: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  dot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
