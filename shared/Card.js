import { GlobalStyles } from "../styles/GlobalStyles";
import React from "react";
import { View } from "react-native";

function Card(props) {
  return (
    <View style={GlobalStyles.card}>
      <View style={GlobalStyles.content}>{props.children}</View>
    </View>
  );
}

export default Card;
