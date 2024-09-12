import { expect, type Locator, type Page } from '@playwright/test';

export class Registerpage {
  readonly page: Page;
  readonly termsandconditions: Locator;
  readonly alreadyamember: Locator;
  readonly newEmail: Locator;
  readonly registerSubmit:Locator;

  constructor(page: Page) {
    this.page = page;
   // this.privacyandpolicy = page.locator('#Privacy\\ Policy\\ \\&\\ Terms\\ of\\ Service');
    this.newEmail=page.getByPlaceholder('Type your email here')
    this.termsandconditions = page.getByLabel('I agree to');
    this.alreadyamember=page.getByText('Already a member! Login here');
    this.registerSubmit=page.getByLabel('submit');
  }

  async gotoRegisterpage(){
    this.page.goto('https://stg.gold4cards.com/auth/register');
  }

  async typecredentialsofnewemail(firstname,lastname){
    await  this.page.getByPlaceholder('Type your first name here').type(firstname);
    await this.page.getByPlaceholder('Type your last name here').type(lastname);
   
    await this.page.getByPlaceholder('Type your password here').type('Mostafa2024@');
    await this.page.getByPlaceholder('Type your confirm password').type('Mostafa2024@');
    
    await this.page.getByPlaceholder('country').type('egypt');
    await this.page.getByText('egypt').click();
    await this.page.getByPlaceholder('Pick one').click();
    await this.page.getByRole('option', { name: 'EUR' }).click();
    await this.page.getByPlaceholder('Type your date here').type('09151996');
    await this.page.getByPlaceholder('Enter your phone number').type('1096407458');
    await this.page.getByLabel('save').click();

  }


 
}
