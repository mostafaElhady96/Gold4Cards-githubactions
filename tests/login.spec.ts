import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';
import { url } from 'inspector';
import { Registerpage } from '../pages/Registerpage.spec';

test('login with my email', async ({ page }) => {  
    const loginpage= new Loginpage(page);
    await loginpage.loginWithEmailandPassword('mostafa.elhadytester@gmail.com','Mostafa2024@');
    
  });

  test('login with invalid email', async ({ page }) => {  
    const loginpage= new Loginpage(page);
    await loginpage.loginWithEmailandPassword('mostafaelhadyteser@gmail.com','Mostaf3355@');
    await expect(loginpage.errormessagewrongemail).toBeVisible();
  });

  test('login with invalid password', async ({ page }) => {  
    const loginpage= new Loginpage(page);
    await loginpage.loginWithEmailandPassword('mostafaelhadytester@gmail.com','Mostaf3355@');
    await expect(loginpage.errormessagewronpassword).toBeVisible();
    page.close();
  });


  test('click on regiter here', async ({ page }) => {  
    const loginpage= new Loginpage(page);
    const registerpage = new Registerpage(page);

    await loginpage.gotologinpage();
    await loginpage.registerhere.click();

    await expect ( await registerpage.privacyandpolicy).toBeVisible();
    await registerpage.privacyandpolicy.check();
  });


  test('click on already a member ', async ({ page }) => {  
    const loginpage= new Loginpage(page);
    const registerpage = new Registerpage(page);

    await loginpage.gotologinpage();
    await loginpage.registerhere.click();

    await registerpage.alreadyamember.click();
    
    await expect(loginpage.passwordfield).toBeVisible();

  
  });


 
