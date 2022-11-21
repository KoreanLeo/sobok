import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from"./MemberWithdrawalComplete.module.css";

function MemberWithdrawalComplete(){
    return (
        <div className="sub_content">
                <div className={styles.Container}>
                    <img src="../images/sobok_logo_and_title.svg" alt="소복 회원탈퇴 완료" className={styles.logo}/>
                    <p className={styles.title01}>소복 회원 탈퇴</p>
                    <div className={styles.contentWrap}>
                        회원탈퇴가 완료되었습니다.
                    </div>
                    <ul className={styles.buttonWrap}>
                        <li>
                            <Link to="/">
                                <button className={styles.ok_btn}>확인</button>
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default  MemberWithdrawalComplete;