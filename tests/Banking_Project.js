module.exports = {     // Bank Project
    tags: ['Registration'],
    'Test Registration Page' : function (client) {    // Customer Login Page
         client 
         .url('http://www.globalsqa.com/angularJs-protractor/BankingProject/#/login') // Go to a url
         .waitForElementVisible('body', 1000) // wait till page loads
         .pause(5000)
         .useXpath() // using xpath to locate the elements
         .click('//html/body/div/div/div[2]/div/div[1]/div[1]/button') // Click on the Customer Login button
         .pause(1000)
         .click('//*[@id="userSelect"]') // Click on the Your Name field
         .useCss() // using CSS
         .click('option[value="3"]') // Select the option 3 from the dropdown
         .useXpath()
         .click('/html/body/div/div/div[2]/div/form/button') // Click on the Login button
         .pause(1000)
         .click('/html/body/div/div/div[2]/div/div[3]/button[2]') // Click on the Deposit button
         .pause(1000)
         .click('//html/body/div/div/div[2]/div/div[4]/div/form/div/input') // Click on the 'Amount to be Deposited' field
         .pause(1000)
         .setValue('//html/body/div/div/div[2]/div/div[4]/div/form/div/input','500') // Deposit 500
         .pause(1000)
         .click('//html/body/div/div/div[2]/div/div[4]/div/form/button') // Click on the Deposit button
         .pause(1000)
         .click('//html/body/div/div/div[2]/div/div[3]/button[3]') // Click on the Withdrawl button
         .pause(1000)
         .setValue('/html/body/div/div/div[2]/div/div[4]/div/form/div/input','200') // Withdraw 200
         .pause(1000)
         .click('//html/body/div/div/div[2]/div/div[4]/div/form/button') // Click on the Withdraw button
         .pause(1000)
         .click('//html/body/div/div/div[2]/div/div[3]/button[1]') // Click on the Transactions button
         .pause(1000)
         .click('/html/body/div/div/div[1]/button[1]') // Click on the Home button

    },
 'Manager Login' : function (client) { // Bank manager Login
     client
       .click('//html/body/div/div/div[2]/div/div[1]/div[2]/button') // Click on the Bank manager login button
       .pause(1000)
       .click('/html/body/div/div/div[2]/div/div[1]/button[2]') // Click on the Open Account button
       .pause(1000)
       .click('//*[@id="userSelect"]') // Click on the Customer field
       .useCss()
       .click('option[value="2"]') // Select the option 2
       .useXpath()
       .click('//*[@id="currency"]') // Click on the Currency field
       .pause(1000)
       .setValue('//*[@id="currency"]','Rupee') // Set the value as Rupee
       .pause(1000)
       .click('/html/body/div/div/div[2]/div/div[2]/div/div/form/button') // Click on the Process Button
       .pause(1000)
       .acceptAlert() // Click on the ok button in Alert box
       .pause(1000)
       .click('/html/body/div/div/div[2]/div/div[1]/button[3]') // click on the Customer buttom
       .pause(1000)
       .click('/html/body/div/div/div[2]/div/div[2]/div/form/div/div/input') // Click on the Search Customer field
       .setValue('/html/body/div/div/div[2]/div/div[2]/div/form/div/div/input','1016') // Set value as 1016 to search the customer
    }
 };