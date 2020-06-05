import styled from 'styled-components/native';
import { TextMask } from 'react-native-masked-text';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 10px;
  border-radius: 4px;
  background: #fff;
  margin: 20px;
`;
export const Products = styled.View``;

export const Product = styled.View`
  margin-top: 5px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled(TextMask)`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;
export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 10px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.Text`
  background: #fff;
  font-size: 14px;
  padding: 5px;
  text-align: center;
  width: 52px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
export const ProductSubtotal = styled(TextMask)`
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  flex: 1;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;
export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;
export const TotalAmount = styled(TextMask)`
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 30px;
`;

export const Order = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  padding: 12px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;

export const EmptyOrder = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const EmptyOrderText = styled.Text`
  color: #7159c1;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 5px;
`;
