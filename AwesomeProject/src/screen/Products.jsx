import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../store/slices/productSlice';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // const selector=useSelector()
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const products = useSelector(state => state?.products.data.products);
  const status = useEffect(state => state?.products.status);
  console.log(status);
  console.log(products);
  const fetchMoreProduct = () => {
    setPage(page + 1);
  };
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => {
          return <></>;
        }}
        data={products}
        renderItem={item => <ProductCard item={item} />}
        numColumns={2}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchMoreProduct}
        onEndReachedThreshold={0}></FlatList>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
