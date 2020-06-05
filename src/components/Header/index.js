import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import {
  Wrapper,
  Container,
  Logo,
  ShoppingContainer,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Logo />
        </TouchableOpacity>

        <ShoppingContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <ItemCount>{String(cartSize)}</ItemCount>
        </ShoppingContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
