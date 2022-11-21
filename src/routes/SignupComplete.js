import React from 'react'; 
import styles from"./SignupComplete.module.css";

import { Link } from 'react-router-dom';

function SignupComplete(){
    return (
        <>
        <div className="sub_content">
                <div className={styles.Container}>
                    <img src="../images/sobok_logo_and_title.svg" alt="소복 회원가입 완료" className={styles.logo}/>
                    <p className={styles.title01}>회원가입이 완료되었습니다.</p>
                    <div className={styles.contentWrap}>
                        <span className={styles.orange}>무엇부터 시작해야하나요 ?</span><br/>
                        원활한 사이트 이용을 위하여<br/>
                        마이페이지 &gt; 사이트 이용방법 안내에서<br/>
                        이용 방법을 확인해주세요.
                    </div>
                    <ul className={styles.buttonWrap}>
                        <li>
                            <Link to="/">
                                <button className={styles.ok_btn}>메인으로 이동</button>
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
    </>
    );
}

export default  SignupComplete;