let label = document.getElementById("total-amount");
let cart = document.getElementById("cart-item-container");
// console.log(productList1);
let shopingcart = document.getElementById("Shoping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];
// console.log(basket)
let calculation = () => {
  let cartitem = document.getElementById("cartAmount");
  cartitem.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

let GenerateCartItems = () => {
  if (basket.length !== 0) {
    return (cart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = productList1.find((y) => y.id === id) || [];
        let sear = basket.find((y) => y.item === item) || [];
        return `
              <div class="item"><img src="${search.preview}">
                <div class="detail">
                  <h3>${search.name}</h3>
                    <p>x${sear.item}</p>
                  <p>Amount: ${search.price}</p>
                </div>
              </div>
              `;
      })
      .join(""));
  } else {
    console.log("basket is totally emty...");
  }
  // cart.innerHTML=`<div class="item"><img src="${search.preview}"><div class="detail"><h3>${search.name}</h3><p>x1</p><p>Amount: ${search.price}</p></div></div>`;
};
GenerateCartItems();
let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket.map((x) => {
      let { item, id } = x;
      let search = productList1.find((y) => y.id === id) || [];
      return item * search.price;
    }).reduce((x,y)=>x+y,0);
    console.log(amount);
    label.innerHTML=`Total Amount:<span>Rs ${amount}</span>`
  } else return;
};

TotalAmount();
