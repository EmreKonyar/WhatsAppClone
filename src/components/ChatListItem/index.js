import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ChatListItem = ({chat}) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: chat.user.image}}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text 
          style={styles.name}
          numberOfLines={1}
          >
          {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>
        
        <Text 
        style={styles.subTitle}
        numberOfLines={1}
        >
        {chat.lastMessage.text}
        </Text>
      </View>
    </View>
        
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
    content:{
        flex: 1,//
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray',
        //Allow us to put a gray line under the content and allow us to give it the smallest possible value.
    },
    row:{
        flexDirection: 'row', //We put the name and the time on a same row.
        marginBottom: 5, //We put a gap between name and whatever comes under the image.
    },
    name:{
        flex: 1, //The name used all the space left, only enough space for the time, and the time reached the far right
        fontWeight: 'bold', //We thickened the font of the text.

    },
    subTitle:{
        color: 'gray', //We changed color.
    },
})

export default ChatListItem
