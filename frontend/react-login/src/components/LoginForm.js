import React, {useState}  from 'react'
import { getLocalStorageInfo } from '../utils/getLocalStorageInfo';


function LoginForm({Login, error}) {
    const [details, setDetails] = useState({ email:"", password:"" });

    const submitHandler = e => {
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            authorization: getLocalStorageInfo(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: details.email,
            password: details.password,
        }),
    })
        .then(response => response.json())
        .then((data) => {
            localStorage.setItem("token", data.jwtToken);
        

            console.log(data);
        })
        .catch((error) => console.log(error));

        e.preventDefault();
Login(details);
}
  return (
   <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {(error != "") ? ( <div className="error">{error}</div> ) : ""}
       
        <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>

        </div>
        <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <input type="submit" value="Login" />
      </div>
   </form>
  )
}

export default LoginForm;
// import React from 'react'
// const FormLogin = () => {
//    return (
//         <div className="container">
//             <div className="app-wrapper">
//                 <div>
//                     <h2 className="title">Login</h2>
//                 </div>
//                 <form className="form-wrapper" >
//                     <div className="email">
//                         <label className="label">Email</label>
//                         <input
//                             className="input"
//                             type="text"
//                             name="email"
//                        />
//                     </div>
//                     <div className="password">
//                         <label className="label">Password</label>
//                         <input
//                             className="input"
//                             type="password"
//                             name="password"
//                         />
//                     </div>
//                     <div>
//                         <button className="submit">LOGIN</button>
//                         <span className="form-input-login">
//                            Don`t have an account? Sign up<a href="#">here</a>
//                         </span>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default FormLogin;
