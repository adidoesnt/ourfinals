import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

export default function ProfileCard(props) {
    const userData = props.userData;
    return (
        <View>
            <Card>
                <Card.Title>Name: {userData.name}</Card.Title>
                <Card.Divider />
                <Text>NUSNET ID: {userData.nusnetId}</Text>
                <Text>Year: {userData.year}</Text>
                <Text>Faculty: {userData.faculty}</Text>
            </Card>
        </View>
    );
}