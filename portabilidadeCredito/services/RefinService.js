const { BaseService } = require('./BaseService');
const { basicHlg, baseUrl } = require('../utils/envConfig');

class RefinService extends BaseService {
  constructor(request) {
    super(request, basicHlg);
    this.url = `${baseUrl}/refin/preventivo`;
  }

  checarOferta(cpf, subCode) {
    return this.get(`${this.url}/checar-oferta`, { cpf, subCode });
  }

  verificarRefin(payload) {
    return this.post(`${this.url}/verificar`, payload);
  }
}

module.exports = { RefinService };
