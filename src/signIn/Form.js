const Form = () => {
    return ( 
        <div className="form-wrapper">
            
            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" placeholder="Email"/>
            <br />
            
            <label htmlFor="pswrd"></label>
            <input type="text" id="pswrd" name="password" placeholder="Password"/>
            <br />

            <input type="submit" value="Submit"></input>
            <div className="dont-have-account-container">
                <p>Dont have an account?</p>
                <a href="/signUp">Create Account</a>
            </div>
        </div>
        
    )
}

export default Form;
