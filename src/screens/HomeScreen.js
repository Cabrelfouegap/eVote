import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,  ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import VoteScreen from './VoteScreen';
import { NavigationContainer } from '@react-navigation/native';


//HomeScreen

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../img/HomeScreenBackground.jpg')} resizeMode="cover" style={styles.image}>
        <Text style= {styles.welcome}>BIENVENUE AUX ELECTIONS DE L’AE</Text>
        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Vote')}>
          <Text style={{color: 'white' }}>Voter ?</Text>
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
        <Stack.Screen name='Vote' component={VoteScreen} />
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
      width: 100,
      height: 48,
      borderRadius: 4,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000',
      marginBottom: '30%',
      marginLeft: '68%',
    },

    image: {
      flex: 1,
      justifyContent: "center"
    },
    
});
export default HomeScreen;