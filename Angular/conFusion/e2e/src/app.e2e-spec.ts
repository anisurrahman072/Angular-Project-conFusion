import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying Ristornate Con Fusion', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('h1')).toEqual('Ristorante Con Fusion');
  });

  it('should navigate to about page by clicking on link', () => {
    page.navigateTo('/');
    const navLink = page.getAllElement('a').get(1);
    navLink.click();
    expect(page.getParagraphText('h3')).toBe('About Us');
  });

  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0');
    const newAuthor = page.getElement('input[type=text]');
    newAuthor.sendKeys('Shehab gsd');
    const newComment = page.getElement('textarea');
    newComment.sendKeys('fgh running.....');
    const newSubmitButton = page.getElement('button[type=submit]');
    newSubmitButton.click();

    // browser.pause();  /// ERROR: pause() is not a function of browser protractor!!!!!
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
