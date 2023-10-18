import { Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ContactListItem = ({user}) => {

  const navigation = useNavigation();
//navigate e eklediğimiz parametreler ile tıkladığımız chatin bilgilerini gönderiyoruz. ChatScreen de route ile bu bilgileri çekiyoruz.
  return (
    <Pressable 
      onPress={() => {}}
      style={styles.container}
    >
      <Image 
        source={{uri: user.image}}
        style={styles.image}
      />
      <Text 
        style={styles.name}
        numberOfLines={1}
      >
        {user.name}
      </Text>
    </Pressable>
        
  )
}
/*
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
{dayjs(chat.lastMessage.createdAt).fromNow(true)}
While stretching the last messages sent from the backend, they come in a different format. We write the above 4 lines to process it.
With numberOfLines={1} ile we can arrange the maximum line that we can see on the screen.
*/

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row', //It puts the children that it contain on the same row.  
      marginHorizontal: 10, //It puts a gap horizontally.
      marginVertical: 5,//It puts a gap vertically.
      height: 70
    },
    image:{
        width: 60, //Arrange the horizontal size.
        height: 60, //Arrange the vertical size.
        borderRadius: 30, //Allows us to round the corners of the content.
        marginRight: 10, //It put a space between whatever comes to the right of the image.
    },
    name:{
        fontWeight: 'bold', //We thickened the font of the text.

    },
})

export default ContactListItem;
