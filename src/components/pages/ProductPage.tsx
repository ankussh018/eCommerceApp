import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import ProductList from '../organisms/ProductList';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/productSlice';
import uuid from 'react-native-uuid';

const ProductPage: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (name && price) {
      dispatch(addProduct({ id: uuid.v4(), name, price: parseFloat(price) }));
      setName('');
      setPrice('');
    }
  };

  return (
    <View style={styles.container}>
      <Input value={name} onChangeText={setName} placeholder="Product Name" />
      <Input value={price} onChangeText={setPrice} placeholder="Price" />
      <Button title="Add Product" onPress={handleAddProduct} />
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ProductPage;
