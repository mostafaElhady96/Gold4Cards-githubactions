import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';
import { Registerpage } from '../pages/Registerpage.spec';
import { Homepage } from '../pages/homepage.spec';
import { PaymentPage } from '../pages/payment.spec';
import { Productpage } from '../pages/productpage.spec';

test('buy range product with fawry ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  await homepage.gotoairolapage();

  await page.getByTitle('range test automation').click();
  await page.getByPlaceholder('Enter the card value').fill('1');
  
  const productpage=new Productpage(page);
  await productpage.addtocartWithcheckout();

  const paymentpage=new PaymentPage(page);
  await paymentpage.chooseFawryForPayment();

  await paymentpage.payusingFawry();
  
});


test('buy range product with wallet ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  await homepage.gotoairolapage();

  await page.getByTitle('range test automation').click();
  await page.getByPlaceholder('Enter the card value').fill('2');
  
  const productpage=new Productpage(page);
  await productpage.addtocartWithcheckout();

  const paymentpage=new PaymentPage(page);
  await paymentpage.choosewalletforpayment();
});


test('buy range product with geidea', async ({ page }) => {
  const loginpage = new Loginpage(page);
  const homepage = new Homepage(page);

  await loginpage.loginWithEmailandPasswordsuccessfulty();
  await homepage.gotoairolapage();


  await page.getByTitle('range test automation').click();
  await page.getByPlaceholder('Enter the card value').fill('2');
  
  const productpage = new Productpage(page);
  await productpage.addtocartWithcheckout();


  const paymentpage = new PaymentPage(page);
  await paymentpage.chooseGeideaforpayment();

  await paymentpage.payusingGeidea();
  
});
