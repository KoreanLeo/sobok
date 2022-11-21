import styles from"./Detail.module.css";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Navigation from 'components/Navigation';
import { useNavigate } from 'react-router-dom';

function Detail(){

    let navigate = useNavigate();
    const [tabMenu, setTabMenu] = useState("정보");


    return (
        <div className={styles.detailContainer}>

            <header className={styles.header}>
                <button type="button" className={styles.backBtn} onClick={() => {navigate(-1)}}>
                    <img src="./images/white_back_icon.svg" alt="뒤로"/>
                </button>
                <button type="button" className={styles.zzimBtn}>
                    <img src="./images/zzim.svg" alt="찜등록" />
                    <img src="./images/zzim_active.svg" alt="찜" className={styles.active}/>
                </button>
            </header>

            {/*imgSlide */}
            <div className={styles.imgSlide}>
                <Swiper 
                    className={styles.mySwiper}
                    loop={true}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>

            {/* infoContainer */}
            <div className={styles.infoContainer}>
                <div className={styles.title}>
                    뚜스뚜스 
                    <button type="button" className={styles.modifyBtn}>
                        <img src="../images/modify_btn.svg" alt="수정"/>
                    </button>
                </div>
                <div className={styles.produce}>
                    흑석역 카페 뚜스뚜스 브런치도 파는 베이커리
                    흑석역 카페 뚜스뚜스 브런치도 파는 베이커리
                    흑석역 카페 뚜스뚜스 브런치도 파는 베이커리
                </div>
            </div>
            
            {/* menuContainer */}
            <ul className={styles.menuContainer}>
                <li className={(tabMenu === '정보') ? styles.active : null}>
                    <span className={styles.title} onClick={()=>{setTabMenu("정보");}}>정보</span>
                </li>
                <li className={(tabMenu === '소식') ? styles.active : null}>
                    <span className={styles.title} onClick={()=>{setTabMenu("소식");}}>소식</span>
                </li>
                <li className={(tabMenu === '메뉴') ? styles.active : null}>
                    <span className={styles.title} onClick={()=>{setTabMenu("메뉴");}}>메뉴</span>
                    <span className={styles.newIcon}>New</span>
                </li>
                <li className={(tabMenu === '피드') ? styles.active : null}>
                    <span className={styles.title} onClick={()=>{setTabMenu("피드");}}>피드</span>
                    <span className={styles.newIcon}>New</span>
                </li>
            </ul>

            {/* dataContainer */}

            {(tabMenu === '정보') ? 
                <div className={styles.menu01_cotain}>
                    <div className={styles.dataContainer}>
                        <p className={styles.data}>031-932-9337</p>
                        <p className={styles.data}>경기도 고양시 일산동구 장향동 847 옹신아트 1층</p>
                        <p className={styles.data}>11:00 - 21:00</p>
                    </div>
                    <ul className={styles.menu}>
                        <li><span>길찾기</span></li>
                        <li><span>공유하기</span></li>
                    </ul>
                    <div className={styles.modifyBtn}>
                        <p className={styles.title}>상세정보</p>
                    </div>
                    <ul className={styles.infoList}>
                        <li>
                            <div>
                                <img src="../images/main_ca_flog_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>콘센트</p>
                        </li>
                        <li>
                            <div className={styles.category_icon}>
                                <img src="../images/main_ca_study_table_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>큰 테이블</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_ca_parking_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>주차장</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_ca_pat_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>애견동반</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_mirror_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>통유리</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_smoking_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>흡연실</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/min_sec_nokids_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>노키즈존</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_sofa_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>쇼파</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_terrace_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>테라스</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_terrace_active.svg" className={`${styles.icon}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>루프탑</p>
                        </li>
                    </ul>
                </div>
                : 
                null
            }
            
            



            <Navigation />
        </div>
    );
}

export default  Detail;