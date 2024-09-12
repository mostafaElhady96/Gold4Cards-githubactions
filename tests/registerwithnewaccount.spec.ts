import { test, expect } from '@playwright/test';
import { Registerpage } from '../pages/Registerpage.spec';


test('register with new account ', async ({ page }) => {
  const registerpage =new Registerpage(page);
  await registerpage.gotoRegisterpage();
  await registerpage.newEmail.type('mostafaelhadytester+7@gmail.com');
  await registerpage.termsandconditions.check();
  await registerpage.registerSubmit.click();
});


test('resgiter with new account second step ', async ({ page }) => {
  await page.goto
  ('https://stg.gold4cards.com/auth/complete-profile?token=98775da39fa52d554b8da31e8bb66d73970be0a8');

  const registerpage = new Registerpage(page);
  await registerpage.typecredentialsofnewemail('automation','user6')

});