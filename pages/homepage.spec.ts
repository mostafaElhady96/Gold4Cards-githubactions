import { expect, type Locator, type Page } from '@playwright/test';

export class Homepage {
  readonly page: Page;
  readonly loginbtntop:Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.loginbtntop = page.getByLabel('login page link');
  
  }

  async gotohomepage() {
    await this.page.goto('https://gold4cards.com/');
  }

  async gotoairolapage(){
    await this.page.goto('https://stg.gold4cards.com/shop/categories/gift-cards/airalo/airalo')

  }

  async gotoitunespage(){
    await this.page.goto('https://stg.gold4cards.com/shop/categories/gift-cards/itunes/itunes-united-states/10-itunes-united-states')

  }




async changecurrencytoDollar(){
  await this.page.locator('#currency-exchange2').first().click();
  await this.page.getByText('US Dollar ( USD $ )').click();

}
async changecurrencytoEuro(){
  
  await this.page.locator('#currency-exchange2').first().click();
  await this.page.getByText('Euro ( EUR € )').click();
  
}
async changecurrencytoEGP(){
  await this.page.locator('#currency-exchange2').first().click();
  await this.page.getByText('Egyptian Pound ( EGP )').click();
 
}
async changecurrencytoSAR(){
  await this.page.locator('#currency-exchange2').first().click();
  await this.page.getByText('Saudi Riyal ( SAR )').click();
 
}

async changecurrencytoAED(){
  await this.page.locator('#currency-exchange2').first().click();
  await this.page.getByText('Emirates Dirham ( AED )').click();
 // await this.page.waitForSelector('text=AED');
}

    //US Dollar ( USD $ )  
  //Euro ( EUR € )
  //Egyptian Pound ( EGP )
  //Emirates Dirham ( AED )
  //Saudi Riyal ( SAR )

  

  

 
}

