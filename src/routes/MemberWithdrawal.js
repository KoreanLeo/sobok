import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 

import styles from"./MemberWithdrawal.module.css";

function MemberWithdrawal(){
    return (
        <>
            <Header title="회원탈퇴"/>
            <div className="sub_content">
                    <div className={styles.Container}>
                        <img src="../images/sobok_logo_and_title.svg" alt="소복 회원탈퇴" className={styles.logo}/>
                        <p className={styles.title01}>소복 회원 탈퇴</p>
                        <div className={styles.contentWrap}>
                            고법님께서는 <span className={styles.orange}>5개 매장</span>에서 <span className={styles.orange}>17개의 잔여 스탬프</span>가 있으세요.<br/>
                            회원 탈퇴 시 일주일 간 적립 내역을 저장 후 <br/>
                            재가입을 하지 않으시면 내역이 자동 삭제돼요.
                            <br/><br/>
                            정말로 회원탈퇴를 원하시나요?
                        </div>
                        <ul className={styles.buttonWrap}>
                            <li>
                                <button className={styles.ok_btn}>조금 더 써볼게요 !</button>
                            </li>
                            <li>
                                <button className={styles.ok_btn}>회원 탈퇴하기</button>
                            </li>
                        </ul>
                    </div>
            </div>
            <Navigation />
        </>
    );
}

export default  MemberWithdrawal;