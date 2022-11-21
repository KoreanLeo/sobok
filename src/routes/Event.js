import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import styles from './Event.module.css'; 

function Event(){
    return (
        <>
            <Header title="이벤트"/>
            <div className={styles.eventContainer}>
                <ul className={styles.eventList}>
                    <li>
                        <div className={styles.item}>
                            <p className={styles.date}>2021.05.04</p>
                            <div className={styles.titleWrap}>
                                <div className={styles.imgBox}></div>
                                <p className={styles.info}>
                                    <p className={styles.name}>
                                        디저트정 디저트정 디저트정 디저트정
                                        디저트정 디저트정 디저트정 디저트정
                                        디저트정 디저트정 디저트정 디저트정
                                        디저트정 디저트정 디저트정 디저트정
                                        디저트정 디저트정 디저트정 디저트정
                                        디저트정 디저트정 디저트정 디저트정
                                    </p>
                                    <p className={styles.category}>신메뉴소식</p>
                                </p>
                            </div>
                            <div className={styles.imgBox}></div>
                            <div className={styles.contentBox}>
                                <p className={styles.title}>
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                </p>
                                <p className={styles.content}>
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <p className={styles.date}>2021.05.04</p>
                            <div className={styles.titleWrap}>
                                <div className={styles.imgBox}></div>
                                <p className={styles.info}>
                                    <p className={styles.name}>
                                        디저트정 디저트정 디저트정 디저트정
                                    </p>
                                    <p className={styles.category}>신메뉴소식</p>
                                </p>
                            </div>
                            <div className={styles.imgBox}></div>
                            <div className={styles.contentBox}>
                                <p className={styles.title}>
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                </p>
                                <p className={styles.content}>
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <p className={styles.date}>2021.05.04</p>
                            <div className={styles.titleWrap}>
                                <div className={styles.imgBox}></div>
                                <p className={styles.info}>
                                    <p className={styles.name}>
                                        디저트정 디저트정 디저트정 디저트정
                                    </p>
                                    <p className={styles.category}>신메뉴소식</p>
                                </p>
                            </div>
                            <div className={styles.imgBox}></div>
                            <div className={styles.contentBox}>
                                <p className={styles.title}>
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                </p>
                                <p className={styles.content}>
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <p className={styles.date}>2021.05.04</p>
                            <div className={styles.titleWrap}>
                                <div className={styles.imgBox}></div>
                                <p className={styles.info}>
                                    <p className={styles.name}>
                                        디저트정 디저트정 디저트정 디저트정
                                    </p>
                                    <p className={styles.category}>신메뉴소식</p>
                                </p>
                            </div>
                            <div className={styles.imgBox}></div>
                            <div className={styles.contentBox}>
                                <p className={styles.title}>
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                    제목을입력해주세요.제목을입력해주세요.제목을입력해주세요.
                                </p>
                                <p className={styles.content}>
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                    내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
                                </p>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <Navigation />
        </>
    );
}

export default  Event;