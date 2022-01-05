import { KeyboardAvoidingView, Image, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../components/Stylesheet';
import { useState } from 'react';
import { useAuth } from '../components/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    async function loginHandler() {
        try {
            await login(email, password);
        } catch {
            return alert('Sign in failed.');
        }
    }

    async function resetHandler() {
        if(email !== '') {
            try {
                await reset(email);
                return alert('Check your email for further instructions.');
            } catch {
                return alert('Password reset failed.');
            }
        } else {
            return alert('Please enter an email to reset your password.')
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
            </SafeAreaView>
            <SafeAreaView style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button} 
                    onPress={loginHandler}>
                    <Text style = {styles.button}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} 
                    onPress={resetHandler}>
                    <Text style={styles.button}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}
