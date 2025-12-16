import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

/* -------------------------------------------------- */
/* DUMMY CHAT DATA                                    */
/* -------------------------------------------------- */

const MESSAGES = [
  {
    id: 1,
    type: "system",
    text: "Ticket created: Oct 24, 10:00 AM",
  },
  {
    id: 2,
    type: "tenant",
    text: "Hi, the leak is getting worse. Can you check it soon?",
    time: "10:05 AM",
  },
  {
    id: 3,
    type: "tenant-image",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAV1J66vFU-VMVBGcY5U9yi3OBLqA_R-20E9W0r2fJB11Z8jaRxDWAVGe0iJoHT5Y1vgALaT9UMD2DQYmIxItPFsUcRmTZbqmnNlLxsXfqOqBCrAkziL30-Dbkz31wEsFAVG-7Eb5QY_BO63MB1-1U2juQkQ9Qt0K_MVvA2WJua6NTtjerN0CgrxBjv3Zw8fzxyQ6Fpb6DfwrkPI-RX8MAaTzfUUwq7_W3ZwPKSGfOC4Iz4DJ97p775EoggmEMgusEpmDo6i125hss",
    caption: "See photo attached.",
    time: "10:06 AM",
  },
  {
    id: 4,
    type: "system-badge",
    text: "Ticket assigned to technician",
  },
  {
    id: 5,
    type: "manager",
    sender: "Facility Manager",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7OSymmBYwdRsKzrI17Kfb_VXHRWpWTdNsi-bFlcSU-7Iy6OvKro8lUPDLEgKNvrpk6c6TSx3a9Q1d9U9Q8zRuJEBx5LhkmnS3-EJ-zwdCgpM9D2gsK-uqKzZOYH2Rur3TKv6yjYzvqs2djPTZpDrnAHZ9VS2a09KlMXShMRdygkasVjWgr3-v66HwOzTyMFrn_-x8cfdizuL7ovMNcdLXuwdFkUhcj7KkQoQpADA_xyI_5T4yJx3WheKN0ahlOFtxjtvpOs9vJ1Fv",
    text:
      "Thanks for the update. A plumber is dispatched and will arrive shortly.",
    time: "10:30 AM",
  },
];

/* -------------------------------------------------- */

export default function TenantChatThread() {
  const { ticketId } = useLocalSearchParams();
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <ScreenWrapper>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>
            {t.chat.ticket} #{ticketId}
          </Text>
          <Text style={styles.headerSub}>
            {t.chat.subtitle}
          </Text>
        </View>

        <View style={{ width: 24 }} />
      </View>

      {/* Messages */}
      <ScrollView
        style={styles.chat}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
      >
        {MESSAGES.map((msg) => {
          if (msg.type === "system")
            return (
              <Text key={msg.id} style={styles.systemText}>
                {msg.text}
              </Text>
            );

          if (msg.type === "system-badge")
            return (
              <View key={msg.id} style={styles.systemBadge}>
                <Text style={styles.systemBadgeText}>
                  {msg.text}
                </Text>
              </View>
            );

          if (msg.type === "tenant")
            return (
              <View key={msg.id} style={styles.tenantWrap}>
                <View style={styles.tenantBubble}>
                  <Text>{msg.text}</Text>
                </View>
                <Text style={styles.time}>{msg.time}</Text>
              </View>
            );

          if (msg.type === "tenant-image")
            return (
              <View key={msg.id} style={styles.tenantWrap}>
                <View style={styles.imageBubble}>
                  <Image
                    source={{ uri: msg.image }}
                    style={styles.image}
                  />
                  <Text style={styles.caption}>
                    {msg.caption}
                  </Text>
                </View>
                <Text style={styles.time}>{msg.time}</Text>
              </View>
            );

          if (msg.type === "manager")
            return (
              <View key={msg.id} style={styles.managerWrap}>
                <Image
                  source={{ uri: msg.avatar }}
                  style={styles.avatar}
                />
                <View>
                  <Text style={styles.sender}>
                    {msg.sender}
                  </Text>
                  <View style={styles.managerBubble}>
                    <Text>{msg.text}</Text>
                  </View>
                  <Text style={styles.time}>{msg.time}</Text>
                </View>
              </View>
            );
        })}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputBar}>
        <Pressable>
          <Text style={styles.add}>＋</Text>
        </Pressable>
        <TextInput
          placeholder={t.chat.placeholder}
          style={styles.input}
          multiline
        />
        <Pressable style={styles.sendBtn}>
          <Text style={styles.send}>➤</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

/* -------------------------------------------------- */
/* STYLES                                             */
/* -------------------------------------------------- */

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  backArrow: { fontSize: 20 },
  headerCenter: { flex: 1, alignItems: "center" },
  headerTitle: { fontWeight: "700" },
  headerSub: { fontSize: 12, color: colors.textMuted },

  chat: { flex: 1 },
  chatContent: { padding: spacing.md, gap: spacing.md },

  systemText: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: "center",
  },
  systemBadge: {
    alignSelf: "center",
    backgroundColor: colors.backgroundSoft,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  systemBadgeText: { fontSize: 11 },

  tenantWrap: { alignItems: "flex-end" },
  tenantBubble: {
    backgroundColor: colors.primarySoft,
    padding: spacing.md,
    borderRadius: 12,
    maxWidth: "80%",
  },
  imageBubble: {
    backgroundColor: colors.primarySoft,
    borderRadius: 12,
    padding: 6,
    maxWidth: "80%",
  },
  image: { width: 200, height: 120, borderRadius: 8 },
  caption: { fontSize: 12, marginTop: 4 },

  managerWrap: {
    flexDirection: "row",
    gap: spacing.sm,
    maxWidth: "85%",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  sender: {
    fontSize: 11,
    color: colors.textMuted,
  },
  managerBubble: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  time: {
    fontSize: 10,
    color: colors.textMuted,
    marginTop: 2,
  },

  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    borderTopWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  add: { fontSize: 22, color: colors.textSecondary },
  input: {
    flex: 1,
    backgroundColor: colors.backgroundSoft,
    borderRadius: 12,
    padding: spacing.sm,
    maxHeight: 120,
  },
  sendBtn: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
  },
  send: { color: colors.white },
});
