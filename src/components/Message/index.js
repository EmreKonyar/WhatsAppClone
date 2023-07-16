import { View, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Message = ({message}) => {

    const isMyMessage = () => {
        return message.user.id == 'u1';
    }

  return (
    <View 
      style={[
        styles.container, 
        {
            backgroundColor: isMyMessage() ? '#DCF8C5' : 'white', 
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start'
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

//fromNow(true) When I give true, it doesn't print ago.
 //alignSelf: 'flex-start'Left-aligned suppression of messages.
const styles = StyleSheet.create({
    container:{
        margin: 5, //put a gap between messages.
        padding: 10, //It gives space to messages written on a white background from anywhere in the white background.
        borderRadius: 10,
        backgroundColor: 'white',
        maxwidth: '80%', //The maximum length a message box can take.
        //We have set shading on the message boxes from https://ethercreative.github.io/react-native-shadow-generator/ .
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    time:{
        color: 'gray',
        alignSelf: 'flex-end',//It makes the text showing the time appear on the far right of the page.
    },
})

export default Message;