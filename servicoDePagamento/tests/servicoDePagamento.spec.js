const { test, expect } = require('@playwright/test');
const ServicoDePagamento = require('../src/servicoDePagamento');

test.describe('ServicoDePagamento', () => {
  let servico;

  test.beforeEach(() => {
    servico = new ServicoDePagamento();
  });

  test.describe('pagar', () => {
    test('deve armazenar um pagamento com as propriedades corretas', () => {
      servico.pagar('0987-7656-3475', 'Samar', 56.87);
      const ultimo = servico.consultarUltimoPagamento();
      expect(ultimo.codigoBarras).toBe('0987-7656-3475');
      expect(ultimo.empresa).toBe('Samar');
      expect(ultimo.valor).toBe(56.87);
    });

    test('deve definir categoria como "cara" quando valor for maior que 100', () => {
      servico.pagar('1111-2222-3333', 'Empresa A', 156.87);
      const ultimo = servico.consultarUltimoPagamento();
      expect(ultimo.categoria).toBe('cara');
    });

    test('deve definir categoria como "padrão" quando valor for menor ou igual a 100', () => {
      servico.pagar('4444-5555-6666', 'Empresa B', 56.87);
      const ultimo = servico.consultarUltimoPagamento();
      expect(ultimo.categoria).toBe('padrão');
    });

    test('deve definir categoria como "padrão" quando valor for exatamente 100', () => {
      servico.pagar('7777-8888-9999', 'Empresa C', 100);
      const ultimo = servico.consultarUltimoPagamento();
      expect(ultimo.categoria).toBe('padrão');
    });
  });

  test.describe('consultarUltimoPagamento', () => {
    test('deve retornar null quando não houver pagamentos', () => {
      expect(servico.consultarUltimoPagamento()).toBeNull();
    });

    test('deve retornar apenas o último pagamento realizado', () => {
      servico.pagar('0001-0001-0001', 'Empresa X', 50);
      servico.pagar('0002-0002-0002', 'Empresa Y', 200);
      const ultimo = servico.consultarUltimoPagamento();
      expect(ultimo.codigoBarras).toBe('0002-0002-0002');
      expect(ultimo.empresa).toBe('Empresa Y');
      expect(ultimo.valor).toBe(200);
    });

    test('deve retornar o pagamento correto após múltiplos pagamentos', () => {
      servico.pagar('AAA', 'Primeira', 30);
      servico.pagar('BBB', 'Segunda', 80);
      servico.pagar('CCC', 'Terceira', 150);
      const ultimo = servico.consultarUltimoPagamento();
      expect(ultimo.empresa).toBe('Terceira');
      expect(ultimo.categoria).toBe('cara');
    });
  });
});
