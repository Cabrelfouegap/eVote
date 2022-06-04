import  { React, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slider from './src/preloader/Slider';



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