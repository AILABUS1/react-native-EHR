import "../../global.css";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
    'Poppins-Medium': require("../../assets/fonts/Poppins-Medium.ttf"),
    'Poppins-SemiBold': require("../../assets/fonts/Poppins-SemiBold.ttf"),
    'Poppins-Bold': require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Stack />;
}
