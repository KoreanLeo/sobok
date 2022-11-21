import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import styles from './Store.module.css'; 

function Store(){
    return (
        <>
           <Header title="스토어"/>
            <div className={styles.storeContainer}>
                <ul className={styles.storeList}>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>
                                [해외] 해외상품 상품명입력 해외상품 상품명입력 해외상품 상품명입력 해외상품 상품명입력
                                [해외] 해외상품 상품명입력 해외상품 상품명입력 해외상품 상품명입력 해외상품 상품명입력
                                </p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.imgBox}></div>
                            <p className={styles.storeName}>네스프레소</p>
                            <p className={styles.itemName}>[해외]해외상품 상품명입력</p>
                            <p className={styles.priceBox}>
                                <span className={styles.percent}>34%</span>
                                <span className={styles.price}>52,130 원</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
           <Navigation />
        </>
    );
}

export default  Store;