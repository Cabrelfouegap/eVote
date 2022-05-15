import  {React, Component} from 'react';
import { TextInput, useState, View, StyleSheet, SafeAreaView, Text, Button, TouchableOpacity } from 'react-native';

class Login extends Component {
    render() {  
        return (
            <SafeAreaView style= {styles.container}>
            <View style={styles.header}></View>
            <View style= {styles.login}>
                <Text style={styles.text}>connexion</Text>
                <View style={styles.login2}>
                <TextInput
                    style={styles.input}
                    placeholder="Matricule"
                    placeholderTextColor= '#9C9B9B'
                />
                <TextInput
                    style={[styles.input, {marginBottom: '10%', marginTop: 25}]}
                    placeholder="Password"
                />
                <TouchableOpacity style = {styles.button}>
                    <Text style={{color: 'white'}}>Connexion</Text>
                </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        ) 
    }
}




let styles= StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 35
    },
    header: {
      backgroundColor: 'rgba(104, 187, 227, 1)',
      flex: 1
    },
    login: {
      flex: 8,
      backgroundColor: 'white',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    login2: {
      flex: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      flex:1,
      fontWeight: '500',
      fontSize: 32,
      lineHeight: 32,
      textAlign: 'center',
      marginTop: '20%'
    },
    input: {
      backgroundColor: 'rgba(223, 223, 223, 1)',
      width: 310,
      height: 70, 
      lineHeight: 30,
      borderRadius: 12,
      justifyContent: 'center',
      textAlign: 'center'
    },
    button: {
      backgroundColor: 'rgba(80, 191, 105, 1)',
      width: 211,
      height: 37,
      borderRadius: 30,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000',
      marginBottom: '30%'
    }
  });
export default Login;
