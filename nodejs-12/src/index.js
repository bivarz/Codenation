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


//getPromotion recebe um novo array com as categorias para poder calcular a promoção.
const numbOfItens= products => [new Set(products.map(product => product.category)).size]



//getCartProducts recebe os produtos da lista de ids que serão passados para saber quais itens foram "comprados"
const getCartProducts = (ids, productsList) => productsList.filter(product => ids.includes(product.id) )




function getShoppingCart(ids, productsList) {
	const cartProducts = getCartProducts(ids,productsList)
	const promo = getPromotion(cartProducts)
	return {
		getCartProducts,
		promo,
	};
}

module.exports = { getShoppingCart };
