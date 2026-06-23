const { test: base, expect } = require('@playwright/test');
const { PortabilidadeService } = require('../services/PortabilidadeService');
const { RefinService } = require('../services/RefinService');

const test = base.extend({
  portabilidadeService: async ({ request }, use) => {
    await use(new PortabilidadeService(request));
  },
  refinService: async ({ request }, use) => {
    await use(new RefinService(request));
  },
});

module.exports = { test, expect };
