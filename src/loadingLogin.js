import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, LogBox,useState } from 'react-native';
import Firebase from './firebase';

export default function LoadingLogin({ navigation }) 
{

 


useEffect(() => {
  Firebase.auth().onAuthStateChanged((user) => {
    if(user)
    {
      navigation.navigate("Navigation")
    }
      else if(!user)
    {
        navigation.navigate("auth")
    }
   
  })
     
})


return(
<View style={styles.container}>
    
</View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});  