import {test,expect} from '@playwright/test'
import { LoginPage } from '../PageObjectClass/LoginPage'
import { HomePage } from '../PageObjectClass/HomePage';
import { CartPage } from '../PageObjectClass/CartPage';


test('Adding Product into the cart_TC1',async({page})=>{

    //login page

    const login=new LoginPage(page);
    await login.gotologinpage();
    await login.login('teststore123', 'Test@Store')
    await page.waitForTimeout(5000);

    //Home page
    const home=new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(5000);
    await home.goToCart();


    //cart page
    const cart=new CartPage(page);
    await page.waitForTimeout(5000);
    const status= await cart.checkProductInCart("Samsung galaxy s6");
    expect(await status).toBe(true);

})
