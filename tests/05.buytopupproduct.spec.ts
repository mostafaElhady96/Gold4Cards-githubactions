import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';

import { Homepage } from '../pages/homepage.spec';
import { PaymentPage } from '../pages/payment.spec';
import { Productpage } from '../pages/productpage.spec';

test('buy top up product with fawry ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  await homepage.gotoairolapage();

  await page.getByTitle('top up test automation').click();
  await page.getByPlaceholder('amount').type('1');
  await page.getByPlaceholder('username ').type('mostafa');
  
  
  const productpage=new Productpage(page);
  await productpage.addtocartWithcheckout();

  const paymentpage=new PaymentPage(page);
  await paymentpage.chooseFawryForPayment();

 // await paymentpage.payusingFawry();
  
});


test('buy top up product with wallet ', async ({ page }) => {
    const loginpage= new Loginpage(page);
    const homepage = new Homepage(page);
    await loginpage.loginWithEmailandPasswordsuccessfulty();
    await homepage.gotoairolapage();
  
    await page.getByTitle('top up test automation').click();
    await page.getByPlaceholder('amount').type('1');
    await page.getByPlaceholder('username ').type('mostafa');
    
    const productpage=new Productpage(page);
    await productpage.addtocartWithcheckout();
  
    const paymentpage=new PaymentPage(page);
    await paymentpage.choosewalletforpayment();
  });
  
  
  test.skip('buy top up product with geidea', async ({ page }) => {
    const loginpage = new Loginpage(page);
    const homepage = new Homepage(page);
  
    await loginpage.loginWithEmailandPasswordsuccessfulty();
    await homepage.gotoairolapage();
  
    await page.getByTitle('top up test automation').click();
    await page.getByPlaceholder('amount').type('1');
    await page.getByPlaceholder('username ').type('mostafa');
    
    const productpage = new Productpage(page);
    await productpage.addtocartWithcheckout();
  
  
    const paymentpage = new PaymentPage(page);
    await paymentpage.chooseGeideaforpayment();
  
    await paymentpage.payusingGeidea();
    
  });
  