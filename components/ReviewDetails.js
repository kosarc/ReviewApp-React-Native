import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import GlobalStyles from "../styles/GlobalStyles";
function ReviewDetails() {
  const rout = useRoute();
  return (
    <View style={GlobalStyles.review}>
      <Text style={GlobalStyles.title_text}>{rout.params.age}</Text>
      <Text style={GlobalStyles.title_text}>{rout.params.rating}</Text>
    </View>
  );
}

export default ReviewDetails;
