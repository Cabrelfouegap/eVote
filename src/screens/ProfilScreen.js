import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../firebase';


export default function ProfilScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <Image source={require('../img/Avatar.png')} style={styles.avatar} />
      <Text></Text>
      <Text style={styles.text}>Email:{Firebase.auth().currentUser.email}</Text>
      <Text style={styles.text}></Text>
      <Text></Text>
     
      <Text></Text>
    
    </View>
  );
}


let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    paddingLeft: 10
  },
  text: {
    lineHeight: 22,
    fontSize: 18,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',

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


  }
});
