
import React from "react" 
import {Text, View, StyleSheet,TouchableOpacity,  Button} from "react-native";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Firebase from "../firebase";
import VoteScreen from "./VoteScreen";
import "firebase/compat/database"; 
import SwipeButton from 'rn-swipe-button';

const CardElectionResult = ({ id, AllElection, cleElection, voter}) =>{
    
    // voter = ({navigation}) => {
    
    //     navigation.navigate('Vote')        
    // }
    return(
        
        <View  style={[styles.container, {backgroundColor:"rgba(80,191,105,1)"}]}>
            {/* <View style={{backgroundColor: AllListe.couleur}}> */}
                <Text style={styles.commentaire}>{/*Nom de la liste:*/} {AllElection.nomElection}</Text>
                {/* <Text style={styles.commentaire}>Couleur: {AllListe.couleur}</Text> */}
            {/* </View>      */}
        </View> 
    )
    
}
export default CardElectionResult; 

const styles = StyleSheet.create({
    container: {    
        padding: 15, 
        width: 300,
        height:100,
        alignContent: 'center',
        borderRadius: 5, 
        marginBottom: 20, 
        shadowColor: "#000", 
        
    }, 
    nom: {
        fontWeight: "bold", 
        fontSize: 20
    }, 
    commentaire: {
      fontSize: 15, 
      color: "rgba(255,255,255,1)",
      alignSelf: 'center', 
      fontSize: 30
    }, 
    icon: {
        flexDirection:"row" ,
        flex: 1,
        justifyContent: "flex-end", 
        alignItems: "center"
    }

})