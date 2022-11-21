import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import styles from"./StampIssued.module.css";

function StampIssued(){
    return (
        <>
           <Header title="스템프 적립요청"/>
            <div className={styles.stampContainer}>
                <p className={styles.title}>스템프 적립</p>
                <img src="../images/sobok_logo_and_title.svg" alt="소복 스탬프 적립 요청" className={styles.logo}/>
                <p className={styles.help}>회원님의 번호와 적립개수를 입력해주세요.</p>

                <label className={styles.label}>핸드폰 번호<b>*</b></label>
                <div className={styles.iptWrap}>
                    <input type="text" placeholder="010-0000-0000" className={styles.iptWrap}/>
                </div>

                <label className={styles.label}>스탬프 갯수<b>*</b></label>
                <div className={styles.iptWrap}>
                    <input type="text" placeholder="1개 이상 입력" className={styles.iptWrap}/>
                </div>

                <div className={styles.btnWrap}>
                    <button className={styles.okBtn}>적립하기</button>
                </div>
            </div>
            <Navigation />
        </>
    );
}

export default  StampIssued;