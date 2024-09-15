import React from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store'; // Your RootState type
import { deleteProduct } from '../redux/slices/productSlice';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Your navigation type

type Props = StackScreenProps<RootStackParamList, 'ProductList'>;

const ProductListScreen = ({ navigation }: Props) => {
    const products = useSelector((state: RootState) => state.products.products); // Access the products array
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteProduct(id));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products} // Ensure this is an array of products
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <Text style={styles.textWidth}>{item.name}</Text>
                        <Text>${item.price}</Text>
                        <Button title="Delete" onPress={() => handleDelete(item.id)} />
                    </View>
                )}
            />
            <Button title="Add Product" onPress={() => navigation.navigate('AddProduct')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    textWidth: {
        width: '50%',
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
});

export default ProductListScreen;
