
import {navbar} from "../components/navbar.js";

let navbarDiv = document.getElementById("navbar");

navbarDiv.innerHTML = navbar();

// footer section
import { footer } from "../components/footer.js";
let footer_div = document.getElementById('footer')
footer_div.innerHTML = footer();
// footer section

// Mens Section
//Cathing Mens Div
let mens_div = document.getElementById("admin_mens_products");

//Get Mens Products
const get_mens = async () => {

    const response = await fetch ('https://attractive-songs-1315.herokuapp.com/menspage');

    let data = await response.json();


    append_mens(mens_div,data);

}

get_mens();

// Mens Append Function
const append_mens = (container,data) => {

    container.innerHTML = ""

    data.forEach( (el) => {

        let card = document.createElement("div");

            let card_image = document.createElement("img");
            card_image.src = el.image;

            let card_badge = document.createElement("p");
            card_badge.innerText = "Badge:" + el.badge;

            let card_name = document.createElement("p");
            card_name.innerText = "Name:" + el.name;

            let card_type = document.createElement("p");
            card_type.innerText = "Type:" + el.type;

            let card_price = document.createElement("p");
            card_price.innerText = "Price:" + "$" + el.price;

            let card_message = document.createElement("p");
            card_message.innerText = "Message:" + el.message;

            let card_update_btn = document.createElement("button");
            card_update_btn.innerText = "Update";
            card_update_btn.className = "update_MensPage";

            card_update_btn.onclick = () => {

                updatePrice_mensPage(el.id);

            }

            let card_delete_btn = document.createElement("button");
            card_delete_btn.innerText = "Delete";
            card_delete_btn.className = "delete_MensPage";

            card_delete_btn.onclick = () => {

                deleteFrom_mensPage(el.id);
                addtoTrash(el)

            }

            let hr = document.createElement("hr");

            card.append(card_image, card_badge, card_name, card_type, card_price, card_message, card_update_btn, card_delete_btn, hr);
        
        container.append(card);


    } )

}


//Add to Mens Page section
// catched add to Mens Button 
let addTo_MensPage_btn = document.getElementById("addTo_mensPage");

addTo_MensPage_btn.onclick = () => {

    addTo_MensPage();

}

//Catched values from input and adding to server
const addTo_MensPage = async () => {
        
    let product_id = document.getElementById("product_id").value;

    let product_image = document.getElementById("product_image").value;

    let product_badge = document.getElementById("product_badge").value;

    let product_name = document.getElementById("product_name").value;

    let product_type = document.getElementById("product_type").value;

    let product_price = document.getElementById("product_price").value;

    let product_message = document.getElementById("product_message").value;

    if( product_id == "" || product_image == "" || product_name == "" || product_type == "" || product_price == ""){

        alert("Please fill all the details");

    }else {

    let send_this_data = {

        "id": product_id,
        "image": product_image,
        "badge": product_badge,
        "name": product_name,
        "type": product_type,
        "price": product_price,
        "message": product_message

    }

    let response = await fetch ('https://attractive-songs-1315.herokuapp.com/menspage' ,{

        method:'POST',
        body:JSON.stringify(send_this_data),

        headers: {

            'Content-Type':'application/json',

        },

    });

    let data = await response.json();

    console.log(data);

    get_mens();

    }

}

    // Delete Products in Mens Page
    const deleteFrom_mensPage = async (id) => {

        // console.log(id);

        let response = await fetch (`https://attractive-songs-1315.herokuapp.com/menspage/${id}` ,{

            method:'DELETE',

            headers: {

                'Content-Type':'application/json',

            },

        });

        let data = await response.json();

        console.log(id,"Deleted",data);

        get_mens();

    }

    //Update Price
    const updatePrice_mensPage = async (id) => {

        const newPrice = prompt ('Enter New Price')

        let send_this_data = {

            "price":+(newPrice)

        }

        let response = await fetch (`https://attractive-songs-1315.herokuapp.com/menspage/${id}` ,{

            method:'PATCH',
            body:JSON.stringify(send_this_data),

            headers: {

                'Content-Type':'application/json',

            },

        });

        let data = await response.json();

        console.log(id,":Price Updated",data);

        get_mens();

    } 


// Boducare Section 
// Cathed bodycare div;
let bodycare_div = document.getElementById("admin_bodycare_products");

//Get Mens Products
const get_bodycare = async () => {

    const response = await fetch ('https://attractive-songs-1315.herokuapp.com/bodycare');

    let data = await response.json();


    append_bodycare(bodycare_div,data);

}

get_bodycare();

const append_bodycare = (container,data) => {

    container.innerHTML = ""

    data.forEach( (el) => {

        let card = document.createElement("div");

            let card_image = document.createElement("img");
            card_image.src = el.image;

            let card_badge = document.createElement("p");
            card_badge.innerText ="Badge:" + el.badge;

            let card_name = document.createElement("p");
            card_name.innerText ="Name:" + el.name;

            let card_type = document.createElement("p");
            card_type.innerText ="Type:" + el.type;

            let card_price = document.createElement("p");
            card_price.innerText = "Price:" + "$" + el.price;

            let card_message = document.createElement("p");
            card_message.innerText ="Message:" + el.message;

            let card_update_btn = document.createElement("button");
            card_update_btn.innerText = "Update";
            card_update_btn.className = "update_bodycare";

            card_update_btn.onclick = () => {

                updatePrice_bodycare(el.id);

            }

            let card_delete_btn = document.createElement("button");
            card_delete_btn.innerText = "Delete";
            card_delete_btn.className = "delete_bodycare";

            card_delete_btn.onclick = () => {

                deleteFrom_bodycare(el.id);

            }

            let hr = document.createElement("hr");

            card.append(card_image, card_badge, card_name, card_type, card_price, card_message, card_update_btn, card_delete_btn, hr);
        
        container.append(card);


    } )

}

//Bodycare Page
let addTo_BodycarePage_btn = document.getElementById("addTo_bodycarePage");

addTo_BodycarePage_btn.onclick = () => {

    addTo_BodycarePage();

    
}

const addTo_BodycarePage = async () => {

    let product_id = document.getElementById("product_id").value;

    let product_image = document.getElementById("product_image").value;

    let product_badge = document.getElementById("product_badge").value;

    let product_name = document.getElementById("product_name").value;

    let product_type = document.getElementById("product_type").value;

    let product_price = document.getElementById("product_price").value;

    let product_message = document.getElementById("product_message").value;

    if( product_id == "" || product_image == "" || product_name == "" || product_type == "" || product_price == ""){

        alert("Please fill all the details");

    }else {

    let send_this_data = {

        "id": product_id,
        "image": product_image,
        "badge": product_badge,
        "name": product_name,
        "type": product_type,
        "price": product_price,
        "message": product_message

    }

    let response = await fetch ('https://attractive-songs-1315.herokuapp.com/bodycare' ,{

        method:'POST',
        body:JSON.stringify(send_this_data),

        headers: {

            'Content-Type':'application/json',

        },

    });

    let data = await response.json();

    console.log(data);

    get_bodycare();

    }
    

}

 // Delete Products in Mens Page
 const deleteFrom_bodycare = async (id) => {

    // console.log(id);

    let response = await fetch (`https://attractive-songs-1315.herokuapp.com/bodycare/${id}` ,{

        method:'DELETE',

        headers: {

            'Content-Type':'application/json',

        },

    });

    let data = await response.json();

    console.log(id,"Deleted",data);

    get_bodycare();

}

//Update Price
const updatePrice_bodycare = async (id) => {

    const newPrice = prompt ('Enter New Price')

    let send_this_data = {

        "price":+(newPrice)

    }

    let response = await fetch (`https://attractive-songs-1315.herokuapp.com/bodycare/${id}` ,{

        method:'PATCH',
        body:JSON.stringify(send_this_data),

        headers: {

            'Content-Type':'application/json',

        },

    });

    let data = await response.json();

    console.log(id,":Price Updated",data);

    get_bodycare();

} 

    // //Delete Products in Bodycare Page
    // let delete_Bodycare_btn = document.getElementById("delete_BodycarePage");

    // delete_Bodycare_btn.onclick = () => {

    //     deleteFrom_BodycarePage();
    // }

    // const deleteFrom_BodycarePage = async () => {

    //     let delete_id = document.getElementById("delete_id").value;


    //     let response = await fetch (`https://attractive-songs-1315.herokuapp.com/menspage/${delete_id}` ,{

    //         method:'DELETE',

    //         headers: {

    //             'Content-Type':'application/json',

    //         },

    //     });

    //     let data = await response.json();

    //     console.log(data);

    // }

