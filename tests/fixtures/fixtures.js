import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../../PageObjectClass/LoginPage'
import { HomePage } from '../../PageObjectClass/HomePage';
import { CartPage } from '../../PageObjectClass/CartPage';


const test = baseTest.extend<pages>({
    LoginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
      },
      HomePage: async ({ page }, use) => {
        await use(new HomePage(page));
      },
      CartPage: async ({ page }, use) => {
        await use(new CartPage(page));
      },
})