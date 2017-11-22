import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/auth');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  navigateToMain(){
    return browser.get('/#/main');
  }
  navigateToProfile(){
    return browser.get('/#/profile');
  }
}
