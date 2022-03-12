import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

export default function ProfileCard() {
    return (
        <View>
            <Card>
                <Card.Title>Name</Card.Title>
                <Card.FeaturedSubtitle>NUSNET ID</Card.FeaturedSubtitle>
                <Card.Divider />
                <Text>Year</Text>
                <Text>Faculty</Text>
            </Card>
        </View>
    );
}