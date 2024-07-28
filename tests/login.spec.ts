import { test, expect } from '@playwright/test';
import { homepage } from '../pages/homepage.spec';
import { Loginpage } from '../pages/loginpage.spec';

test('login with my email', async ({ page }) => {
  
    
    const loginpage= new Loginpage(page);
    await loginpage.loginwithvalidcredentials('mostafaelhadytester@gmail.com','Mostafa11223355@');
  
    await expect(loginpage.notificationicon).toBeVisible();
    page.close();
    
  });

