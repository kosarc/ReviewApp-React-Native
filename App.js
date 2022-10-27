import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useEffect, useCallback } from "react";
import * as React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import About from "./screens/About";
import NativeStack from "./navigations/NativeStack";
import CustomHeader from "./shared/CustomHeader";
import { getHeaderTitle } from "@react-navigation/elements";

const Drawer = createDrawerNavigator();

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
    <NavigationContainer onLayout={onLayoutRootView}>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "coral",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={NativeStack}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);
              return <CustomHeader title={title} navigation={navigation} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
