const main = require('./main');

describe('Calculos Matematicos', () => {
	it('Somando valor', () => {
		expect(main.sum(1, 2)).toEqual(3)
	});

	it('Subtraindo valor', () => {
		expect(main.min(2, 2)).toEqual(0)
	});

	it('Mutiplicando valor', () => {
		expect(main.div(2, 2)).toEqual(4)
	});

	it('Verificando se valor e uma string', () => {
		expect(main.string("string")).toBe(0)
	});
});

