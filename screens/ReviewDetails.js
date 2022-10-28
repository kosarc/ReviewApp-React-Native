import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { GlobalStyles } from "../styles/GlobalStyles";
import Card from "../shared/Card";

function ReviewDetails() {
  const rout = useRoute();
  return (
    <View style={GlobalStyles.review}>
      <Card>
        <Text style={GlobalStyles.title_text}>{rout.params.age}</Text>
        <Text style={GlobalStyles.title_text}>{rout.params.rating}</Text>
      </Card>
    </View>
  );
}

export default ReviewDetails;
