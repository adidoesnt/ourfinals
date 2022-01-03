import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Button,
  Alert 
} from 'react-native';

export default function App() {
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
        <Button
          title='Log in'
          onPress={()=>{
            Alert.alert('Warning', 'Work in progess.',
            [{text: 'close', onPress: ()=>console.log('Resolved.')}])
          }}
        />
        <Button
          title='Sign up'
          onPress={()=>{
            Alert.alert('Warning', 'Work in progess.',
            [{text: 'close', onPress: ()=>console.log('Resolved.')}])
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f45e61',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  join: {
    paddingVertical: 10,
    flexDirection:'row'
  }
});
