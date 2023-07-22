import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import {AntDesign, MaterialIcons} from '@expo/vector-icons';

const InputBox = () => {

    const [newMessage, setNewMessage] = useState('')

    const onSend = () => {
        console.warn('Sending a new message', newMessage);

        setNewMessage('');
    }

  return (
    <View style={styles.container}>
      <AntDesign name='plus' size={20} color='royalblue'/> 
      
      <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder='type your message...'/>

      <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center' //We have centered the + sign.
    },
    input:{
        flex: 1, //It just leaves room for the rest of its size and takes up everything that's left.
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal:10,
        marginHorizontal:10,
        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
    },
    send:{
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden', //There are cases where the Send button does not work on the image when we give the borderRadius. We used it to solve this problem.
    },
})

export default InputBox

//https://icons.expo.fyi/Index Icons taken from here.