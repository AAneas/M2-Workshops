const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
   let driver = await new Builder().forBrowser('firefox').build();
   try {
     await driver.get('http://localhost:3000/workshop');
     await driver.findElement(By.id('name')).sendKeys("text");
     //await driver.wait(until.urlIs('http://localhost:3000/workshop'), 5000);
   } finally {
       //await driver.quit();
   }
 })();
