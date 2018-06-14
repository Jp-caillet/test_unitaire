module.exports = {
  tags: ['jobTeaser'],
  'Open Login page' : function(client){
    client.url('https://www.jobteaser.com/fr')
    client.assert.urlEquals('https://www.jobteaser.com/fr')
    client.click("body > div > header > div > div.jt-Header-menu > div.jt-Header-login > ul > li:nth-child(3) > a")
    client.waitForElementPresent('body', 3000)
    client.assert.title("Connexion à JobTeaser")
    client.expect.element('#main-content > div > div.margin-top > div > div.sign-in__left > div.sign-in__content > p').text.to.contains("Me connecter avec mon compte JobTeaser");


    client.end();
},
'Review wording on Login page' : function(client){
  client.url('https://www.jobteaser.com/fr/users/sign_in')
  client.pause(2000)
  client.expect.element('#main-content > div > div.margin-top > div > div.sign-in__left > div.sign-in__content > p').text.to.contains("Me connecter avec mon compte JobTeaser");
  client.expect.element('#main-content > div > div.margin-top > div > div.sign-in__left > div.sign-in__content-bottom > p > span').text.to.contains("Vous n'arrivez pas à vous connecter ?");
  client.end();
},
'Field email must exist' : function(client){
  client.url('https://www.jobteaser.com/fr/users/sign_in')
  client.useXpath()
  client.pause(2000)
  client.expect.element('//*[@id="user_email"]').to.be.present

  client.end();
},
'Field password must exist' : function(client){
  client.url('https://www.jobteaser.com/fr/users/sign_in')
  client.pause(2000)
  client.expect.element('//*[@id="user_password"]').to.be.present
  client.useCss()
  client.end();
},
'Validate button must exist' : function(client){
  client.url('https://www.jobteaser.com/fr/users/sign_in')
  client.pause(2000)
  client.expect.element('#sign-in-on-job-teaser > input.btn.btn-secondary').to.be.present

  client.end();
},
'Login should pass' : function(client, request){
    client
    .url('https://www.jobteaser.com/fr/users/sign_in') 
    .setValue('#user_email', 'mydigitalschool@gmx.fr')
    .setValue('#user_password', 'mydigitalSchool')
    .click('#sign-in-on-job-teaser')
    .assert.urlContains('https://www.jobteaser.com/fr/users/sign_in')

    .end();
},
'Login shouldnt pass' : function(client){
    client
    .url('https://www.jobteaser.com/fr/users/sign_in') 
    .setValue('#user_email', 'mydigitalschool@gmx.fr')
    .setValue('#user_password', 'mydigitSchool')
    .click('#sign-in-on-job-teaser')
    .assert.urlEquals('https://www.jobteaser.com/fr/users/sign_in')

    .end();
},
'Link registration must exist' : function(client){
 client.url('https://www.jobteaser.com/fr/users/sign_in')
 client.expect.element('#jt > div.page > div.site-header > header > div > div.jt-Header-menu > div.jt-Header-login > ul > li:nth-child(1) > a').to.be.present
 client.click('#jt > div.page > div.site-header > header > div > div.jt-Header-menu > div.jt-Header-login > ul > li:nth-child(1) > a')
 client.assert.urlEquals('https://www.jobteaser.com/fr/profiles/new')

 client.end();
},
'Check registration fields' : function(client){
 client.url('https://www.jobteaser.com/fr/profiles/new')
 client.expect.element('#student_profile_user_attributes_first_name').to.be.present
 client.expect.element('#student_profile_user_attributes_last_name').to.be.present
 client.expect.element('#student_profile_school_name').to.be.present
 client.expect.element('#student_profile_year_of_graduation').to.be.present
 client.expect.element('#student_profile_user_attributes_email').to.be.present
 client.expect.element('#student_profile_user_attributes_password').to.be.present
 client.expect.element('#student_profile_user_attributes_password_confirmation').to.be.present

 client.end();
},
'Check the link forgotten password & wording' : function(client){
    client.url('https://www.jobteaser.com/fr/users/sign_in')
    client.expect.element('#main-content > div > div.margin-top > div > div.sign-in__left > div.sign-in__content-bottom > p > a:nth-child(2)').to.be.present
    client.click('#main-content > div > div.margin-top > div > div.sign-in__left > div.sign-in__content-bottom > p > a:nth-child(2)')

    client.end();
}
};