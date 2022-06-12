
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ToastAndroid,} from 'react-native';
// import Navigation from '../Navigation/Navigation';
import CardElection from './ExternListesElection';
// import { useNavigation } from '@react-navigation/native';




import React, {Component} from "react";
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView} from "react-native";
import "firebase/compat/database"; 
import Firebase from "../firebase";
import CardListe from "./extern";


export default class ListesElection extends Component{
    constructor(props)
    {
        super(props)
        {
            this.state = {
                election: {},  
                cleElection: []
            }
        }
    }
   
    componentDidMount() {
        Firebase.database()
        .ref("election")
        .once('value', (querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let AllElection = {...data};

            this.setState({
                election:AllElection, 
                cleElection: Object.keys(AllElection)
            })
        })
    }
        
    render(){
        const {election, cleElection, AllElection} = this.state
        return(
            <ScrollView style={styles.container}>
                {/* <View style={styles.header}> */}
                    <Text style= {styles.choice}>CHOISIR L'ELECTION EN COURS</Text>
                    {/* <Text style= {styles.list}>Listes représentées aux elections</Text> */}
                {/* </View> */}
                    <View style={styles.listContainer}>
                        {cleElection.length >0   ? (
                            
                                cleElection.map((key) => (                                
                                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Vote')}>
                                      <CardElection  key={key} AllElection={election[key]} id={key} />
                                    </TouchableOpacity>                                                                 
                                ))
                            ) : (
                                <Text style= {[styles.list, {Color: 'red', fontSize: 18}]}>Aucune election !</Text>          
                            )
                        }       
                    </View>
                <View style={styles.listcontact}></View>
            </ScrollView>
        ); 
    }; 
}
const styles = StyleSheet.create({

    
    container: {
        flex: 1,   
    },
    listContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    choice: {
      fontWeight: '500',
      fontSize: 32,
      lineHeight: 48,
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 40,
    },
    list: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 17,
      textAlign: 'center',
      marginBottom: 30
    },
    card: {
        width: 150,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 20,
        alignSelf: 'center'
    },
})




// const ListesElection = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//         <Text style= {styles.welcome}>BIENVENUE AUX ELECTIONS DE L’AE</Text>
//         <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Vote')}>
//           <CardElection/>
//         </TouchableOpacity>     
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'rgba(80, 191, 105, 1)',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 20,
//   },
//   title: {
//     fontSize: 32,
//     alignSelf: 'center',
    
//   },
//   titleStyle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 10,
//     color: '#fff',
//   },
// });

// export default ListesElection;

// Make Swipe Button in React Native for Android and iOS
// https://aboutreact.com/make-swipe-button-in-react-native-for-android-and-ios/

// import React in our code
// import React from 'react';

// import all the components we are going to use
// import {
//   SafeAreaView,
//   View,
//   Text,
//   ToastAndroid,
//   StyleSheet,
// } from 'react-native';

// import SwipeButton from 'rn-swipe-button';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleStyle}>
//           Example of React Native Swipe Button
//         </Text>
//         <SwipeButton
//           disabled={false}
//           //disable the button by doing true (Optional)
//           swipeSuccessThreshold={70}
//           height={45}
//           //height of the button (Optional)
//           width={330}
//           //width of the button (Optional)
//           title="Swipe to Submit"
//           //Text inside the button (Optional)
//           //thumbIconImageSource={thumbIcon}
//           //You can also set your own icon for the button (Optional)
//           onSwipeSuccess={() => {
//             alert('Submitted Successfully!');
//           }}
//           //After the completion of swipe (Optional)
//           railFillBackgroundColor="#e688a1" //(Optional)
//           railFillBorderColor="#e688ff" //(Optional)
//           thumbIconBackgroundColor="#ed9a73" //(Optional)
//           thumbIconBorderColor="#ed9aff" //(Optional)
//           railBackgroundColor="#bbeaa6" //(Optional)
//           railBorderColor="#bbeaff" //(Optional)
//         />
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   titleStyle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 10,
//   },
// });
