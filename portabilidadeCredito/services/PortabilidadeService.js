const { BaseService } = require('./BaseService');
const { basicHlg, baseUrl } = require('../utils/envConfig');

class PortabilidadeService extends BaseService {
  constructor(request) {
    super(request, basicHlg);
    this.url = `${baseUrl}/portabilidade/credito`;
  }

  checarOferta(cpf) {
    return this.get(`${this.url}/checar-oferta`, { cpf });
  }

  verificarCredito(payload) {
    return this.post(`${this.url}/verificar`, payload);
  }
}

module.exports = { PortabilidadeService };
