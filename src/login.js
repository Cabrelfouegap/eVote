import  {React, Component} from 'react';
import { TextInput, useState, View, StyleSheet, SafeAreaView, Text, Button, TouchableOpacity,ScrollView } from 'react-native';
import Firebase from './firebase';
import InputListe from './inputListe';



class Login extends Component {
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
            id: ""
            
        }
    }

  onChangeText = (nomState, value) => {
    this.setState({
        [nomState]: value
    })
  }

  componentDidMount() {
    Firebase.database()
    .ref("utilisateurs")
    .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let AllUsers = {...data};

        this.setState({
            utilisateur:AllUsers, 
            cleutilisateur: Object.keys(AllUsers)
        })
    })
  }

 connection = () => {
  const {cleutilisateur, AllUsers, utilisateur} = this.state
  cleutilisateur.map((key) =>(
  this.state.matricule == utilisateur[key].matricule && this.state.password == utilisateur[key].password ? (  
    alert("connecter"), 
    this.props.navigation.navigate("Navigation")       

  ): (
      alert("gfghf")
      
      )
  
  )) 


}


    render() {  

        return (
          <ScrollView>
            <SafeAreaView style= {styles.container}>
            <View style={styles.header}></View>
            <View style= {styles.login}>
                <Text style={styles.text}>connexion</Text>
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
               <Text></Text>
                <TouchableOpacity style = {styles.button} onPress={() => this.connection()}>
                    <Text style={{color: 'white'}}>Connexion</Text>
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
      marginBottom: '30%'
    }
  });
export default Login;
