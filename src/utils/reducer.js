export const initialState = {
    user :  null,
    token: null,
    showSignUp : false
}

const reducer =(state, action)=>{
    switch(action.type){
        case 'SET_USER':
            console.log(action)
            return {...state,
            user:action.use,
        }
        case 'SET_TOKEN':
            return {...state,
            taken :action.token,
        }
        case 'SET_SHOW_SIGN_UP':
            return {...state,
            showSignUp :action.showSignUp,
        }
        default:
            return state;
    }

}
export default reducer;