import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({title, navigation, showBackButton}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      {showBackButton ? (
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#BC8F8F',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});

export default Header;
