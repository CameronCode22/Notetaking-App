import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NoteTakingInput } from './components/NoteTakingInput';


export default function App() {
  const [shouldCreateNewNote, setShouldCreateNewNote] = useState<boolean>(false);
  const saveNote = async (text: string) => {
    await AsyncStorage.setItem('note', text);
    setShouldCreateNewNote(false);
  }

  return ( 
    <View style={styles.container}>
      <StatusBar style="auto" />
    {shouldCreateNewNote ? (<NoteTakingInput saveNote={saveNote} />):
    <>
    <Text>Home Screen</Text>
    <Button 
    /*This part waits for the New Note button press and sets the switch to true */
    onPress={() => setShouldCreateNewNote(true)} 
    title='New Note'
    />
    </>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
