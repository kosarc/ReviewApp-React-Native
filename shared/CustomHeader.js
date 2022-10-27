import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function CustomHeader({ navigation }) {
  function hanldePress() {
    navigation.openDrawer();
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <FontAwesome5
          name="hamburger"
          size={32}
          color="#fff"
          style={styles.icon}
          onPress={hanldePress}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>HomeZone</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  icon: {
    position: "relative",
    zIndex: "100",
    left: -110,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
});

export default CustomHeader;
