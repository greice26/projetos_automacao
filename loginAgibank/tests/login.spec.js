const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { VerificacaoPage } = require('../pages/VerificacaoPage');

const LOGIN_URL =
  'https://zis-hom.agibank.com.br/authenticationendpoint/login.do?client_id=yed3SvLX11PyeF%2FVGE57Y3KLxAzka&commonAuthColo';
const VERIFICACAO_URL =
  'https://bancosagibank--hlg.sandbox.my.salesforce.com/ui/identity/verification/method/SmsVerificationFinishUI/e';
const HOME_URL =
  'https://bancosagibank--hlg.sandbox.lightning.force.com/lightning/page/home';

test('login Agibank com verificação SMS', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const verificacaoPage = new VerificacaoPage(page);

  await loginPage.goto(LOGIN_URL);
  await loginPage.preencherCredenciais('greice.kelly', '1020');

  await page.goto(VERIFICACAO_URL);

  await verificacaoPage.preencherCodigo('603822');
  await verificacaoPage.clicarVerificar();

  await page.goto(HOME_URL);
  await expect(page).toHaveURL(HOME_URL);
});
