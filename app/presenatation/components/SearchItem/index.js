import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Pagination from '../Pagination';
import SearchBar from '../SearchBar';

const SearchItem = props => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);
  const [text, setText] = useState('developer');

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataSource.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => getData(text), [text]);

  const getData = keyword => {
    console.log('getData');
    setLoading(true);
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${keyword}&srlimit=500&sroffset=${offset}`,
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        setOffset(offset + 1);
        setDataSource(responseJson.query.search);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={dataSource.length}
          paginate={paginate}
        />
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.snippet}</Text>
        </View>
        <TouchableOpacity
          style={styles.goButton}
          onPress={() =>
            props.navigation.navigate('Wikipedia', {pageid: item.pageid})
          }>
          <Text>{'Go'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onChangeText = text => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={currentPosts}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={
          <SearchBar text={text} onChangeText={onChangeText} />
        }
      />
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
  textContainer: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    position: 'relative',
  },
  goButton: {
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    width: 60,
    height: 40,
    position: 'absolute',
    left: 320,
    top: 5,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  footerContainer: {
    marginTop: 10,
    marginBottom: 200,
  },
});
