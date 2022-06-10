import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../firebase';


export default function ProfilScreen({ navigation }) {


  const password = () => {
    navigation.navigate("confirm2")
  }
  const email = () => {
    navigation.navigate("confirm3")
  }

  let currentUserUID = Firebase.auth().currentUser.uid;
  let currentUseremail = Firebase.auth().currentUser.email;

  const [nom, setName] = useState('');
  const [prenom, setlastName] = useState('');
  const [matricule, setmatricule] = useState('');
  const [mail, setmail] = useState('');


  useEffect(() => {
    Firebase.database()
      .ref("utilisateurs")
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let AllUsers = { ...data };
        let utilisateurs = AllUsers;
        let cleutilisateur = Object.keys(AllUsers)
        setName(AllUsers.mail)

        cleutilisateur.map((key) => {
          if (currentUseremail === AllUsers[key].email) {
            Alert.alert("egal")
          }
          else {
            Alert.alert("non egal")
          }

        })



      })



  })


  return (
    <View style={styles.container}>
      <Image source={require('../img/Avatar.png')} style={styles.avatar} />
      <Text style={styles.text}>{AllUsers}</Text>
      <Text style={styles.text}>Prenom:{prenom}</Text>
      <Text style={styles.text}>matricule:{matricule}</Text>
      <Text style={styles.text}>email:{mail}</Text>
      <Text></Text>
      <TouchableOpacity style={styles.change} onPress={password} >
        <Text style={{ color: "white" }} >Changer le mot de passe ?</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.change} onPress={email} >

        <Text style={{ color: "white" }} >Changer l'adresse mail?</Text>
      </TouchableOpacity>
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
