exports.CartPage = class CartPage{
    constructor(page)
    {
        this.page = page;
        this.noOfProducts="//tbody[@id='tbodyid']/tr/td[2]"   //Title has all product name , so td[2]

    }
    async checkProductInCart(productName)
    {
        const productInCart= await this.page.$$(this.noOfProducts)
        for(const product of productInCart)
        { 
            console.log(await product.textContent());
            if(productName==await product.textContent())
            {
                return true;
                break;

            }
        }
    }
}