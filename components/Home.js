import { View, Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
function Home({ navigation }) {
  const hanldePress = () => {
    navigation.push("Review Details");
  };

  return (
    <View style={GlobalStyles.home}>
      <Text style={GlobalStyles.title_text}>Hello from Home</Text>
      <TouchableOpacity style={GlobalStyles.button} onPress={hanldePress}>
        <Text style={GlobalStyles.button_title}>go to review dets</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
