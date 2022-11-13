import {navbar}  from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML= navbar();

import {footer}  from "../components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML= footer();



function slideShow() {

    let color = ["red", "orange", "green", "blue", "blueviolet", "palevioletred"];

    let promotion = document.querySelector("#wish_promo_product >h2");
    let promotion_div = document.querySelector("#wish_promo");

    promotion.style.color = color[1];
    promotion_div.style.borderColor = color[1];

    let i = 0;

    setInterval(function () {

        if (i == color.length) {
            i = 0;
        }

        promotion.style.color = color[i];
        promotion_div.style.borderColor = color[i];
        i++;

    }, 1000);
} slideShow()

let promo = [
{
    id : 1,
    name : "All Men's Body Care",
    photo : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw976c02c0/550tbcallin-v2_fa3_vn_0.jpg?yocs=o_s_"
},
{
    id : 2,
    name : "Home Fragrance",
    photo : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw9488c9a2/xcat_hf-mens_su3_vn.jpg?yocs=o_s_"
},
{
    id : 3,
    name : "Hand soaps & Sanitizers",
    photo : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw0ac467ce/sp_soaps-mens_su3_vn.jpg?yocs=o_s_"
},
{
    id : 4,
    name : "Laundry Day",
    photo : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb4a5f4bc/crop/026412385_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
},
{
    id : 5,
    name : "Mahogany Teakwood",
    photo : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw99edc910/crop/026327825_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
},
]

let wish_body = document.getElementById("wish_promo");
function display(products) {
wish_body.innerHTML = null

products.forEach(function (el, id){

let tr = document.createElement('div');

let td1 = document.createElement('img');
td1.src = el.photo;

let td2 = document.createElement('h3');
//td2.setAttribute("class","promo_product")
td2.innerHTML = el.name;

tr.append(td1,td2);
wish_body.append(tr)
})
}  display(promo)


// -----------------------------------------------------------------------------------------------

localStorage.setItem("men's_products",JSON.stringify(products_arr));

let data = JSON.parse(localStorage.getItem("Cart_list")) || [] ;

let  body = document.getElementById("wish_list");
function append(products) {
body.innerHTML = null

products.forEach(function (el, id){

let div = document.createElement('div');

let td1 = document.createElement('img');
td1.src = el.image;

let div_details = document.createElement('div');

let td2 = document.createElement('h3');
td2.innerHTML = el.name;

let td3 = document.createElement('p');
td3.innerHTML = el.details;

// let td4 = document.createElement('p');
// td4.innerHTML = `$${el.price}`;

div_details.append(td2,td3);

let td5 = document.createElement('button');
td5.textContent = "Add To Card";
td5.addEventListener("click", function(){
    itembook(el);
    removedata(products,id);
  })
div.append(td1,div_details,td5);
body.append(div)
})
}append(data)


function itembook(el){
let booked = JSON.parse(localStorage.getItem("Cart_List")) || [];
booked.push(el)
localStorage.setItem("Cart_list",JSON.stringify(booked));
}

function removedata(arr,index){
newData = arr.filter(function(el,i){
  return i!=index;
})
localStorage.setItem("men,s_Product",JSON.stringify(data));
append(newData)
}