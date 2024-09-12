import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';
import { Homepage } from '../pages/homepage.spec';
import { PaymentPage } from '../pages/payment.spec';
import { WalletPage } from '../pages/wallet.spec';



test('top up wallet with 1000 dollar  usuing fawry ', async ({ page }) => {
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginwithtestemail();
  


  
});