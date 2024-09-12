import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly continueshopping:Locator;
  
  
  constructor(page: Page) {
    this.page = page;
    this.continueshopping = page.getByLabel('Continue Shopping');
  
  
  }

  async gotocartpage() {
    await this.page.goto('https://stg.gold4cards.com/cart');
  }
}
