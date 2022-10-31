import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Formik } from "formik";
import * as yup from "yup";
import SubmitButton from "../shared/SubmitButton";

function FormReview({ addReview }) {
  let schema = yup.object({
    title: yup.string().required().min(3),
    body: yup.string().required().min(6),
    rating: yup
      .string()
      .required()
      .test("is-num-1-5", "rating must be a number 1-5", (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });
  return (
    <Formik
      initialValues={{ title: "", body: "", rating: "" }}
      validationSchema={schema}
      onSubmit={(value, action) => {
        console.log(value);
        action.resetForm();
        addReview(value);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        handleBlur,
      }) => (
        <View>
          <TextInput
            onChangeText={handleChange("title")}
            value={values.title}
            placeholder="Review title"
            style={GlobalStyles.input}
            onBlur={handleBlur("title")}
          />
          <Text style={GlobalStyles.error}>
            {touched.title && errors.title}
          </Text>
          <TextInput
            onChangeText={handleChange("body")}
            value={values.body}
            placeholder="Enter your review"
            multiline
            style={GlobalStyles.input}
            onBlur={handleBlur("body")}
          />
          <Text style={GlobalStyles.error}>{touched.body && errors.body}</Text>
          <TextInput
            onChangeText={handleChange("rating")}
            value={values.rating}
            placeholder="Score rating (1-5)"
            keyboardType="numeric"
            style={GlobalStyles.input}
            onBlur={handleBlur("rating")}
          />
          <Text style={GlobalStyles.error}>
            {touched.rating && errors.rating}
          </Text>
          <SubmitButton onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}
export default FormReview;
