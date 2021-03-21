
import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import "./Login.css";
import {UserContext} from "../../App"
import { useHistory, useLocation } from "react-router";
const LogIn = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
if(firebase.apps.length===0)
{
  firebase.initializeApp(firebaseConfig);
}
const [newUser,setNewUser]=useState(false)
  const [user,setUser]=useState({
    isSignedIn:false,
    name:'',
    email:'',
    password:'',
    photo:''
  })
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
const handleIn=()=>{
firebase.auth().signInWithPopup(googleProvider)
.then(res=>{
  const {displayName,email,photoURL}=res.user
  
  const signedInUser={
    isSignedIn:true,
    name:displayName,
    email:email,
    photo:photoURL
  }
  setLoggedInUser(signedInUser)
  history.replace(from)
  setUser(signedInUser)
  console.log(displayName,email,photoURL)
})
.catch(error=>{
  console.log(error);
  console.log(error.message)
})
}
const handleFbSignIn=()=>{
  firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
console.log('fb use after sign in',user)
    var accessToken = credential.accessToken;

    
  })
  .catch((error) => {
   
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    var credential = error.credential;
  });
 
}
const handleOut=()=>{
  firebase.auth().signOut()
.then(res=>{
  const signOutUser={
    isSignedIn:false,
   
    name:'',
    email:'',
    photo:'',
    error:'',
    success:false
  }
  setUser(signOutUser)
})
.catch(error=>{
  console.log(error);
  console.log(error.message)
})
}
const handleChange=(e)=>{
let isFieldValid=true
  if(e.target.name==='email')
  {
isFieldValid=/\S+@\S+\.\S+/.test(e.target.value)

  }
  if(e.target.name==='password')
  {
const isPasswordValid=e.target.value.length>6
const passwordHasNumber=/\d{1}/.test(e.target.value)
isFieldValid=(isPasswordValid && passwordHasNumber)
  }
  if(isFieldValid)
  {
const newUserInfo={...user}
newUserInfo[e.target.name]=e.target.value;
setUser(newUserInfo)
  }
}
const handleSubmit=(e)=>{
  if(newUser && user.email&& user.password)
  {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
   .then(res=>{
       const newUserInfo={...user}
       newUserInfo.error=''
       newUserInfo.success=true
       setUser(newUserInfo)
      })
    .catch((error) => {
    const newUserInfo={...user}
    newUserInfo.error=error.message
    newUserInfo.success=false
    setUser(newUserInfo)
    updateUserName(user.name)
     
    });
  }
  if(!newUser && user.email && user.password)
  {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res=>{
      const newUserInfo={...user}
      newUserInfo.error=''
      newUserInfo.success=true
      setUser(newUserInfo)
      console.log('sign in user info',res.user);
    })
 .catch((error) => {
  const newUserInfo={...user}
  newUserInfo.error=error.message
  newUserInfo.success=false
  setUser(newUserInfo)
  });
  }
  e.preventDefault();
}
const updateUserName=name=>{

  var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name
 
}).then(function() {
  
  console.log('user Name Updated')
}).catch(function(error) {
 
  console.log('error')
});
}
  return (
    <div className="logIn container">
{user.isSignedIn && <p>Welcome: {user.name}</p>}
<div>
      <h1>  Authentication</h1>
    <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
    <label htmlFor="newUser">New User Sign Up</label>
    <form onSubmit={handleSubmit}>
      {newUser && <input name="name" type="text"  onBlur={handleChange} placeholder="Your name"/>}
      <br/>
    <input type="text" name="email" onBlur={handleChange} placeholder="Email" required/>
     <br/>
     <input style={{marginTop:'20px'}} type="password" name="password" onBlur={handleChange} placeholder="Password" required/>
     <br/>
     
     <input style={{marginTop:'20px',height:'30px',width:'183px',backgroundColor:'brown'}} type="submit" value={newUser ? "Sing Up" : "sign In"}/>
    </form>
<p style={{color:'red'}}>{user.error}</p>
{user.success && <p style={{color:'green'}}> User { newUser ? 'created' : 'Logged In'} successfully</p>}
      </div>
       <div class="">
         {user.isSignedIn ? (
          <button
          onClick={handleOut}
            class="btn btn-danger"
            type="button"
          >
            Logout from Google
          </button>
        ) : (
          <button
            onClick={handleIn}
            class="btn btn-danger"
            type="button"
          >
            Continue With Google
          </button>
        )}
      </div>
      <button style={{marginTop:'20px'}}
            onClick={handleFbSignIn}
            class="btn btn-primary"
            type="button"
          >
            Continue With Facebook
          </button>
     
</div>
 );
    }

export default LogIn;

