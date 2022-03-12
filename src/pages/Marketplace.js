import { SafeAreaView, Text } from "react-native";
import AssignmentCard from '../components/cards/AssignmentCard';

import * as assignments from '../../testData/testAssignments.json';
const testAssignment = assignments[0];

export default function Marketplace() {
    return (
        <SafeAreaView>
            <AssignmentCard assignmentData={testAssignment}/>
        </SafeAreaView>
    );
}