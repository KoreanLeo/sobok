import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import styles from"./StampModify.module.css";

function StampModify(){
    return (
        <>
           <Header title="쿠폰 정보 수정"/>
           <div className={styles.stampContainer}>
                <p className={styles.title}>쿠폰 정보 수정</p>

                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>5장 제공 명<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            name="name"
                            placeholder="5장 제공 명을 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>쿠폰 이미지 등록<b>*</b> <span className={styles.important}>500x700 (직사각형 비율)</span></p>
                    <p>
                        <input type="file" required className={styles.file}/>
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>10장 제공 명 <b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            name="name"
                            placeholder="10장 제공 명을 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>쿠폰 이미지 등록<b>*</b> <span className={styles.important}>500x700 (직사각형 비율)</span></p>
                    <p>
                        <input type="file" required className={styles.file}/>
                    </p>
                </div>

                <div className={styles.btnWrap}>
                    <button className={styles.okBtn}>수정완료</button>
                </div>
           </div>
           <Navigation />
        </>
    );
}

export default  StampModify;