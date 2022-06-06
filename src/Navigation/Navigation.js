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
import {Ionicons} from '@expo/vector-icons';
import {EvilIcons} from '@expo/vector-icons'



const VoteTabNavigator = createBottomTabNavigator();
const Stack = createStackNavigator();
const Navigation = () => {
  return (
        <VoteTabNavigator.Navigator style = {styles.container}
            screenOptions={({ route }) => ({
                tabBarShowLabel:true,
                tabBarActiveTintColor: '#0080BB',
                tabBarInactiveTintColor: '#9C9B9B',
            })} 
        >
            <VoteTabNavigator.Screen name="Accueil" component={HomeScreen} 
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#0080BB',
                    tabBarInactiveTintColor: '#9C9B9B',
                    tabBarIcon: ({tintColor}) => (<Ionicons name={'ios-home'} size={30} color={'red'}/>)
                }}
            />
            <VoteTabNavigator.Screen name="Resultat" component={ResultScreen} 
                options={{
                    tabBarActiveTintColor: '#0080BB',
                    tabBarInactiveTintColor: '#9C9B9B',
                    tabBarIcon: () => (<Ionicons name={'stats-chart'} size={30}  />)
                }}
            />
            <VoteTabNavigator.Screen name="Profil" component={ProfilScreen} 
                options={{
                    tabBarActiveTintColor: '#0080BB',
                    tabBarInactiveTintColor: '#9C9B9B',
                    tabBarIcon: () => (<EvilIcons name={'user'} size={40} />)
                }}
                style={styles.screenText}
            />
        </VoteTabNavigator.Navigator>
    
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