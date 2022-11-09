
let create = document.getElementById("create");
create.addEventListener('click',function(){
let register_form = document.getElementById('register-form');
register_form.style.visibility="visible";
let form = document.querySelector('#forms');
form.style.height="auto";
});

create.addEventListener('dblclick',function(){
    let register_form = document.getElementById('register-form');

    register_form.style.visibility="hidden";
    let form = document.querySelector('#forms');
    form.style.height="300px";
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
            
            console.log(this);
           // let actual_data = JSON.stringify(this);
           let signup_data = (this);
            try{
            /*let res = await fetch (`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method: 'POST',
            body: actual_data,
            headers : {
                'Content-Type':'application/json',
            },
            
        });*/

       // let  data = await res.json();
       localStorage.setItem('signup_data',JSON.stringify(signup_data ," signup_data " ) );
       // let data = JSON.parse(localStorage.getItem('login_data'));
      
           // console.log('data',data);
            alert('${username} Signup successssfully !!');
            window.location="index.html";
           

        }catch(err){
            console.log('err!',err);
        }
        }else{
            alert('password length should be more than 9!'); 
        };
 };

   
        
        

};
let u1 =new user();

function Register(){
    const name = document.getElementById('name').value;
const last_name = document.getElementById('last_name').value;
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password=document.getElementById('password').value;

u1.signup(name,last_name,username,email,password);
}

