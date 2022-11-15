import {navbar} from "../components/navbar.js";
let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();

// footer section
import { footer } from "../components/footer.js";
let footer_div = document.getElementById('footer')
footer_div.innerHTML = footer();
// footer section

// let cartdata = [
//     {
//       "id": 1,
//       "name": "After Dark",
//       "badge": "New",
//       "category": "Sweets",
//       "type": "Body Spray",
//       "message": "Discount 20%",
//       "price": 14.5,
//       "image": "https:cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw12677e03/crop/026551386_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     },
//     {
//       "id": 2,
//       "name": "Black Tie",
//       "badge": "New",
//       "category": "Sweets",
//       "type": "Wallflower Fragrance Refill",
//       "message": "Discount 20%",
//       "price": 7.5,
//       "image": "https:cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw68829434/crop/026587279_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
//     }
// ]

// cart_js
// localStorage.setItem("Cart_List",JSON.stringify(cartdata));


let cart_data = JSON.parse(localStorage.getItem("Cart_List")) || [] ;
console.log(cart_data)
check(cart_data)
function check(cart_data){
    console.log(cart_data)
    if(cart_data.length === 0 || cart_data=== null || cart_data=== undefined){

        let cart_product_div = document.getElementById('cart_product_div');
        cart_product_div.style.display = "none"
        let bottom_part_cart = document.getElementById('bottom_part_cart');
        bottom_part_cart.style.display = "none"
        const empty_bag = document.getElementById('empty_bag');
        empty_bag.style.display = "block"
        console.log("inside function")
    }else{
        const empty_bag = document.getElementById('empty_bag');
        empty_bag.style.display = "none"
        append(cart_data);
    }
    
}
// append(cart_data);

// let data = []
// localStorage.setItem("total_price",JSON.stringify(data))



function append(data){

    
    localStorage.setItem("total_price",JSON.stringify([]))

    const cart_item_container = document.getElementById('cart_item_container');
    cart_item_container.innerHTML = null;

    data.forEach((el,index)=>{
        // main_div
        const product = document.createElement('div');
        product.setAttribute("class","product")
        
        // 
        const pro_div = document.createElement('div');
        pro_div.setAttribute("class","pro_div")
        // 
        const img_div = document.createElement('div');
        img_div.setAttribute("class","pro_img")
        const img = document.createElement('img');
        img.src = el.image;
        img_div.append(img)
        // 
        const details_div = document.createElement('div');
        details_div.setAttribute("class","item-details")
        
        const p_name = document.createElement('p');
        p_name.innerText = el.name;
        // 
        const p_text = document.createElement('p');
        p_text.innerText = el.type;
        // 
        const p_extratext = document.createElement('p');
        p_extratext.innerText = el.message;
        // 
        const btn_wishlist = document.createElement('button');
        const i = document.createElement('i');
        i.setAttribute("class","fa-solid fa-heart");
        btn_wishlist.append(i,"Add to My Love-It List")
        
        btn_wishlist.addEventListener("click",()=>{
            add_to_wislist(el);
        })
        details_div.append(p_name, p_text, p_extratext, btn_wishlist)
        pro_div.append(img_div, details_div)
        // 2nd div
        // 
        const div_price = document.createElement('div');
        const p_price = document.createElement('p');
        p_price.innerText = "$" + el.price
        div_price.append(p_price)
        // 3rd div
        const div_qty = document.createElement('div');
        const input_qty = document.createElement('input');
        input_qty.setAttribute("type","number")
        input_qty.setAttribute("value",1)
        // console.log(input_qty.value)
        let totalPrice
        input_qty.addEventListener("change",()=>{
            totalPrice = totalThePrice(input_qty.value,el.price)
            // console.log(input_qty.value)
            p_total.innerText = totalPrice;
            updateTotalPrice(totalPrice, index)
            // total_order_price(totalPrice, index);
        })
        function totalThePrice(){
            // console.log(el.price)
            console.log( Number(input_qty.value))
            let total = el.price * Number(input_qty.value);
            // console.log(total);
            return total;
        }
        div_qty.append(input_qty);
        //
        // 4th div
        const div_totalofpro = document.createElement('div');
        let p_total = document.createElement('p');
        totalPrice = input_qty.value * el.price;
        p_total.innerText = "$" + totalPrice;
        // console.log(el.price)
        // console.log(input_qty.value)
        div_totalofpro.append(p_total);
        // 
        // button div
        const btn_div = document.createElement('div');
        const btn_remove_cart = document.createElement('button');
        const i_remove = document.createElement('i');
        i_remove.setAttribute("class","fa-solid fa-xmark");
        btn_remove_cart.append(i_remove);
        btn_remove_cart.addEventListener("click",()=>{
            removeFromCart(el,index)
        })
        btn_div.append(btn_remove_cart);
        
        const hr = document.createElement('hr');
        
        // 
        product.append(pro_div, div_price, div_qty, div_totalofpro, btn_div)
        cart_item_container.append(product, hr)


        // total_price +=  price * Number(input_qty.value)
        // let total_order_price = document.getElementById('total_order_price');
        // total_order_price.innerText = "$ " +total_price
        // localStorage.setItem("total_price",total_price)
        // data.push(totalPrice)
        pushData(totalPrice)
        // total_order_price(totalPrice, index);
        addition()
    })

}

function add_to_wislist(el){

let dataArr = JSON.parse(localStorage.getItem("wishlist")) || [];

dataArr.push(el);

localStorage.setItem("wishlist",JSON.stringify(dataArr));

}

// function total_order_price(totalPrice, index){
//     // console.log(totalPrice)
//     let data = JSON.parse(localStorage.getItem("total_price")) || [];
//     for(i=0;i<data.length;i++){
//         if(i===index){
//             data[i].push(totalPrice);
//         }
//     }
//     console.log(data)
//     // addition(data)

//     // order_price += totalPrice;
//     let total_order_price = document.getElementById('total_order_price');
//     total_order_price.innerText = "$ " +order_price
//     console.log("total_cart_order_price: ",order_price)
//     // localStorage.setItem("total_price",JSON.stringify(order_price))
// }


// update the total_amount after changing the quantity
function updateTotalPrice(num, index){
    let data = JSON.parse(localStorage.getItem("total_price")) || [];
    for(let i=0;i<data.length;i++){
        if(i===index){
            data[i]=num;
        }
    }
    localStorage.setItem("total_price",JSON.stringify(data))
    addition()
}

// Total of order
function addition(){
    let data = JSON.parse(localStorage.getItem("total_price")) || [];
    let ttl = data.reduce(function(acc,el){
        return acc+el; 
    })
    let total_order_price = document.getElementById('total_order_price');
    total_order_price.innerText = "$ " + ttl;
    localStorage.setItem("promo_code",ttl)
}

// push all product total in array
function pushData(num){
    let data = JSON.parse(localStorage.getItem("total_price")) || [];
    data.push(num);
    localStorage.setItem("total_price",JSON.stringify(data))
}



function removeFromCart(el,index){

    let cart_data = JSON.parse(localStorage.getItem("Cart_List")) || [];
    cart_data.splice(index,1)

    console.log(cart_data)
    localStorage.setItem("Cart_List",JSON.stringify(cart_data));
    // append(cart_data)
    check(cart_data);

    // console.log(el)
    // console.log(index)


}

function delect_price(index){
    let data = JSON.parse(localStorage.getItem("total_price")) || [];
    for(let i=0;i<data.length;i++){
        if(i===index){
            data[i]=0;
        }
    }
    localStorage.setItem("total_price",JSON.stringify(data))
    addition()
}



// promo code section
function discount(){
    let amount = JSON.parse(localStorage.getItem("promo_code"));
    let code =  document.getElementById('promo_code').value;
    if(code === "abc"){             //10% discount ---->>abc
        // console.log("inside funtion")
        let dis = (amount*10)/100;
        amount-=dis;
        alert("YOU GET 10% OFF!")
    }else if(code === "lmn"){       //20% discount  ---->>lmn
        let dis = (amount*20)/100;
        amount-=dis; 
        alert("YOU GET 20% OFF!")
    }else if(code === "xyz"){       //30% discount  ---->>xyz
        let dis = (amount*30)/100;
        amount-=dis;
        alert("YOU GET 30% OFF!")
    }else{
        alert("Wrong Promo Code")
    }
    console.log(amount)
    let total_order_price = document.getElementById('total_order_price');
    total_order_price.innerText = "$ " + amount;
    // localStorage.setItem("promo_code",ttl)
}

const promo_code = document.getElementById('APPLY');
promo_code.onclick = discount;


