import { KeyboardAvoidingView, 
    Text, 
    SafeAreaView, 
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import { styles } from '../components/Stylesheet';

export default function Login() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <SafeAreaView>
                <Image style={styles.logo}
                    source={require('../../assets/highres_transparent_logo.png')}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.inputContainer}>
                <TextInput 
                    placeholder='Email'
                    //value={ }
                    //onChangeText={ }
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password'
                    //value={ }
                    //onChangeText={ }
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput 
                    placeholder='Confirm Password'
                    //value={ }
                    //onChangeText={ }
                    style={styles.input}
                    secureTextEntry
                />
            </SafeAreaView>
            <SafeAreaView style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button} 
                    onPress={()=>{
                        console.log('Sign up');
                }}>
                    <Text style = {styles.button}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}