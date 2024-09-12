import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';
import { Homepage } from '../pages/homepage.spec';
import { PaymentPage } from '../pages/payment.spec';
import { WalletPage } from '../pages/wallet.spec';



test('top up wallet with 1000 dollar  usuing fawry ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  const walletpage = new WalletPage(page);
  await walletpage.gotowallet();

 //i can choose dolaar or euro ....
  await walletpage.chooseUSD.click();
  await walletpage.chooseUSD.isEnabled(); 

  await page.getByLabel('Top up').click();
  // to prevent failure of test case 
  await walletpage.addvalueText.isVisible();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').type('1000');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByText('Fawry').click();
  await page.getByLabel('Continue').click();
 
  //const paymentpage =new PaymentPage(page);
 // await paymentpage.payusingFawry();
});



test('top up wallet with 1000 SAR  usuing fawry ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  const walletpage = new WalletPage(page);
  await walletpage.gotowallet();

 //i can choose dolaar or euro ....
  await walletpage.chooseSAR.click();
  await walletpage.chooseSAR.isEnabled(); 

  await page.getByLabel('Top up').click();
  // to prevent failure of test case 
  await walletpage.addvalueText.isVisible();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').type('1000');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByText('Fawry').click();
  await page.getByLabel('Continue').click();
  //const paymentpage =new PaymentPage(page);
  //await paymentpage.payusingFawry();
});


test('top up wallet with 1000 EGP  usuing fawry ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  const walletpage = new WalletPage(page);
  await walletpage.gotowallet();

 //i can choose dolaar or euro ....
  await walletpage.chooseEGP.click();
  await walletpage.chooseEGP.isEnabled(); 

  await page.getByLabel('Top up').click();
  // to prevent failure of test case 
  await walletpage.addvalueText.isVisible();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').type('1000');
  await page.getByRole('spinbutton').press('Enter');
  await page.getByText('Fawry').click();
  await page.getByLabel('Continue').click();
 
  //const paymentpage =new PaymentPage(page);
  //await paymentpage.payusingFawry();
});


test.skip('top up wallet with 1000 dollar usuing Geidea ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  const walletpage = new WalletPage(page);
  await walletpage.gotowallet();

  await page.getByLabel('Top up').click();
  await page.getByRole('spinbutton').type('1000');
  await page.getByRole('button', { name: 'Top up' }).click();
 
  await page.getByText('Geidea').click();
  await page.getByText('continue').click();

  const paymentpage = new PaymentPage(page);
  await  paymentpage.payusingGeidea();

});


