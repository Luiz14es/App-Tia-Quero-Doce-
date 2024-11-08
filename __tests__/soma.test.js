import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App'

ttest('renderiza a tela inicial e verifica se as fontes são carregadas', async () => {
  const { findByText, getByText } = render(<App />);

  const titulo = await findByText('Tia Quero Doce!'); 
  expect(titulo).toBeTruthy();


  const textElement = getByText('Tia Quero Doce!');
  expect(textElement.props.style).toContainEqual(expect.objectContaining({ fontFamily: 'Roboto' })); 

  
});