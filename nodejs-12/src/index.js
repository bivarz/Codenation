const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const getPromo = products => promotions[new Set(products.map(product => product.category))];

function getShoppingCart(ids, productsList) {
	return {};
}

module.exports = { getShoppingCart };
