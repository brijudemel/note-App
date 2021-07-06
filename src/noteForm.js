import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addNote} from './actions/note';
const noteForm = ({navigation}) => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const submitNote = note => dispatch(addNote(note));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <TextInput
        value={note}
        placeholder="Type Note"
        style={styles.noteInput}
        onChangeText={note => setNote(note)}
      />
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => {
          submitNote(note);
          setNote('');
        }}>
        <Text style={{fontSize: 22, color: '#5fc9f8'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => navigation.navigate('noteList')}>
        <Text style={{fontSize: 22, color: 'white'}}>Go to NoteList</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white',
  },
  noteInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  },
});

export default noteForm;
