
import {navbar} from "../components/navbar.js";

let navbar_div= document.getElementById('navbar');

navbar_div.innerHTML=navbar();

import {footer} from "../components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML=footer();

/* 


<form>
                <p>Create account </p>
                
                <p id="msg" ></p>
                  <label >First Name</label>
                  <input type="text" id="name" placeholder="First Name" />
                  <label >Last Name</label>
                  <input type="text" id="last_name" placeholder="Last Name" />
                  <label >Username</label>
                  <input type="text" id="username" placeholder="Username" />
                  <label >Email</label>
                  <input type="text" id="email" placeholder="Email" />
                  <label >Password</label>
                  <input type="text" id="password" placeholder="Password" />
                  <span style="color: red;">password length should be more than 8</span><br /> 
                  <label > ZIP Code</label>
                  <input type="text" id="zipcode" placeholder="ZIP Code" />
                  <span style="color: red;">zipcode length should be more than 5</span><br /> 
                </form>
                <button id="signup_karo">signup </button>





*/
 const formDikhao=()=>{
      return  ` <div id="rform">
      <span id="msg" ></span>
      <br />
      <label >First Name</label>
       <input type="text" id="name" placeholder="First Name" />
                  <label >Last Name</label>
                  <input type="text" id="last_name" placeholder="Last Name" />
                  <label >Username</label>
                  <input type="text" id="username" placeholder="Username" />
                  <label >Email</label>
                  <input type="text" id="email" placeholder="Email" />
                  <label >Password</label>
                  <input type="text" id="password" placeholder="Password" />
                  <span style="color: red;">password length should be more than 8</span><br /> 
                  <label > ZIP Code</label>
                  <input type="text" id="zipcode" placeholder="ZIP Code" />
                  <span style="color: red;">zipcode length should be more than 5</span><br /> 
                  <button id="signup_karo">signup </button> </div>
                 
                 `
               
                
};




let register_form = document.getElementById('register-form');
let create = document.getElementById("create");



create.addEventListener('click',()=>{

register_form.innerHTML= formDikhao();
let signup_btn = document.getElementById('signup_karo');
signup_btn.onclick=()=>{
    Register();
    //console.log("test");
}
});



create.addEventListener('dblclick',()=>{
     register_form.innerHTML=null;
    });

   
class user {
   

    #checkUsername(username){
    return username.includes('#')? false : true;
    }

    #checkPassword(password){
        return password.length > 8 ? true : false;
    }


async  signup(n, l ,u, e, p){
console.log("gauri");
        let isValidated = this.#checkUsername(u) && this.#checkPassword(p);
        if(isValidated){
            this.name=n;
            this.last_name=l;
            this.username = u;
            this.email = e ;
            this.password = p ;
            this.zipcode = p ;

            console.log(this);
         
           let signup_data = (this);
            try{
                if(this.zipcode.length >=5 ){
                  
                    localStorage.setItem('signup_data',JSON.stringify(signup_data ," signup_data " ) );
                    alert(`${this.username} Signup successssfully !!`);
                    window.location="men's.html";
                }else{
                    alert(`${this.username} Enter valid zipcode`);
                }
        }catch(err){
            console.log('err!',err);
        }
        }else{
            let msg = document.getElementById("msg");
            msg.innerText="Oops! Something's not right.Please try again!"; 
            msg.style.backgroundColor="#f79d9f";
            msg.style.color="#ed0331";

        };
 };
};
let u1 =new user();

function Register(){
console.log("gauri");
const name = document.getElementById('name').value;
const last_name = document.getElementById('last_name').value;
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password=document.getElementById('password').value;
const zipcode=document.getElementById('zipcode').value;

u1.signup(name,last_name,username,email,password,zipcode);
};

