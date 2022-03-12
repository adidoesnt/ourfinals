import { SafeAreaView, Text } from 'react-native';
import ProfileCard from '../components/cards/ProfileCard';

const dummyData = {
    id: '23456', 
    name: 'John Appleseed', 
    year: 2, 
    faculty: 'engineering', 
    nusnetId: 'e2345678'
};

export default function Profile() {
    return (
        <SafeAreaView>
            <ProfileCard/>
        </SafeAreaView>
    );
}
