// navbar section
import {navbar} from "../components/navbar.js";
let navbarDiv = document.getElementById("navbar");
navbarDiv.innerHTML = navbar();
// navbar section

// footer section
import { footer } from "../components/footer.js";
let footer_div = document.getElementById('footer')
footer_div.innerHTML = footer();
// footer section





// footer section
// const getData = () => {
//     try{
//         let res = await fetch(``)
        
//     }
//     catch(err){
//         console.log(err);
//     }
// }


// const remove_cart_item = document.getElementById('remove_cart_item');
// remove_cart_item.addEventListener('click',()=>{
//     remove_item();
// })

// const remove_item = ()=>{
//     console.log('inside function')
// }
