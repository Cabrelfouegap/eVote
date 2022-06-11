
import React from "react" 
import {Text, View, StyleSheet,TouchableOpacity,  Button} from "react-native";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Firebase from "../firebase";
import VoteScreen from "./VoteScreen";
import "firebase/compat/database"; 
// import SwipeButton from 'rn-swipe-button';

const CardListe = ({ id, AllListe, cleListe, voter, navigation}) =>{

    voter = () => {
        const reference = Firebase.database().ref("vote");
                const recup = {
                    cleListe: id, 
                    idUsers: Firebase.auth().currentUser.uid
                }
                reference
                .push(recup)
                .then((data) => {
                    alert("Votre choix a été enregistré!!!");
                })
                .catch((error) => {
                    console.log("Error: ", error);
                })       
    }
    return(
        
        <TouchableOpacity  style={styles.container} onPress={voter}>
            <View style={{backgroundColor: AllListe.couleur, width:200, height: 30,}}>
                <Text style={styles.commentaire}>{/*Nom de la liste:*/} {AllListe.liste}</Text>
                {/* <Text style={styles.commentaire}>Couleur: {AllListe.couleur}</Text> */}
                {/* <SwipeButton
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
                    navigation.navigate('Resultat')
                }}
                //After the completion of swipe (Optional)
                railFillBackgroundColor="#fff" //(Optional)
                railFillBorderColor="#fff" //(Optional)
                thumbIconBackgroundColor="background: rgba(223, 223, 223, 1);" //(Optional)
                thumbIconBorderColor="#fff" //(Optional)
                railBackgroundColor= {AllListe.couleur} //(Optional)
                railBorderColor="#fff" //(Optional)
                />  */}
            </View>     
        </TouchableOpacity> 
    )
    
}
export default CardListe; 

const styles = StyleSheet.create({
    container: {
        flexDirection:"row", 
        padding: 15, 
        // backgroundColor: "white", 
        borderRadius: 5, 
        marginBottom: 20, 
        shadowColor: "#000", 
        alignSelf: "center",
        shadowOffset:{
        height: 2 
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 5
    }, 
    nom: {
        fontWeight: "bold", 
        fontSize: 20
    }, 
    commentaire: {
      fontSize: 15, 
      color: "rgba(255,255,255,1)",
      alignSelf: 'center'
    }, 
    icon: {
        flexDirection:"row" ,
        flex: 1,
        justifyContent: "flex-end", 
        alignItems: "center"
    }

})