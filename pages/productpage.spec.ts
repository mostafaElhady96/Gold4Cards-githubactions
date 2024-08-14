import { expect, type Locator, type Page } from '@playwright/test';

export class Productpage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;  
  }

  async addtocartWithcheckout() {
  await this.page.getByText('Add to cart').click();
  await this.page.getByText( "Go to Cart").click();
  await this.page.getByLabel('Checkout').click();
  }
}