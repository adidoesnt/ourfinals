import { KeyboardAvoidingView, 
    Text, 
    SafeAreaView, 
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import { styles } from '../components/Stylesheet';
import { useState } from 'react';
import { useAuth } from '../components/AuthContext';

export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const { signup } = useAuth();

    async function signupHandler() {
        const suffix = email.split('@')[1];
        if(suffix === 'u.nus.edu' || suffix === 'nus.edu.sg') {
            if(password === confirmPassword) {
                try {
                    await signup(email, password);
                } catch {
                    return alert('Sign up failed.');
                }
            } else {
                return alert('Passwords entered do not match.');
            }
        } else {
            return alert('Signups are currently open to NUS students only.');
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
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
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