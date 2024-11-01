
function somar(a, b) {
    return a + b;
  }
  
  test('Soma Sucesso', () => {
    const result = somar(10, 5);
    expect(result).toEqual(15);
  });
  
  test('Soma Falha', () => {
    const result = somar(10, 5);
    expect(result).toEqual(5); 
  });
  