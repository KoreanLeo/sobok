
import styles from"./Auth.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { provider } from "fbase";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword, 
    signInWithPopup 
} from "firebase/auth";

const Auth = () => {

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const onChange = (e) => {
        const{
            target: {name, value},
        } = e;
        if(name === "email"){
            setEmail(value)
        }else if ( name === "password" ){
            setPassword(value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // login
            const user = userCredential.user;
        })
        .catch((error) => {
            /*
            const errorCode = error.code;
            const errorMessage = error.message;
            */
            setError(error.code); 
            setInterval(() => setError("") , 5000);
            setPassword("");
        });
    }

    const onSocialClick = (event) => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage);
        });
    }

    useEffect(() => {
        
    } , [useEffect])

    
    return(
    <div className={styles.login_auth}>
        <div className={styles.login_box}>

            <form onSubmit={onSubmit}>
                <img src="../images/sobok_logo.svg" alt="sobok logo" className={styles.login_logo}/>

                <input 
                    name="email" 
                    type="email"
                    placeholder="???????????? ??????????????????." 
                    onChange={onChange}
                    value={email}
                    required 
                    className={`${styles.ipt} ${styles.email}`}
                />
                <input 
                    name="password"
                    type="password" 
                    placeholder="??????????????? ??????????????????." 
                    onChange={onChange}
                    value={password}
                    required 
                    className={`${styles.ipt} ${styles.password}`}
                />

                <input type="submit" value="?????????" className={styles.logInBtn}/>
            </form>

            <button 
                type="button"
                onClick={onSocialClick}
                name="google"
                className={styles.socialLoginBtn}
            >
                Google ?????????
            </button>

            <div className={styles.storekeeperContainer}>
                <p className={styles.title}>??????????????????????</p>
                <Link to="/storekeeper_regist">
                <button className={styles.signUpBtn}>?????? ???????????? ??????</button>
                </Link>
            </div>

            <ul className={styles.options}>
                <li><Link to="/signup">????????????</Link></li>
                <li>????????? / ???????????? ??????</li>
            </ul>

            { (error) ?  
                <div className={styles.help_container}>
                    ????????? ????????? ??????????????? ????????????
                </div>
                :
                null
            }
            
        </div>
        <footer className={styles.footer}>&copy; {new Date().getFullYear()} Sobok</footer>
        
    </div>
    )
}

export default Auth;