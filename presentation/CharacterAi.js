export class Brain {
    #puppeteer = require("puppeteer") ;
    #browser = null ;
    constructor() {
        //token?
        this.#createBrowser() ;
    }

    async #createBrowser() {
        await this.#puppeteer.launch({ headless: "false" }).then( browser =>
            this.#browser = browser 
        ).catch(error => {
            console.log(`Failed creating browser: ${error}`)
        }) ;
    }
    
    async goTo() {  
        if (this.#browser === null) await this.#createBrowser() ;
        
        if (this.#browser === null) return 

        const page = await this.#browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0')
        await page.setExtraHTTPHeaders({
            'Accept-Language': 'en'
           });
        page.goto('https://character.ai/').then(result => {
            console.log(result) ;
        });
        //await page.pdf({ path: 'example.pdf' });
        //this.closeBrowser() ;
    }

    closeBrowser() {
        this.#browser.close().then( value =>{ 
            console.log("success closing browser") ;
        }).catch(error => {
            console.log(`Failed closing browser ${error}`) ;
        });
    }

    bringToLive() { //login to char ai

    }
}