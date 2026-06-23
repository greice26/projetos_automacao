require('dotenv').config();

const required = ['BASE_URL', 'BASIC_HLG', 'BASIC_APIM', 'ENV'];

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Variável de ambiente obrigatória ausente: ${key}`);
  }
}

module.exports = {
  env: process.env.ENV,
  baseUrl: process.env.BASE_URL,
  basicHlg: process.env.BASIC_HLG,
  basicApim: process.env.BASIC_APIM,
  basicTopaz: process.env.BASIC_TOPAZ,
  clientPortabilidade: process.env.CLIENT_PORTABILIDADE_PASSIVA,
  userPortabilidade: process.env.USER_PORTABILIDADE_PASSIVA,
  passwordPortabilidade: process.env.PASSWORD_PORTABILIDADE_PASSIVA,
  domain: process.env.DOMAIN,
};
