import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { useRouter } from "expo-router";

import ScreenWrapper from "../../shared/ScreenWrapper";
import MobileHeader from "../../shared/MobileHeader";
import useLanguage from "../../hooks/useLanguage";

export default function PrivacyPolicy() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <ScreenWrapper>
      <MobileHeader
        title={t.legal.privacy}
        onBack={() => router.back()}
      />

      <View style={styles.container}>
        <WebView
          source={{ uri: "https://hauswart.app/privacy-policy" }}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
