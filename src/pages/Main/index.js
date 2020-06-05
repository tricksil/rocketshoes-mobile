import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductList,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAdd,
  ProductAmount,
  ProductAmountText,
  ProductAddText,
} from './styles';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

export default function Main() {
  const [products, setProdudcts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      setProdudcts(response.data);
    }
    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }
  return (
    <Container>
      <ProductList
        horizontal
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductItem>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice
              type="money"
              options={{
                precision: 2,
                unit: 'R$',
              }}
              value={item.price}
            />
            <ProductAdd onPress={() => handleAddToCart(item.id)}>
              <ProductAmount>
                <Icon name="shopping-basket" size={24} color="#FFF" />
                <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
              </ProductAmount>
              <ProductAddText>ADICIONAR</ProductAddText>
            </ProductAdd>
          </ProductItem>
        )}
      />
    </Container>
  );
}
