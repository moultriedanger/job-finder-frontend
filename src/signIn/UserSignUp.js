import SignUpForm from "./SignUpForm";
import './logIn.css';

const UserSignUp = () =>{
    return (
        <>
            <div className="page-container">
                <div className="sign-in-container">
                    <h1>SignUp</h1>
                    <SignUpForm/>
                </div>
            </div>
        </>
    )
}
export default UserSignUp;