const navbar = () => {

        return ` <div id="promo_section"> 
                
        <img src="./image/Screenshot 2022-11-10 at 2.46.38 PM.png" alt="">

        <p> Today only ! $3.50 All Concentrated Room Sprays | Code: FLURRY</p>

        <img src="./image/Screenshot 2022-11-10 at 2.46.38 PM.png" alt="">

    </div>

    <div id="pickup_store">


        <div id="pickup_store_div_1">

            <p>POINTS. PERKS. EXCLUSIVES.</p>
            <P>Join Rewards!</P>

        </div>

        <div id="pickup_store_div_2">

            <i class="fa-solid fa-location-dot"></i>
            <p>PICK UP IN STORE</p>
            <P>Set Store</P>

        </div>

    </div>

    <div id="navbar_section">

        <div id="navbar_section_top" >

            <div id="navbar_section_top_left">

            <a href="./index.html"> <img src="https://aroma-mallorca.com/wp-content/uploads/2022/01/aroma-logo.png" alt=""></a> 

            </div>

            <div id="navbar_section_top_right">

                <div id="search">

                    <input type="text">
                    <i class="fa-solid fa-magnifying-glass"></i>

                </div>

                <div id="profile">

                <div id="logoff">
                    <div id="div1">

                        <i  id="signup" class="fa-solid fa-user"></i>Hello, <span id="open-popuptwo"></span>
                    
                        <div id="log">
                                <div class="close-btntwo" id="close-btntwo">&times;</div>

                                <a class="anc" href="signup.html" title=" Sign Up">Sign Up</a>

                                <a class="anc" href="order-status.html" title="Order Tracking">Order Tracking</a>

                                <a class="anc" href="index.html" title="My wishlist">Home</a>

                                <a class="anc" href="wish_list.html" title="My wishlist">My wishlist</a>

                                <hr>

                                <div id="logtwo">
                                    
                                    <div class="inputtwo">
                                        <div id="forms">

                                            <div id="login-form">
                                                <h5>SIGN IN</h5>
                                                <span>If you already have an account with us, sign in below</span>
                                                <hr>

                                                    <label >Name</label>
                                                    <input type="text" id="l_username" placeholder="Username" />
                                                    <label >Email Address</label>
                                                    <input type="text" id="l_email" placeholder="Email" />
                                                    <label>Password</label>
                                                    <input type="text" id="l_password" placeholder="Password" />

                                        
                                                <button id="login">SIGN IN</button>
                            
                                            </div> 
                                            
                                        </div>

                                    </div>
                                
                                </div>

                        </div>

                    </div>
  
             </div>
                </div>

                

                <a id="cart_new" href="./cart.html"><i class="fa-solid fa-cart-arrow-down"></i></a>

            </div>

        </div>

        <div id="navbar_section_bottom">

         <p> <a href="./topoffer.html"> TOP OFFERS </a> </p>
         <p> <a href="./bodycare.html"> BODY CARRE </a> </p>
            <p>CANDLES</p>
            <p>WALLFLOWERS & AIR FRESHNERS</p>
            <p>HAND SOAPS & SANITIZERS</p>
            <p> <a href="men's.html"> MEN'S SHOP </a> </p>
            <p>MOXY</p>
            <p>HOLIDAY SHOP</p>

        </div>

    </div>
    `

}

//Named Export - Destructured Export
export { navbar };