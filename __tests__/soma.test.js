import React from 'react';
import { render} from '@testing-library/react-native';
import Doces from '../assets/pages/doces'; 

describe('Tela Doces', () => {
  
  test('deve renderizar o título corretamente', () => {
    const { getByText } = render(<Doces />);
    
    expect(getByText('Veja alguns dos nossos doces!')).toBeTruthy();
  });
  
});
