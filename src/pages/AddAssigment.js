import { Button } from '../components/Button';
import { useAuth } from '../components/AuthContext';

export default function AddAssignment() {
    const { changeAssignmentSubmissionStateToFalse } = useAuth();

    function cancelSubmitAssignmentHandler() {
        changeAssignmentSubmissionStateToFalse();
        return;
    }

    return (
        <Button onPress={cancelSubmitAssignmentHandler}>Cancel</Button>
    );
}