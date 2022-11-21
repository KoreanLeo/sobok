import Header from 'components/Header';
import React from 'react'; 
import styles from"./JoinAgree.module.css";

function JoinAgree(){
    return (
        <>
           <Header title="회원가입"/>
           <div className={styles.signUp_container}>
                <div className={styles.signUp_title}>회원가입</div>
                
                <div className={styles.allCheckbox}>
                    <input type="checkbox" id="all_check"/>
                    <label htmlFor="all_check">모두 동의(선택 정보 포함)</label>
                </div>

                <div className={styles.checkboxWrap}>
                    <input type="checkbox" id="agree1"/>
                    <label htmlFor="agree1">[필수] 홈페이지 이용약관의 내용에 동의합니다. </label>
                </div>
                <div className={styles.agreeText}>
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                </div>

                <div className={styles.checkboxWrap}>
                    <input type="checkbox" id="agree2"/>
                    <label htmlFor="agree2">[필수] 개인정보처리방침의 내용에 동의합니다.</label>
                </div>
                <div className={styles.agreeText}>
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                </div>

                <div className={styles.checkboxWrap}>
                    <input type="checkbox" id="agree3"/>
                    <label htmlFor="agree3">[필수] 개인정보처리방침의 내용에 동의합니다.</label>
                </div>
                <div className={styles.agreeText}>
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                    첨부 이용약관 텍스트 첨부 이용약관 텍스트 첨부 이용약관 텍스트 
                </div>

                <div className={styles.btnWrap}>
                    <button className={styles.nextBtn}>다음으로</button>
                </div>
           </div>
           
        </>
    );
}

export default  JoinAgree;