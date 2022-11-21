import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from"./Navigaion.module.css";
import { useLocation } from "react-router-dom";

function Navigation(){

    const location = useLocation();

    return (
        <nav className={styles.navigation}>
            <ul>
                <li className={(location.pathname === '/news') ? styles.active : null}>
                    <Link to="/news">
                    <div className={styles.icon_wrap}>
                        <div className={`${styles.icon} ${styles.news}`}></div>
                        <span className={styles.title}>소식</span>
                    </div>
                    </Link>
                </li>
                <li className={(location.pathname === '/event') ? styles.active : null}>
                    <Link to="/event">
                        <div className={styles.icon_wrap}>
                            <div className={`${styles.icon} ${styles.trand}`}></div>
                            <span className={styles.title}>이벤트</span>
                        </div>
                    </Link>
                </li>
                <li className={(location.pathname === '/') ? styles.active : null}>
                    <Link to="/">
                        <div className={styles.icon_wrap}>
                            <div className={`${styles.icon} ${styles.home}`}></div>
                            <span className={styles.title}>홈</span>
                        </div>
                    </Link>
                </li>
                <li className={(location.pathname === '/store') ? styles.active : null}>
                    <Link to="/store">
                    <div className={styles.icon_wrap}>
                        <div className={`${styles.icon} ${styles.bukit}`}></div>
                        <span className={styles.title}>스토어</span>
                    </div>
                    </Link>
                </li>
                <li className={(location.pathname === '/mypage') ? styles.active : null}>
                    <Link to="/mypage">
                        <div className={styles.icon_wrap}>
                            <div className={`${styles.icon} ${styles.mypage}`}></div>
                            <span className={styles.title}>My</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default  Navigation;