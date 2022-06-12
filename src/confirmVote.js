import  {React, Component} from 'react';
import { TextInput, useState, View, StyleSheet, SafeAreaView, Text, Button, TouchableOpacity,ScrollView, Alert } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Firebase from './firebase';
import InputListe from './inputListe';


class ConfirmVote extends Component {
  constructor(props) 
    {
        super(props)
        this.state = {
            utilisateur: {},  
            cleutilisateur: [],
            matricule: '',
            password: '',
            AllUsers: [], 
            recuperation: "", 
            recup2:"", 
            id: "",
        }
    }
    componentDidMount() {
        const {cleutilisateur, AllUsers, utilisateur, recuperation} = this.state
        Firebase.database()
            .ref("utilisateurs/"+recuperation)
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let AllUsers = {...data};
                this.setState({
                    utilisateur:AllUsers, 
                    cleutilisateur: Object.keys(AllUsers)
                })
            })
    
        }
           
        confirm = () => {
          const reference = Firebase.database().ref("vote");
                  const recup = {
                      idUsers: Firebase.auth().currentUser.uid 
                  }
                  reference
                  .push(recup)
                  .then((data) => {
                  })
                  .catch((error) => {
                      console.log("Error: ", error);
                  })       
      }  
  confirmIdentite = (alc)=> {
        const {cleutilisateur, utilisateur} = this.state
        cleutilisateur.map((key) =>(
           Firebase.auth().currentUser.email == utilisateur[key].email && this.state.matricule ==  utilisateur[key].matricule && this.state.password ==  utilisateur[key].password ? ( 
            this.confirm(),  
            Alert.alert(
              "Vote enregistrer avec succes",
              " ",
              [
                { text: "Continuer", onPress: () => this.props.navigation.navigate('ListesElection') }
              ]
            ) 
            
        ): (
                  alc="mmm"            
            )
        
        )) 
           
            
      }
    
  onChangeText = (nomState, value) => {
    this.setState({
        [nomState]: value
    })
  }
 

    render() {  
      const {recuperation, id, utilisateur,} = this.state;
        return (
          <ScrollView>
            <SafeAreaView style= {styles.container}>
            <View style={styles.header}></View>
            <View style= {styles.login}>
                <Text style={styles.text}>Confirmer votre identité</Text>
                <View style={styles.login2}>
                
               <InputListe label="matricule" placeholder="matricule"
               placeholderTextColor='#9C9B9B' 
               onChangeText={this.onChangeText} 
               nomState = "matricule"
               value = {this.state.matricule}
               />
               
                <Text></Text>
                <InputListe style={styles.input}  label="password" placeholder="password"
               placeholderTextColor='#9C9B9B' 
               onChangeText={this.onChangeText} 
               nomState = "password"
               value = {this.state.password}
               />
               </View>
               <Text></Text>
                <TouchableOpacity style = {styles.button}    onPress={() => this.confirmIdentite()}>
                    <Text style={{color: 'white'}}>Continuer</Text>
                </TouchableOpacity>
                
                <Text></Text>
               
                </View>

            </SafeAreaView>
          </ScrollView>
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
  });
export default ConfirmVote;
