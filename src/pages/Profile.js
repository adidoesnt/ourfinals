import { SafeAreaView, Text } from 'react-native';
import ProfileCard from '../components/cards/ProfileCard';

const userData = {
    id: '1234', 
    name: 'Aditya Banerjee', 
    year: 3, 
    faculty: 'computing', 
    nusnetId: 'e1000000'
};

export default function Profile() {
    return (
        <SafeAreaView>
            <ProfileCard userData={userData}/>
        </SafeAreaView>
    );

    // add personal assignment list
}
