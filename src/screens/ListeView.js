import React, {Component} from "react";
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from "react-native";
import "firebase/compat/database"; 
import Firebase from "../firebase";
import CardListe2 from "./extern2";

export default class ListeView extends Component{
    constructor(props)
    {
        super(props)
        {
            this.state = {
                liste: {},  
                cleListe: []
            }
        }
    }
   
    componentDidMount() {
        Firebase.database()
        .ref("liste")
        .once('value', (querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let AllListe = {...data};

            this.setState({
                liste:AllListe, 
                cleListe: Object.keys(AllListe)
            })
        })
    }
        
render() 
{
    const {liste, cleListe, AllListe} = this.state
    return(
      <View style={styles.page}>
          <View style={styles.header}>
                <Text style={styles.title}>Vos liste</Text>
          </View>
          <ScrollView>
          <View style={styles.listcontact} >
               

                        {cleListe.length >0   ? (
                            
                            cleListe.map((key) => (
                               
                            <View >
                            <View style={{backgroundColor:liste[key].couleur}}>
                           <CardListe2  key={key} AllListe={liste[key]} id={key}
                            />
                            </View>
                            </View>
                                
                            
                            ))
                        ) : (
                            <Text>Aucune liste !</Text>          
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
        fontWeight: "bold"
    }, 
    listcontact: {
        paddingHorizontal: 40, 
        marginTop: 20
    }, 
    
})
