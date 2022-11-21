import HeaderMain from 'components/HeaderMain';
import Navigation from 'components/Navigation';
import React, { useEffect, useState } from 'react'; 
import styles from"./Home.module.css";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import axios from 'axios';

import useGeolocation from "react-hook-geolocation";
import { Link } from 'react-router-dom';

function Home(){

    const geolocation = useGeolocation();
    const [ latitude, setLatitude ] = useState();
    const [ longitude, setLongitude ] = useState();
    const [area, setArea] = useState({}); 
    
    const mapApi = async () => {
        try {
          let response = await axios
            .get(
                `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latitude}&y=${longitude}&input_coord=WGS84`,
                {
                    headers : {
                        Authorization: `KakaoAK e1a4d89be16fd06a28085b372ddf5dbe`,  
                    },
                },
            )
            .then(response => { //sucess
                //const location = response.data.documents[0];
                const location = response;
                /*
                console.log({
                    location
                    //si: location.address.region_1depth_name,
                    //gu: location.address.region_2depth_name,
                    //dong: location.address.region_3depth_name,
                    // locationX: location.address.x,
                    // locationY: location.address.y,
                });
                */
            });
        } catch (error) {
            console.log(error.message);
        }
    };
        

    useEffect( () => {
        setLatitude(geolocation.latitude); //위도
        setLongitude(geolocation.longitude); //경도
        
        mapApi();

    } , [latitude, longitude])



    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return ('<span class="' + className + '"  ></span>');
        },
    };

    return (
        <>
            <HeaderMain />
            
            <div className={styles.main_container}>

                {/*스와이퍼*/}
                <div className={`${styles.slideContainer} main_slide`}>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className={styles.mySwiper}
                        loop={true}
                    >
                        <SwiperSlide className={styles.swiper}></SwiperSlide>
                        <SwiperSlide className={styles.swiper}></SwiperSlide>
                        <SwiperSlide className={styles.swiper}></SwiperSlide>
                        <SwiperSlide className={styles.swiper}></SwiperSlide>
                        <SwiperSlide className={styles.swiper}></SwiperSlide>
                    </Swiper>
                </div>

                {/*카테고리*/}
                <div className={styles.category_wrap}>
                    <ul className={styles.category_container}>
                        <li className={styles.active}>
                            <div className={styles.category_icon}>
                                <img src="../images/main_ca_all.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_ca_all_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>전체</p>
                        </li>
                        <li>
                            <div className={styles.category_icon}>
                                <img src="../images/main_ca_flog.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_ca_flog_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>콘센트</p>
                        </li>
                        <li>
                            <div className={styles.category_icon}>
                                <img src="../images/main_ca_study_table.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_ca_study_table_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>큰 테이블</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_ca_parking.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_ca_parking_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>주차장</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_ca_pat.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_ca_pat_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>애견동반</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_mirror.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_sec_mirror_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>통유리</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_smoking.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_sec_smoking_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>흡연실</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/min_sec_nokids.svg" className={styles.icon} alt="all"/>
                                <img src="../images/min_sec_nokids_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>노키즈존</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_sofa.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_sec_sofa_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>쇼파</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_terrace.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_sec_terrace_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>테라스</p>
                        </li>
                        <li >
                            <div className={styles.category_icon}>
                                <img src="../images/main_sec_terrace.svg" className={styles.icon} alt="all"/>
                                <img src="../images/main_sec_terrace_active.svg" className={`${styles.icon_active}`}  alt="all"/>
                            </div>
                            <p className={styles.title}>루프탑</p>
                        </li>
                    </ul>
                </div>
                
                {/*카페 목록*/}
                <ul className={styles.store_list}>
                    <li>
                        <Link to="/detail">
                        <div className={styles.store_wrap}>
                            <div className={styles.imgBox}>
                                <button type="button" className={styles.zzim_btn}>
                                    <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                    <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                </button>
                            </div>
                            <div className={styles.title_wrap}>
                                <p className={styles.title}>
                                    페이브 베이커리 페이브 베이커리 페이브 베이커리 페이브 베이커리 페이브 베이커리
                                </p>
                                <p className={styles.distance}>
                                    <img src="../images/distance_icon.svg" alt="거리"/>
                                    673m
                                </p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail">
                            <div className={styles.store_wrap}>
                                <div className={styles.imgBox}>
                                    <button type="button" className={styles.zzim_btn}>
                                        <img src="../images/zzim.svg" alt="버킷등록" className={styles.default}/>
                                        <img src="../images/zzim_active.svg" alt="버킷등록" className={styles.active}/>
                                    </button>
                                </div>
                                <div className={styles.title_wrap}>
                                    <p className={styles.title}>페이브 베이커리</p>
                                    <p className={styles.distance}>
                                        <img src="../images/distance_icon.svg" alt="거리"/>
                                        30m
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
                
            </div>

            

            <Navigation />
        </>
    );
}

export default  Home;