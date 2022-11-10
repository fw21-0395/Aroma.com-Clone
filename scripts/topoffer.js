import {navbar} from "../components/navbar.js";

let navbar_div= document.getElementById("navbar2");

navbar_div.innerHTML=navbar();

import {footer} from "../components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML=footer();

var data=[
    {
        id :1,
       img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw09649a9a/images/Christmas2022/cndl_sw-trad-breadth_c1_ss.jpg?yocs=s_",
       offer : "Ends today!",
       text : "All Single Wick Candles",
       price : "$6.50",   
    },
    {
        id :2,
       img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7afb083a/images/Christmas2022/sp_holtrads-gifting_c1_ss.jpg?yocs=s_",
       offer : "Today Only!",
       text : "All Hand Soaps",
       price : "$3.50",   
    },
    {
        id : 3,
       img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6687083f/images/Christmas2022/bc_hol-trads_c1_ss.jpg?yocs=s_",
       offer : "Ends today!",
       text : "Lotion + Cream + Face wash",
       price : "$10.50",   
    },
    {
        id :4,
       img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9216acfe/images/Christmas2022/diff_decor_c1_ss.jpg?yocs=s_",
       offer : "Today's Special!",
       text : "Wallflowers Fragrance Refills",
       price : "$25.50",   
    },
    {
        id :5,
       img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6310a4a8/images/Christmas2022/bc_travel_c1_ss.jpg?yocs=s_",
       offer : "Ends today!",
       text : "Travel, Hand & Lip Care",
       price : "$15.50",   
    },
    {
        id:6,
       img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc0851ed2/images/Christmas2022/sn_pbac_ch1_ss.jpg?yocs=s_",
       offer : "Today's Special!",
       text : "All Single Wick Candles",
       price : "$6.50",   
    },
    
];
let body=document.getElementById("container");
data.forEach(function(el){
let div = document.createElement("div");
let td1=document.createElement("img");
td1.src=el.img;
let td2=document.createElement("h3");
td2.innerText=el.offer;
let td3=document.createElement("p");
td3.innerText=el.text;
let td4=document.createElement("h3");
td4.innerText=el.price;
let td5=document.createElement("button");
td5.innerText="SHOP";
div.append(td1,td2,td3,td4,td5);
body.append(div);
});




