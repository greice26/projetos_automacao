const { test, expect } = require('../../fixtures/apiFixtures');
const { clientPortabilidade, userPortabilidade } = require('../../utils/envConfig');

test.describe('Verificar Refin Preventivo Consignado', () => {
  test('deve efetivar com sucesso', async ({ refinService }) => {
    const payload = {
      cpf: clientPortabilidade,
      usuario: userPortabilidade,
    };

    const response = await refinService.verificarRefin(payload);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBe('EFETIVADO');
  });

  test('deve efetivar com extinção de cota', async ({ refinService }) => {
    const payload = {
      cpf: clientPortabilidade,
      usuario: userPortabilidade,
      extincaoCota: true,
    };

    const response = await refinService.verificarRefin(payload);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBe('EFETIVADO');
  });
});
