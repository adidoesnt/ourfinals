import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15
    },
    button: {
      backgroundColor: 'white',
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      marginTop: 5,
      alignItems: 'center'
    },
});