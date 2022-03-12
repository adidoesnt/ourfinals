import { View, Text } from "react-native";
import { Card } from "react-native-elements";

// This component fails to render - the debug statements are not printing @Parth
export default function ModuleCard(props) {
  console.log("loading card generator");
  return (
    <View>
      {console.log("generating card")}
      <Card>
        <Card.Title>{props.title}</Card.Title>
        <Card.Divider />
        <Text>{props.moduleId}</Text>
        <Text>{props.code}</Text>
        <Text>{props.description}</Text>
        <Text>{props.mcs}</Text>
      </Card>
    </View>
  );
}
