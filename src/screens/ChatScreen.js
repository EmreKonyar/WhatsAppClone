import { ImageBackground, StyleSheet,FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import bg from '../../assets/images/BG.png'
import Message from '../components/Message'
import messages from '../../assets/data/messages.json';
import InputBox from '../components/InputBox';
const ChatScreen = () => {
  return (
    
      <ImageBackground
      source={bg}
      style={StyleSheet.bg}
      >
        <FlatList 
          data={messages}
          renderItem={({item}) => <Message message={item}/>}
          style={styles.list}
          inverted
        /> 
        <InputBox />
      </ImageBackground>  
    
  )
}

//inverted will allow us to print the list in reverse.
const styles = StyleSheet.create({
    bg:{
        flex: 1,
    },
    list:{
      padding: 10,
      
    },
})

export default ChatScreen