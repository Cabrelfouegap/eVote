import  { React, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './src/login';
import Java from './src/preloader/java';
import Slider from './src/preloader/Slider';
import Navigation from './src/Navigation/Navigation'
import HomeScreen from './src/screens/HomeScreen';
import VoteScreen from './src/screens/VoteScreen';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slider/>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;