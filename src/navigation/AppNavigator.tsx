// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from '../screens/ProductListScreen';
import AddProductScreen from '../screens/AddProductScreen';


export type RootStackParamList = {
    ProductList: undefined;
    AddProduct: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="AddProduct" component={AddProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppNavigator;
