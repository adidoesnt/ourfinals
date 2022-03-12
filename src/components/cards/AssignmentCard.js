import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import ProfileCard from './ProfileCard';

export default function AssignmentCard() {
    return (
        <View>
            <Card>
                <Card.Title>Module Code: Module Title</Card.Title>
                <Card.FeaturedSubtitle>Assignment Title</Card.FeaturedSubtitle>
                <Card.Divider />
                <Text>Assignment Description</Text>
                <Text>{'\n'}Student</Text>
                <ProfileCard/>
                <Text>{'\n'}Tutor</Text>
                <ProfileCard/>
            </Card>
        </View>
    );
}