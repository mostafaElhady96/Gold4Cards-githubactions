import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';
import { Homepage } from '../pages/homepage.spec';
import { PaymentPage } from '../pages/payment.spec';
import { Productpage } from '../pages/productpage.spec';

test('validate price of voucher product', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  await homepage.gotoairolapage();

  await page.getByTitle('voucher test automation').click();
  
  
  const productpage=new Productpage(page);
  await productpage.addtocartWithcheckout();

  //without choosing any payment method 
  const subtotalprice = await page.locator('#subtotal').innerText();
  const processingFees = await page.locator('#processingFees').innerText();
  const paymentFees = await page.locator('#paymentFees').innerText();
  const totalPay = await page.locator('#totalPay').innerText();
  await console.log(subtotalprice , processingFees, paymentFees,totalPay);
  //await expect(subtotalprice).toBe()

  //choose fawry 
  await page.getByLabel('Fawry').click();
  const subtotalprice2 = await page.locator('#subtotal').innerText();
  const processingFees2 = await page.locator('#processingFees').innerText();
  const paymentFees2 = await page.locator('#paymentFees').innerText();
  const totalPay2 = await page.locator('#totalPay').innerText();
  await console.log(subtotalprice2 , processingFees2, paymentFees2,totalPay2);
  

 //choose wallet 
  await page.getByRole('button', { name: 'GOLD4CARD wallet' }).click();
  await page.getByLabel('Gold Wallet').click();
  const subtotalprice3 = await page.locator('#subtotal').innerText();
  const processingFees3 = await page.locator('#processingFees').innerText();
  const paymentFees3 = await page.locator('#paymentFees').innerText();
  const totalPay3 = await page.locator('#totalPay').innerText();
  await console.log(subtotalprice3 , processingFees3, paymentFees3,totalPay3);

  //clear cart
  const paymentpage = new PaymentPage(page);
  await paymentpage.chooseFawryForPayment();
});