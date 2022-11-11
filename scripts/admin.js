let add_product_btn = document.getElementById("add_product");

add_product_btn.onclick = () => {

    addProduct();

}

const addProduct = async () => {

    let product_id = document.getElementById("product_id").value;

    let product_image = document.getElementById("product_image").value;

    let product_badge = document.getElementById("product_badge").value;

    let product_name = document.getElementById("product_name").value;

    let product_type = document.getElementById("product_type").value;

    let product_price = document.getElementById("product_price");

    let product_message = document.getElementById("product_message");

    let send_this_data = {

        "id": product_id,
        "image": product_image,
        "badge": product_badge,
        "name": product_name,
        "type": product_type,
        "price": product_price,
        "message": product_message

    }

    let response = await fetch ('https://boiling-eyrie-97699.herokuapp.com/posts' , {

    method:'POST',
    body:JSON.stringify(send_this_data),

    headers: {

        'Content-Type':'application/json',

    },

    });

    let data = await response.json();

    console.log(data);
    

}

