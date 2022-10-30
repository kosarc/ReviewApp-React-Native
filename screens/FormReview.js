import React from "react";
import { View, TextInput, Button } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Formik } from "formik";

function FormReview() {
  return (
    <Formik
      initialValues={{ title: "", body: "", rating: "" }}
      onSubmit={(value) => console.log(value)}
    >
      {({ values, handleChange, handleSubmit }) => (
        <View>
          <TextInput
            onChangeText={handleChange("title")}
            value={values.title}
            placeholder="Review title"
            style={GlobalStyles.input}
          />
          <TextInput
            onChangeText={handleChange("body")}
            value={values.body}
            placeholder="Enter your review"
            multiline
            style={GlobalStyles.input}
          />
          <TextInput
            onChangeText={handleChange("rating")}
            value={values.rating}
            placeholder="score rating (1-5)"
            keyboardType="numeric"
            style={GlobalStyles.input}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}
export default FormReview;
