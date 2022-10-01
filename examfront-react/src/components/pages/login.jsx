// import React, { Component } from 'react'
// import AuthService from '../../../../examserver/src/main/java/com/stellar/examserver/controller/authcontroller.java';
// import '../../App.css'
// class login extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             username: '',
//            password: '',
//         }
//         this.signin = this.signin.bind(this);
//     }

//     signin(){
//         let loginRequest = {username: this.state.username, password: this.state.password};

//         AuthService.signin(loginRequest).then(res=>{
//             this.props.history.push('/home');
//         });
//                 console.log('employee => ' + JSON.stringify(loginRequest));

//     }

//     changeUserNameHandler= (event) => {
//                 this.setState({username: event.target.value});
//             }
            
//      changePasswordHandler= (event) => {
//                  this.setState({password: event.target.value});
//             }

//     render() {
//         return (
//           <section className="container">
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="card">
//                   <form className="box">
//                     <h1>Login</h1>
//                     <p className="text-muted"> Please enter your User Name and Password!</p>                  
//                             <input onChange={this.changeUsertNameHandler} autoComplete="off" type="text" name="username" placeholder="Username"/>                        
//                              <input onChange={this.changePasswordHandler} autoComplete="off" type="password" name="password" placeholder="Password"/> 
                     
//                           <div className="forgot text-muted" href="#">Forgot password?</div>
//                           <input onClick={this.signin} type="submit" name="" value="Login" href="#"/>
//                       <div className="col-md-12">
//                         <ul className="social-network social-circle">
//                             <li><div href="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></div></li>
//                             <li><div href="#" className="icoGoogle" title="Google +"><i className="fab fa-google-plus"></i></div></li>
//                         </ul>
//                     </div>

//                       <div className="form-group">
//                           <div className="custom-control custom-checkbox">
//                           </div>
//                       </div>
                      
//                   </form>
//             </div>
//         </div>
//     </div>
// </section>
//         );
//     }
// }
// export default login;