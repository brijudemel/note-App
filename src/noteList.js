import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {deleteNote} from './actions/note';
const noteList = () => {
  const dispatch = useDispatch();
  const deleteCurrent = key => dispatch(deleteNote(key));
  const notes = useSelector(state => state.noteReducer.noteList);
  return (
    <FlatList
      style={styles.listContainer}
      data={notes}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={data => (
        <ListItem
          title={data.item.name}
          bottomDivider
          rightIcon={
            <Icon
              name="delete"
              size={36}
              onPress={() => deleteCurrent(data.item.key)}
            />
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16,
  },
  listText: {
    fontSize: 30,
  },
});

export default noteList;
