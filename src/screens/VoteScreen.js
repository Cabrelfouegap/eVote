import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Modal, Pressable} from 'react-native';

const VoteScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirmer le vote pour la liste X</Text>
            <View style= {styles.modaldiv}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Annuler</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => Alert.alert('waiting ...')}
              >
                <Text style={styles.textStyle}>Confirmer</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Text style= {styles.choice}>CHOISIR LA LISTE {"\n"} A VOTER</Text>
      <Text style= {styles.list}>Listes représentées aux elections</Text>
      <View style={styles.listContainer}>
        <TouchableOpacity 
          style={[styles.card, {backgroundColor: 'rgba(80, 191, 105, 1)'}]}  
          onPress={() => setModalVisible(true)}
        >
          <View style={[styles.itemCard, {borderRadius: 9, marginLeft: 15}]}><Image source={require('../img/Presi1.png')}/></View>
          <View style={styles.itemCard}><Text style={{color: '#fff',}}>Liste Tan</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.card, {backgroundColor: 'rgba(104, 187, 227, 1)'}]} 
          onPress={() => setModalVisible(true)}
        >
          <View style={[styles.itemCard, {borderRadius: 9, marginLeft: 15}]}><Image source={require('../img/Presi2.png')}/></View>
          <View style={styles.itemCard}><Text style={{color: '#fff',}}>Liste Tan</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.card, {backgroundColor: 'rgba(242, 231, 133, 1)'}]} 
          onPress={() => setModalVisible(true)}
        >
          <View style={[styles.itemCard, {borderRadius: 9, marginLeft: 15}]}><Image source={require('../img/Presi3.png')}/></View>
          <View style={styles.itemCard}><Text style={{color: '#fff',}}>Liste Tan</Text></View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.card, {backgroundColor: 'rgba(251, 106, 106, 1)'}]} 
          onPress={() => setModalVisible(true)}
        >
          <View style={[styles.itemCard, {borderRadius: 9, marginLeft: 15}]}><Image source={require('../img/Presi3.png')}/></View>
          <View style={styles.itemCard}><Text style={{color: '#fff',}}>Liste Tan</Text></View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

let styles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    listContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
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
    itemCard: {
      flex: 1,
      color: '#fff',
    },
    button: {
      backgroundColor: 'rgba(80, 191, 105, 1)',
      width: 78,
      height: 29,
      borderRadius: 4,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000',
      marginBottom: '30%',
      marginLeft: 270,
    },

    //for modal
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modaldiv: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});
export default  VoteScreen;