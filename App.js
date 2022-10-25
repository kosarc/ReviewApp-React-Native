import { useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "./components/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nuniti-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
