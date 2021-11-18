import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init";
// import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();


const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [loginUser, setLoginUser] = useState('');
    const [loginData, setLoginData] = useState({});

    const auth = getAuth();





    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
                saveUser(user.email, user.displayName, 'PUT');
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;

            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
            setIsLoading(false);
        })
    }, [auth])


    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegistration = e => {
        setLoginUser(loginData.email, loginData.password,)
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
            return;
        }

    }

    const processLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                console.log(user);
                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const registerNewUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
                saveUser(email, name, 'POST');
            })
            .catch(error => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).finally(() => setIsLoading(false));
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://floating-oasis-79529.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        handleGoogleSignIn,
        toggleLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        error,
        user, isLogin,
        logOut,
        isLoading,
        loginUser,
        handleOnChange,

    }
}

export default useFirebase;