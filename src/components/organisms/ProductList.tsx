import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductCard from '../molecules/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { deleteProduct } from '../../redux/slices/productSlice';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const productCards = useMemo(() => {
    return products.map(product => (
      <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} onDelete={handleDelete} />
    ));
  }, [products]);

  return <View style={styles.list}>{productCards}</View>;
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});

export default ProductList;
