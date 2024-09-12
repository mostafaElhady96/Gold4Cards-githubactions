import { expect, type Locator, type Page } from '@playwright/test';

export class WalletPage {
  readonly page: Page;
  readonly addvalueText:Locator;
  readonly chooseAED:Locator;
  readonly chooseEGP:Locator;
  readonly chooseEUR:Locator;
  readonly chooseSAR:Locator;
  readonly chooseUSD:Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.addvalueText = page.getByText('Add value');
    this.chooseAED=page.getByLabel('AED');
    this.chooseEGP=page.getByLabel('EGP');
    this.chooseEUR=page.getByLabel('EUR');
    this.chooseSAR=page.getByLabel('SAR');
    this.chooseUSD=page.getByLabel('USD');
  
  }
  async gotowallet(){
    await this.page.goto('https://stg.gold4cards.com/profile/wallets');
  }
}
