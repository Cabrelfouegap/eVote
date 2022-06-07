import  {React, Component} from 'react';
import { TextInput, useState, View, StyleSheet, SafeAreaView, Text, Button, TouchableOpacity,ScrollView, Linking } from 'react-native';
import Firebase from './firebase';
import InputListe from './inputListe';



class Confirm extends Component {
  constructor(props) 
  {
      super(props)
      this.state = {
          utilisateur: {},  
          cleutilisateur: [],
          matricule: '',
          email: '',
          motDePasse: '', 
          nom: '', 
          AllUsers: [], 
          recuperation: "", 
          id: "", 
          motDePasse: ""
          
      }
  }
  
  sendEmail = async(recup, recuperation, id, motDePasse, sendEmail, random1,random2,random3,random4,random5,random6,random7,random8,random9,random10) => {
      const {email} = this.state
      random1 = Math.floor(Math.random() * 10)
      random2 = Math.floor(Math.random() * 10)
      random3 = Math.floor(Math.random() * 10)
      random4 = Math.floor(Math.random() * 10)
      random5 = Math.floor(Math.random() * 10)
      random6 = Math.floor(Math.random() * 10)
      random7 = Math.floor(Math.random() * 10)
      random8 = Math.floor(Math.random() * 10)
      random9 = Math.floor(Math.random() * 10)
      random10 = Math.floor(Math.random() * 10)
      motDePasse = random1 +""+ random2 + "" + random3 + "" + random4 + "" +random5 + "" + random6 + "" + random7 + ""+ random8 + "" + random9 + "" + random10
      this.state.motDePasse = motDePasse
      await Linking.openURL("mailto:"+this.state.email+"?subject=Vous n'avez pas la possiblite de modifier ce mot de passe. Vous utiliseez desormais ce mot de passe poour vous conneter:&body="+motDePasse+"                                              NB: cliquer sur envoyer pour ne pas l'oublier plus tartd")
      console.log(message)
  }
 
  
 
  onChangeText = (nomState, value) => {
      this.setState({
          [nomState]: value
      })
  }

  componentDidMount() {
      const {motDePasse, cleutilisateur} =this.state
  
      Firebase.database()
      .ref("utilisateurs/"+cleutilisateur)
      .once('value', (querySnapShot) => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let AllUsers = {...data};

          this.setState({
              utilisateur:AllUsers, 
              cleutilisateur: Object.keys(AllUsers)
          })
      })
  }
 


      verifier = (recups, recuperation, motDePasse) => {
                  const {cleutilisateur, AllUsers, utilisateur } = this.state
                  cleutilisateur.map((key) =>(
                  this.state.matricule == utilisateur[key].matricule && this.state.email  == utilisateur[key].email && this.state.nom == utilisateur[key].nom ? ( 
                     recuperation = key,
                     
                     this.sendEmail(), 
                     this.modifier(key)
                     
                     
                  
                  ): (
                      recups = "message" 
                      
                      )
                  
                  )) 
      }
      modifier = ( recuperation) => {
          const {motDePasse, cleutilisateur} =this.state
          
          const reference = Firebase.database().ref("utilisateurs/"+recuperation );
          
                  const recup = {
                      password: motDePasse
                  }
                  
                  reference
                  .update(recup)
                  .then((data) => {
                      alert("Modification Reuissi");
                  })
                  .catch((error) => {
                      console.log("Error: ", error);
                  })    
                  
      }     

    render() {  
      const {recuperation, id} = this.state;
        return (
          <ScrollView>
            <SafeAreaView style= {styles.container}>
            <View style={styles.header}></View>
            <View style= {styles.login}>
                <Text style={styles.text}>Verification de votre identité</Text>
                <View style={styles.login2}>
                
                <InputListe label="nom" placeholder="nom"
               placeholderTextColor='#9C9B9B' 
               onChangeText={this.onChangeText} 
               nomState = "nom"
               value = {this.state.nom}
               />
               <Text></Text>
               <InputListe label="matricule" placeholder="matricule"
               placeholderTextColor='#9C9B9B' 
               onChangeText={this.onChangeText} 
               nomState = "matricule"
               value = {this.state.matricule}
               />
               
                <Text></Text>
               <InputListe style={styles.input}  label="email" placeholder="email"
               placeholderTextColor='#9C9B9B' 
               onChangeText={this.onChangeText} 
               nomState = "email"
               value = {this.state.email}
          
               />
               </View>
               <Text></Text>
                <TouchableOpacity style = {styles.button}  key={recuperation}  onPress={() => this.verifier()}>
                    <Text style={{color: 'white'}}>Obtenir un nouveau mot de passe</Text>
                </TouchableOpacity>
               
                </View>
            
            </SafeAreaView>
          </ScrollView>
        ) 
    }
}




let styles= StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 35, 
    },
    header: {
      backgroundColor: 'rgba(104, 187, 227, 1)',
      flex: 1, 
    },
    login: {
      flex: 8,
      backgroundColor: '#5f9ea0',
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
      fontWeight:"bold",
      lineHeight: 32,
      textAlign: 'center',
      marginTop: '15%', 
      marginBottom:"0%", 
      color:"#006400"
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
      width: 230,
      height: 37,
      borderRadius: 30,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000',
      marginBottom: '30%'
    }, 
    change: 
    {
        backgroundColor:"#6495ed",
      
    }
  });
export default Confirm;
