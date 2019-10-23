import { AppPage } from './app.po';
import { browser, logging, element, by, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.manage().window().setSize(1600, 1000);
    page = new AppPage();
  });

  it('should display logon window', async () => {
    await page.navigateTo();
    expect(await page.getRegisterLink()).toEqual('Nie masz konta? Zarejestruj się');
  });

  it('should log on as Test User', async () => {
    await page.LogOn();
    await browser.waitForAngular();
    expect(await page.getHomePageParagraph()).toEqual('Informacje personalne');
  });

  it('should switch paggination to 10 and see 8 companies', async () => {
    await browser.waitForAngular();
    await page.getPagginationSelect();
    expect(await element.all(by.css('img.ng-star-inserted')).count()).toEqual(8);
  });

  it('should open company page and find its name', async () => {
    await page.goToCompanyPage();
    await browser.waitForAngular();
    expect(await element.all(by.className('mat-chip mat-primary mat-basic-chip mat-chip-selected mat-chip-disabled ng-star-inserted'))
      .getText()).toContain('t este2e');
  });

  it('should log out', async () => {
    const EC = protractor.ExpectedConditions;
    await element(by.className('menu mat-card-avatar')).click();
    await browser.waitForAngular();
    const logOutBtn = element.all(by.className('mat-menu-ripple mat-ripple')).first().element(by.xpath('..'));
    await browser.wait(EC.elementToBeClickable(logOutBtn), 5000);
    await logOutBtn.click();
    expect(await page.getRegisterLink()).toEqual('Nie masz konta? Zarejestruj się');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
