import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';//pour le degrader de font
import Navigation from '../Navigation/Navigation';
import Login from '../login';

const Slider = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
    
  };
      

  const RenderItem = ({ item }) => {
    return ( 
        <LinearGradient   
          colors={['rgba(162, 235, 179, 1)', 'rgba(182, 223, 242, 1)', 'rgba(193, 220, 233, 1)']}  
          {...deg(157.6)} 
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          >
          <View style={styles.imageBox}>
            <Image style={styles.introImageStyle} source={item.image} />
          </View>
          <View style={styles.whiteRoundedBox}>
            <Text style={styles.introTitleStyle} >{item.title}</Text>
            <Text style={styles.introTextStyle}>{item.text}</Text>
          </View>
        </LinearGradient> 
    );
  };

  return (
    <>
      {showRealApp ? (
           <Login/>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip} 
          style={{ activeDotColor: 'red'}}
        />
      )}
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: '#9C9B9B',
    paddingVertical: 30,
    justifyContent: 'center',
    lineHeight: 24.7,
  },
  introTitleStyle: {
    color: 'black',
    textAlign: 'center',
    marginTop:'18%',
    fontWeight: '400',
    fontWeight: '400',
    fontSize: 24,
  },
  whiteRoundedBox: {
    flex:1.3,
    backgroundColor: '#FAFFFC', 
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  imageBox:{
    flex: 1,
    justifyContent: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const slides = [
  {
    key: 's1',
    text: ' Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated.',
    title: 'Creer un compte',
    image:  require('../img/preload_img1.png'),
  },
  {
    key: 's2',
    title: 'Voter en toute securite',
    text: ' Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated.',
    image:  require('../img/preload_img2.png'),
  },
  {
    key: 's3',
    title: 'Consulter les resultats',
    text: '  Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated.',
    image:  require('../img/preload_img3.png'),
  },
];

export default Slider;
