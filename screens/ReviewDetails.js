import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { GlobalStyles, images } from "../styles/GlobalStyles";
import Card from "../shared/Card";

function ReviewDetails() {
  const rout = useRoute();
  const iconRating = rout.params.rating;
  return (
    <View style={GlobalStyles.review}>
      <Card>
        <Text style={GlobalStyles.title_text}>{rout.params.age}</Text>
        <View style={GlobalStyles.icon}>
          <Text>GemeZone rating: </Text>
          <Image source={images.ratings[iconRating]} />
        </View>
      </Card>
    </View>
  );
}

export default ReviewDetails;
