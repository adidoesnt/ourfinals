import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Button } from '../Button';
import { useAuth } from '../AuthContext'
import { useState } from 'react'

export default function AssignmentCard(props) {
    const assignmentData = props.assignmentData;
    const { currentUser } = useAuth();
    // const [tutor, setTutor] = useState({})

    function joinAsTutorHandler() {
        // check to see if student uid = currentUser
        // might need a services function to return student based on NUSNETID
        // something like
        // if(getStudentByNUSId(assignmentData.studentNusId).uid == currentUser) {
        //     console.error('Student and tutor cannot be the same person');
        // } else {
        //     setTutor({tutorObject});
        //     set assignmentData.tutorId = tutor.tutorId
        //     ... so and so forth
        // }
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