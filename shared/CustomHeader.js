import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { GlobalStyles } from "../styles/GlobalStyles";

function CustomHeader({ navigation, title }) {
  function hanldePress() {
    navigation.openDrawer();
  }
  return (
    <View style={GlobalStyles.header}>
      <TouchableOpacity>
        <FontAwesome5
          name="hamburger"
          size={32}
          color="#fff"
          onPress={hanldePress}
        />
      </TouchableOpacity>
      <View>
        <Text style={GlobalStyles.text}>{title}</Text>
      </View>
    </View>
  );
}

export default CustomHeader;
