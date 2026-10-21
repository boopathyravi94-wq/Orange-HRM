import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginBtn:Locator;
    readonly dashboard:Locator;

    constructor (page:Page) {
        this.page=page;

        this.username=page.locator('input[name="username"]')
        this.password=page.locator('input[name="password"]')
        this.loginBtn= page.getByRole('button',{name:'Login'})
        this.dashboard= page.getByRole('heading',{name:'Login'})
        

        this.page.on('dialog',async(dialog) =>{
            await dialog.accept();
        })

    }

       async openLoginPage(){
            await this.page.goto(process.env.BASE_URL!)
        }

        async enterUsername(){
            await this.username.fill(process.env.USERNAME!)
        }

        async enterPassword(){
            await this.password.fill(process.env.PASSWORD!)
        }

         async clickLogin() {
        await this.loginBtn.click();     
  }

  async isDashboardVisible(): Promise<boolean> {
    return await this.dashboard.isVisible();
}
}