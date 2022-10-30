import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { GlobalStyles } from "../styles/GlobalStyles";

function CustomHeader({ navigation, title }) {
  function hanldePress() {
    navigation.openDrawer();
  }
  return (
    <ImageBackground
      style={GlobalStyles.header}
      source={require("../assets/game_bg.png")}
    >
      <TouchableOpacity>
        <FontAwesome5
          name="hamburger"
          size={32}
          color="#333"
          onPress={hanldePress}
        />
      </TouchableOpacity>
      <View style={GlobalStyles.title_wrapper}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={GlobalStyles.header_icon}
        />
        <Text style={GlobalStyles.text}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

export default CustomHeader;
