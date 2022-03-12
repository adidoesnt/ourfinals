import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { Button } from "../Button";
import { useAuth } from "../AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function ModuleCard(props) {
    const { changeAssignmentSubmissionStateToTrue } = useAuth();
    const navigation = useNavigation();

    function viewAssignmentsHandler() {
        navigation.navigate('Marketplace');
        return;
    }

    function addAssignmentsHandler() {
        changeAssignmentSubmissionStateToTrue();
        return;
    }

  return (
    <View>
      <Card>
        <Card.Title>{props.code}: {props.title}</Card.Title>
        <Card.Divider />
        <Button onPress={viewAssignmentsHandler}>View Existing Assignments</Button>
        <Button onPress={addAssignmentsHandler}>Add a New Assignment</Button>
      </Card>
    </View>
  );
}
