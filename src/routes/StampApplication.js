import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React from 'react'; 
import styles from"./StampApplication.module.css";

function StampApplication(){
    return (
        <>
           <Header title="스탬프 제휴 신청하기"/>
           <div className={styles.stampContainer}>
                <p className={styles.title}>스템프 제휴 신청하기</p>
                <div className={styles.formWrap}>
                    <label className={styles.label}>타겟고객<b>*</b></label>
                    <div className={styles.checkContainer}>
                        <p className={styles.checkWrap}>
                            <input type="checkbox" id="student"/>
                            <label htmlFor="student">대학생</label>
                        </p>
                        <p className={styles.checkWrap}>
                            <input type="checkbox" id="student1"/>
                            <label htmlFor="student1">직장인</label>
                        </p>
                        <p className={styles.checkWrap}>
                            <input type="checkbox" id="student2"/>
                            <label htmlFor="student2">주부</label>
                        </p>
                        <p className={styles.checkWrap}>
                            <input type="checkbox" id="student3"/>
                            <label htmlFor="student3">아저씨</label>
                        </p>
                        <p className={styles.checkWrap}>
                            <input type="checkbox" id="student4"/>
                            <label htmlFor="student4">노인</label>
                        </p>
                    </div>

                    <label className={styles.label}>연락 가능 시간<b>*</b></label>
                    <div className={styles.iptWrap}>
                        <input type="text" placeholder="00:00 ~ 00 : 00" className={styles.ipt}/>
                    </div>

                    <label className={styles.label}>담당자 성함<b>*</b></label>
                    <div className={styles.iptWrap}>
                        <input type="text" placeholder="담당자 성함을 입력해주세요." className={styles.ipt}/>
                    </div>

                    <label className={styles.label}>담당자 번호<b>*</b></label>
                    <div className={styles.iptWrap}>
                        <input type="text" placeholder="담당자 번호를 입력해주세요." className={styles.ipt}/>
                    </div>

                    <label className={styles.label}>담당자 이메일<b>*</b></label>
                    <div className={styles.iptWrap}>
                        <input type="text" placeholder="담당자 이메일을 입력해주세요." className={styles.ipt}/>
                    </div>

                    <div className={styles.btnWrap}>
                        <button className={styles.okBtn}>제휴 신청하기</button>
                    </div>
                </div>  
           </div>
           <Navigation />
        </>
    );
}

export default  StampApplication;