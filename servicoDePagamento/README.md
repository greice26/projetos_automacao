# Serviço de Pagamento

Módulo Node.js para registrar e consultar pagamentos via código de barras, com categorização automática por valor.

## Funcionalidades

- Registrar pagamentos com código de barras, empresa e valor
- Categorizar automaticamente como `cara` (valor > R$ 100) ou `padrão` (valor <= R$ 100)
- Consultar o último pagamento realizado

## Instalação

```bash
npm install
```

## Uso

```js
const ServicoDePagamento = require('./src/servicoDePagamento');

const servico = new ServicoDePagamento();

servico.pagar('0987-7656-3475', 'Samar', 56.87);

const ultimo = servico.consultarUltimoPagamento();
console.log(ultimo);
// { codigoBarras: '0987-7656-3475', empresa: 'Samar', valor: 56.87, categoria: 'padrão' }
```

## API

### `new ServicoDePagamento()`

Cria uma nova instância do serviço com histórico de pagamentos vazio.

### `pagar(codigoBarras, empresa, valor)`

Registra um pagamento.

| Parâmetro      | Tipo     | Descrição                        |
|----------------|----------|----------------------------------|
| `codigoBarras` | `string` | Código de barras do boleto        |
| `empresa`      | `string` | Nome da empresa beneficiária      |
| `valor`        | `number` | Valor em reais                    |

### `consultarUltimoPagamento()`

Retorna o último pagamento registrado, ou `null` se não houver nenhum.

**Retorno:**

```js
{
  codigoBarras: string,
  empresa: string,
  valor: number,
  categoria: 'cara' | 'padrão'
}
```

## Testes

```bash
npm test
```

Os testes utilizam [Mocha](https://mochajs.org/) e cobrem os cenários de categorização e consulta de pagamentos.
