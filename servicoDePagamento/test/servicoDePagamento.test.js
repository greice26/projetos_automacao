const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {
  let servico;

  beforeEach(() => {
    servico = new ServicoDePagamento();
  });

  describe('pagar', () => {
    it('deve armazenar um pagamento com as propriedades corretas', () => {
      servico.pagar('0987-7656-3475', 'Samar', 56.87);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.codigoBarras, '0987-7656-3475');
      assert.strictEqual(ultimo.empresa, 'Samar');
      assert.strictEqual(ultimo.valor, 56.87);
    });

    it('deve definir categoria como "cara" quando valor for maior que 100', () => {
      servico.pagar('1111-2222-3333', 'Empresa A', 156.87);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.categoria, 'cara');
    });

    it('deve definir categoria como "padrão" quando valor for menor ou igual a 100', () => {
      servico.pagar('4444-5555-6666', 'Empresa B', 56.87);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.categoria, 'padrão');
    });

    it('deve definir categoria como "padrão" quando valor for exatamente 100', () => {
      servico.pagar('7777-8888-9999', 'Empresa C', 100);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.categoria, 'padrão');
    });
  });

  describe('consultarUltimoPagamento', () => {
    it('deve retornar null quando não houver pagamentos', () => {
      assert.strictEqual(servico.consultarUltimoPagamento(), null);
    });

    it('deve retornar apenas o último pagamento realizado', () => {
      servico.pagar('0001-0001-0001', 'Empresa X', 50);
      servico.pagar('0002-0002-0002', 'Empresa Y', 200);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.codigoBarras, '0002-0002-0002');
      assert.strictEqual(ultimo.empresa, 'Empresa Y');
      assert.strictEqual(ultimo.valor, 200);
    });

    it('deve retornar o pagamento correto após múltiplos pagamentos', () => {
      servico.pagar('AAA', 'Primeira', 30);
      servico.pagar('BBB', 'Segunda', 80);
      servico.pagar('CCC', 'Terceira', 150);
      const ultimo = servico.consultarUltimoPagamento();
      assert.strictEqual(ultimo.empresa, 'Terceira');
      assert.strictEqual(ultimo.categoria, 'cara');
    });
  });
});
