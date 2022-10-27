import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import CustomHeader from "../shared/CustomHeader";
import { getHeaderTitle } from "@react-navigation/elements";

const Stack = createNativeStackNavigator();

const NativeStack = () => (
  <Stack.Navigator
    initialRouteName="HomeZone"
    screenOptions={{
      headerStyle: {
        backgroundColor: "coral",
      },
    }}
  >
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
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "600",
          fontFamily: "nunito-bold",
        },
      }}
    />
  </Stack.Navigator>
);
export default NativeStack;
