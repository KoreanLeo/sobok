import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import styles from"./StampView.module.css";

function StampView(){
    return (
        <>
           <Header title="적립내역 확인"/>
           <div className={styles.stampContainer}>
                <p className={styles.f_title}>
                    고법 02
                </p>
                <div className={styles.listBox}>
                    <p className={styles.label}>스탬프 현황</p>
                    <p className={`${styles.content} ${styles.orange}`}>발급완료</p>
                </div>
                <div className={`${styles.listBox} ${styles.borderBottom}`}>
                    <p className={styles.label}>총 방문 횟수</p>
                    <p className={styles.content}>2회</p>
                </div>
                
                <p className={styles.stampTitle}>적립내역</p>
                <ul className={styles.historyList}>
                    <li>
                        <p className={styles.title}>2022.01.01</p>
                        <p className={styles.result}>발급완료</p>
                    </li>
                    <li>
                        <p className={styles.title}>2022.01.01</p>
                        <p className={styles.result}>발급완료</p>
                    </li>
                    <li>
                        <p className={styles.title}>2022.01.01</p>
                        <p className={styles.result}>발급완료</p>
                    </li>
                    <li>
                        <p className={styles.title}>2022.01.01</p>
                        <p className={styles.result}>발급완료</p>
                    </li>
                    <li>
                        <p className={styles.title}>2022.01.01</p>
                        <p className={styles.result}>발급완료</p>
                    </li>
                    <li>
                        <p className={styles.title}>2022.01.01</p>
                        <p className={styles.result}>발급완료</p>
                    </li>
                    <li>
                        <p className={styles.title}>2022.01.01</p>
                        <p className={styles.result}>발급완료</p>
                    </li>
                </ul>
           </div>
           <Navigation />
        </>
    );
}

export default  StampView;