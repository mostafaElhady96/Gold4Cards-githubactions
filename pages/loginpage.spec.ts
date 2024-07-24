import { expect, type Locator, type Page } from '@playwright/test';

export class Loginpage {
  readonly page: Page;
  readonly emailfield:Locator;
  readonly passwordfield :Locator;
  readonly submitbtninloginpage
  constructor(page: Page) {
    this.page = page;
    this.emailfield = page.getByPlaceholder('Type your email here');
    this.passwordfield = page.getByPlaceholder('Type your password here');
    this.submitbtninloginpage=page.getByLabel('submit');
  
  }

  async loginwithvalidcredentials() {
    await this.page.goto('https://gold4cards.com/auth/login');
    await this.emailfield.fill('mostafaelhadytester@gmail.com');
    await this.passwordfield.fill('Mostafa11223355@');
    await this.submitbtninloginpage.click();
   
  }



 
}

