const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function (res) {
        return res.json();
    }) 
    .then(function (data) {
        handleProductList(data);
    });

function handleProductList(data) {
    data.forEach(showProduct);
}

/*article class="smallProduct">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
          alt="Sahara Team India Fanwear Round Neck Jersey"
        />
        <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
        <p class="subtle">Tshirts | Nike</p>
        <p class="price"><span>Prev.</span> DKK 1595,-</p>
        <div class="discounted">
          <p>Now DKK 1560,-</p>
          <p>-34%</p>
        </div>
        <a href="product.html?id=1165">Read More</a>
      </article> */

function showProduct(product) {
    //console.log(product);
    //soldOut onSale
    //grab template
    console.log(product);
    const template = document.querySelector("#smallProductTemplate").content;
    //clone it
    const copy = template.cloneNode(true);

    //change content
    copy.querySelector("a").setAttribute("href", "product.html?id=" + product.id);
    copy.querySelector(
        "img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector(
        ".subtle"
    ).textContent = `${product.articletype} | ${product.brandname}`;
        copy.querySelector("h3").textContent = product.productdisplayname;

        if (product.soldout) {
            copy.querySelector("article").classList.add("soldOut");
        }
        if (product.discount) {
            copy.querySelector("article").classList.add("onSale");

            /* <div class="discounted">
          <p>Now DKK 1560,-</p>
          <p>-34%</p>
        </div>*/

            copy.querySelector(".discounted p").textContent = product.price / product.discount;
        }

    const parent = document.querySelector("main");
    parent.appendChild(copy);

}
