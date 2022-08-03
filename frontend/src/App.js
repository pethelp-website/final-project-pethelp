// import React from 'react';
// import LoginForm from './components/login/LoginForm'
// import React, { useState } from "react";
// import LoginForm from "./components/login/LoginForm";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const adminUser = {
//     email: "",
//     password: ""
//   }

//   const [user, setUser] = useState({ email: "", password:""});
//   const [error, setError] = useState("");

//   const Login = details => {
//     console.log(details);

//     if(details.email === adminUser.email && details.password === adminUser.password){
//     console.log("Logged in");
//     setUser({
     
//       email: details.email
//     });
//   } else {
//     console.log("Details do not match!"); 
// setError("Details do not match!")
// }
//   }
//   const Logout = () => {
//     setUser({ email:""});
//   }
//   return (
//     <div className="App">
//       {(user.email !== "") ? (
//         <div className="welcome">
//           <h2>welcome</h2>
//           <button onClick={Logout}>Logout</button>
//           </div>
//       ) : (
//         <LoginForm   Login={Login}  error={error}/>
//       )}
//     </div> )
// }

// export default App;
//this is my real code
//error={error}
import React, { useState } from "react";
import LoginForm from "./components/login/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <LoginForm />
    </div>
  )
}
export default App;