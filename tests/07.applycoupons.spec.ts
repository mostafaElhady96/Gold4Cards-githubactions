import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';
import { Registerpage } from '../pages/Registerpage.spec';
import { Homepage } from '../pages/homepage.spec';
import { PaymentPage } from '../pages/payment.spec';
import { Productpage } from '../pages/productpage.spec';

//TAF2
//TAP2M50
//TAP2M2
//TAP40M100


test('buy range product with coupon discount ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPassword('mostafaelhady.tester@gmail.com','Mostafa2024@');
  await page.waitForSelector('text=Offers');
  await homepage.gotoairolapage();

  await page.getByTitle('voucher test automation').click();
 
  
  const productpage=new Productpage(page);
  await productpage.addtocartWithcheckout();
 
  const paymentpage = new PaymentPage(page);
  await paymentpage.couponplaceholder.type('TAP40M100');
  await paymentpage.couponplaceholder.press('Enter');

});