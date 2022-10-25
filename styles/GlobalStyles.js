import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title_text: {
    fontFamily: "nunito-bold",
  },
  home: {
    marginTop: 10,
    flex: 1,
  },
  review: {
    marginTop: 10,
    flex: 1,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 60,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "coral",
  },
  button_title: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

export default GlobalStyles;
