import { View, Text, FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

const ChatsScreen = () => {
  return (
    <FlatList 
      data={chats}
      renderItem={({item}) => < ChatListItem chat={item}/>}
      style={{backgroundColor: 'white'}}
    />
  )
}


//FlatList takes two mandatory parameters, one is data and the other is renderItem to learn how to render data.
export default ChatsScreen