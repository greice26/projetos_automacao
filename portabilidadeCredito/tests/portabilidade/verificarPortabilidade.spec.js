const { test, expect } = require('../../fixtures/apiFixtures');
const { clientPortabilidade, userPortabilidade } = require('../../utils/envConfig');

test.describe('Verificar Portabilidade de Crédito - Análise Mesa', () => {
  test('sucesso com um contrato', async ({ portabilidadeService }) => {
    const payload = {
      cpf: clientPortabilidade,
      usuario: userPortabilidade,
    };

    const response = await portabilidadeService.verificarCredito(payload);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBe('ANALISE_MESA');
  });

  test('sucesso com dois contratos', async ({ portabilidadeService }) => {
    const payload = {
      cpf: clientPortabilidade,
      usuario: userPortabilidade,
      quantidadeContratos: 2,
    };

    const response = await portabilidadeService.verificarCredito(payload);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBe('ANALISE_MESA');
  });
});
