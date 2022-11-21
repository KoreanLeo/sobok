import Header from 'components/Header';
import React from 'react'; 
import styles from './StorekeeperRegist.module.css'

function StorekeeperRegist(){
    return (
        <>
           <Header title="회원가입"/>
           <div className={styles.SignupContainer}>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>아이디<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            name="name"
                            placeholder="아이디를 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>비밀번호<b>*</b></p>
                    <p>
                        <input 
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>비밀번호 확인<b>*</b></p>
                    <p>
                        <input 
                            type="password"
                            placeholder="비밀번호를 재입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>담당자명<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            name="name"
                            placeholder="담당자 성함을 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>담당자 연락처<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            name="name"
                            placeholder="담당자 연락처를 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>담당자 이메일<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            name="email"
                            placeholder="담당자 이메일을 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>업체명</p>
                    <p>
                        <input 
                            type="text"
                            name=""
                            placeholder="업체명을 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>가게주소<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            name=""
                            placeholder="업체명을 입력해주세요."
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
                            name=""
                            placeholder="상세주소를 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>사업자 등록번호<b>*</b></p>
                    <p>
                        <input 
                            type="text"
                            name=""
                            placeholder="사업자 등록번호를 입력해주세요."
                            className={styles.ipt}
                            required
                        />
                    </p>
                </div>
                <div className={styles.ipt_wrap}>
                    <p className={styles.label}>사업자 등록증<b>*</b> <span className={styles.important}>30MB 이하</span></p>
                    <p>
                        <input type="file" required className={styles.file}/>
                    </p>
                </div>

                <div className={styles.btnWrap}>
                    <button className={styles.okBtn}>승인신청</button>
                </div>
           </div>
        </>
    );
}

export default  StorekeeperRegist;