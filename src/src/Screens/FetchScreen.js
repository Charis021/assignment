import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/common/Header';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../components/Redux-Toolkit/getData';
import {ActivityIndicator} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const FetchScreen = ({navigation}) => {
  const {loading, photos, error} = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(photos, loading);

  return (
    <View>
      <Header
        title={'USER LIST'}
        navigation={navigation}
        showBackButton={true}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={{fontSize: 24, color: 'black', textAlign: 'center'}}>
          {error.message}
        </Text>
      ) : (
        <FlatList
          data={photos[0]}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Text style={{fontSize: 24, color: 'black'}}>{item.author}</Text>
              <Image style={styles.Images} source={{uri: item.download_url}} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default FetchScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  Images: {
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 10,
  },
});
