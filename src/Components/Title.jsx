import React,{ useState,useEffect } from 'react';
import firebase, {projectAuth} from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import Upload from "../Components/Upload";


const Title =() =>{

  const [user] = useAuthState(projectAuth);
  const signIn = () => {
    !user ? projectAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
   :
    projectAuth.signOut();
  }

    
  // const signIn = () => {
  //   projectAuth.signInWithEmailAndPassword(email, password);
  //   projectAuth.createUserWithEmailAndPassword(email, password);
  // }

   return(
     <>
       <div className="title">
       <h1>Firegram</h1>
       <div className="user-elements">

       <span className="btn-in-out" onClick={signIn}>{user ? "Sign out" : "Sign in"}</span>

     { user?  <span className="user-name">{user.displayName}</span>: null}
     { user ? <img src={user.photoURL } alt="user-pic" className="user-photo" /> : null  }
</div>
     
      { user ? <p className="WelCome-txt"> WelCome {user.displayName} 🤗 , Start Posting Pictures!! </p> :null }
      { !user ?
       <p className="WelCome-txt"> Please Sign In to Upload Pictures!!🤡 </p> : null }

       <h2>Public Gallery</h2>
     { user?  <p> POST </p> :null}
       {user && <Upload />}
       

       </div>
       

     </>

   );

}

export default Title;