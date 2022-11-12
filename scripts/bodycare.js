
import {navbar} from "../components/navbar.js";

let navbar_div= document.getElementById("navbar");

navbar_div.innerHTML=navbar();

import {footer} from "../components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML=footer();
   
  



   var data = [
       {   
           id : 1,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4b491d20/crop/026535136_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
           currentstatus : "New Fragrance",
           name : "Dream Bright",
           text : "Fine Fragrance Mist",
           price : 17.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Spray",
           category : "Floral",
       },
       {   
           id : 2,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0580616f/crop/026551380_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
           currentstatus : "New Fragrance",
           name : "After Dark",
           text : "3-in-1 Hair, Face & Face & Body Wash",
           price : 14.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Wash",
           category : "Sweet",
       },
       {   
           id : 3,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8ab78bd7/crop/026539029_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
           currentstatus : "New Fragrance",
           name : "Vanilla Bean Noel",
           text : "Ultimate Hydration Body Cream",
           price : 16.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Cream",
           category : "Floral",
       },
       {   
           id : 4,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb39e72d8/crop/026567998_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
           currentstatus : "New!",
           name : "Eucalyptus Lavender",
           text : "Body Wash and Foam Bath",
           price : 15.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Wash",
           category : "Sweet",
       },
       {   
           id : 5,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw66ce122a/hires/026559301_alt_1.jpg?sh=413&yocs=o_s_",
           currentstatus : "New!",
           name : "Strawberry Showflakes",
           text : "Shower Gel",
           price : 14.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Wash",
           category : "Floral",
       },
       {   
           id : 6,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4bbac15d/crop/026557579_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
           currentstatus : "New!",
           name : "Snowflakes & Cashmere",
           text : "Fine Fragrance Mist",
           price : 16.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Spray",
           category : "Sweet",
       },
       {   
           id : 7,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7a23c1cb/crop/026557573_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
           currentstatus : "New!",
           name : "Frostes Cocunut Snowball",
           text : "Daily Nourishing Body Lotion",
           price : 14.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Cream",
           category : "Sweet",
       },
       {   
           id : 8,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw67bdae98/crop/026398463_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
           currentstatus : "New!",
           name : "Black Tie",
           text : "Body Spray",
           price : 14.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Spray",
           category : "Fresh",
       },
       {   
           id : 9,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2f7f9dab/crop/026480833_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_", 
           currentstatus : "New!",
           name : "Winter Candy Apple",
           text : "Ultimate Hydration Body Cream",
           price : 16.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Cream",
           category : "Sweet",
       },
       {   
           id : 10,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw81522767/crop/026401914_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",   currentstatus : "New!",
           name : "Winterberry Wonder",
           text : "Shower Gel",
           price : 13.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Wash",
           category : "Fresh",
       },
       {   
           id : 11,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwda910a0d/crop/026569109_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
           currentstatus : "New!",
           name : "Vanilla Mocha Martini",
           text : "Fine Fragrance Mist",
           price : 17.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Spray",
           category : "Sweet",
       },
       {   
           id : 12,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw40d245c7/crop/026553502_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
           currentstatus : "Online Exclusive",
           name : "Classic Flannel",
           text : "3-in-1 Hair, Face & Face & Body Wash",
           price : 14.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Wash",
           category : "Fresh",
       },
       {   
           id : 13,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd12c9066/hires/026558225_alt_1.jpg?sh=413&yocs=s_",
           currentstatus : "New!",
           name : "Winter Candy Apple",
           text : "Fine Fragrance Mist",
           price : 16.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Spray",
           category : "Sweet",
       },
       {   
           id : 14,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5baf2a80/crop/026539030_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
           currentstatus : "New!",
           name : "Winter Candy Apple",
           text : "Ultimate Hydration Body Cream",
           price : 16.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Cream",
           category : "Fresh",
       },
       {   
           id : 15,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9285085c/crop/026557566_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
           currentstatus : "New!",
           name : "Winterberry Wonder",
           text : "Shower Gel",
           price : 13.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Wash",
           category : "Sweet",
       },
       {   
           id : 16,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc82289e5/hires/026569107_alt_1.jpg?sh=413&yocs=s_",
           currentstatus : "New!",
           name : "Vanilla Mocha MArtini",
           text : "Fine Fragrance Mist",
           price : 17.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Spray",
           category : "Fresh",
       },
       {   
           id : 17,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6c3d8902/crop/026553500_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",
           currentstatus : "Online Exclusive",
           name : "Winter Candy Apple",
           text : "3-in-1 Hair, Face & Face & Body Wash",
           price : 14.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Spray",
           category : "Sweet",
       },
       {   
           id : 18,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb1006457/crop/026354084_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",    
           currentstatus : "Online Exclusive",
           name : "Japanese Cherry Blossom",
           text : "Daily Nourishing Body Lotion",
           price : 14.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Cream",
           category : "Fresh",
       },
       {   
           id : 19,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw76e724ed/crop/026295921_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",  
           currentstatus : "Online Exclusive",
           name : "Teakwood",
           text : "Ultimate Hydration Body Cream",
           price : 16.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Cream",
           category : "Fresh",
       },
       {   
           id : 20,
           image : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7ac01f32/crop/026353250_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=s_",   
           currentstatus : "Online Exclusive",
           name : "Eucaplytus Spearmint",
           text : "Body and Massage Oil",
           price : 18.50,
           extratext : "Mix & match Full-Size: Buy 3, Get 1 FREE",  
           details : "Body Oil",
           category : "Fresh",
       }
   ];
   
   let body=document.getElementById("container1");
   
   function append(data){
       body.innerHTML = null;
       data.forEach(function (el, id) {
           let tr = document.createElement('div');
   
   let td1 = document.createElement('img');
   td1.src = el.image;
   
   let td2 = document.createElement('p');
   td2.innerHTML = el.currentstatus;
   
   let td3 = document.createElement('h3');
   td3.innerHTML = el.name;
   
   let td4 = document.createElement('p');
   td4.innerHTML = el.text;
   
   let td5 = document.createElement('p');
   td5.innerHTML = `$${el.price}`;
   
   let td6 = document.createElement('p');
   td6.innerHTML = el.extratext;
   
   let td7 = document.createElement('button');
   td7.textContent = "Add To Card";
   
   tr.append(td1,td1,td2,td3,td4,td5,td6,td7);
       body.append(tr);
       });
   };
   
    append(data);
   
   let type_btn= document.getElementById("type");
   let type_fragrance=document.getElementById("fragrancetype");
   let cate=document.getElementById("cato");
   let short=document.getElementById("sorting");
   // type_btn.onchange=() => {
   //     producttype();
   // };
   type_fragrance.addEventListener("change",fragrancetypo)
   type_btn.addEventListener("change",producttype);
   cate.addEventListener("change",catee);
   short.addEventListener("change",shorting);
   
   
   function shorting(){
      let increasing=short.value;
      if(increasing=="b"){
       data.sort(function(a,b){
           return a.price-b.price;
       });
       console.log(data);
       append(data);
      }else if(increasing=="c"){
       data.sort(function(a,b){
           return b.price-a.price;
       });
       append(data);
      }
   }
   
   
   function catee(){
      let kato=cate.value;
      if(kato=="Floral"){
       let x= data.filter(function(el,i){
           return el.category == "Floral";
       });
       append(x);
      }
      else if(kato=="Sweet"){
       let x= data.filter(function(el,i){
           return el.category == "Sweet";
       });
       append(x);
      }
      else if(kato=="Fresh"){
       let x= data.filter(function(el,i){
           return el.category == "Fresh";
       });
       append(x);
      }
   }
   
   function fragrancetypo(){
       // console.log("yes")
       let type_boom=type_fragrance.value;
   
       if(type_boom=="after_dark"){
            let x= data.filter(function(el,i){
           return el.name == "After Dark";
   
           
           
       });
       append(x);
   
       }else if(type_boom=="black_tie"){
       let x= data.filter(function(el,i){
      return el.name == "Black Tie";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="classic_flannel"){
       let x= data.filter(function(el,i){
      return el.name == "Classic Flannel";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="dream_bright"){
       let x= data.filter(function(el,i){
      return el.name == "Dream Bright";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="eucalyptus_lavender"){
       let x= data.filter(function(el,i){
      return el.name == "Eucalyptus Lavender";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="snowball"){
       let x= data.filter(function(el,i){
      return el.name == "Frostes Cocunut Snowball";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="japanese"){
       let x= data.filter(function(el,i){
      return el.name == "Japanese Cherry Blossom";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="snowflakes"){
       let x= data.filter(function(el,i){
      return el.name == "Snowflakes & Cashmere";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="strawberry"){
       let x= data.filter(function(el,i){
      return el.name == "Strawberry Showflakes";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="teakwood"){
       let x= data.filter(function(el,i){
      return el.name == "Teakwood";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="bean"){
       let x= data.filter(function(el,i){
      return el.name == "Vanilla Bean Noel";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="mocha"){
       let x= data.filter(function(el,i){
      return el.name == "Vanilla Mocha Martini";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="candy"){
       let x= data.filter(function(el,i){
      return el.name == "Winter Candy Apple";
   
     
      
   });
   append(x);
   
   }else if(type_boom=="berry"){
       let x= data.filter(function(el,i){
      return el.name == "Winterberry Wonder";
   
     
      
   });
   append(x);
   
   }
   
   
       
       
       
    }
   
    function producttype(){
       let type_value=type_btn.value;
   
       if(type_value=="body_wash"){
            let x= data.filter(function(el,i){
           return el.details == "Body Wash";
   
           // if(el.details == "Body Wash"){
           //     return ;
           // }
           
       });
       append(x);
   
       }else if(type_value=="body_cream"){
            let x= data.filter(function(el,i){
           return el.details == "Body Cream";
   
           // if(el.details == "Body Wash"){
           //     return ;
           // }
           
       });
       append(x);
   
       }else if(type_value=="body_spray"){
            let x= data.filter(function(el,i){
           return el.details == "Body Spray";
   
           // if(el.details == "Body Wash"){
           //     return ;
           // }
           
       });
       append(x);
   
       }
   
       
       
    }


