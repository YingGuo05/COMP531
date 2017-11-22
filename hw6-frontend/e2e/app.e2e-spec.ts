import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
const webdriver = require('selenium-webdriver')
describe('hw4 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display auth message', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('RICEBOOK');
    let r = element(by.css('#e2e')).getText();
    expect(r).toEqual('Register')
    //expect(document.getElementById('e2e')).toEqual('Register');
  });

  it('should register new user', () => {
    let name = element(by.id("name"))
    name.sendKeys("yingguo");
    let displayname = element(by.id("displayname"))
    displayname.sendKeys("hhh")
    let email = element(by.id("email"))
    email.sendKeys("yg45@rice.edu")
    let phone = element(by.id("phone"))
    phone.sendKeys("111-111-1111")
    let birth = element(by.id("birth"))
    birth.sendKeys("05101995")
    let zipcode = element(by.id("zipcode"))
    zipcode.sendKeys("77005")
    let password = element(by.id("password"))
    password.sendKeys("a-a-a")
    let passwordConfirm = element(by.id("passwordConfirm"))
    passwordConfirm.sendKeys("a-a-a")
    let regbtn = element(by.id("regbtn"))
    regbtn.click()
    let success = element(by.id("success"))
    expect(success.isDisplayed()).toEqual(true)
    
  })

  it('should log in as the test user', () => {
    let accountname = element(by.id("accountname"))
    accountname.sendKeys("yg45")
    let account_password = element(by.id("account_password"))
    account_password.sendKeys("a-a-a")
    let loginbtn = element(by.id("loginbtn"))
    loginbtn.click()
  })

  it('should create a new article and validate the article appears in the feed', ()=>{
    page.navigateToMain();
    let article = "a new post"
    let addnew = element(by.id("addnewpost"))
    addnew.sendKeys(article)
    let addnewbtn = element(by.id("addnewpostbtn"))
    addnewbtn.click()
    let articles = element.all(by.css(".card"))
    expect(articles.count()).toEqual(12)
  })

  it('should edit an article and validate the article text has updated', ()=>{
    page.navigateToMain();
    let article = "edit article"
    let addnew = element(by.id("addnewpost"))
    addnew.sendKeys(article)
    let addnewbtn = element(by.id("addnewpostbtn"))
    addnewbtn.click()
    let first = element.all(by.css(".card .edit")).first()
    first.click()
    let edited = "after edit"
    let editedarticle = element.all(by.css(".card .text")).first()
    editedarticle.clear()
    editedarticle.sendKeys(edited)
    first.click()
    expect(editedarticle.getText()).toEqual("after edit")
  })

  it('should update the status headline and verify the change', ()=>{
    page.navigateToMain();
    let headline = element(by.id("headline"))
    let newheadline = "this is new headline"
    let input = element(by.id("changehd"))
    input.clear()
    input.sendKeys(newheadline)
    let changebtn = element(by.id("changebtn"))
    changebtn.click()
    expect(headline.getText()).toEqual(newheadline)
  })

  it('should count the number of followed users',()=>{
    let number = element.all(by.css(".followers .followers-text"))
    expect(number.count()).toEqual(3)
  })
  
  it('should add the user "Follower" to the list of followed users and verify the count increases by one',()=>{
    let Follower = "yingguo"
    let addf = element(by.id("addnewfollower"))
    addf.clear()
    addf.sendKeys(Follower)
    let addbtn = element(by.id("addnewfollowerbtn"))
    addbtn.click()
    let number = element.all(by.css(".followers .followers-text"))
    expect(number.count()).toEqual(4)
  })

  it('should remove the user "Follower" from the list of followed users and verify the count decreases by one', ()=>{
    let remove = element.all(by.css(".followers .unfollow")).last()
    remove.click()
    let number = element.all(by.css(".followers .followers-text"))
    expect(number.count()).toEqual(3)
  })

  it('should search for Only One Article Like This and verify only one article shows, and verify the author', ()=>{
    let article1 = "Only One Article Like This"
    let addnew = element(by.id("addnewpost"))
    addnew.sendKeys(article1)
    let addnewbtn = element(by.id("addnewpostbtn"))
    addnewbtn.click()
    let searchbtn = element(by.id("search"))
    searchbtn.sendKeys(article1)
    let id;
    let articles = element.all(by.css(".card .text"))
    let authors = element.all(by.css(".card .author"))
    articles.each(function(element,i){
      element.getText().then(function(text){
        if(text == article1){
          expect(element.isDisplayed()).toBeTruthy()
          expect(authors.get(i).getText()).toEqual("yg45")
        }else{
          expect(element.isDisplayed()).toBeFalsy()
        }
      })
    }) 
  })

  
  // Navigate to the profile view, Update 
  it("should navigate to the profile view, update the user's email and verify", ()=>{
    page.navigateToProfile()
    let email = "yingguo@bupt.edu.cn"
    let changeemail = element(by.id("email"))
    changeemail.sendKeys(email)
    let changebtn = element(by.id("changebtn"))
    changebtn.click()
    let display = element(by.id("show_email"))
    expect(display.getText()).toEqual("Email:yingguo@bupt.edu.cn")
  })

  it("should navigate to the profile view, update the user's zipcode and verify", ()=>{
    page.navigateToProfile()
    let zipcode = "00000"
    let changeemail = element(by.id("zipcode"))
    changeemail.sendKeys(zipcode)
    let changebtn = element(by.id("changebtn"))
    changebtn.click()
    let display = element(by.id("show_zipcode"))
    expect(display.getText()).toEqual("Zipcode:00000")
  })

  it("should navigate to the profile view, update the user's password, verify a `will not change` message is returned", ()=>{
    page.navigateToProfile()
    let password = "q-q-q"
    let change_password = element(by.id("password"))
    change_password.sendKeys(password)
    let changebtn = element(by.id("changebtn"))
    changebtn.click()
    let update = element(by.id("noupdate"))
    expect(update.getText()).toEqual('will not change')
  })

});
