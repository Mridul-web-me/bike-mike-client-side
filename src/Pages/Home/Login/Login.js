import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
// import useFirebase from "../../hooks/useFirebase";
import { useHistory, useLocation } from "react-router";
import './Login.css'


const Login = () => {

    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    console.log("come from", location.state?.from);
    const history = useHistory()
    const signIn = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri)

            })
    }
    const { handleGoogleSignIn, toggleLogin, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, error, isLogin } = useFirebase();

    return (
        <div className="mx-5">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary text-center m-4">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <div className="btnn">
                    <button type="submit" className="btn btn-primary text-center mx-4">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                    <Link onClick={signIn} to='/login'><i className="fab fa-google"></i></Link>
                </div>

            </form>


        </div>
    );

}

export default Login;