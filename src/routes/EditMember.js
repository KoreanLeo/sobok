import React from 'react'; 
import Header from 'components/Header';
import Navigation from 'components/Navigation';

import { Link } from 'react-router-dom';

import styles from './EditMember.module.css';
import styled from 'styled-components';

const List = styled.div`
    /* 마이페이지 리스트 */
    border-top: ${props => props.bordertop ? "1px solid #dfdfdf" : "unset"};
    border-bottom:1px solid #dfdfdf;
    padding: 15px 10px;
    font-size: 16px;
`;

function EditMember(){
    return (
        <>
           <Header title="회원정보 수정"/>
           <div className="sub_content">
                <div className={styles.Editform}>
                    <div className={styles.ipt_wrap}>
                        <p className={styles.label}>아이디</p>
                        <p>
                            <input 
                                type="email"
                                name="email"
                                placeholder="아이디"
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
                                name="password"
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
                                name="password"
                                placeholder="비밀번호를 재입력해주세요."
                                className={styles.ipt}
                                required
                            />
                        </p>
                    </div>
                    <div className={styles.ipt_wrap}>
                        <p className={styles.label}>성함<b>*</b></p>
                        <p>
                            <input 
                                type="text"
                                name="name"
                                placeholder="성함을 입력해주세요"
                                className={styles.ipt}
                                required
                            />
                        </p>
                    </div>
                    <div className={styles.ipt_wrap}>
                        <p className={styles.label}>이메일<b>*</b></p>
                        <p>
                            <input 
                                type="email"
                                name="email"
                                placeholder="이메일을 입력해주세요"
                                className={styles.ipt}
                                required
                            />
                        </p>
                    </div>
                </div>
                <List>회원탈퇴</List>
                <div className={styles.btnWrap}>
                    <input type="submit" value="수정완료" className={styles.ok_btn}/>
                </div>
           </div>
           <Navigation />
        </>
    );
}

export default  EditMember;