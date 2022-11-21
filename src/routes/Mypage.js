import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from"./MyPage.module.css";

const List = styled.div`
    /* 마이페이지 리스트 */
    border-top: ${props => props.bordertop ? "1px solid #dfdfdf" : "unset"};
    border-bottom:1px solid #dfdfdf;
    padding: 15px 10px;
    font-size: 16px;
`;


function Mypage(){

    return (
        <>
           <Header title="마이페이지"/>
           <div className="sub_content">
                <div className={styles.profileWrap}>
                    <div className={styles.leftBox}>
                        <p className={styles.name}><span>고법</span>님 마이페이지</p>
                        <p className={styles.produce}>소상공인 카페 스템프 서비스</p>
                    </div>
                    <div className={styles.rightBox}>
                        <button>로그아웃</button>
                    </div>
                </div>

                <ul className={styles.stampList}>
                    <li>
                        <Link to="/stamp_accumulate">
                            <div className={styles.item}>
                                <div className={styles.icon}></div>
                                <p className={styles.title}>통합스템프 적립</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/stamp">
                            <div className={styles.item}>
                                <div className={styles.icon}></div>
                                <p className={styles.title}>적립내역</p>
                                {/* 점주한테는 발급내역으로, 링크는 /stamp_list로 변경하기 */}
                            </div>
                        </Link>
                    </li>
                </ul>

                <div className={styles.StoreBtnWrap}>
                    <Link to="/stamp_application">
                        <button className={styles.orangeBtn}>
                            카페 스탬프 제휴 신청하기 
                        </button>
                    </Link>
                </div>
                <div className={styles.StoreBtnWrap}>
                    <div className={styles.StoreInfo}>
                        <p className={styles.title}>현재 <span className={styles.orange}>경희대학교 카페투어 스탬프</span> 이용중입니다.</p>
                        <p className={styles.done}>종료일</p>
                        <p className={styles.date}>2022.01.01</p>
                    </div>
                </div>
                

                <Link to="/editmember">
                    <List bordertop>회원정보 수정</List>
                </Link>
                <Link to="/store_regist">
                    <List>매장등록</List>
                </Link>
                <Link to="/stamp_modify">
                    <List>쿠폰 정보 변경</List>
                </Link>
                
           </div>
           <Navigation />
        </>
    );
}

export default  Mypage;