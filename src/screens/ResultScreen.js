import React, {Component} from "react";
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from "react-native";
import "firebase/compat/database"; 
import Firebase from "../firebase";
import CardElection2 from "./cardElection";
export default class ResultScreen extends Component{
    constructor(props)
    {
        super(props)
        {
            this.state = {
                resultat: {},  
                cleResultat: [], 

            }
        }
    }
   
    componentDidMount() {
        Firebase.database()
        .ref("resultat")
        .once('value', (querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let AllResultat = {...data};

            this.setState({
                resultat:AllResultat, 
                cleResultat: Object.keys(AllResultat)
            })
        })
    }
        
render() 
{
    const {resultat, cleResultat, AllResultat} = this.state
    return(
      <View style={styles.page}>
          <View style={styles.header}>
                <Text style={styles.title}>RESULTATS</Text>
          </View>
          <ScrollView>
          <View style={styles.listcontact} >
               

                        {cleResultat.length >0   ? (
                            
                            cleResultat.map((key) => (
                              "-N4M0KMumPHoCfYYl599" ==  key ? (
                            <View >
                                     <Text style={styles.text}>liste Verte: {resultat[key].listeRouge} voies</Text>

                            <View>
                            
                              <Text></Text>
                            </View>
                            </View>
                                ) : (
                                    <Text></Text>
                                )
                            
                            ))
                        ) : (
                            <Text></Text>          
                        )
                    }
                      {cleResultat.length >0   ? (
                            
                            cleResultat.map((key) => (
                              "-N4M0KMumPHoCfYYl599" == key ? (
                            <View >
                              <Text style={styles.text}>Liste Jaune: {resultat[key].listeJaune} voies</Text>
                            </View>
                                ) : (
                                    <Text></Text>
                                )
                            
                            ))
                        ) : (
                            <Text></Text>          
                        )
                    }
                     {cleResultat.length >0   ? (
                            
                            cleResultat.map((key) => (
                              "-N4M0KMumPHoCfYYl599" == key ? (
                            <View >
                                <Text></Text>
                              <Text style={styles.text}>Liste Bleu: {resultat[key].listeBleu} voies</Text>
                            </View>
                                ) : (
                                    <Text></Text>
                                )
                            
                            ))
                        ) : (
                            <Text></Text>          
                        )
                    }
                     {cleResultat.length >0   ? (
                            
                            cleResultat.map((key) => (
                              key =="-N4M0KMumPHoCfYYl599" ? (
                            <View >
                                <Text></Text>
                              <Text style={styles.text}>Liste rouge: { resultat[key].listeRouge} voies</Text>
                            </View>
                                ) : (
                                    <Text></Text>
                                )
                            
                            ))
                        ) : (
                            <Text></Text>          
                        )
                    }


                    
 </View>
 </ScrollView>
          <View style={styles.listcontact}>

          </View>

      </View>
    ); 
}; 
}
const styles = StyleSheet.create({
    page: {
        flex:1
    },
    wrapper: {
        flex:1,
        position: "absolute",
        bottom: 0,
        right: 0, 
        margin: 30
    }, 
    btn: {
        padding:20,
        backgroundColor:"skyblue",
        borderRadius: 30, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation : 5
    }, 
    header: {
        paddingHorizontal: 30, 
        paddingTop: 30
    }, 
    title: {
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign: "center", 
        color: "green"
    }, 
    listcontact: {
        paddingHorizontal: 40, 
        marginTop: 20, 
    }, 
    text: 
    {
        fontSize: 25,
        color: "rgba(80,191,105,1)"
    }
    
})
