import styled from 'styled-components/native';
import { TextMask } from 'react-native-masked-text';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
  margin-left: 20px;
`;

export const ProductItem = styled.View`
  background: #fff;
  width: 220px;
  margin-right: 20px;
  border-radius: 4px;
  padding: 10px;
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;
export const ProductPrice = styled(TextMask)`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const ProductAdd = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAddText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
