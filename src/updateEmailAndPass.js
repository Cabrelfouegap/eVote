import  {React, Component} from 'react';
import { TextInput, useState, View, StyleSheet, SafeAreaView, Text, Button, TouchableOpacity,ScrollView } from 'react-native';
import Firebase from './firebase';
import InputListe from './inputListe';



class UpdatePassEmail extends Component {

    constructor(props) 
    {
        super(props)
        this.state = {
            utilisateur: {},  
            cleutilisateur: [],
            email: '',
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
        .ref("utilisateurs/" + this.props.route.params.id)
        .once('value', (querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let AllUsers = {...data};

            this.setState({
                email:AllUsers.email, 
                password: AllUsers.password
        
            })
        })
    }
    modifier = () => {
        const reference = Firebase.database().ref("utilisateurs/" + this.props.route.params.id);
                const recup = {
                    email: this.state.email, 
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
                <Text style={styles.text}>Entrer votre nouveau mail</Text>
                <View style={styles.login2}>
                
               
               <Text></Text>
               <InputListe label="email" placeholder="email"
               placeholderTextColor='#9C9B9B' 
               onChangeText={this.onChangeText} 
               nomState = "email"
               value = {this.state.matricule}
               keyboardType="email"
               />
               
                <Text></Text>
               
               </View>
               <Text></Text>
                <TouchableOpacity style = {styles.button}  key={recuperation}  onPress={() => this.modifier()}>
                    <Text style={{color: 'white'}}>Modifier</Text>
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
export default UpdatePassEmail;
