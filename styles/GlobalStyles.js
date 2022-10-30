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
    marginBottom: 30,
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
    borderRadius: 6,
    borderColor: "#333",
    backgroundColor: "#fff",
    marginVertical: 5,
    marginHorizontal: 20,
    shadowRadius: 3,
    shadowColor: "#333",
    elevation: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
  },
  content: {
    marginHorizontal: 20,
    marginBottom: 15,
    marginTop: 10,
  },
  icon: {},
});

export const images = {
  ratings: {
    1: require("../assets/rating-icon/rating-1.png"),
    2: require("../assets/rating-icon/rating-2.png"),
    3: require("../assets/rating-icon/rating-3.png"),
    4: require("../assets/rating-icon/rating-4.png"),
    5: require("../assets/rating-icon/rating-5.png"),
  },
};
