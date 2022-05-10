import {View, StyleSheet} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const WikipediaScreen = ({route}) => {
  const pageid = route.params?.pageid;
  const url = `https://en.wikipedia.org/?curid=${pageid}`;

  return (
    <View style={styles.container}>
      <WebView source={{uri: url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WikipediaScreen;
