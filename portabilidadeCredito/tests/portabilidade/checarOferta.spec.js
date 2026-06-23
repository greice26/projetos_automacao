const { test, expect } = require('../../fixtures/apiFixtures');
const { clientPortabilidade } = require('../../utils/envConfig');

test.describe('Checar Oferta Portabilidade de Crédito', () => {
  test('deve retornar oferta disponível para cliente elegível', async ({ portabilidadeService }) => {
    const response = await portabilidadeService.checarOferta(clientPortabilidade);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('ofertaDisponivel', true);
  });

  test('deve retornar sem oferta para cliente não elegível', async ({ portabilidadeService }) => {
    const response = await portabilidadeService.checarOferta('00000000000');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.ofertaDisponivel).toBe(false);
  });
});
