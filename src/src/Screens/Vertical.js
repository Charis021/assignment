import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import {Data} from '../Data';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';

const {width, height} = Dimensions.get('window');

const Vertical = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FlatList
        keyExtractor={item => item.id}
        data={Data}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default Vertical;

const styles = StyleSheet.create({
  Images: {
    width: width - 20,
    height: height * 0.5,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});
