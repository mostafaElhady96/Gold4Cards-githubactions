import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage.spec';
import { Registerpage } from '../pages/Registerpage.spec';
import { Homepage } from '../pages/homepage.spec';

test('login with my email and test somethings', async ({ page }) => {  
  const loginpage= new Loginpage(page);
  const homepage = new Homepage(page);
  await loginpage.loginWithEmailandPasswordsuccessfulty();
  await homepage.gotoairolapage();

});

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

    await expect ( await registerpage.termsandconditions).toBeVisible();
    await registerpage.termsandconditions.check();
  });


  test('click on already a member ', async ({ page }) => {  
    const loginpage= new Loginpage(page);
    const registerpage = new Registerpage(page);

    await loginpage.gotologinpage();
    await loginpage.registerhere.click();
    await registerpage.alreadyamember.click();
    await expect(loginpage.passwordfield).toBeVisible();

  
  });


 
