import React from 'react';

const Landing = () => {
    return (
           <div>
           <nav style={{margin: '10px'}}>
              <img src='logo_transparent.png' alt='logo' style={{float: 'left', marginRight: '10px'}} ></img>
                <h2 style={{float: 'left', margin:'25px'}}>Welcome To InventorMe!</h2>
                <div style={{float: 'right', margin: '25px'}}>
                    <button id='addItem' class ="glass" type = 'submit' style={{margin:'10px'}}>Add Item</button>
                    
                    <button id='login' class='glass' type="submit" style={{margin:'10px'}}>Login</button>
                    <button id ='createAccount' class="glass" type="submit" style={{margin:'10px'}}>Create Account</button>
                </div>
            </nav>
            
                <h3 style={{paddingTop: '100px', textAlign:'center'}}>Create your own customizable inventory with InventorMe!</h3>
                <p style={{textAlign:'center'}}>
                    <li>Easily organize your inventory at the click of a button</li>
                    <li>Add item details with custom fields</li>
                    <li>Search inventory by name, category, quantity</li>
                   
                </p>
        </div>
       
    );
};

export default Landing;