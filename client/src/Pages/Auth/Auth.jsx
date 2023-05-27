import React ,{useState} from "react";
import icon1 from '../../assets/icon1.png'
import './Auth.css'
import AboutAuth from'./AbouAuth'
const Auth=()=>{
    const [isSignup,setIsSignup]=useState(false)
    const handleSwitch=()=>{
        setIsSignup(!isSignup)
    }
    return(
        <div>
           <section class ='auth-section'>
            {isSignup && <AboutAuth/>}
            <div className="auth-container">
                {!isSignup && <img src={icon1} alt='stack overflow'className="login-logo"/>}
                <form>
                
                        { isSignup &&
                            <label htmlFor='name'>
                             <h1>DisplayName</h1>
                             <input type="text"id='name' name='name'/>
                           </label>}
                
                    <label htmlfor='email' >
                        <h1>Email</h1>
                        <input type="email" name='name'id='email'></input>
                    </label>
                    <label htmlfor='password' >
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h1>Password</h1>
                        {!isSignup && <p style={{color:"#007ac6", fontSize:'13px'}}>forgot password?</p>}
                        </div>
                        <input type="password" name='name'id='password'></input>
                        {isSignup &&<p style={{fontSize:"13px"}}>Passwords must contain atleast eight<br></br> characters,including atleast 1 letter and 1 <br></br> number</p>}
                    </label>
                    
                        {isSignup &&
                             <label htmlFor="check">
                                <input type="checkbox" id="check"></input>
                                <p style={{fontSize:"13px"}}>opt-in to receive occasional,<br></br>product updates,user research invitations<br></br>company announcements and digests</p>
                             </label>}
                        
                            
                        
                    
                    <button type='submit' className="auth-btn">{isSignup ?'Signup': 'Log in'}</button>

                </form>
                <p>
                    {isSignup ? 'already have an account?': "Don't have an account?"}
                    <button type='button' className="'handle-switch-btn" onClick={handleSwitch}>{isSignup ? "Log in" :'sign-up'}</button>
                    {isSignup &&
                             
                                <p style={{color:"#666767",fontSize:"13px"}}>By clicking "sign up" ,you agree to our
                                    <span style={{color:"#007ac6"}}>terms of <br></br>service</span>,
                                    <span style={{color:"#007ac6"}}> privacy policy</span>and
                                    <span style={{color:"#007ac6"}}>cookie policy</span></p>}
                </p>
            </div>

           </section>
        
        </div>
    )
}
export default Auth