import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  title_text: {
    fontFamily: "nunito-bold",
  },
  header: {
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
    color: "#333",
    fontWeight: "600",
    fontSize: 22,
    position: "relative",
    left: 108,
    bottom: 5,
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
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 16,
    marginTop: 16,
  },
  header_icon: {
    width: 26,
    height: 26,
    position: "relative",
    left: 75,
    top: 20,
  },
  close: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 3,
    alignSelf: "center",
    marginBottom: 30,
  },

  add: {
    marginBottom: 25,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginVertical: 7,
    marginHorizontal: 20,
  },
  review_list: {
    flex: 1,
  },
  error: {
    fontWeight: "600",
    color: "crimson",
    textAlign: "center",
    marginVertical: 5,
  },
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
