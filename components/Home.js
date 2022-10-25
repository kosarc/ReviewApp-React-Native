import { View, Text } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
function Home() {
  return (
    <View style={GlobalStyles.home}>
      <Text style={GlobalStyles.title_text}>Hello from Home</Text>
    </View>
  );
}

export default Home;
