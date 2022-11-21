import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import styles from"./Shipping.module.css";


function Shipping(){
    return (
        <>
           <Header title="마이페이지"/>
           <div className={styles.shippingContainer}>
                <p className={styles.title}>굿즈 수령을 요청하였습니다.</p>
                <p className={styles.help}>수령 받으실 정보를 입력해주세요.</p>

                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>이름<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            placeholder="배송받으실 분을 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>연락처<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            placeholder="배송받으실분의 연락처를 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>주소<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            placeholder="상세주소를 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>상세주소<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            placeholder="상세주소를 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>배송메세지</p>
                    <p>
                        <input 
                            type="text"
                            placeholder="배송메세지를 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.btnWrap}>
                    <button className={styles.okBtn}>입력완료</button>
                </div>
           </div>
           <Navigation />
        </>
    );
}

export default  Shipping;