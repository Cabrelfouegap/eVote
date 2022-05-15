import  { React, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './src/Login';
import Slider from './src/preloader/Slider';
import Preloader from './src/preloader/Preloader'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Preloader/>
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