const SignUpForm = () => {
    return ( 
        <div className="form-wrapper">
            
            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" placeholder="Email"/>
            <br />

            <label htmlFor="username"></label>
            <input type="text" id="email" name="username" placeholder="username"/>
            <br />
            
            <label htmlFor="create-pswrd"></label>
            <input type="text" id="pswrd" name="create-pswrd" placeholder="Create password"/>
            <br />

            <label htmlFor="confirm-pswrd"></label>
            <input type="text" id="pswrd" name="confirm-pswrd" placeholder="Confirm password"/>
            <br />

            <input type="submit" value="Submit"></input>
            <div className="dont-have-account-container">
                <p>Already have an account?</p>
                <a href="/signIn">SignIn</a>
            </div>
        </div>
        
    )
}

export default SignUpForm;
