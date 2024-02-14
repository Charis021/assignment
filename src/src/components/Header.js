import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';
import {Badge} from '@rneui/themed';
import {connect} from 'react-redux';

const Header = ({cartItems, navigation}) => {
  return (
    <View style={styles.header}>
      <Icon
        type="font-awesome"
        name="arrow-left"
        size={24}
        onPress={() => navigation.goBack()}
      />
      <View>
        <Icon
          name="shopping-cart"
          size={40}
          onPress={() => navigation.navigate('CartScreen')}
        />
        <Badge
          status="primary"
          containerStyle={styles.Badge}
          value={cartItems.length}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  Badge: {
    position: 'absolute',
    right: 0,
  },
});

export default connect(mapStateToProps)(Header);
