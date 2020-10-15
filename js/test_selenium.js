const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
   let driver = await new Builder().forBrowser('firefox').build();
   try {
     await driver.get('http://www.google.com');
     let q = driver. find_element(By.NAME, 'q');
     await q.send_keys('webdriver');
     await q.submit();
   } finally {
        await console.log(driver.title);
       //await driver.quit();
   }
 })();