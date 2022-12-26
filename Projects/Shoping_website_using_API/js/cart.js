const content = document.body;
let basket = JSON.parse(localStorage.getItem("data")) || [];
productList1.map((productData) => {
  let {
    id,
    name,
    preview,
    photos,
    description,
    size,
    isAccessory,
    brand,
    price,
  } = productData;
  let search = basket.find((x) => x.id === id) || [];
  let section = document.createElement("section");
  let div = document.createElement("div");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
  let img = document.createElement("img");
  let h1 = document.createElement("h1");
  let h4 = document.createElement("h4");
  let h3 = document.createElement("h3");
  let h3p = document.createElement("h3");
  let h3d = document.createElement("h3");
  let pd = document.createElement("p");
  let span = document.createElement("span");
  var pre = preview;
  var pric = price;
  var product = name;
  var des = description;
  var h4b = brand;
  var h4b = brand;
  img.src = pre;
  h3.innerHTML = "Price: Rs ";
  h3d.innerHTML = "Description";
  h1.innerHTML = product;
  span.innerHTML = pric;
  pd.innerHTML = des;
  h4.innerHTML = h4b;
  section.setAttribute("id", "product");
  img.setAttribute("id", "productImg");
  h1.setAttribute("id", "name");
  h4.setAttribute("id", "brand");
  span.setAttribute("id", "price");
  div.classList.add("left-column");
  div1.classList.add("right-column");
  div2.classList.add("product-description");
  div3.classList.add("description");
  div4.classList.add("product-preview");
  div5.classList.add("previewImg");
  h3p.innerHTML = "Product Preview";
  content.append(section);
  section.append(div);
  div.append(img);
  section.append(div1);
  div1.append(div2);
  div2.append(h1);
  div2.append(h4);
  div2.append(h3);
  div2.append(div3);
  div3.append(h3d);
  div3.append(pd);
  div2.append(div4);
  div4.append(h3p);
  div4.append(div5);
  // let imgs = document.createElement("img");

  h3.append(span);
  for (i in productData.photos) {
    // productData.map((product)=>{
    let imgs = document.createElement("img");
    imgs.setAttribute("id", `img${i}`);
    var photo = productData.photos[i];
    imgs.src = photo;
    content.append(imgs);
    div5.append(imgs);
    if (i == 0) {
      imgs.classList.add("active");
    }
    const element = document.querySelectorAll("img");
    element.forEach((elem) => {
      elem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        elem.classList.add("active");
        img.setAttribute("src", elem.src);
      });
    });
  }
  const divbtn = document.createElement("div");
  const pbtn = document.createElement("button");
  div1.append(divbtn);
  divbtn.append(pbtn);
  pbtn.innerHTML = "Add to cart";
  divbtn.classList.add("btn");
  let increment = (id) => {
    let search = basket.find((x) => x.id === productData.id);
    if (search === undefined) {
      basket.push({
        id: productData.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    update(productData.id);
  };
  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // document.getElementById(id).innerHTML = search.item;
    calculation();
  };

  let calculation = () => {
    let cartitem = document.getElementById("cartAmount");
    cartitem.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  let cartitem = document.getElementById("cartAmount");
  cartitem.innerHTML = `${search.item === undefined ? 0 : search.item}`;
  calculation();
  pbtn.onclick = increment;
});
