import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from './Reducer/Actions/ReducerActions';

const {width, height} = Dimensions.get('window');
const ProductItem = ({product}) => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleToggleCart = () => {
    if (!addedToCart) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product.id));
    }
    setAddedToCart(!addedToCart);
  };


  return (
    <SafeAreaView>
      <View style={styles.productItem}>
        <Image style={styles.Images} source={{uri: product.download_url}} />
        <TouchableOpacity style={styles.button} onPress={handleToggleCart}>
          <Text style={styles.buttonText}>
            {cartItems.includes(product)
              ? 'Remove from Cart'
              : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
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
});

export default connect(null, {addToCart})(ProductItem);
