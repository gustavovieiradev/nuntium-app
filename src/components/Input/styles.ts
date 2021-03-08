import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #F3F4F6;
  flex-direction: row;
  align-items: center;
  padding: 16px;  
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#7C82A1',
})`
  font-family: 'OpenSans_600SemiBold';
  width: 100%;
  font-size: 16px;
`;