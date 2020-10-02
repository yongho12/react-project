import React, { useState, useContext } from 'react';
//import { Redirect } from 'react-router-dom';
//import { baseUrl } from './config';
import { UserContext } from './UserContext';
import back_img from "../welcome-bg.jpg";

const LoginPanel = (props) => {
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState('demo1@example.com');
    const [password, setPassword] = useState('password');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/users/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (response.ok) {
            const { token } = await response.json();
            login(token);
            props.history.push("/cases");
        } 
        // yongho
        else {
            //props.history.push( ) // sign up
        } 
    };

    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

//Below is working. 
    // return (
    //   <main className="centered middled">
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           type="text"
    //           placeholder="Email"
    //           value={email}
    //           onChange={updateEmail}
    //         />
    //         <input
    //           type="password"
    //           placeholder="Password"
    //           value={password}
    //           onChange={updatePassword}
    //         />
    //         <button type="submit">Login</button>
    //       </form>
    //     {/* </div> */}
    //   </main>
    // );

     return (
       <main>
         <div className="authBox">
           <div className="leftBox">
             <img src={back_img} alt="background-img" className="bg-image" />
             <div className="imageText"> code whatever</div>
             <div className="imageText"> buidl your </div>
           </div>
           <div className="rightBox">
             <div className="right-form">
               <form onSubmit={handleSubmit} className="login-form">
                 <input
                   type="text"
                   placeholder="Email"
                   value={email}
                   onChange={updateEmail}
                 />
                 <input
                   type="password"
                   placeholder="Password"
                   value={password}
                   onChange={updatePassword}
                 />
                 <button type="submit">Login</button>
               </form>
             </div>
           </div>
         </div>
       </main>
     );
};

export default LoginPanel;
