import  { React, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginToNavigation from './src/screens/LoginToNavigation';
import HomeScreen from './src/screens/HomeScreen';
import ListesElection from './src/screens/ListesElection';
import CardListe from './src/screens/extern'
import AlertVoteConfirm from './src/screens/AlertVoteConfirm';
import VoteScreen from './src/screens/VoteScreen';
import ListeView from './src/screens/ListeView';



class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginToNavigation/>
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