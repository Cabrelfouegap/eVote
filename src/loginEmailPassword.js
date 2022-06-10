import React, {Component, useState} from "react"
import {Text, View, StyleSheet,TextInput, Alert, Button, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";
import Firebase from "./firebase";
import "firebase/compat/auth"; 
import InputListe from "./inputListe";
import Navigation from "./Navigation/Navigation";

export default function AuthScreen({navigation}) 
{
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const connection = () => {
    if (!email) {
      Alert.alert('Entrer votre email.');
    }else if(!password) {
      Alert.alert('Entrer votre mot de passe.');
    } else{
      Firebase.auth().signInWithEmailAndPassword(email, password)
      navigation.navigate("LoadingLogin")
    }
    
  };
    
  
        return(             
          <ScrollView>
          <SafeAreaView style= {styles.container}>
          <View style={styles.header}></View>
          <View style= {styles.login}>
              <Text style={styles.text}>connexion</Text>
             <View style={styles.login2}>

               <TextInput style={styles.input} placeholder= "email"
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
              value={email}
              autoCapitalize="none"
              />
             
              <TextInput style={styles.input} placeholder= "password"
               onChangeText={(password) => setPassword(password)}
               value={password}
              />
            <Text></Text>
            <TouchableOpacity style = {styles.button} onPress={connection}>
                 <Text style={{color: 'white'}}>Connexion</Text>
            </TouchableOpacity>  
            
             </View>  
              </View>
          
          </SafeAreaView>
        </ScrollView>
           
        )
    }


const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(223, 223, 223, 1)',
        width: 310,
        height: 70, 
        lineHeight: 30,
        borderRadius: 12,
        justifyContent: 'center',
        textAlign: 'center', 
        marginBottom: "20%"
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
        marginBottom: '20%'
      }, 
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
        marginTop: '20%', 
        marginBottom:"0%", 
        color:"#5f9ea0"
      },
      input: {
        backgroundColor: 'rgba(223, 223, 223, 1)',
        width: 310,
        height: 70, 
        lineHeight: 30,
        borderRadius: 12,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop:"20%"
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
        marginBottom: '20%'
      }, 
      change: 
      {
        backgroundColor: '#5f9ea0',
        width: 211,
        height: 37,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
      
        
      }, 
      update:
      {
        backgroundColor: '#5f9ea0',
        width: 250,
        height: 37,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
      }
})

