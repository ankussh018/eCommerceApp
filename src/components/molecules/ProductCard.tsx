import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../atoms/Button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  onDelete: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, onDelete }) => {
  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <View style={styles.card}>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default ProductCard;
