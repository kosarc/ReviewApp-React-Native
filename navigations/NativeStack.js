import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import CustomHeader from "../shared/CustomHeader";

const Stack = createNativeStackNavigator();

const NativeStack = ({ navigation }) => (
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
        headerTitle: () => {
          return <CustomHeader navigation={navigation} />;
        },
      }}
    />
    <Stack.Screen name="Review Details" component={ReviewDetails} />
  </Stack.Navigator>
);
export default NativeStack;
