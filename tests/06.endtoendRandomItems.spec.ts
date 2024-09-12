import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';
import { PaymentPage } from '../pages/payment.spec';


test('buy $10 PayPal with fawry ', async ({ page }) => {  
    const loginpage= new Loginpage(page);
    await loginpage.loginWithEmailandPasswordsuccessfulty();

    await page.getByText('$10 PayPal').click();
    await page.getByText('Add to cart').click();
    await page.getByText('proceed to checkout').click();
    await page.getByLabel('Fawry').click();
    await page.getByLabel('Pay now').click();
    await page.getByLabel('Proceed with payment').click();

    const paymentpage =new PaymentPage(page);
   // await paymentpage.payusingFawry();
   
  });

  test('buy test voucher with fawry', async ({ page }) => {  
    const loginpage= new Loginpage(page);
    await loginpage.loginWithEmailandPasswordsuccessfulty();
    await page.getByText('TestVoucher').first().click();
    await page.getByText('Add to cart').click();
    await page.getByText('proceed to checkout').click();
    await page.getByLabel('Fawry').click();
    await page.getByLabel('Pay now').click();
    await page.getByLabel('Proceed with payment').click();

    const paymentpage =new PaymentPage(page);
    //await paymentpage.payusingFawry();
  });