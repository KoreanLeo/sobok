import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import styles from"./StampAccumulate.module.css";


function StampAccumulate(){

    let navigate = useNavigate();

    return (
        <>
            <Header title="스템프 적립요청"/>
            <div className={styles.stampContainer}>
                <p className={styles.title}>스템프 적립</p>
                <img src="../images/sobok_logo_and_title.svg" alt="소복 스탬프 적립 요청" className={styles.logo}/>
                <p className={styles.phoneNumber}>010-0000-0000</p>
                <p className={styles.help}>카페 직원분에게 해당 번호를 알려주세요.</p>

                <div className={styles.btnWrap}>
                    <button className={styles.okBtn} onClick={() => {navigate(-1)}}>확인</button>
                </div>
            </div>
            <Navigation />
        </>
    );
}

export default  StampAccumulate;