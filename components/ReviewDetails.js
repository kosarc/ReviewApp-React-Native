import { View, Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
function ReviewDetails({ navigation }) {
  const hanldePress = () => {
    navigation.goBack("Home");
  };

  return (
    <View style={GlobalStyles.review}>
      <Text style={GlobalStyles.title_text}>Hello from Review Details</Text>
      <TouchableOpacity style={GlobalStyles.button} onPress={hanldePress}>
        <Text style={GlobalStyles.button_title}>go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ReviewDetails;
