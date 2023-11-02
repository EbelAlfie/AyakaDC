class Brain {
    #puppeteer = require("puppeteer") ;
    #browser = null ;
    constructor() {
        //token?
        this.#createBrowser() ;
    }

    async #createBrowser() {
        this.#puppeteer.launch({ headless: "new" }).then( browser =>
            this.#browser = browser 
        ).catch(error => {
            console.log(`Failed creating browser: ${error}`)
        }) ;
    }
    
    async goTo() {
        if (this.#browser === null) await this.#createBrowser() ;
        await this.#browser.newPage().then(page =>{
            page.goto('https://beta.character.ai/').then(val => {
                console.log(val) ;
            }).catch(error => {
                console.log(`Goto failed ${error}`) ;
            });
        });
    }

    async closeBrowser() {
        this.#browser.close().then( value =>{ 
            console.log("success closing browser") ;
        }).catch(error => {
            console.log(`Failed closing browser ${error}`) ;
        });
    }

    bringToLive() { //login to char ai

    }
}

module.exports = Brain