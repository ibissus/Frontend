import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getRegisterLink() {
    return element(by.className('font-small grey-text d-flex justify-content-center')).getText() as Promise<string>;
  }

  getHomePageParagraph() {
    return element(by.className('mat-expansion-panel-header-title')).getText() as Promise<string>;
  }

  async LogOn() {
    return new Promise<void>(async (resolve, reject) => {
      await element(by.id('defaultForm-email')).sendKeys('ddow100');//tu wpiz login
      await element(by.id('defaultForm-pass')).sendKeys('ddow100');//tu wpisz hasło
      await element(by.className('login-button mat-raised-button mat-button-base mat-primary')).click();
      await resolve();
    });
  }

  async getPagginationSelect() {
    // await element(by.className('mat-select ng-tns-c16-47 ng-star-inserted')).click();
    await element(by.id('mat-select-0')).click();
    await element(by.id('mat-option-1')).click();
  }

  async goToCompanyPage() {
    await element(by.className('icon-add neutral mat-icon notranslate material-icons mat-icon-no-color ng-star-inserted')).click();
    await element(by.css('button[mattooltip="Lista żołnierzy"]')).click();
  }

}
