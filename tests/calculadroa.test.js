const calc = require('../calculadora');

test('suma',()=>{
    expect(calc.sumar(2,3)).toBe(5);
});

test('resta',()=>{
    expect(calc.restar(5,2)).toBe(3);
});

test('multiplicacion',()=>{
    expect(calc.multiplicar(2,4)).toBe(8);
});

test('division',()=>{
    expect(calc.dividir(10,2)).toBe(5);
});