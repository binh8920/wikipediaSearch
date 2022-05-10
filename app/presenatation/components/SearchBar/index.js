import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

const SearchBar = props => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Searching"
        value={props.text}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    marginHorizontal: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'lightgray',
  },
});
