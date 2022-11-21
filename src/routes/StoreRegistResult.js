import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from './StoreRegistResult.module.css';

function StoreRegistResult(){
    return (
        <>
            <div className="sub_content">
                <div className={styles.Container}>
                    <img src="../images/sobok_logo_and_title.svg" alt="소복 점주 회원가입 신청 완료" className={styles.logo}/>
                    <p className={styles.title01}>점주 가입 신청이 완료되었습니다.</p>
                    <div className={styles.contentWrap}>
                        신청일 기준 1~2일 이내 검토 후<br/>
                        가입 완료 안내 메일 드리겠습니다.
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

export default  StoreRegistResult;