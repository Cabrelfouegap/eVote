import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,  ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import VoteScreen from './VoteScreen';
import ListesElection from './ListesElection';
import ResultScreen from './ResultScreen';
import ConfirmVote from '../confirmVote';


//HomeScreen

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../img/HomeScreenBackground.jpg')} resizeMode="cover" style={styles.image}>
        <Text style= {styles.welcome}>BIENVENUE AUX ELECTIONS DE L’AE</Text>
        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('ListesElection')}>
          <Text style={{color: 'white', alignSelf: 'center',  }}>Demarrer</Text>
        </TouchableOpacity>     
      </ImageBackground>
    </View>
  );
}


//Stack Navigator
const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Accueil' component={Home} />
        <Stack.Screen name='ListesElection' component={ListesElection}/>
        <Stack.Screen name='Vote' component={VoteScreen} />
        <Stack.Screen name='Resultat' component={ResultScreen} />
        <Stack.Screen name='confirm' component={ConfirmVote} />
      </Stack.Navigator>   
  );
}

let styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    welcome: {
      fontWeight: '500',
      fontSize: 32,
      lineHeight: 48,
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 40,
      flex:1,

      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0.3)"
    },
    list: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 17,
      textAlign: 'center',
      marginBottom: 30
    },
    card: {
      width: 300,
      height: 70,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      borderRadius: 20,
      alignSelf: 'center',
    },
    itemCard: {
      flex: 1,
      color: '#fff',
    },
    button: {
      backgroundColor: 'rgba(80, 191, 105, 1)',
      width: 200,
      height: 48,
      borderRadius: 4,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000',
      marginBottom: '30%',
      alignSelf: 'center',
      marginTop: 170,
    },

    image: {
      flex: 1,
      justifyContent: "center"
    },
    
});
export default HomeScreen;