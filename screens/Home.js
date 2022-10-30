import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import Card from "../shared/Card";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import FormReview from "./FormReview";

function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Serhii Kosarenko", body: "34", rating: 5, key: "1" },
    { title: "Oleksandr Osadchuk", body: "34", rating: 4, key: "2" },
    { title: "Ivan Didok", body: "36", rating: 3, key: "3" },
  ]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((previusReview) => [review, ...previusReview]);
    setModalVisibility(false);
  };

  return (
    <View>
      <Modal visible={modalVisibility}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={GlobalStyles.review_list}>
            <AntDesign
              name="close"
              size={28}
              color="black"
              onPress={() => setModalVisibility(false)}
              style={GlobalStyles.close}
            />
            <FormReview addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Ionicons
        name="add-outline"
        size={30}
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
