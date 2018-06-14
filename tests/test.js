module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('https://www.chauffeur-prive.com/')
      .pause(1000);

    // verif title
    client.expect.element('title').to.be.present.before(1000);

    // focus input
    client.expect.element('#email').to.be.present.elementActive();

    // 
    client.expect.element('p').text.to.equal("s'identifier");
    
    client.expect.element('#email-1').to.be.present;

    client.expect.element('#password-2').to.be.present;
    
    client.useXpath();
    
    client.expect.element('//*[@id="root"]/div/main/div/div/form/div[4]/button').to.be.present;
    
    client.expect.element('//*[@id="root"]/div/main/div/div/form/div[1]/div[1]/div/span').text.to.equal("Requis");
    
    client.useCss();
    client.expect.element('#password-2').to.be.present;
    
    

    client.end();
  }
};