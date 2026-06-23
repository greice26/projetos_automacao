class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByTestId('login-page-username-input');
    this.passwordInput = page.getByTestId('login-page-password-input');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async preencherCredenciais(usuario, senha) {
    await this.usernameInput.click();
    await this.usernameInput.fill(usuario);
    await this.passwordInput.click();
    await this.passwordInput.fill(senha);
  }
}

module.exports = { LoginPage };
