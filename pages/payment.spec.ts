import { expect, type Locator, type Page } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  readonly fawrypaymentgetway:Locator;
  readonly couponplaceholder:Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.fawrypaymentgetway = page.getByLabel('Fawry');
    this.couponplaceholder=page.getByPlaceholder('Type your Coupon here');
  }

  async chooseFawryForPayment() {
  await this.page.getByLabel('Fawry').click();
  await this.page.getByLabel('Pay now').click();
  await this.page.getByLabel('Proceed with payment').click();
  
  }

  async chooseGeideaforpayment(){
    await this.page.getByLabel('Geidea').click();
    await this.page.getByLabel('Pay now').click();
    await this.page.getByLabel('Proceed with payment').click();
    
  }

  async choosewalletforpayment(){
    
    await this.page.getByRole('button', { name: 'GOLD4CARD wallet' }).click();
    await this.page.getByLabel('Gold Wallet').click();
    await this.page.getByLabel('Pay now').click();
    await this.page.getByLabel('Proceed with payment').click();
    await this.page.getByLabel('order page link').click();
  
    }

  
  async payusingFawry() {
    await this.page.getByRole('button', { name: 'استمر' }).click();  
    await this.page.getByLabel('رقم الكارت *').type('4242424242424242');
    await this.page.getByPlaceholder('mm/yy').fill('11/25');
    await this.page.getByLabel('الرقم السري *').fill('123');
    await this.page.getByLabel('اسم حامل الكارت *').fill('test');
    await this.page.getByRole('button', { name: 'استمر' }).click();
    await this.page.getByRole('button', { name: 'تأكيد الدفع' }).click();
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.getByLabel('order page link').click();
  }

  async payusingGeidea(){
    await this.page.getByPlaceholder('1234 1234 1234').type('4440000009900010');
    await this.page.getByPlaceholder('MM/YY').type('0139');
    await this.page.getByPlaceholder('123', { exact: true }).type('100');
    await this.page.locator('input[name="owner"]').type('automation user');
    await this.page.getByRole('button', { name: 'Pay' }).click();
    await this.page.frameLocator('iframe[name="challengeFrame"]').getByRole('button', { name: 'Submit' }).click();
  }




}