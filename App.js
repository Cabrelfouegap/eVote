import  { React, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './src/Login';
import Slider from './src/preloader/Slider';
import Navigation from './src/Navigation/Navigation'
import HomeScreen from './src/screens/HomeScreen';


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