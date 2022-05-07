import React from 'react';
import { View, TextInput, StyleSheet, Text, SafeAreaView, Image, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';

export default function App() {
  return ( 
      <LinearGradient   
        colors={['rgba(162, 235, 179, 1)', 'rgba(182, 223, 242, 1)', 'rgba(193, 220, 233, 1)']}  
        {...deg(157.6)} 
        style={styles.container}>
          <View style={styles.box1}>
            <Image source={require('./src/img/preload_img.png')} />
          </View>
          <View style={styles.box2}>
            <Text style={styles.create}>Creer un compte</Text>
            <Text style={styles.createParagraph}>
              Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated.
            </Text>
            <Button title="Suivant" onpress= {alert('ok')} style={styles.button} />
          </View>
      </LinearGradient>
  );
}
let styles= StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backfaceVisibility: 'hidden',
  },
  box1: {
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box2: {
    height: '55%',
    backgroundColor: '#FAFFFC', 
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  create: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
    
  },
  createParagraph: {
    width: 310,
    height: 117,
    justifyContent: 'center',
    lineHeight: 24.7,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'inter',
    color: '#9C9B9B'
  },
  button: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#FFF',
    backgroundColor: '#68BBE3',
    borderRadius: 30,
    textTransform: 'lowercase'
  }
});