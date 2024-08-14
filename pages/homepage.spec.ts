import { expect, type Locator, type Page } from '@playwright/test';

export class Homepage {
  readonly page: Page;
  readonly loginbtntop:Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.loginbtntop = page.getByLabel('login page link');
  
  }

  async gotohomepage() {
    await this.page.goto('https://gold4cards.com/');
  }

  async gotoairolapage(){
    await this.page.goto('https://stg.gold4cards.com/shop/categories/gift-cards/airalo/airalo')

  }

  async gotowallet(){
    await this.page.goto('https://stg.gold4cards.com/profile/wallets');
  }

  

 
}

