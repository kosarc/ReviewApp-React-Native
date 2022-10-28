import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import Card from "../shared/Card";

function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Serhii Kosarenko", age: "34", rating: 5, key: "1" },
    { title: "Oleksandr Osadchuk", age: "34", rating: 4, key: "2" },
    { title: "Ivan Didok", age: "36", rating: 3, key: "3" },
  ]);

  return (
    <FlatList
      data={reviews}
      keyExtractor={(reviews) => reviews.key}
      renderItem={({ item }) => {
        return (
          <View style={GlobalStyles.home}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Review Details", item)}
            >
              <Card>
                <Text style={GlobalStyles.home_text}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}

export default Home;
