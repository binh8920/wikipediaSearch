import {StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ScrollView horizontal>
      {pageNumbers.map(number => (
        <TouchableOpacity
          onPress={() => paginate(number)}
          style={styles.pageContainer}>
          <Text>{number}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: 40,
    height: 40,
  },
});
