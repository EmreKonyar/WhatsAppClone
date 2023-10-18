import React from 'react'
import ChatScreen from '../screens/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import ContactsScreen from '../screens/ContactsScreen';

const Stack = createNativeStackNavigator();
//HeaderShown false ile çift başlık sorunundan kurtulduk.
const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: 'whitesmoke',}, 
            headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name='Home' component={MainTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name='Chat' component={ChatScreen}/>
            <Stack.Screen name='Contacts' component={ContactsScreen}/>
        </Stack.Navigator>   
    </NavigationContainer>
  );
};

export default Navigator;