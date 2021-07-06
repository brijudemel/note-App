import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NoteForm from './src/noteForm';
import noteList from './src/noteList';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="NoteForm"
        component={NoteForm}
        options={{
          title: 'Note App',
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
      <Stack.Screen
        name="noteList"
        component={noteList}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
