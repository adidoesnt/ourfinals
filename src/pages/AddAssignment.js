import { Button } from '../components/Button';
import { useAuth } from '../components/AuthContext';
import { View } from 'react-native';

export default function AddAssignment() {
    const { changeAssignmentSubmissionStateToFalse } = useAuth();

    function cancelSubmitAssignmentHandler() {
        changeAssignmentSubmissionStateToFalse();
        return;
    }

    function submitAssignmentHandler() {
        console.log('submitting assignment');
    }

    return (
        <View>
            <Button onPress={submitAssignmentHandler}>Add Assignment</Button>
            <Button onPress={cancelSubmitAssignmentHandler}>Cancel</Button>
        </View>
    );
}