import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";
import { Card } from 'react-native-elements';
import AssignmentList from "../components/AssignmentList";

const assignmentsData = require('../../testData/testAssignments.json');

export default function Marketplace() {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let temp = [];
        for(const key in assignmentsData) {
            const assignment = {
                id: key,
                ...assignmentsData[key]
            };
            temp.push(assignment);
        }
        setAssignments(temp);
        setLoading(false);
    }, []);

    return (
        <View style={{flex: 1}}>{!loading ? (
          <ScrollView>
              <Text>All Assignments</Text>
              <AssignmentList assignments={assignments}/>
          </ScrollView>
      ) : <ScrollView>
            <Card>
            <Card.Title>Loading...</Card.Title>
            </Card>
          </ScrollView>}
      </View>
    );
}