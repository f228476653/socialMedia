import React from 'react'
import Button from '@material-ui/core/Button';
function ForgetPwd() {
    const search=()=>{
        
    }
    return (
        <div className="">
            <div className="main_header">
            <header>Password Reset</header>
            <h1>Find your Twitter account</h1>
            <p>Enter your email, phone number, or username.</p>
            <input type="text" />
            <Button className="tweet_btn_box" onClick={search}>Search</Button>
            </div>
        </div>
    )
}

export default ForgetPwd
