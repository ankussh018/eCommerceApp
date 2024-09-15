// src/screens/AddProductScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/slices/productSlice';
import uuid from 'react-native-uuid';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = StackScreenProps<RootStackParamList, 'AddProduct'>;

const AddProductScreen = ({ navigation }: Props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        if (name && price) {
            dispatch(addProduct({ id: uuid.v4(), name, price: parseFloat(price) }));
            navigation.goBack();  // Go back to ProductListScreen after adding
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Product Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="Product Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                style={styles.input}
            />
            <Button title="Save Product" onPress={handleAddProduct} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
    },
});

export default AddProductScreen;
