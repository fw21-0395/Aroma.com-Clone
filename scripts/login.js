 import {navbar} from "../components/navbar.js";
let navbar_div = document.getElementById('navbar');
 navbar_div.innerHTML=navbar();



 document.querySelector("#signup").addEventListener("click",()=>{
  // console.log("gb")
   document.querySelector("#log").classList.add("active");
   log.style.visibility="visible";
   document.getElementById('l_username').value="";
   document.getElementById('l_password').value="";
    document.getElementById('l_email').value="";
});


document.querySelector("#log #close-btntwo").addEventListener("click",()=>{
   //console.log("gbb")
   document.querySelector("#log").classList.remove("active");
   log.style.visibility="hidden";

});


document.querySelector("body").addEventListener("load",()=>{
    //console.log("gbb")
    let data = JSON.parse(localStorage.getItem('login_data'));
    if(data==null){
      span.innerText = `user`;
   
    }else{
      span.innerText = data.username;
    }
    
  });

function usernameChange() {
   
   let span = document.getElementById("open-popuptwo");
   let data = JSON.parse(localStorage.getItem('login_data'));
   if(data==null){
    span.innerText = `user`;
   
   }else{
    span.innerText = data.username;
   };



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
                if( this.username=="Neeraj" &&  this.password=="aroma_12345"){
                    alert('Admin LogedIn successssfully !!');
                     window.location="admin.html";    
    
                   }else{
                    localStorage.setItem('login_data',JSON.stringify(login_data ," login_data " ) );
                    alert('User LogedIn successssfully !!');
                    //if need to change the location of window give the next location below 
                   
                     window.location="topoffer.html";   
                   }

               // let data = JSON.parse(localStorage.getItem('login_data'));

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
    }
   }
});
}usernameChange();
