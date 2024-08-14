import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';


test('end to end test case 1', async ({ page }) => {  
    const loginpage= new Loginpage(page);
    await loginpage.loginWithEmailandPassword('mostafa.elhadytester@gmail.com','Mostafa2024@');
    await page.getByText('AED3.00 AED100+10 Bouns Diamounds').click();
    await page.getByText('Add to cart').click();
    await page.getByText('proceed to checkout').click();
    await page.getByLabel('Fawry').click();
    await page.getByLabel('Pay now').click();
    await page.getByLabel('Proceed with payment').click();

    await page.getByRole('button', { name: 'استمر' }).click();  
    await page.getByLabel('رقم الكارت *').type('4242424242424242');
    await page.getByPlaceholder('mm/yy').fill('11/25');
    await page.getByLabel('الرقم السري *').fill('123');
    await page.getByLabel('اسم حامل الكارت *').fill('test');
    await page.getByRole('button', { name: 'استمر' }).click();
    await page.getByRole('button', { name: 'تأكيد الدفع' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByLabel('order page link').click();
   
  });