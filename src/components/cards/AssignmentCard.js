import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Button } from '../Button';
import { useAuth } from '../AuthContext'

export default function AssignmentCard(props) {
    const assignmentData = props.assignmentData;
    const { currentUser } = useAuth();

    function joinAsTutorHandler() {
        // check to see if student uid = currentUser
        // might need a services function to return student based on NUSNETID
        return;
    }

    return (
        <View>
            <Card>
                <Card.Title>{assignmentData.moduleCode}: {assignmentData.moduleTitle}</Card.Title>
                <Card.FeaturedSubtitle>{assignmentData.assignmentTitle}</Card.FeaturedSubtitle>
                <Card.Divider />
                <Text>Description</Text>
                <Text>{assignmentData.assignmentDescription}</Text>
                <Text>{assignmentData.assignmenteescription}</Text>
                <Text>{'\n'}Student</Text>
                <Text>{assignmentData.studentNusId}</Text>
                <Text>{assignmentData.studentName}</Text>
                <Text>{'\n'}Tutor</Text>
                {assignmentData.tutorId ? 
                    <View>
                        <Text>{assignmentData.tutorNusId}</Text>
                        <Text>{assignmentData.tutorName}</Text>
                    </View> :
                    <View>
                        <Text>-</Text>
                        <Button onPress={joinAsTutorHandler}>Teach this Assignment</Button>
                    </View>
                }
            </Card>
        </View>
    );
}