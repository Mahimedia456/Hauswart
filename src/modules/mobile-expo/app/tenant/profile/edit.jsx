import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import useLanguage from "../../hooks/useLanguage";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

export default function EditProfile() {
  const router = useRouter();
  const { t } = useLanguage();

  const [name, setName] = useState("Jonathan Davis");
  const [phone, setPhone] = useState("+1 (555) 019-2834");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // TEMP: API call later
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
      router.back();
    }, 1200);
  };

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.editProfile.title}
        onBack={() => router.back()}
      />

      {/* Success Toast */}
      {saved && (
        <View style={styles.toast}>
          <Text style={styles.toastText}>
            {t.editProfile.success}
          </Text>
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar */}
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Image
              source={{
                uri:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXWiMhcHIu8z9TT3F8478y2Tl4MbdeQduB80fWjZLAF2xcrYycIQkjqgKBxC0FXt5J7WYM4vSp9lt3qoB2P1klY692kJkTPS-miVB6w3V_t3wGNF75hp5hnCdTDHQxxKuoSlcsLCLmeQtA2lgzii-hmSYlx1zCwHIr7Z_vE-Wf1A2o7pnrXHCeUnFJQZDLinjQj59dRRL9J6_e_02iMuTJ9sDiQQzg-Cdrk8GBmXUA4LKVuChxg9Q9ET6n58NnEwX2z3MtrNFpQ8V1",
              }}
              style={styles.avatarImg}
            />
          </View>

          <Pressable>
            <Text style={styles.changePhoto}>
              {t.editProfile.changePhoto}
            </Text>
          </Pressable>
        </View>

        {/* Full Name */}
        <Field
          label={t.editProfile.fullName}
          value={name}
          onChangeText={setName}
        />

        {/* Email (read only) */}
        <Field
          label={t.editProfile.email}
          value="jonathan.davis@hauswart.com"
          editable={false}
        />

        {/* Phone */}
        <Field
          label={t.editProfile.phone}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable
          style={styles.saveBtn}
          onPress={handleSave}
        >
          <Text style={styles.saveText}>
            {t.editProfile.save}
          </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

/* ---------------------------------- */
/* Reusable Field                     */
/* ---------------------------------- */

function Field({
  label,
  value,
  onChangeText,
  editable = true,
  keyboardType,
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        keyboardType={keyboardType}
        style={[
          styles.input,
          !editable && styles.inputDisabled,
        ]}
      />
    </View>
  );
}

/* ---------------------------------- */
/* Styles                             */
/* ---------------------------------- */

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 140,
  },

  toast: {
    position: "absolute",
    top: 80,
    alignSelf: "center",
    backgroundColor: colors.success,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: 12,
    zIndex: 10,
  },
  toastText: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 13,
  },

  avatarWrap: {
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: spacing.sm,
    backgroundColor: colors.border,
  },
  avatarImg: {
    width: "100%",
    height: "100%",
  },
  changePhoto: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 13,
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
    backgroundColor: colors.white,
  },
  inputDisabled: {
    backgroundColor: colors.backgroundSoft,
    color: colors.textMuted,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  saveBtn: {
    backgroundColor: colors.primary,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  saveText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
  },
});
