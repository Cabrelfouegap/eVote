import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
import ResultScreen from '../screens/ResultScreen';



const VoteTabNavigator = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer
        // screenOptions={({ route }) => ({
        //     headerShown: false,
        //     tabBarShowLabel:false,
        //     tabBarActiveBackgroundColor: '#0080BB',
        //     tabBarInactiveBackgroundColor: '#9C9B9B',
            
        //     tabBarIcon: () => {
        //     if (route.name == 'Accueil') {
        //         return <Image
        //          source={require("../img/Home.png")} 
        //          style={{width: 20, height: 20}}/>
                
        //     } else if (route.name == 'Resultat') {
        //         return <Image
        //         source={require('../img/Resultat.png')}
        //         style={styles.icon}/>
        //     } else if (route.name == 'Profil') {
        //         return <Image
        //         source={require('../img/Profile.png')}
        //         style={styles.icon}/>
        //     }

        //     },
        // })}    
    >
        <VoteTabNavigator.Navigator style = {styles.container}>
            <VoteTabNavigator.Screen name="Accueil" component={HomeScreen} 
                options={{
                    tabBarActiveBackgroundColor: '#0080BB',
                    tabBarInactiveBackgroundColor: '#fff',
                    tabBarIcon: () => (<Image source={require("../img/Home.png")} 
                    style={styles.icon} />)
                }}
            />
            <VoteTabNavigator.Screen name="Resultat" component={ResultScreen} 
                options={{
                    tabBarActiveBackgroundColor: '#0080BB',
                    tabBarInactiveBackgroundColor: '#fff',
                    tabBarIcon: () => (<Image source={require("../img/Resultat.png")} 
                    style={styles.icon} />)
                }}
            />
            <VoteTabNavigator.Screen name="Profil" component={ProfilScreen} 
                options={{
                    tabBarActiveBackgroundColor: '#0080BB',
                    tabBarInactiveBackgroundColor: '#fff',
                    tabBarIcon: () => (<Image source={require("../img/Profile.png")} 
                    style={styles.icon} />)
                }}
                style={styles.screenText}
            />
        </VoteTabNavigator.Navigator>
    </NavigationContainer>
  );
}


let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    screenText: {
        color: '#fff'
    }
});
export default Navigation;