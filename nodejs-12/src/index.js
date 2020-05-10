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




function getShoppingCart(ids, productsList) {

	const productss = [ids,productsList]
	const productsFilter = productss[1].filter(product => ids.includes(product.id))
	const getName = productsFilter.map(product =>({name: product.name, category:product.category}))
	const promotionType = promotions[new Set(productsFilter.map(product => product.category)).size-1]
	const getDiscount = productsFilter.reduce((tP,nP)=> {
		const promotionPrice = nP.promotions.find(promo => promo.looks.includes(promotionType)) || [];
		return tP += promotionPrice.price || nP.regularPrice;
	},0)
 
 
	const regularPrice = productsFilter.reduce((acc,regPrice) => acc + regPrice.regularPrice,0)
	const promoFiltered = productsFilter.map(promo => promo.promotions)
	const discountValuee = (regularPrice - getDiscount)
	const discountt = discountValuee*100/regularPrice;

	
	const carrinho = {
		'products': getName,
		'promotion':  promotionType,
		'totalPrice': getDiscount.toFixed(2),
		'discountValue': discountValuee.toFixed(2),
		'discount': `${discountt.toFixed(2)}%`
	}

	return carrinho;
}

module.exports = { getShoppingCart };
