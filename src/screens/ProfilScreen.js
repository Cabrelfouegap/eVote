import React , {Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Firebase from '../firebase';

export default class ProfilScreen  extends Component {
  constructor(props)
  {
      super(props)
      this.state = {
          utilisateurs: {}

      }
  }
  componentDidMount() {
      Firebase.database()
      .ref("utilisateurs")
      .once('value', (querySnapShot) => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let AllUsers = {...data};

          this.setState({
              utilisateurs:AllUsers, 
          })
      })
  }
  password = () => {
          this.props.navigation.navigate("confirm2")
  }
  email = () => {
    this.props.navigation.navigate("confirm3")
}

  render()
  {  
    const {utilisateurs} = this.state
  return (
    <View style={styles.container}>
      <Image source={require('../img/Avatar.png')} style={styles.avatar} />
      <Text style={styles.text}>{}</Text>
      <Text style={styles.text}>Nom:{utilisateurs.nom}</Text>
      <Text style={styles.text}>Prenom:{utilisateurs.prenom}</Text>
      <Text style={styles.text}>matricule:{utilisateurs.matricule}</Text>
      <Text style={styles.text}>email:{utilisateurs.email}</Text>
      <Text></Text>
      <TouchableOpacity style = {styles.change} onPress = {() => this.password()} >
 
          <Text style = {{color:"white"}} >Changer le mot de passe ?</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style = {styles.change} onPress = {() => this.email()} >
 
 <Text style = {{color:"white"}} >Changer l'adresse mail?</Text>
</TouchableOpacity>
    </View>
  );
}
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

    }, 
    change: 
    {
      backgroundColor: '#5f9ea0',
      width: 211,
      height: 37,
      borderRadius: 30,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000',
    
      
    }
});
