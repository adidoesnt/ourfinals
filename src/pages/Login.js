import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../components/Stylesheet';

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Log in</Text>
        </SafeAreaView>
    );
}
