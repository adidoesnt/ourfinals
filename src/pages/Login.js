import { KeyboardAvoidingView, Image, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
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
            </SafeAreaView>
            <SafeAreaView style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button} 
                    onPress={()=>{
                        console.log('Log in');
                }}>
                    <Text style = {styles.button}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} 
                    onPress={()=>{
                        console.log('Forgot Password');
                }}>
                    <Text style={styles.button}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}
