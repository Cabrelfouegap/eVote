import React from "react"; 
import { StyleSheet, Text, View, TextInput } from "react-native";

const InputListe = ({label, placeholder, onChangeText, nomState, value, keyboardType }) => {
    return(
    
    <TextInput style={styles.input} placeholder= {placeholder}
    value = {value}
    onChangeText = {(text) => onChangeText(nomState, text)}
    keyboardType={keyboardType}
  />
     
     )
}

export default InputListe; 
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