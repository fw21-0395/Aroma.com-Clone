import {navbar}  from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML= navbar();

import {footer}  from "../components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML= footer();

let data = [
    {   
        id : 1,
        name : "After Dark",
        type : "Sweets",
        details : "Body Spray",
        price : 14.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw12677e03/crop/026551386_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 2,
        name : "Black Tie",
        type : "Sweets",
        details : "Wallflower Fragrance Refill",
        price : 7.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw68829434/crop/026587279_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 3,
        name : "Cedar & Suede",
        type : "Woody",
        details : "3-wick Candle",
        price : 29.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc446faf6/crop/026588538_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 4,
        name : "Birch & Eucalyptus",
        type : "Woody",
        details : "Ultimate Hydration Body Cream",
        price : 16.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw788dbf70/crop/026501180_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 5,
        name : "Black Tie",
        type : "Sweets",
        details : "Gentle Foaming Hand Soap",
        price : 7.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc1518184/crop/026438827_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 6,
        name : "After Dark",
        type : "Sweets",
        details : "3-wick Candle",
        price : "26.50",
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb2ea9f52/crop/026617880_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 7,
        name : "Classic Flannel",
        type : "Fruits",
        details : "Body Spray",
        price : 14.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcf9d3d94/crop/026553504_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 8,
        name : "Mahogany Teakwood",
        type : "Woody",
        details : "Wallflower Fragrance Refill",
        price : 7.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9bdbdc19/crop/026413481_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 9,
        name : "Noir",
        type : "Fresh",
        details : "3-in-1 Hair, Face & Body Wash",
        price : 8.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce73973f/crop/026311425_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 10,
        name : "Bourbon",
        type : "Fruits",
        details : "Ultimate Hydration Body Cream",
        price : 16.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwef08bb2c/crop/026552804_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 11,
        name : "Vintage",
        type : "Woody",
        details : "Gentle Foaming Hand Soap",
        price : 7.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw41ccd312/crop/026438828_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 12,
        name : "Flannel",
        type : "Fruits",
        details : "3-wick Candle",
        price : 26.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe53c7f6b/crop/026579255_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 13,
        name : "Marble",
        type : "Sweets",
        details : "Body Spray",
        price : 14.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5cbd391e/crop/026394956_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 14,
        name : "Noir",
        type : "Fresh",
        details : "Body Spray",
        price : 14.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw459dddc8/crop/026311429_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 15,
        name : "Smoked Vanilla Whiskey",
        type : "Sweets",
        details : "3-wick Candle",
        price : 26.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbed84473/crop/026587313_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 16,
        name : "Whiskey Reserve",
        type : "Sweets",
        details : "Ultimate Hydration Body Cream",
        price : 16.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8f1efea3/crop/026551695_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 17,
        name : "After Dark",
        details : "Gentle Foaming Hand Soap",
        price : 3.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6612198e/crop/026582120_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 18,
        name : "Marble",
        type : "Sweets",
        details : "3-in-1 Hair, Face & Body Wash",
        price : 3.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f315ee2/crop/026291736_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 19,
        name : "FROZEN Lake",
        type : "Fresh",
        details : "Gentle Foaming Hand Soap",
        price : 15.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb1fe7648/crop/026559351_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 20,
        name : "Teakwood",
        type : "Woody",
        details : "Ultimate Hydration Body Cream",
        price : 16.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw76e724ed/crop/026295921_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 21,
        name : "Laundry Day",
        type : "Woody",
        details : "Wallflower Fragrance Refill",
        price : 7.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3022bdd5/crop/026397324_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 22,
        name : "Ocean",
        type : "Fresh",
        details : "Wallflower Fragrance Refill",
        price : 7.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2efeac59/crop/026466939_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 23,
        name : "Teakwood",
        type : "Woody",
        details : "3-in-1 Hair, Face & Body Wash",
        price : 13.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc6262222/crop/026177563_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    },
    {
        id : 24,
        name : "Ocean",
        type : "Fresh",
        details : "3-in-1 Hair, Face & Body Wash",
        price : 13.50,
        image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf9b1131b/crop/026237209_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
    }
];



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
];
//console.log(data)

  let  body = document.getElementById("men_container");
  function append(products) {
  body.innerHTML = null
  products.forEach(function (el, id){

    let tr = document.createElement('div');

    let td1 = document.createElement('img');
    td1.src = el.image;

    let td2 = document.createElement('h3');
    td2.innerHTML = el.name;

    let td3 = document.createElement('p');
    td3.innerHTML = el.details;

    let td4 = document.createElement('p');
    td4.innerHTML = `$${el.price}`;

    let td5 = document.createElement('button');
    td5.textContent = "Add To Card";
    td5.addEventListener('click', function () {
      addToCard(id)
    })
    tr.append(td1,td2,td3,td4,td5);
    body.append(tr)
  })
}

function addToCard(id){
}

append(data)

  let ul_body = document.getElementById("men_promo");
  function display(products) {
  ul_body.innerHTML = null
  products.forEach(function (el, id){

    let tr = document.createElement('div');

    let td1 = document.createElement('img');
    td1.src = el.photo;

    let td2 = document.createElement('h3');
    td2.innerHTML = el.name;

    tr.append(td1,td2);
    ul_body.append(tr)
  })
}
display(promo)

function product_type(){
  let product_type = document.getElementById("men_product_type").value;
  //console.log(select_s)

  if(product_type == 0){
    data.sort(function(a,b){
        return a.id-b.id
    })
    append(data)
  }
  else if(product_type == 1){
    let newdata = data.filter(function(el){
        return "3-in-1 Hair, Face & Body Wash" === el.details
    })
    append(newdata)
  }
  else if(product_type == 2){
    let newdata = data.filter(function(el){
        return "Ultimate Hydration Body Cream" === el.details
    })
    append(newdata)
  }
  else if(product_type == 3){
    let newdata = data.filter(function(el){
        return "Body Spray" === el.details
    })
    append(newdata)
  }
  else if(product_type == 4){
    let newdata = data.filter(function(el){
        return "Wallflower Fragrance Refill" === el.details
    })
    append(newdata)
  }
  else if(product_type == 5){
    let newdata = data.filter(function(el){
        return "Gentle Foaming Hand Soap" === el.details
    })
    append(newdata)
  }
}

    function fragrance_name(){
  let fragrance_name = document.getElementById("men_fragrance_name").value;
  //console.log(select_s)

  if(fragrance_name == 0){
    data.sort(function(a,b){
        return a.id-b.id
    })
    append(data)
  }
  else if(fragrance_name == 1){
    let newdata = data.filter(function(el){
        return "After Dark" === el.name
    })
    append(newdata)
  }
  else if(fragrance_name == 2){
    let newdata = data.filter(function(el){
        return "Black Tie" === el.name
    })
    append(newdata)
  }
  else if(fragrance_name == 3){
    let newdata = data.filter(function(el){
        return "Marble" === el.name
    })
    append(newdata)
  }
  else if(fragrance_name == 4){
    let newdata = data.filter(function(el){
        return "Noir" === el.name
    })
    append(newdata)
  }
  else if(fragrance_name == 5){
    let newdata = data.filter(function(el){
        return "Ocean" === el.name
    })
    append(newdata)
  }
  else if(fragrance_name == 6){
    let newdata = data.filter(function(el){
        return "Teakwood" === el.name
    })
    append(newdata)
  }
}

function fragrance_category(){
  let fragrance_category = document.getElementById("men_fragrance_category").value;
  //console.log(select_s)

  if(fragrance_category == 0){
    data.sort(function(a,b){
        return a.id-b.id
    })
    append(data)
  }
  else if(fragrance_category == 1){
    let newdata = data.filter(function(el){
        return "Fresh" === el.type
    })
    append(newdata)
  }
  else if(fragrance_category == 2){
    let newdata = data.filter(function(el){
        return "Sweets" === el.type
    })
    append(newdata)
  }
  else if(fragrance_category == 3){
    let newdata = data.filter(function(el){
        return "Fruits" === el.type
    })
    append(newdata)
  }
  else if(fragrance_category == 4){
    let newdata = data.filter(function(el){
        return "Woody" === el.type
    })
    append(newdata)
  }
}

function sortby(){
  let select_s = document.getElementById("men_sort_by").value;
  //console.log(select_s)

  if(select_s == 0){
    data.sort(function(a,b){
        return a.id-b.id
    })
    append(data)
  }
  else if(select_s == 1){
    //console.log(1);
    data.sort(function(a,b){
        return a.price-b.price
    })
    append(data)
  }
  else if(select_s == 2){
    //console.log(2);
    data.sort(function(a,b){
        return b.price-a.price
    })
    append(data)
  }
}


function allMen(){
    console.log(7)
    let newdata = data.filter(function(el){
        return el.details
    })
    append(newdata)
} 

function bodyWash(){
    console.log(3)
    let newdata = data.filter(function(el){
        return "3-in-1 Hair, Face & Body Wash" === el.details
    })
    append(newdata)
}

function Moisturizers(){
    console.log(4)
    let newdata = data.filter(function(el){
        return "Ultimate Hydration Body Cream" === el.details
    })
    append(newdata)
}
function BodySpray(){
    console.log(5)
    let newdata = data.filter(function(el){
        return "Body Spray" === el.details
    })
    append(newdata)
}
function Fragrance(){
    console.log(6)
    let newdata = data.filter(function(el){
        return "Wallflower Fragrance Refill" === el.details
    })
    append(newdata)
}
function HandSoaps(){
    console.log(7)
    let newdata = data.filter(function(el){
        return "Gentle Foaming Hand Soap" === el.details
    })
    append(newdata)
}