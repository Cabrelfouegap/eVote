import React, {Component} from "react";
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from "react-native";
import "firebase/compat/database"; 
import Firebase from "./firebase";

export default class VoirListe extends Component{
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
                <Text style={styles.title}>Vos information</Text>
          </View>
          <ScrollView>
          <View style={styles.listcontact} >
               

                        {cleListe.length >0   ? (
                            
                            cleListe.map((key) => (
                                liste[key].couleur=="Bleu" ? (
                            <View >
                            <TouchableOpacity style={{backgroundColor:"blue"}}>
                           <CardListe  key={key} AllListe={liste[key]} id={key}
                            />
                            </TouchableOpacity>
                            </View>
                                ) : (
                                    <Text></Text>
                                )
                            
                            ))
                        ) : (
                            <Text>Aucune liste !</Text>          
                        )
                    }
                      {cleListe.length >0   ? (

cleListe.map((key) => (
    liste[key].couleur=="Verte" ? (
<View >
<TouchableOpacity style={{backgroundColor:"green"}}>
<CardListe  key={key} AllListe={liste[key]} id={key} />
</TouchableOpacity>
</View>
    ) : (
        <Text></Text>
    )

))
) : (
<Text>Aucune liste !</Text>          
)
}
                     {cleListe.length >0   ? (

cleListe.map((key) => (
    liste[key].couleur=="Blanc" ? (
<View >
<TouchableOpacity >
<CardListe  key={key} AllListe={liste[key]} id={key}
/>
</TouchableOpacity>
</View>
    ) : (
        <Text></Text>
    )

))
) : (
<Text>Aucune liste !</Text>          
)
}
{cleListe.length >0   ? (

cleListe.map((key) => (
    liste[key].couleur=="Noir" ? (
<View >
<TouchableOpacity style={{backgroundColor:"black"}}>
<CardListe  key={key} AllListe={liste[key]} id={key}
/>
</TouchableOpacity>
</View>
    ) : (
        <Text></Text>
    )

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
