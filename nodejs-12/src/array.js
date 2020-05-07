productss = [{ id:10}, {di:11}, {di:13}]
const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
products= [
  {
    "id": 110,
    "name": "PINK PANTHER™ T-SHIRT",
    "category": "T-SHIRTS",
    "regularPrice": 124.99,
    "promotions": [
      {
        "looks": ["SINGLE LOOK", "DOUBLE LOOK"],
        "price": 124.99
      },
      {
        "looks": ["TRIPLE LOOK", "FULL LOOK"],
        "price": 109.99
      }
    ]
  },
  {
    "id": 220,
    "name": "BELTED FAUX LEATHER PANTS",
    "category": "PANTS",
    "regularPrice": 149.99,
    "promotions": [
      {
        "looks": ["SINGLE LOOK"],
        "price": 149.99
      },
      {
        "looks": ["DOUBLE LOOK"],
        "price": 129.99
      },
      {
        "looks": ["TRIPLE LOOK", "FULL LOOK"],
        "price": 119.99
      }
    ]
  }
]

mySet = products => promo[[new Set(products.map(product => product.di)).size -1]]
mySet2 = new Set(products.map(product => product.category)).size

myCart = (ids, productsList) =>productsList.filter(product =>ids.includes(product.id))
var pr = products[0].id


console.log(mySet2)
