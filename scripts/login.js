import {nav_part} from "./nav_part.js";
let navbar_div = document.getElementById('nav_part');
navbar_div.innerHTML=nav_part();



 document.querySelector("#signup").addEventListener("click",()=>{
  // console.log("gb")
   document.querySelector("#log").classList.add("active");
   log.style.visibility="visible";
});


document.querySelector("#log #close-btntwo").addEventListener("click",()=>{
   //console.log("gbb")
   document.querySelector("#log").classList.remove("active");
   log.style.visibility="hidden";

});

function usernameChange() {
   
   let span = document.getElementById("open-popuptwo");
   span.innerText  = `Log in`



   document.getElementById("login").addEventListener("click",(event)=>{
       event.preventDefault()
    
      
    
      
       class user {
       #checkUsername(username){return username.includes('#')? false : true;}
      
     
         #checkPassword(password){ return password.length > 8 ? true : false;}

        
     
         async  Login(username,password){
            let isValidated = this.#checkUsername(username) && this.#checkPassword(password) ;
              if(isValidated ){
            this.username=username;
           // this.email=email;
            this.password=password;
            
    
            let login_data = (this);
            console.log(this);
            try{
               
                localStorage.setItem('login_data',JSON.stringify(login_data ," login_data " ) );
               // let data = JSON.parse(localStorage.getItem('login_data'));
              
            alert('User LogedIn successssfully !!');
            //window.location="index.html";    
            }catch(err){
                console.log("err");
                alert('something went wrong !' );
            }; 
        }else{
            alert('password length should be more than 9!'); 
        };
        };
      }
 
      let u1 =new user();
      Login();
    function Login(){
    const username = document.getElementById('l_username').value;
    const password =document.getElementById('l_password').value;
    const email =document.getElementById('l_email').value;
    if(username==""||password==""||email==""){
        alert("check your data!");
    }else{
        u1.Login(username,password,email);
        span.innerText = username;
    }
    
      
   }
   
});
}

usernameChange();
