
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import SignupDialog from "../user/SignupDialog"
import { useStateValue } from "../../utils/StateProvider";
function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
      account:null,
      password:null
  });
  const forgetPwd=() =>{
    history.push("/forgetPwd");
  }
  const [signDialog, setSignDialog] = useState(false);
  const Login = () =>{
    //write ur fetch function in service.js
    // userlogin(account,password)
    // .then(auth =>{
    //   if(auth.success){
    //     history.push("/home");
    //   }else {
        
    //   }
    // })
    // .catch(error => alert(error.message))
  }
  const handleClose=()=>{
    console.log(signDialog)
    setSignDialog(!signDialog)
  }
  return (
    <div className="login">
        <div className="paper">
          <Paper elevation={3} className="login_ad">
            <div className="login_sign">
                <h1>Join Twitter today</h1>
                <div className="login_input">
                  <input placeholder="Phone, Account, or Email" type="text" onChange={e=> setUser({
                            ...user, 
                            account: e.target.value
                        }
                    )}/>
                  <input placeholder="password" type="text" onChange={e=> setUser({
                            ...user, 
                            password: e.target.value
                        }
                    )}/>
                  <Button className="tweet_btn" onClick={Login}>Log in</Button>
                  <Button className="tweet_btn" onClick={handleClose}>Sign up</Button>
                  <Button color="primary" onClick={forgetPwd}>Forget Password</Button>
                </div>
              </div>
          </Paper> 
        </div>
        <SignupDialog open={signDialog} onClose={handleClose} />
    </div>
  )
}

export default Login;