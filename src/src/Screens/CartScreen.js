import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart} from '../components/Reducer/Actions/ReducerActions';

const {width, height} = Dimensions.get('window');

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = productId => {
    dispatch(removeFromCart(productId));
  };
  return (
    <View>
      <Text style={styles.text}>Cart:</Text>
      {cartItems?.map((item, index) => (
        <View key={item.id} style={styles.container}>
          <Text style={styles.number}>{index+1}</Text>
          <Image style={styles.Images} source={{uri: item.download_url}} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleRemoveFromCart(item.id)}>
            <Text style={styles.buttonText}>REMOVE</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  Images: {
    width: width * 0.4,
    height: height * 0.2,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'purple',
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 18,
  },
  number:{
    fontSize: 18,
  }
});
