import { expect, type Locator, type Page } from '@playwright/test';

export class Registerpage {
  readonly page: Page;
  readonly privacyandpolicy: Locator;
  readonly alreadyamember: Locator;
  constructor(page: Page) {
    this.page = page;
    this.privacyandpolicy = page.locator('#Privacy\\ Policy\\ \\&\\ Terms\\ of\\ Service');
    this.alreadyamember=page.getByText('Already a member! Login here');
  
  }


 
}
