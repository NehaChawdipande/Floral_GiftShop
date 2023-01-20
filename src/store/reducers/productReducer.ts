const initialState = {
  products: [
    {
      skuId: 1,
      ProductName: "Bouquet of Roses",
      imgUrl:
        "https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-bunch-of-100-pink-roses-61186-m.jpg",
      desc: "This pristine pink rose bouquet is a perfect way to express admiration for a special one. This bouquet gets an added look and feel due to long green stems.",
      price: 2500,
      quantity: 1,
    },
    {
      skuId: 2,
      ProductName: "Bouquet of Sunflowers",
      imgUrl:
        "https://saflowers.com.au/wp-content/uploads/2020/05/Sunflower.jpg",
      desc: "Nothing brightens a day better than sunflowers, it's like sunshine no matter the weather! Send this stunning, thoughtful floral gift guaranteed to bring big smiles!",
      price: 2000,
      quantity: 1,
    },
    {
      skuId: 3,
      ProductName: "Bouquet of Daisies",
      imgUrl: "https://images.unsplash.com/photo-1476293889456-abfb7492a29f",
      desc: "A glorious homage to the pretty power of daisies! Ravishing and resplendent with vibrant hues and bountiful blossoms, this bouquet is sure to delight!",
      price: 3500,
      quantity: 1,
    },
    {
      skuId: 4,
      ProductName: "Spring Special Flower Basket",
      imgUrl: "https://images.unsplash.com/photo-1559648285-851dd3a04a02",
      desc: "Spring flowers are the best flowers! With an arrangement to celebrate the beauty of the season, you’ll have them blooming with joy!. Celebrate the brightest season of all today!",
      price: 4000,
      quantity: 1,
    },
  ],
};

const productReducer = (state = initialState) => {
  return state;
};

export default productReducer;
