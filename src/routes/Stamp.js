import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from"./Stamp.module.css";

function Stamp(){
    return (
        <>
           <Header title="스템프 적립"/>
           <div className={styles.stampContainer}>
                <div className={styles.storeTitle}>
                    <div class={styles.logo} style={{backgroundColor:'pink'}}></div> {/* 로고는 있을 시에만 background-image로 등록 */}
                    경희대학교 카페 투어 스탬프 
                </div>
                <ul className={styles.cafeList}>
                    <li className={styles.on}>경희대학교</li>
                    <li>이문시장</li>
                    <li>동대문구</li>
                </ul>

                <ul className={styles.stampList}>
                    <li className={styles.on}>
                        <div className={styles.itemBox}>
                            <div className={styles.itemIcon}></div>
                            <p className={styles.title}>카페A</p>
                            <p className={styles.date}>2022. 01. 01<br/>12:00</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.itemBox}>
                            <div className={styles.itemIcon}></div>
                            <p className={styles.title}>카페A</p>
                            <p className={styles.date}>2022. 01. 01<br/>12:00</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.itemBox}>
                            <div className={styles.itemIcon}></div>
                            <p className={styles.title}>카페A</p>
                            <p className={styles.date}>2022. 01. 01<br/>12:00</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.itemBox}>
                            <div className={styles.itemIcon}></div>
                            <p className={styles.title}>카페A</p>
                            <p className={styles.date}>2022. 01. 01<br/>12:00</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.itemBox}>
                            <div className={styles.itemIcon}></div>
                            <p className={styles.title}>카페A</p>
                            <p className={styles.date}>2022. 01. 01<br/>12:00</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.itemBox}>
                            <div className={styles.itemIcon}></div>
                            <p className={styles.title}>카페A</p>
                            <p className={styles.date}>2022. 01. 01<br/>12:00</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.itemBox}>
                            <div className={styles.itemIcon}></div>
                            <p className={styles.title}>카페A</p>
                            <p className={styles.date}>2022. 01. 01<br/>12:00</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.itemBox}>
                            <div className={styles.itemIcon}></div>
                            <p className={styles.title}>카페A</p>
                            <p className={styles.date}>2022. 01. 01<br/>12:00</p>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.itemBox} ${styles.complete}`}>
                            <div className={styles.itemIcon}></div>
                            <p className={styles.title}>상품 받기</p>
                        </div>
                    </li>
                </ul>

                <div className={styles.btnWrap}>
                    <Link to="/check_cupon">
                        <button className={styles.okBtn}>쿠폰 확인하기</button>
                    </Link>
                </div>
                
           </div>
           <Navigation />
        </>
    );
}

export default  Stamp;