import { expect, type Locator, type Page } from '@playwright/test';

export class homepage {
  readonly page: Page;
  readonly tocList: Locator;
  readonly loginbtntop:Locator;
  constructor(page: Page) {
    this.page = page;
    this.loginbtntop = page.getByLabel('login page link');
  
  }

  async gotohomepage() {
    await this.page.goto('https://gold4cards.com/');
  }

 
}

