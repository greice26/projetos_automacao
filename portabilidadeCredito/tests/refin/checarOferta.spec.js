const { test, expect } = require('../../fixtures/apiFixtures');
const { clientPortabilidade } = require('../../utils/envConfig');

test.describe('Checar Oferta Refin Preventivo Consignado - Sub Code 6', () => {
  test('deve retornar oferta de refin preventivo disponível', async ({ refinService }) => {
    const response = await refinService.checarOferta(clientPortabilidade, 6);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('ofertaDisponivel', true);
  });
});
