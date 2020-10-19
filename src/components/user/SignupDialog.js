import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// const handleClose=() =>{
//     console.log("23")
// }

function SignupModal(props) {
    const { onClose, open } = props;
    const [user, setUser] = useState({
        name:null,
        phone:null,
        email:null,
        birth:null
    });
    const [signUpMethod, setSignUpMethod] = useState({method:"phone",hint:"Use Email Instead"});
    const handleClose = () => {
        onClose(open);
      };
    const ToggleSignUp =(method) =>{
        if(method === 'phone'){
            setSignUpMethod({method:"email",hint:"Use Phone Instead"})
        }else if(method === 'email'){
            setSignUpMethod({method:"phone",hint:"Use Email Instead"})
        }
    }
    const submit =() =>{
        //API
        onClose(open);
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create your account</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={(e) => setUser({
                    ...user, 
                    name: e.target.value
                }
            )}
          />
          {signUpMethod.method === "phone" &&
            <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Phone"
                type="phone"
                fullWidth
                onChange={(e) => setUser({
                        ...user, 
                        phone: e.target.value
                    }
                )}
            />
        }
         {signUpMethod.method === "email" &&
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            onChange={(e) => setUser({
                    ...user, 
                    email: e.target.value
                }
            )}
          />
        }
        
        <h4>Birth of date</h4>
        <DialogContentText>
            This will not be shown pubicly. Comfirm your own age, even if this account is for bussiness, a pet, or something else
        </DialogContentText>
        <TextField
            id="date"
            label="Birthday"
            type="date"
            InputLabelProps={{
            shrink: true,
            }}
            onChange={(e) => setUser({
                    ...user, 
                    birth: e.target.value
                }
            )}
        />
        <Button href="#text-buttons" id="method" color="primary" onClick={() =>ToggleSignUp(signUpMethod.method)}>{signUpMethod.hint}</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      );
}

export default SignupModal

