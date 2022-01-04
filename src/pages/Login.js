import { KeyboardAvoidingView, Image, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../components/Stylesheet';
import { useState } from 'react';
import { auth } from '../components/Firebase';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(false);

    function loginHandler() {
        if(!loginState) {
            auth
            .signInWithEmailAndPassword(email, password)
            .then(credentials => {
                setLoginState(true);
                const user = credentials.user;
                console.log('Logged in as ' + user.email);
            }).catch(error => alert(error.message));
        } else {
            return alert('You are already logged in.'); // remove later
        }
    }

    function resetHandler() {
        if(!loginState) {
            if(email === '') {
                return alert('Please enter your email to reset your password.');
            } else {
                auth
                .sendPasswordResetEmail(email)
                .then(() => {
                    console.log('Password reset email sent to ' + email);
                }).catch(error => alert(error.message));
            }
        } else {
            return alert('You are already logged in.'); // remove later
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
