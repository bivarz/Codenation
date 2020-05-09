const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
/**
 * a escolha de ids gera o look, se 1 = single, 2 = double, 3 = triple e 4 full
 * um objeto deve ser gerado com as escolhas de ids, sendo: 
 * { 
 *    products: [
   		 {
      		name: 'DISNEY CRUELLA© T-SHIRT',
      		category: 'T-SHIRTS'
				},
				promotion: ,
				totalprice: ,
				discountValue: ,
				discountPercetage:,
 */
/**
 * Filter => (elemen, index , array)
 * Map => (current value, index , array)
 * Reduce => (acumulator, initialValue,index,array)  
 */
const promotions= ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const productsFilter = (ids,productsList) => productsList.filter(product => ids.includes(product.id))
const promotionType = [new Set(productsFilter.map(product => product.category)).size]
const regularPrice = productsFilter.reduce((acc,regPrice) => {return acc + regPrice.regularPrice},0)
const promoName = promotions[promotionType -1]
const getTotalPrice = (promotion, products) => 
			products.reduce((totalPrice, nextProduct) => {
			const promotionPrice = nextProduct.promotions.find(promo => promo.looks.includes(promotion)) || [];
			return totalPrice += promotionPrice.price || nextProduct.regularPrice;
		}, 0)






function getShoppingCart(ids, productsList) {
	const cartProducts = getCartProducts(ids,productsList)
	const promo = getPromotion(cartProducts)
	return {
		getCartProducts,
		promo,
	};
}

module.exports = { getShoppingCart };
