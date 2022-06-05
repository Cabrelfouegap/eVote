import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
import ResultScreen from '../screens/ResultScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../login';



const VoteTabNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();
const Navigation = () => {
  return (

    <NavigationContainer
        screenOptions={({ route }) => ({
            tabBarShowLabel:true,
            tabBarActiveBackgroundColor: '#0080BB',
            tabBarInactiveBackgroundColor: '#9C9B9B',
        })}    
    >

        <VoteTabNavigator.Navigator style = {styles.container}>
            <VoteTabNavigator.Screen name="Accueil" component={HomeScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: () => (<Image source={require("../img/Home.png")} 
                    style={styles.icon} />)
                }}
            />
            <VoteTabNavigator.Screen name="Resultat" component={ResultScreen} 
                options={{
                    tabBarIcon: () => (<Image source={require("../img/Resultat.png")} 
                    style={styles.icon} />)
                }}
            />
            <VoteTabNavigator.Screen name="Profil" component={ProfilScreen} 
                options={{
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