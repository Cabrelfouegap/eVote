
import React from "react" 
import {Text, View, StyleSheet,TouchableOpacity} from "react-native";
import Firebase from "../firebase";
import VoteScreen from "./VoteScreen";
import "firebase/compat/database"; 

const CardListe = ({ id, AllListe, cleListe, voter}) =>{

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
        
            <View style={{backgroundColor: AllListe.couleur}}>
                <Text style={styles.commentaire}>{/*Nom de la liste:*/} {AllListe.liste}</Text>
                {/* <Text style={styles.commentaire}>Couleur: {AllListe.couleur}</Text> */}
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
        shadowOffset:{
        width: 0 , 
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
      color: "rgba(0,0,0,0.6)",
    }, 
    icon: {
        flexDirection:"row" ,
        flex: 1,
        justifyContent: "flex-end", 
        alignItems: "center"
    }

})