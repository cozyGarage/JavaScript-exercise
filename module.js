const shop = {};

shop.cart = (function() {
  const products = {};

  function addProduct(productName) {
    if(!products[productName]) {
      products[productName] = 0;
    }
    products[productName]++;
  }

  function getTotalProducts() {
    let total = 0;
    for(const productName in products) {
      total += products[productName];
    }
    return total;
  }

  return {
    add: addProduct,
    getTotalProducts: getTotalProducts
  };
})();

/* This code creates a shopping cart module that holds products and their quantities. 
It uses a closure to keep the products array private and provides two public methods to add products to the cart and get the total number of products in the cart. 
The module is stored in the shop namespace and the main object is stored in the store variable.*/
