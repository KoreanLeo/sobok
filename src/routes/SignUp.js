import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Header from 'components/Header';
import React, { useEffect, useState } from 'react'; 
import styles from"./SignUp.module.css";
import { Link } from "react-router-dom";

function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    //error
    const [error, setError] = useState("");
    const [pwdError, setPwdError ] = useState(false);
    
    //complete
    const [compelete, setComplete] = useState(false);

      


    const onChange = (e) => {
        const {
            target : {name, value},
        } = e;
        
        if( name === "name" ){
            setName(value);
        } else if( name === "email" ){
            setEmail(value);
        }else if( name === "password" ){
            setPassword(value);
        }else if( name === "passwordCheck" ){
            setPasswordCheck(value);
        }
    }

    useEffect(() => {
        if(password !== passwordCheck){
            setPwdError(true);
        }else if(password === passwordCheck){
            setPwdError(false);
        }
    },[passwordCheck]);
    

    const onSubmit = async (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            setComplete(true)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            setError(errorCode);
        });
    }

    return (
        <div className={styles.signUp_container}>
            <Header title="회원가입"/>
            <div className={styles.singUp_wrap}>
                    <form onSubmit={onSubmit}>
                        <div className={styles.ipt_wrap}>
                            <p className={styles.label}>성함</p>
                                <p>
                                    <input 
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={onChange}
                                        placeholder="성함을 입력해주세요."
                                        className={styles.ipt}
                                        required
                                    />
                            </p>
                        </div>
                        <div className={styles.ipt_wrap}>
                            <p className={styles.label}>이메일</p>
                            <p>
                                <input 
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    placeholder="이메일을 입력해주세요."
                                    className={styles.ipt}
                                    required
                                />
                            </p>
                            <p className={`${styles.help}`}>
                                {(error === 'auth/email-already-in-use')? "● 이미 사용중인 이메일입니다.": ""}
                            </p>
                        </div>
                        <div className={styles.ipt_wrap}>
                            <p className={styles.label}>비밀번호</p>
                            <p>
                                <input 
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    placeholder="비밀번호를 입력해주세요."
                                    className={styles.ipt}
                                    required
                                />
                            </p>
                            <p className={`${styles.help}`}>
                                {(error === 'auth/weak-password')? "● 비밀번호를 6자리 이상 입력해주세요.": ""}
                            </p>
                        </div>
                        <div className={styles.ipt_wrap}>
                        <p className={styles.label}>비밀번호 확인</p>
                            <p>
                                <input 
                                    type="password"
                                    name="passwordCheck"
                                    value={passwordCheck}
                                    onChange={onChange}
                                    placeholder="비밀번호를 재입력해주세요."
                                    className={styles.ipt}
                                    required
                                />
                            </p>
                            <p className={`${styles.help}`}>{ (pwdError) ? '● 비밀번호 불일치' : '' }</p>
                        </div>

                        <input type="submit" value="회원가입" className={styles.signup_btn}/>
                    </form>
            </div>

            { (compelete) ? 
                <div className={styles.conplete_popup}>
                    <div className={styles.popup_container}>
                        <img src="../images/sign_up_complete.svg" alt="가입이 완료되었습니다."/>
                        <p>가입이 완료되었습니다.</p>
                        <Link to="/"><button type="button" className={styles.complete_btn}>확인</button></Link>
                    </div>
                </div>
                :
                ""
            }
           
        </div>
    );
}

export default  SignUp;