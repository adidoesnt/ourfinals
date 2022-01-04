import { KeyboardAvoidingView, Image, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../components/Stylesheet';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
