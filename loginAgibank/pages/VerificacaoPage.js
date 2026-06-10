class VerificacaoPage {
  constructor(page) {
    this.page = page;
    this.codigoInput = page.getByRole('textbox', { name: 'Código de verificação' });
    this.verificarButton = page.getByRole('button', { name: 'Verificar' });
  }

  async preencherCodigo(codigo) {
    await this.codigoInput.click();
    await this.codigoInput.fill(codigo);
    await this.codigoInput.press('Enter');
  }

  async clicarVerificar() {
    await this.verificarButton.click();
  }
}

module.exports = { VerificacaoPage };
