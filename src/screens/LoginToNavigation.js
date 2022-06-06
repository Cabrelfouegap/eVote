
import React from "react" 
import {Text, View, StyleSheet,TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../login";
import Navigation from '../Navigation/Navigation';
import HomeScreen from "./HomeScreen";
import ProfilScreen from "./ProfilScreen";



const LoginToNavigation = () =>{
   const Stack = createStackNavigator();  
    return( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Navigation' component={Navigation} />
            </Stack.Navigator> 
        </NavigationContainer>    
        
    )
    
}; 

const styles = StyleSheet.create({
    

})

export default LoginToNavigation;