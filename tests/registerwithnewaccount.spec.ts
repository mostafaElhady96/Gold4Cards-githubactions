import { test, expect } from '@playwright/test';
import { Registerpage } from '../pages/Registerpage.spec';


test('register with new account ', async ({ page }) => {
  const registerpage =new Registerpage(page);
  await registerpage.gotoRegisterpage();
  await registerpage.newEmail.type('mostafaelhadytester+4@gmail.com');
  await registerpage.termsandconditions.check();
  await registerpage.registerSubmit.click();
});


test('resgiter with new account second step ', async ({ page }) => {
  await page.goto
  ('');

  const registerpage = new Registerpage(page);
  await registerpage.typecredentialsofnewemail('automation','user4')

});