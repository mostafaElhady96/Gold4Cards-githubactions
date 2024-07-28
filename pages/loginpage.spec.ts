import { expect, type Locator, type Page } from '@playwright/test';

export class Loginpage {
  readonly page: Page;
  readonly emailfield:Locator;
  readonly passwordfield :Locator;
  readonly submitbtninloginpage:Locator;
  readonly notificationicon:Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailfield = page.getByPlaceholder('Type your email here');
    this.passwordfield = page.getByPlaceholder('Type your password here');
    this.submitbtninloginpage=page.getByLabel('submit');
    this.notificationicon=page.locator('#Path_1127');
  
  }

  async loginwithvalidcredentials(validemail,validpassword) {
    await this.page.goto('https://gold4cards.com/auth/login');
   // await this.emailfield.fill('mostafaelhadytester@gmail.com');
    await this.emailfield.fill(validemail);
   // await this.passwordfield.fill('Mostafa11223355@');
    await this.passwordfield.fill(validpassword);
    await this.submitbtninloginpage.click();
   
  }



 
}

