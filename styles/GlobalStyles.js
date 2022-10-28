import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  title_text: {
    fontFamily: "nunito-bold",
  },
  header: {
    backgroundColor: "coral",
    flexDirection: "row",
    paddingTop: 10,
    paddingStart: 13,
    alignItems: "center",
    fontFamily: "nunito-bold",
    height: 70,
  },
  review: {
    marginTop: 10,
    flex: 1,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 22,
    position: "relative",
    left: 108,
  },
  home_text: {
    fontFamily: "nunito-bold",
    paddingTop: 10,
  },
  home: {
    fontFamily: "nunito-bold",
  },
  card: {
    backgroundColor: "green",
  },
});
