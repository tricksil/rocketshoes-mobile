import styled from 'styled-components/native';
import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #141419;
  flex-direction: row;
`;
export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
export const ShoppingContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;
export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
