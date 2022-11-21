import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from"./StampList.module.css";

function StampList(){
    return (
        <>
           <Header title="적립내역 확인"/>
            <div className={styles.stampContainer}>
                <p className={styles.stampTitle}>적립 내역확인</p>
                <div className={styles.listContainer}>
                    <ul>
                        <li>
                            <Link to="/stamp_view">
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            </Link>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>
                                    고법02 고법02 고법02 고법02 고법02 고법02 
                                    고법02 고법02 고법02 고법02 고법02 고법02
                                    고법02 고법02 고법02 고법02 고법02 고법02
                                    고법02 고법02 고법02 고법02 고법02 고법02
                                    고법02 고법02 고법02 고법02 고법02 고법02
                                </span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>
                                    고법02 고법02 고법02 고법02 고법02 고법02 
                                    고법02 고법02 고법02 고법02 고법02 고법02
                                    고법02 고법02 고법02 고법02 고법02 고법02
                                    고법02 고법02 고법02 고법02 고법02 고법02
                                    고법02 고법02 고법02 고법02 고법02 고법02
                                </span>
                                <span className={styles.result}></span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                        <li>
                            <p className={styles.titleWrap}>
                                <span className={styles.title}>고법02</span>
                                <span className={styles.result}>발급완료</span>
                            </p>
                            <p className={styles.address}>서울특별시 송파구 송파대로 111</p>
                        </li>
                    </ul>
                </div>
            </div>
           <Navigation />
        </>
    );
}

export default  StampList;