import {navbar}  from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML= navbar();

import {footer}  from "../components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML= footer();

// let data = [
//     {   
//         id : 1,
//         name : "After Dark",
//         badge : "New",
//         catagory : "Sweets",
//         type : "Body Spray",
//         message : "Discount 20%",
//         price : 14.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw12677e03/crop/026551386_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 2,
//         name : "Black Tie",
//         badge : "New",
//         catagory : "Sweets",
//         type : "Wallflower Fragrance Refill",
//         message : "Discount 20%",
//         price : 7.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw68829434/crop/026587279_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 3,
//         name : "Cedar & Suede",
//         badge : "New",
//         catagory : "Woody",
//         type : "3-wick Candle",
//         message : "Discount 20%",
//         price : 29.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc446faf6/crop/026588538_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 4,
//         name : "Birch & Eucalyptus",
//         badge : "New",
//         catagory : "Woody",
//         type : "Ultimate Hydration Body Cream",
//         message : "Discount 20%",
//         price : 16.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw788dbf70/crop/026501180_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 5,
//         name : "Black Tie",
//         badge : "New",
//         catagory : "Sweets",
//         type : "Gentle Foaming Hand Soap",
//         message : "Discount 20%",
//         price : 7.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc1518184/crop/026438827_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 6,
//         name : "After Dark",
//         badge : "New",
//         catagory : "Sweets",
//         type : "3-wick Candle",
//         message : "Discount 20%",
//         price : "26.50",
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb2ea9f52/crop/026617880_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 7,
//         name : "Classic Flannel",
//         badge : "New",
//         catagory : "Fruits",
//         type : "Body Spray",
//         message : "Discount 20%",
//         price : 14.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcf9d3d94/crop/026553504_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 8,
//         name : "Mahogany Teakwood",
//         badge : "New",
//         catagory : "Woody",
//         type : "Wallflower Fragrance Refill",
//         message : "Discount 20%",
//         price : 7.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9bdbdc19/crop/026413481_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 9,
//         name : "Noir",
//         badge : "New",
//         catagory : "Fresh",
//         type : "3-in-1 Hair, Face & Body Wash",
//         message : "Discount 20%",
//         price : 8.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce73973f/crop/026311425_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 10,
//         name : "Bourbon",
//         badge : "New",
//         catagory : "Fruits",
//         type : "Ultimate Hydration Body Cream",
//         message : "Discount 20%",
//         price : 16.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwef08bb2c/crop/026552804_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 11,
//         name : "Vintage",
//         badge : "New",
//         catagory : "Woody",
//         type : "Gentle Foaming Hand Soap",
//         message : "Discount 20%",
//         price : 7.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw41ccd312/crop/026438828_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 12,
//         name : "Flannel",
//         badge : "New",
//         catagory : "Fruits",
//         type : "3-wick Candle",
//         message : "Discount 20%",
//         price : 26.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe53c7f6b/crop/026579255_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 13,
//         name : "Marble",
//         badge : "New",
//         catagory : "Sweets",
//         type : "Body Spray",
//         message : "Discount 20%",
//         price : 14.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5cbd391e/crop/026394956_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 14,
//         name : "Noir",
//         badge : "New",
//         catagory : "Fresh",
//         type : "Body Spray",
//         message : "Discount 20%",
//         price : 14.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw459dddc8/crop/026311429_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 15,
//         name : "Smoked Vanilla Whiskey",
//         badge : "New",
//         catagory : "Sweets",
//         type : "3-wick Candle",
//         message : "Discount 20%",
//         price : 26.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbed84473/crop/026587313_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 16,
//         name : "Whiskey Reserve",
//         badge : "New",
//         catagory : "Sweets",
//         type : "Ultimate Hydration Body Cream",
//         message : "Discount 20%",
//         price : 16.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8f1efea3/crop/026551695_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 17,
//         name : "After Dark",
//         badge : "New",
//         type : "Gentle Foaming Hand Soap",
//         message : "Discount 20%",
//         price : 3.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6612198e/crop/026582120_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 18,
//         name : "Marble",
//         badge : "New",
//         catagory : "Sweets",
//         type : "3-in-1 Hair, Face & Body Wash",
//         message : "Discount 20%",
//         price : 3.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f315ee2/crop/026291736_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 19,
//         name : "FROZEN Lake",
//         badge : "New",
//         catagory : "Fresh",
//         type : "Gentle Foaming Hand Soap",
//         message : "Discount 20%",
//         price : 15.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb1fe7648/crop/026559351_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 20,
//         name : "Teakwood",
//         badge : "New",
//         catagory : "Woody",
//         type : "Ultimate Hydration Body Cream",
//         message : "Discount 20%",
//         price : 16.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw76e724ed/crop/026295921_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 21,
//         name : "Laundry Day",
//         badge : "New",
//         catagory : "Woody",
//         type : "Wallflower Fragrance Refill",
//         message : "Discount 20%",
//         price : 7.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3022bdd5/crop/026397324_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 22,
//         name : "Ocean",
//         badge : "New",
//         catagory : "Fresh",
//         type : "Wallflower Fragrance Refill",
//         message : "Discount 20%",
//         price : 7.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2efeac59/crop/026466939_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 23,
//         name : "Teakwood",
//         badge : "New",
//         catagory : "Woody",
//         type : "3-in-1 Hair, Face & Body Wash",
//         message : "Discount 20%",
//         price : 13.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc6262222/crop/026177563_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//         id : 24,
//         name : "Ocean",
//         badge : "New",
//         category : "Fresh",
//         type : "3-in-1 Hair, Face & Body Wash",
//         message : "Discount 20%",
//         price : 13.50,
//         image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf9b1131b/crop/026237209_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     }
// ];



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
//console.log(data)
const getData = async ()=>{
    try{
        const response = await fetch ("https://attractive-songs-1315.herokuapp.com/menspage");

        const data = await response.json();
        //console.log(data)
        append(data)
    }
    catch(err){
        console.log(err,"error");
    }
} 
getData();

  let  body = document.getElementById("men_container");
  function append(products) {
  body.innerHTML = null

  products.forEach(function (el, id){

    let tr = document.createElement('div');

    let td1 = document.createElement('img');
    td1.src = el.image;

    let text = document.createElement('p');
    text.style.color = "blue"
    text.innerText = el.badge;

    let td2 = document.createElement('h3');
    td2.innerText = el.name;

    let td3 = document.createElement('p');
    td3.innerText = el.type;

    let td4 = document.createElement('p');
    td4.innerText = "$"+el.price;

    let sale = document.createElement('p');
    sale.style.color = "red"
    sale.innerText = el.message;

    let td5 = document.createElement('button');
    td5.textContent = "Add To Card";
    td5.addEventListener("click", function(){
        itembook(el);
      })
    tr.append(td1,text,td2,td3,td4,sale,td5);
    body.append(tr)
  
})
}
//append(data)

function itembook(el){
    let booked = JSON.parse(localStorage.getItem("Cart_List")) || [];
    booked.push(el)
    localStorage.setItem("Cart_List",JSON.stringify(booked));
}

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

// filter function product type start from here ------------------------------------------------------------------------------------------------

const by_men_product_type =  document.getElementById("men_product_type");

by_men_product_type.onchange = () => {
     
    if(by_men_product_type.value=="1"){
        by_moisturizers();
    }
    else if(by_men_product_type.value=="2"){
        by_body_spray();
    }
    else if(by_men_product_type.value=="3"){
        by_fragrance();
    }
    else if(by_men_product_type.value=="4"){
        by_hand_soap();
    }

}

const by_hand_soap= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?type=Gentle Foaming Hand Soap");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }
}

const by_body_spray= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?type=Body Spray");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }
}

const by_moisturizers= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?type=Ultimate Hydration Body Cream");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }

}


const by_fragrance= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?type=Wallflower Fragrance Refill");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }

}


// filter function fragrance name start from here ------------------------------------------------------------------------------------------------

const by_men_fragrance_name =  document.getElementById("men_fragrance_name");

by_men_fragrance_name.onchange = () => {
     
    if(by_men_fragrance_name.value=="1"){
        by_after_dark();
    }
    else if(by_men_fragrance_name.value=="2"){
        by_black_tie();
    }
    else if(by_men_fragrance_name.value=="3"){
        by_marble();
    }
    else if(by_men_fragrance_name.value=="4"){
        by_noir();
    }
    else if(by_men_fragrance_name.value=="5"){
        by_ocean();
    }
    else if(by_men_fragrance_name.value=="6"){
        by_teakwood();
    }

}

const by_after_dark= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?name=After Dark");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }
}

const by_black_tie= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?name=Black Tie");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }
}

const by_marble= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?name=Marble");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }

}


const by_noir= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?name=Noir");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }

}

const by_ocean= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?name=Ocean");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }

}

const by_teakwood= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?name=Teakwood");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }

}

// filter function fragrance type start from here ------------------------------------------------------------------------------------------------

const by_men_fragrance_category =  document.getElementById("men_fragrance_category");

by_men_fragrance_category.onchange = () => {
     
    if(by_men_fragrance_category.value=="1"){
        by_fresh();
    }
    else if(by_men_fragrance_category.value=="2"){
        by_sweets();
    }
    else if(by_men_fragrance_category.value=="3"){
        by_fruits();
    }
    else if(by_men_fragrance_category.value=="4"){
        by_woody();
    }

}

const by_fresh= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?category=Fresh");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }
}

const by_sweets= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?category=Sweets");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }
}

const by_fruits= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?category=Fruits");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }

}


const by_woody= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/menspage?category=Woody");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }
   catch(err){
    console.log(err,"error");
   }

}


// sort function start from here ------------------------------------------------------------------------------------------------

let select_s = document.getElementById("men_sort_by");
select_s.onchange = () =>{
    if(select_s.value === "asc"){
        Asc();
    }
    else if(select_s.value === "dsc"){
        Dsc();
    }
}

const Asc = async()=>{
    console.log("test1");
    try{
        const response = await fetch ("https://attractive-songs-1315.herokuapp.com/menspage?_sort=price&_order=asc");

        const data = await response.json();
        console.log(data)
        append(data)
    }
    catch(err){
        console.log(err,"error");
    }

}

const Dsc = async()=>{
    console.log("test2");
    try{
        const response = await fetch ("https://attractive-songs-1315.herokuapp.com/menspage?_sort=price&_order=desc");

        const data = await response.json();
        console.log(data)
        append(data)
    }
    catch(err){
        console.log(err,"error");
    }

}

