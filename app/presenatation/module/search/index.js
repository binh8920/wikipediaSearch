import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {SearchItem} from '../../components';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <SearchItem navigation={navigation} />
    </SafeAreaView>
  );
};

export default SearchScreen;
