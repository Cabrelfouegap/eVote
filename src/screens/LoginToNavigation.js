
import React from "react" 
import {Text, View, StyleSheet,TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../login";
import Navigation from '../Navigation/Navigation';
import ProfilScreen from "./ProfilScreen";
import Confirm from "../confirmIdentite";
import Confirm2 from "../confirm2";
import UpdatePassEmail from "../updateEmailAndPass";
import Confirm3 from "../confirm3";
import UpdatePassword from "../updatePassword";
import HomeScreen from "./HomeScreen";
import LoadingLogin from "../loadingLogin";
import AuthScreen from "../loginEmailPassword";
import ConfirmVote from "../confirmVote";
import VoteScreen from "./VoteScreen";


const LoginToNavigation = () =>{
   const Stack = createStackNavigator();  
    return( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='auth' component={AuthScreen} 
                    options={{
                        headerShown: false,
                    }} 
                />
                 <Stack.Screen name='Login' component={Login} 
                    options={{
                        headerShown: false,
                    }} 
                />
                <Stack.Screen name='Navigation' component={Navigation} 
                    options={{
                        headerShown: false,
                    }} 
                />
                <Stack.Screen name='confirmVote' component={ConfirmVote} 
                    options={{
                        headerShown: false,
                    }} 
                />
                 <Stack.Screen name='Vote' component={VoteScreen} />
                <Stack.Screen name="LoadingLogin" component = {LoadingLogin}   />
                <Stack.Screen name="confirm" component = {Confirm}   />
                <Stack.Screen name="confirm2" component = {Confirm2}   />
                <Stack.Screen name="updateProfil" component = {UpdatePassEmail}   />
                <Stack.Screen name="updatePassword" component = {UpdatePassword}   />
                <Stack.Screen name="confirm3" component = {Confirm3}   />
            </Stack.Navigator> 
        </NavigationContainer>    
        
    )
    
}; 

const styles = StyleSheet.create({
    

})

export default LoginToNavigation;