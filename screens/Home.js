import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import Card from "../shared/Card";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Serhii Kosarenko", age: "34", rating: 5, key: "1" },
    { title: "Oleksandr Osadchuk", age: "34", rating: 4, key: "2" },
    { title: "Ivan Didok", age: "36", rating: 3, key: "3" },
  ]);
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View>
      <Modal visible={modalVisibility}>
        <View>
          <AntDesign
            name="close"
            size={32}
            color="black"
            onPress={() => setModalVisibility(false)}
            style={GlobalStyles.close}
          />
        </View>
      </Modal>

      <Entypo
        name="add-to-list"
        size={32}
        color="black"
        onPress={() => setModalVisibility(true)}
        style={GlobalStyles.add}
      />

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
    </View>
  );
}

export default Home;
