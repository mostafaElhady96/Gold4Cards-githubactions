import { test, expect } from '@playwright/test';

import { Loginpage } from '../pages/loginpage.spec';
import { Homepage } from '../pages/homepage.spec';
import { PaymentPage} from '../pages/payment.spec';
import { Productpage } from '../pages/productpage.spec';
import { CartPage } from '../pages/cart.spec';


test('go to cart and checkout  ', async ({ page }) => {
    const loginpage= new Loginpage(page);
    const homepage = new Homepage(page);
    
    await loginpage.loginWithEmailandPasswordsuccessfulty();
    
    const cartpage = new CartPage(page);
    await cartpage.gotocartpage();
    
    await page.waitForTimeout(3000);
   const checkoutButton = page.getByLabel('Checkout');
   const ischeckouthidden = await checkoutButton.isHidden();
   console.log(ischeckouthidden);
  
    const continueShoppingButton = page.getByLabel('Continue Shopping');

    if (ischeckouthidden) {
        await continueShoppingButton.click();
    } else {
        // Adjust selector to match the actual element
        await checkoutButton.click();
        const paymentpage =new PaymentPage(page);
        await paymentpage.choosewalletforpayment();
      
    }  
  });