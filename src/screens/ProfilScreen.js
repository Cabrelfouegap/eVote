import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfilScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/Avatar.png')} style={styles.avatar} />
      <Text style={styles.text}>Cabrel Fouegap</Text>
      <Text style={styles.text}>cabrelfouegap09@gmail.com</Text>
      <Text style={styles.text}>19NTI038A</Text>
    </View>
  );
}


let styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      paddingLeft: 10
    },
    text: {
      lineHeight: 22,
      fontSize: 18,
      fontWeight: '400',
      color: 'rgba(0, 0, 0, 1)',

    }
});
export default ProfilScreen;