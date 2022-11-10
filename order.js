


class user {
async  order_track(n, e,z){
console.log("gauri");
    
            this.order_number=n;
            this.email = e ;
            this.zipcode = z ;

            console.log(this);
           // let actual_data = JSON.stringify(this);
           let signup_data = (this);
            try{
                if(this.zipcode.length ==6 ){
                    // let  data = await res.json();
                    localStorage.setItem('signup_data',JSON.stringify(signup_data ," signup_data " ) );
                    alert(`${this.order_number} Order on the Way !!`);
                    window.location="index.html";
                }else{
                    let msg = document.getElementById("msg");
                    msg.innerText="Oops! Something's not right with your submission. Please try again!"; 
                    msg.style.backgroundColor="#f79d9f";
                    msg.style.color="#ed0331";
                }
       // let data = JSON.parse(localStorage.getItem('login_data'));
           // console.log('data',data);
        }catch(err){
            console.log('err!',err);
        }
           
        
 };
 

};
let u1 =new user();

function order(){
const order_number = document.getElementById('order_number').value;

const email = document.getElementById('email').value;

const zipcode=document.getElementById('zipcode').value;

if(order_number==""||email==""||zipcode==""){
    alert("check the data!");
}else{
    u1. order_track(order_number,email,zipcode);
}

}

