export type ProductType = {
    skuId: number,
    ProductName: string,
    imgUrl : string,
    desc: string,
    price: number,
    quantity: number
};

export type ProductProps = {
    product: ProductType,
    inCart: boolean
};

export type itemProps = {
 item :  ProductType ,
  quantity: number
};

export type CartType= {
    cart: []
}