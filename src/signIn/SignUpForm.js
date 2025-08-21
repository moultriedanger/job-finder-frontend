const SignUpForm = () => {
    return ( 
        <div className="form-wrapper">
            
            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" placeholder="Email"/>

            <label htmlFor="username"></label>
            <input type="text" id="email" name="username" placeholder="username"/>
           
            
            <label htmlFor="create-pswrd"></label>
            <input type="text" id="pswrd" name="create-pswrd" placeholder="Create password"/>
            

            <label htmlFor="confirm-pswrd"></label>
            <input type="text" id="pswrd" name="confirm-pswrd" placeholder="Confirm password"/>
        
            <input type="submit" value="Submit"></input>
            <div className="dont-have-account-container">
                <p>Already have an account?</p>
                <a href="/signIn">Sign In</a>
            </div>
        </div>
        
    )
}

export default SignUpForm;
