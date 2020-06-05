import React from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyOrder,
  EmptyOrderText,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: product.price * product.amount,
    }))
  );

  const total = useSelector((state) =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.amount * product.price;
    }, 0)
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Products>
            {cart.map((product) => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice
                      type="money"
                      options={{
                        precision: 2,
                        unit: 'R$',
                      }}
                      value={product.price}
                    />
                  </ProductDetails>
                  <ProductDelete
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon name="delete-forever" size={24} color="#7159c1" />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={24}
                      color="#7159c1"
                    />
                  </ProductControlButton>
                  <ProductAmount>{String(product.amount)}</ProductAmount>
                  <ProductControlButton onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={24} color="#7159c1" />
                  </ProductControlButton>
                  <ProductSubtotal
                    type="money"
                    options={{
                      precision: 2,
                      unit: 'R$',
                    }}
                    value={product.subtotal}
                  />
                </ProductControls>
              </Product>
            ))}
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount
              type="money"
              options={{
                precision: 2,
                unit: 'R$',
              }}
              value={total}
            />
            <Order>
              <OrderText>FINALIZAR</OrderText>
            </Order>
          </TotalContainer>
        </ScrollView>
      ) : (
        <EmptyOrder>
          <Icon name="remove-shopping-cart" size={24} color="#7159c1" />
          <EmptyOrderText>Seu carrinho está vázio</EmptyOrderText>
        </EmptyOrder>
      )}
    </Container>
  );
}
