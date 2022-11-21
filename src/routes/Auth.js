
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
                    placeholder="이메일을 입력해주세요." 
                    onChange={onChange}
                    value={email}
                    required 
                    className={`${styles.ipt} ${styles.email}`}
                />
                <input 
                    name="password"
                    type="password" 
                    placeholder="비밀번호를 입력해주세요." 
                    onChange={onChange}
                    value={password}
                    required 
                    className={`${styles.ipt} ${styles.password}`}
                />

                <input type="submit" value="로그인" className={styles.logInBtn}/>
            </form>

            <button 
                type="button"
                onClick={onSocialClick}
                name="google"
                className={styles.socialLoginBtn}
            >
                Google 로그인
            </button>

            <div className={styles.storekeeperContainer}>
                <p className={styles.title}>점주님이신가요?</p>
                <Link to="/storekeeper_regist">
                <button className={styles.signUpBtn}>점주 회원가입 신청</button>
                </Link>
            </div>

            <ul className={styles.options}>
                <li><Link to="/signup">회원가입</Link></li>
                <li>아이디 / 비밀번호 찾기</li>
            </ul>

            { (error) ?  
                <div className={styles.help_container}>
                    이메일 주소나 비밀번호가 틀립니다
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