import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import styles from './News.module.css'; 

function News(){
    return (
        <>
            <Header title="소식"/>
            <div className={styles.newsContainer}>
                <ul className={styles.newsList}>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>카페트윈</p>
                            <p className={styles.title}>
                                [해외] 해외상품 상품명입력 해외상품 상품명입력 해외상품 상품명입력 해외상품 상품명입력
                                [해외] 해외상품 상품명입력 해외상품 상품명입력 해외상품 상품명입력 해외상품 상품명입력
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.nickName}>네스프레소</p>
                            <p className={styles.title}>[해외]해외상품 상품명입력</p>
                        </div>
                    </li>
                </ul>
            </div>
            <Navigation />
        </>
    );
}

export default  News;