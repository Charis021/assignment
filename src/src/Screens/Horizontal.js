import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';
import {Data} from '../Data';

const {width, height} = Dimensions.get('window');
const Horizontal = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={Data}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View>
            <Image style={styles.Images} source={{uri: item.download_url}} />
            <Text style={styles.text}>{item.author}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Horizontal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  Images: {
    width: width - 30,
    height: height * 0.5,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});
