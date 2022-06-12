import React, {Component} from "react";
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from "react-native";
import "firebase/compat/database"; 
import Firebase from "../firebase";
import CardListe from "./extern";
import SwipeButton from 'rn-swipe-button';


export default class VoteScreen extends Component{
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
        
    render(){
        const {liste, cleListe, AllListe} = this.state
        return(
            <ScrollView style={styles.container}>
                {/* <View style={styles.header}> */}
                    <Text style= {styles.choice}>CHOISIR LA LISTE {"\n"} A VOTER</Text>
                    <Text style= {styles.list}>Listes représentées aux elections</Text>
                {/* </View> */}
                    <View style={styles.listContainer}>
                        {cleListe.length >0   ? (
                            
                                cleListe.map((key) => (
                                
                               <TouchableOpacity style={{backgroundColor: liste[key].couleur, marginBottom:30, borderRadius: 30,}} onPress={() => this.props.navigation.navigate('confirm')}>
                                   <CardListe  key={key} AllListe={liste[key]} id={key} />
                                   <SwipeButton
                                        disabled={false}
                                        //disable the button by doing true (Optional)
                                        swipeSuccessThreshold={70}
                                        height={40}
                                        //height of the button (Optional)
                                        width={300}
                                        //width of the button (Optional)
                                        title="Aller Vers resultats"
                                        //Text inside the button (Optional)
                                        //thumbIconImageSource={thumbIcon}
                                        //You can also set your own icon for the button (Optional)
                                        onSwipeSuccess={() => {
                                            this.props.navigation.navigate('Resultat')
                                        }}
                                        //After the completion of swipe (Optional)
                                        railFillBackgroundColor="background: rgba(223, 223, 223, 0.3);" //(Optional)
                                        railFillBorderColor="#fff" //(Optional)
                                        thumbIconBackgroundColor="background: rgba(223, 223, 223, 0.1);" //(Optional)
                                        thumbIconBorderColor="#fff" //(Optional)
                                        railBackgroundColor= {liste[key].couleur}//(Optional)
                                        railBorderColor="#fff" //(Optional)
                                    /> 
                               </TouchableOpacity>                                 

                                ))
                            ) : (
                                <Text style= {[styles.list, {Color: 'red', fontSize: 18}]}>Aucune liste !</Text>          
                            )
                        }       
                    </View>
                <View style={styles.listcontact}></View>
            </ScrollView>
        ); 
    }; 
}
const styles = StyleSheet.create({
    // page: {
    //     flex:1
    // },
    // wrapper: {
    //     flex:1,
    //     position: "absolute",
    //     bottom: 0,
    //     right: 0, 
    //     margin: 30
    // }, 
    // btn: {
    //     padding:20,
    //     backgroundColor:"skyblue",
    //     borderRadius: 30, 
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84, 
    //     elevation : 5
    // }, 
    // header: {
    //     paddingHorizontal: 30, 
    //     paddingTop: 30
    // }, 
    // title: {
    //     fontSize: 30, 
    //     fontWeight: "bold"
    // }, 
    // listcontact: {
    //     paddingHorizontal: 40, 
    //     marginTop: 20
    // }, 
    
    container: {
        flex: 1,   
    },
    listContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    choice: {
      fontWeight: '500',
      fontSize: 32,
      lineHeight: 48,
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 40,
    },
    list: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 17,
      textAlign: 'center',
      marginBottom: 30
    },
    card: {
        width: 150,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 20,
        alignSelf: 'center'
    },
})
