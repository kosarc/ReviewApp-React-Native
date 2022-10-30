import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import CustomHeader from "../shared/CustomHeader";
import { getHeaderTitle } from "@react-navigation/elements";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeZone">
      <Stack.Screen
        name="HomeZone"
        component={Home}
        options={{
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <CustomHeader title={title} navigation={navigation} />;
          },
        }}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={{
          headerTintColor: "#333",
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "600",
            fontFamily: "nunito-bold",
          },
          headerBackground: () => (
            <Image source={require("../assets/game_bg.png")} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default NativeStack;
