import { KeyboardAvoidingView, 
    Text, 
    SafeAreaView, 
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import { styles } from '../components/Stylesheet';
import { useState } from 'react';
import { auth } from '../components/Firebase';

export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cfmPassword, setCfmPassword] = useState();

    function signupHandler() {
        if(password === cfmPassword) {
            auth
            .createUserWithEmailAndPassword(email, password)
            .then(credentials => {
                const user = credentials.user;
                console.log('Registered ' + user.email);
            }).catch(error => alert(error.message));
        } else {
            return alert('Passwords entered do not match.');
        }
    }

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
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput 
                    placeholder='Confirm Password'
                    value={cfmPassword}
                    onChangeText={text => setCfmPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </SafeAreaView>
            <SafeAreaView style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button} onPress={signupHandler}>
                    <Text style = {styles.button}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}