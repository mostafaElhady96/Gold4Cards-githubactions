import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';
import { Homepage } from '../pages/homepage.spec';
import { PaymentPage } from '../pages/payment.spec';

test('top up wallet with 1000 dollar usuing fawry ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  await homepage.gotowallet();

  await page.getByLabel('Top up').click();
  await page.getByRole('spinbutton').fill('1000');
  await page.getByRole('button', { name: 'Top up' }).click();
  await page.getByText('Fawry').click();
  await page.getByLabel('Continue').click();
 
  const paymentpage =new PaymentPage(page);
  await paymentpage.payusingFawry();
});

test('top up wallet with 1000 dollar usuing Geidea ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  await homepage.gotowallet();

  await page.getByLabel('Top up').click();
  await page.getByRole('spinbutton').type('1000');
  await page.getByRole('button', { name: 'Top up' }).click();
 
  await page.getByText('Geidea').click();
  await page.getByText('continue').click();

  const paymentpage = new PaymentPage(page);
  await  paymentpage.payusingGeidea();

});


