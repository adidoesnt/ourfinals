import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";
import { Card } from "react-native-elements";
import AssignmentList from "../components/AssignmentList";
import { courseService } from "../backend";

export default function Marketplace() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("work");

  useEffect(async () => {
    // let temp = [];
    // for (const key in assignmentsData) {
    //   const assignment = {
    //     id: key,
    //     ...assignmentsData[key],
    //   };
    //   temp.push(assignment);
    // }
    // setAssignments(temp);

    console.log("Getting ass");
    // courseService.getAssignments().then((ass) => {
    //   console.log("Fetched");
    // });
    console.log(assignments);
    console.log("Done");

    setLoading(false);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!loading ? (
        <ScrollView>
          <Text>All Assignments</Text>
          <AssignmentList assignments={assignments} />
        </ScrollView>
      ) : (
        <ScrollView>
          <Card>
            <Card.Title>Loading...</Card.Title>
          </Card>
        </ScrollView>
      )}
    </View>
  );
}
