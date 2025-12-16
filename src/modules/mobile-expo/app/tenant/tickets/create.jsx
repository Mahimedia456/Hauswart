import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useLanguage from "../../hooks/useLanguage";

export default function CreateTicket() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      {/* HEADER */}
      <MobileHeader
        title={t.createTicket.title}
        onBack={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* PRIORITY NOTE */}
        <View style={styles.noteBox}>
          <Text style={styles.noteTitle}>
            {t.createTicket.priorityNote}
          </Text>
          <Text style={styles.noteDesc}>
            {t.createTicket.priorityDesc}
          </Text>
        </View>

        {/* ISSUE CATEGORY */}
        <Field
          label={t.createTicket.category}
          required
          placeholder={t.createTicket.selectCategory}
        />

        {/* ISSUE TITLE */}
        <Field
          label={t.createTicket.titleLabel}
          required
          placeholder={t.createTicket.titlePlaceholder}
          counter="0/80"
        />

        {/* DESCRIPTION */}
        <Field
          label={t.createTicket.description}
          required
          placeholder={t.createTicket.descPlaceholder}
          multiline
          counter="0/500"
          height={120}
        />

        {/* LOCATION */}
        <Text style={styles.sectionTitle}>
          {t.createTicket.location}
        </Text>

        <View style={styles.locationRow}>
          <View style={styles.disabledField}>
            <Text style={styles.disabledLabel}>
              {t.createTicket.property}
            </Text>
            <Text style={styles.disabledValue}>
              Sunset Towers
            </Text>
          </View>

          <View style={styles.disabledField}>
            <Text style={styles.disabledLabel}>
              {t.createTicket.unit}
            </Text>
            <Text style={styles.disabledValue}>
              Unit 402
            </Text>
          </View>
        </View>

        {/* AREA */}
        <Field
          label={t.createTicket.area}
          placeholder={t.createTicket.selectArea}
          optional
        />

        {/* ATTACHMENTS */}
        <Text style={styles.sectionTitle}>
          {t.createTicket.attachments}
        </Text>
        <Text style={styles.subText}>
          {t.createTicket.attachmentsHint}
        </Text>

        <View style={styles.attachmentRow}>
          <AttachmentButton label={t.createTicket.addPhoto} />
          <AttachmentButton label={t.createTicket.addVideo} />
        </View>
      </ScrollView>

      {/* SUBMIT */}
      <View style={styles.submitBar}>
        <Pressable style={styles.submitBtn}>
          <Text style={styles.submitText}>
            {t.createTicket.submit}
          </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

/* -------------------------------------------------- */
/* COMPONENTS                                         */
/* -------------------------------------------------- */

function Field({
  label,
  placeholder,
  required,
  optional,
  multiline,
  counter,
  height = 52,
}) {
  return (
    <View style={{ marginBottom: spacing.lg }}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>
          {label}{" "}
          {required && <Text style={styles.required}>*</Text>}
          {optional && (
            <Text style={styles.optional}> ({optional})</Text>
          )}
        </Text>
        {counter && (
          <Text style={styles.counter}>{counter}</Text>
        )}
      </View>

      <TextInput
        placeholder={placeholder}
        style={[
          styles.input,
          multiline && { height, textAlignVertical: "top" },
        ]}
        multiline={multiline}
      />
    </View>
  );
}

function AttachmentButton({ label }) {
  return (
    <Pressable style={styles.attachmentBtn}>
      <Text style={styles.attachmentText}>{label}</Text>
    </Pressable>
  );
}

/* -------------------------------------------------- */
/* STYLES                                             */
/* -------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: 200,
  },

  noteBox: {
    backgroundColor: colors.backgroundSoft,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  noteTitle: {
    fontWeight: "700",
    marginBottom: 4,
  },
  noteDesc: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  required: {
    color: colors.primary,
  },
  optional: {
    fontWeight: "400",
    color: colors.textMuted,
  },
  counter: {
    fontSize: 11,
    color: colors.textMuted,
  },

  input: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },

  locationRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  disabledField: {
    flex: 1,
    backgroundColor: colors.backgroundSoft,
    borderRadius: 12,
    padding: spacing.md,
  },
  disabledLabel: {
    fontSize: 11,
    color: colors.textMuted,
    marginBottom: 2,
  },
  disabledValue: {
    fontWeight: "600",
  },

  subText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },

  attachmentRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  attachmentBtn: {
    flex: 1,
    height: 90,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  attachmentText: {
    color: colors.primary,
    fontWeight: "600",
  },

  submitBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  submitBtn: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  submitText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 15,
  },
});
