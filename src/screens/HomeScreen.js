import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style= {styles.welcome}>BIENVENUE AUX ELECTIONS DE L’AE</Text>
      <Text style= {styles.list}>Listes représentées aux elections</Text>
      <View style={styles.card}></View>
      <View></View>
      <View></View>
    </View>
  );
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
      fontWeight: '500',
      fontSize: 32,
      lineHeight: 48,
      textAlign: 'center'
    },
    list: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 17,
      textAlign: 'center'
    },
    card: {
      
    }
});
export default HomeScreen;