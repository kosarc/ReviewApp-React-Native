import { View, Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";

function SubmitButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={GlobalStyles.submit_button}>
        <Text style={GlobalStyles.submit_button_title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default SubmitButton;
