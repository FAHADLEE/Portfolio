let label = document.getElementById("lebal");
let cart = document.getElementById("cart-item-container");
console.log(productList1);
let shopingcart = document.getElementById("Shoping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = () => {
  let cartitem = document.getElementById("cartAmount");
  cartitem.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

let GenerateCartItems = () => {
  if (basket.length !== 0) {
    return (shopingcart.innerHTML = basket.map((x) => {
      let { id, item } = x;
      let search = productList1.find((y) => y.id === id) || [];
      return `<div class="item"><img src="${search.preview}">
                <div class="detail">
                  <h3>${search.name}</h3>
                    <p>x1</p>
                  <p>Amount: ${search.price}</p>
                </div>
              </div>`;
    }));
  } else {
    console.log("basket is totally emty...");
  }
  // cart.innerHTML=`<div class="item"><img src="${search.preview}"><div class="detail"><h3>${search.name}</h3><p>x1</p><p>Amount: ${search.price}</p></div></div>`;
};
GenerateCartItems();
