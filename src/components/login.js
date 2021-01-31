import React, { useState, userEffect, useEffect } from "react";
import { useHistory } from 'react-router-dom';

// import  Header  from "./header";
import { Navbar, Nav  } from "react-bootstrap";
import { Link } from "react-router-dom";

// export default function Header_nav() {
//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
//         <Navbar.Brand href="/">Navbar</Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="/">Sign up</Nav.Link>
//         </Nav>
//       </Navbar>
//     </div>
//   );
// }


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    // useEffect( () => {
    //     if (localStorage.getItem('user-info')) {
    //         history.push("/add")
    //     }
    // }, [])

    

    async function login () {
        console.warn(username, password)
        let item = {username, password};
        let result = await fetch ("http://chatizone.herokuapp.com/auth/", {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json(item);
        localStorage.setItem("user-info", JSON.stringify(result));
        console.log(result);
        history.push("/add")

    }
    return (
        <div>
            <div className = 'col-sm-6 offset-sm-3' >
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                        <Link to='/register' >Sign up</Link>
                        {/* <Nav.Link href="/">Sign up</Nav.Link> */}
                        </Nav>
                    </Navbar>
                </div>
                <br />
                <br />
                <input type = 'text' placeholder = 'User Name'
                onChange = { e => setUsername(e.target.value) }
                />
                <br />
                <br />
                <input type = 'text' placeholder = 'Pasword'
                onChange = { e => setPassword(e.target.value) }
                />
                <br />
                <br />
                <button onClick = {login}>login</button>
             </div>
            
        </div>
    )

}


// class Login extends Component {
//     state = {
//         credentials: {username:'', password:''}
//     }

//     login = event =>{
       
//         fetch('http://127.0.0.1:8000/auth/',{
//             method:'POST',
//             headers:{'Content-Type':'application/json'},
//             body:JSON.stringify(this.state.credentials)
//         })
//         .then(data =>data.json())
//         .then(
//             data => {
//                 this.props.userLogin(data.token)

//             }
//         ).catch(error => console.error("here",error))
    
//     }



//     register = event =>{
    
//         fetch('http://127.0.0.1:8000/api/users/',{
//             method:'POST',
//             headers:{'Content-Type':'application/json'},
//             body:JSON.stringify(this.state.credentials)
//         })
//         .then(data =>data.json())
//         .then(
//             data => {
//                 console.log(data.token);

//             }
//         ).catch(error => console.error("here",error))



//     }
//     inputChanged = event =>{
//         const cred = this.state.credentials;
//         cred[event.target.name] = event.target.value;
//         this.setState({credentials : cred});
//     }


//     render() {
//         return (
//             <div>
//                 <h1> login user form</h1>
//                 <lable>
//                     Username:
//                     <input type="text" name="username"
//                     value={this.state.credentials.username} 
//                     onChange={this.inputChanged}/>
//                 </lable>
//                 <br/>
//                 <lable>
//                     Password : 
//                     <input type="password" name="password"
//                     value={this.state.credentials.password} 
//                     onChange={this.inputChanged}/>
//                 </lable>
//                 <br/>
//                 <button onClick={this.login}>Login</button>
//                 <button onClick={this.register}>Register</button>
//             </div>
//         );
//     }
// }

// export default Login;