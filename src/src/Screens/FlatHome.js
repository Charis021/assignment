import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const FlatHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          color: 'black',
        }}>
        Choose type of your FlatList:
      </Text>
      <Button
        mode="contained"
        style={{marginVertical: 10}}
        onPress={() => navigation.navigate('Horizontal')}>
        Horizontal
      </Button>
      <Button
        mode="contained"
        style={{marginVertical: 10}}
        onPress={() => navigation.navigate('Vertical')}>
        Vertical
      </Button>
      <Button
        mode="contained"
        style={{marginVertical: 10}}
        onPress={() => navigation.navigate('FetchScreen')}>
        Fetch Screen
      </Button>
    </View>
  );
};

export default FlatHome;

const styles = StyleSheet.create({
  container: {
    margin: 80,
  },
});
