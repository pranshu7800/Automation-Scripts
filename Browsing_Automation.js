const puppeteer = require("puppeteer");
console.log("Before");
let page;
//Launch the browser in non-headless mode means don't run in the background else open in the main window
const browserOpenPromise = puppeteer.launch({
    headless: false,
    product: "chrome",
    defaultViewport: null
});

browserOpenPromise.
        then(function (browserContext) {
            //currently opened tabs in the form of array
            const pageArrayPromise = browserContext.pages();
            return pageArrayPromise;
        }).then(function (browserPages){
            //get the first tab(page)
            page = browserPages[0];
            //let the current page go to the given URL
            let gotoPromise = page.goto("https://www.google.com/");
            return gotoPromise;
        }).then(function (){
            //waiting for the element to appears on the page
            let elementWaitPromise = page.waitForSelector("input[type='text']", {visible: true});
            return elementWaitPromise;
        }).then(function(){
            //type the text in the input field of that page(in our cae google.com)
            let keysWillBeSendPromise = page.type("input[type='text']", "coronavirus outbreak in india - covid19india.org");
            return keysWillBeSendPromise;
        }).then(function(){
            //page.keyboard.press() to type the special character(Enter key)
            let enterWillBePressed = page.keyboard.press("Enter");
            return enterWillBePressed;
        }).then(function(){
            //waiting for the element to appears on the page
            let elementWaitPromise = page.waitForSelector("h3.LC20lb.DKV0Md", {visible: true});
            return elementWaitPromise;
        }).then(function(){
            // page.click() will click the first given element on that page
            let keysWillBeSendPromise = page.click("h3.LC20lb.DKV0Md");
            return keysWillBeSendPromise;
        }).catch(function(err){
            console.log(err); 
        })

console.log("After");
