
import {navbar} from "../components/navbar.js";

let navbar_div= document.getElementById("navbar");

navbar_div.innerHTML=navbar();

import {footer} from "../components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML=footer();
   
  const getData= async()=> {

    try{
         const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare");
         
         const data = await response.json();

        //  console.log(data);

        append(data);

    }

    catch(err){
      console.log(err,"error");
    }
  };

getData();

//    var data = [
//        {   
//            id : 1,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4b491d20/crop/026535136_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
//            badge : "New Fragrance",
//            name : "Dream Bright",
//            price : 17.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Spray",
//            category : "Floral",
//        },
//        {   
//            id : 2,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0580616f/crop/026551380_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
//            badge : "New Fragrance",
//            name : "After Dark",
//            price : 14.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Wash",
//            category : "Sweet",
//        },
//        {   
//            id : 3,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8ab78bd7/crop/026539029_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
//            badge : "New Fragrance",
//            name : "Vanilla Bean Noel",
//            price : 16.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Cream",
//            category : "Floral",
//        },
//        {   
//            id : 4,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb39e72d8/crop/026567998_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
//            badge : "New!",
//            name : "Eucalyptus Lavender",
//            price : 15.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Wash",
//            category : "Sweet",
//        },
//        {   
//            id : 5,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw66ce122a/hires/026559301_alt_1.jpg?sh=413&yocs=o_s_",
//            badge : "New!",
//            name : "Strawberry Showflakes",
//            price : 14.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Wash",
//            category : "Floral",
//        },
//        {   
//            id : 6,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4bbac15d/crop/026557579_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
//            badge : "New!",
//            name : "Snowflakes & Cashmere",
//            price : 16.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Spray",
//            category : "Sweet",
//        },
//        {   
//            id : 7,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7a23c1cb/crop/026557573_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
//            badge : "New!",
//            name : "Frostes Cocunut Snowball",
//            price : 14.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Cream",
//            category : "Sweet",
//        },
//        {   
//            id : 8,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw67bdae98/crop/026398463_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
//            badge : "New!",
//            name : "Black Tie",
//            price : 14.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Spray",
//            category : "Fresh",
//        },
//        {   
//            id : 9,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2f7f9dab/crop/026480833_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_", 
//            badge : "New!",
//            name : "Winter Candy Apple",
//            price : 16.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Cream",
//            category : "Sweet",
//        },
//        {   
//            id : 10,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw81522767/crop/026401914_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",   badge : "New!",
//            name : "Winterberry Wonder",
//            price : 13.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Wash",
//            category : "Fresh",
//        },
//        {   
//            id : 11,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwda910a0d/crop/026569109_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
//            badge : "New!",
//            name : "Vanilla Mocha Martini",
//            price : 17.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Spray",
//            category : "Sweet",
//        },
//        {   
//            id : 12,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw40d245c7/crop/026553502_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
//            badge : "Online Exclusive",
//            name : "Classic Flannel",
//            price : 14.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Wash",
//            category : "Fresh",
//        },
//        {   
//            id : 13,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd12c9066/hires/026558225_alt_1.jpg?sh=413&yocs=s_",
//            badge : "New!",
//            name : "Winter Candy Apple",
//            price : 16.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Spray",
//            category : "Sweet",
//        },
//        {   
//            id : 14,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5baf2a80/crop/026539030_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
//            badge : "New!",
//            name : "Winter Candy Apple",
//            price : 16.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Cream",
//            category : "Fresh",
//        },
//        {   
//            id : 15,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9285085c/crop/026557566_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
//            badge : "New!",
//            name : "Winterberry Wonder",
//            price : 13.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Wash",
//            category : "Sweet",
//        },
//        {   
//            id : 16,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc82289e5/hires/026569107_alt_1.jpg?sh=413&yocs=s_",
//            badge : "New!",
//            name : "Vanilla Mocha MArtini",
//            price : 17.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Spray",
//            category : "Fresh",
//        },
//        {   
//            id : 17,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6c3d8902/crop/026553500_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
//            badge : "Online Exclusive",
//            name : "Winter Candy Apple",
//            price : 14.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Spray",
//            category : "Sweet",
//        },
//        {   
//            id : 18,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb1006457/crop/026354084_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",    
//            badge : "Online Exclusive",
//            name : "Japanese Cherry Blossom",
//            price : 14.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Cream",
//            category : "Fresh",
//        },
//        {   
//            id : 19,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw76e724ed/crop/026295921_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",  
//            badge : "Online Exclusive",
//            name : "Teakwood",
//            price : 16.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Cream",
//            category : "Fresh",
//        },
//        {   
//            id : 20,
//            image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7ac01f32/crop/026353250_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",   
//            badge : "Online Exclusive",
//            name : "Eucaplytus Spearmint",
//            price : 18.50,
//            message : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
//            type : "Body Oil",
//            category : "Fresh",
//        }
//    ];
   
   let body=document.getElementById("container1");
   
   function append(data){
       body.innerHTML = null;
       data.forEach(function (el, id) {
           let tr = document.createElement('div');
   
   let td1 = document.createElement('img');
   td1.src = el.image;
   
   let td2 = document.createElement('p');
   td2.innerHTML = el.badge;
   
   let td3 = document.createElement('h3');
   td3.innerHTML = el.name;
   
   let td4 = document.createElement('p');
   td4.innerText = el.type;

   let td5 = document.createElement('p');
   td5.innerHTML = `$${el.price}`;
   
   let td6 = document.createElement('p');
   td6.innerHTML = el.message;
   
   let td7 = document.createElement('button');
   td7.innerText="Add to Cart"


   tr.append(td1,td1,td2,td3,td4,td5,td6,td7);
       body.append(tr);
       });
   };
   
    // append(data);
   
//    let type_btn= document.getElementById("type");
//    let type_fragrance=document.getElementById("fragrancetype");
//    let cate=document.getElementById("cato");
//    let short=document.getElementById("sorting");
   // type_btn.onchange=() => {
   //     producttype();
   // };
//    type_fragrance.addEventListener("change",fragrancetypo)
//    type_btn.addEventListener("change",producttype);
//    cate.addEventListener("change",catee);
//    short.addEventListener("change",shorting);
   
   let sort_by= document.getElementById("sorting");

   sort_by.onchange =() => {
    if(sort_by.value=="ASC"){
        by_ASC();
    }else if(sort_by.value=="DSC"){
        by_DESC();
    }
   }

   const by_ASC= async () => {
           
    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?_sort=price&_order=asc");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

   }


   const by_DESC= async () => {
           
    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?_sort=price&_order=desc");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

   }
// >>>>>>>>>>>>>>>>>>>

const by_fragrancecategory=  document.getElementById("cato");

by_fragrancecategory.onchange = () => {
     
    if(by_fragrancecategory.value=="Floral"){
        by_Floral();
    }else if(by_fragrancecategory.value=="Sweet"){
        by_Sweet();
    }else if(by_fragrancecategory.value=="Fresh"){
        by_Fresh();
    }

   }



   const by_Fresh= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?category=Fresh");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}


   const by_Sweet= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?category=Sweet");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}


   const by_Floral= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?category=Floral");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}

















//    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   const by_fragrancetype=  document.getElementById("fragrancetype");

   by_fragrancetype.onchange = () => {
     
    if(by_fragrancetype.value=="after_dark"){
        by_after_dark();
    }else if(by_fragrancetype.value=="black_tie"){
        by_black_tie();
    }else if(by_fragrancetype.value=="classic_flannel"){
        by_classic_flannel();
    }else if(by_fragrancetype.value=="dream_bright"){
        by_dream_bright();
    }else if(by_fragrancetype.value=="eucalyptus_lavender"){
        by_eucalyptus_lavender();
    }else if(by_fragrancetype.value=="mist"){
        by_mist();
    }else if(by_fragrancetype.value=="snowball"){
        by_snowball();
    }else if(by_fragrancetype.value=="japanese"){
        by_japanese();
    }else if(by_fragrancetype.value=="snowflakes"){
        by_snowflakes();
    }else if(by_fragrancetype.value=="straberry"){
        by_straberry();
    }else if(by_fragrancetype.value=="teakwood"){
        by_teakwood();
    }else if(by_fragrancetype.value=="bean"){
        by_bean();
    }else if(by_fragrancetype.value=="mocha"){
        by_mocha();
    }else if(by_fragrancetype.value=="candy"){
        by_candy();
    }else if(by_fragrancetype.value=="berry"){
        by_berry();
    }

   }

   const by_teakwood= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Teakwood");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}


const by_bean= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Vanilla Bean Noel");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}


const by_mocha= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Vanilla Mocha Martini");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}


const by_candy= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Winter Candy Apple");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}


const by_berry= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Winterberry Wonder");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>










   const by_snowball= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Frostes Cocunut Snowball");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}


const by_japanese= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Japanese Cherry Blossom");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}

const by_snowflakes= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Snowflakes & Cashmere");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}

const by_straberry= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Strawberry Showflakes");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}



//    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   const by_mist= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Fine Fragrance Mist");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

   }




   const by_eucalyptus_lavender= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Eucalyptus Lavender");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}




   const by_dream_bright= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Dream Bright");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}



   const by_classic_flannel= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Classic Flannel");
        
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
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=Black Tie");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}



   const by_after_dark= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?name=After Dark");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}



//    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const by_type=  document.getElementById("type");

by_type.onchange= () => {
    if(by_type.value=="body_wash"){
        by_bodywash();
    }else if(by_type.value=="body_cream"){
        by_bodycream();
    }else if(by_type.value=="body_spray"){
        by_bodyspray();
    }
}

const by_bodyspray= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?type=Body Spray");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}

const by_bodywash= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?type=Body Wash");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}

const by_bodycream= async () => {

    try{
        const response= await fetch("https://attractive-songs-1315.herokuapp.com/bodycare?type=Body Cream");
        
        const data = await response.json();

        // console.log(data);

       append(data);

   }

   catch(err){
     console.log(err,"error");
   }

}

//    function shorting(){
//       let increasing=short.value;
//       if(increasing=="b"){
//        data.sort(function(a,b){
//            return a.price-b.price;
//        });
//        console.log(data);
//        append(data);
//       }else if(increasing=="c"){
//        data.sort(function(a,b){
//            return b.price-a.price;
//        });
//        append(data);
//       }
//    }
   
   
//    function catee(){
//       let kato=cate.value;
//       if(kato=="Floral"){
//        let x= data.filter(function(el,i){
//            return el.category == "Floral";
//        });
//        append(x);
//       }
//       else if(kato=="Sweet"){
//        let x= data.filter(function(el,i){
//            return el.category == "Sweet";
//        });
//        append(x);
//       }
//       else if(kato=="Fresh"){
//        let x= data.filter(function(el,i){
//            return el.category == "Fresh";
//        });
//        append(x);
//       }
//    }
   
//    function fragrancetypo(){
//        // console.log("yes")
//        let type_boom=type_fragrance.value;
   
//        if(type_boom=="after_dark"){
//             let x= data.filter(function(el,i){
//            return el.name == "After Dark";
   
           
           
//        });
//        append(x);
   
//        }else if(type_boom=="black_tie"){
//        let x= data.filter(function(el,i){
//       return el.name == "Black Tie";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="classic_flannel"){
//        let x= data.filter(function(el,i){
//       return el.name == "Classic Flannel";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="dream_bright"){
//        let x= data.filter(function(el,i){
//       return el.name == "Dream Bright";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="eucalyptus_lavender"){
//        let x= data.filter(function(el,i){
//       return el.name == "Eucalyptus Lavender";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="snowball"){
//        let x= data.filter(function(el,i){
//       return el.name == "Frostes Cocunut Snowball";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="japanese"){
//        let x= data.filter(function(el,i){
//       return el.name == "Japanese Cherry Blossom";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="snowflakes"){
//        let x= data.filter(function(el,i){
//       return el.name == "Snowflakes & Cashmere";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="strawberry"){
//        let x= data.filter(function(el,i){
//       return el.name == "Strawberry Showflakes";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="teakwood"){
//        let x= data.filter(function(el,i){
//       return el.name == "Teakwood";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="bean"){
//        let x= data.filter(function(el,i){
//       return el.name == "Vanilla Bean Noel";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="mocha"){
//        let x= data.filter(function(el,i){
//       return el.name == "Vanilla Mocha Martini";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="candy"){
//        let x= data.filter(function(el,i){
//       return el.name == "Winter Candy Apple";
   
     
      
//    });
//    append(x);
   
//    }else if(type_boom=="berry"){
//        let x= data.filter(function(el,i){
//       return el.name == "Winterberry Wonder";
   
     
      
//    });
//    append(x);
   
//    }
   
   
       
       
       
//     }
   
//     function producttype(){
//        let type_value=type_btn.value;
   
//        if(type_value=="body_wash"){
//             let x= data.filter(function(el,i){
//            return el.type == "Body Wash";
   
//            // if(el.type == "Body Wash"){
//            //     return ;
//            // }
           
//        });
//        append(x);
   
//        }else if(type_value=="body_cream"){
//             let x= data.filter(function(el,i){
//            return el.type == "Body Cream";
   
//            // if(el.type == "Body Wash"){
//            //     return ;
//            // }
           
//        });
//        append(x);
   
//        }else if(type_value=="body_spray"){
//             let x= data.filter(function(el,i){
//            return el.type == "Body Spray";
   
//            // if(el.type == "Body Wash"){
//            //     return ;
//            // }
           
//        });
//        append(x);
   
//        }
   
       
       
//     }


