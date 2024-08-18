import { expect, type Locator, type Page } from '@playwright/test';

export class Loginpage {
  readonly page: Page;
  readonly emailfield:Locator;
  readonly passwordfield :Locator;
  readonly submitbtninloginpage:Locator;
  readonly notificationicon:Locator;
  readonly errormessagewrongemail:Locator;
  readonly errormessagewronpassword:Locator;
  readonly registerhere:Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.emailfield = page.getByPlaceholder('Type your email here');
    this.passwordfield = page.getByPlaceholder('Type your password here');
    this.submitbtninloginpage=page.getByLabel('submit');
    this.notificationicon=page.locator('#Path_1127');
    this.errormessagewrongemail=page.getByText('No user found with that email!, Please check your email again.');
    this.errormessagewronpassword=page.getByText('That password is incorrect, try again');
    this.registerhere= page.getByText('New to gold4cards? Register here');
  }

  async loginWithEmailandPassword(email1,password1) {
    await this.page.goto('https://stg.gold4cards.com/auth/login');

    await this.emailfield.fill(email1);
    await this.passwordfield.fill(password1);

    await this.submitbtninloginpage.click();
   
  }

  async loginWithEmailandPasswordsuccessfulty() {
    await this.page.goto('https://stg.gold4cards.com/auth/login');
    await this.emailfield.fill('mostafaelhadytester+2@gmail.com');
    await this.passwordfield.fill('Mostafa2024@');
    await this.submitbtninloginpage.click();
    //await this.page.waitForURL('https://stg.gold4cards.com/') ;
    await this.page.waitForSelector('text=Offers');
  }

  async gotologinpage(){
    await this.page.goto('https://stg.gold4cards.com/auth/login')
  }



 
}

