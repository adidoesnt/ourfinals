import { StatusBar } from 'expo-status-bar';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

import {  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Button, 
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { styles } from './src/components/Stylesheet';
import { AuthProvider } from './src/components/AuthContext';

const Stack = createStackNavigator();

function Welcome({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image
          style={styles.logo}
          source={require('./assets/highres_transparent_logo.png')}
      />
      <Text>An on-demand peer tutoring platform</Text>
      <Text>by students, for students.</Text>
      <View style={styles.join}>
        <Button title='Log in' onPress={()=>{navigation.navigate('Login')}}/>
        <Button title='Sign up' onPress={()=>{navigation.navigate('Signup')}}/>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' component={Welcome}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Signup' component={Signup}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
