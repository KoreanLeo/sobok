import Header from 'components/Header';
import Navigation from 'components/Navigation';
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import styles from './StoreRegist.module.css';


function StoreRadioWrap( {title , name , onClick} ){

    return (
        <div className={styles.ipt_wrap}>
            <div className={styles.label}>{title} <b>*</b></div>
            <ul className={styles.radio_wrap}>
                <li>
                    <input 
                        type="radio" 
                        name={name} 
                        id={`${name}_true`} 
                        value="있음" 
                        onClick={onClick}
                    /> 
                    <label  htmlFor={`${name}_true`}>
                        있음
                    </label>
                </li>
                <li>
                    <input 
                        type="radio"  
                        name={name} 
                        id={`${name}_false`} 
                        value="없음" 
                        onClick={onClick}
                    /> 
                    <label htmlFor={`${name}_false`}>
                        없음
                    </label>
                </li>
            </ul>
        </div>
    );
}


function StoreRegist(){

    const [storeName, setStoreName] = useState(""); //매장명
    const [explanation, setExplanation] = useState(""); //매장 설명
    const [tel, setTel] = useState(""); //전화번호
    const [storeTime, setStoreTime] = useState(""); //영업시간
    const [closed, setClosed] = useState(""); //휴무일
    const [homepage, setHomepage] = useState(""); //홈페이지

    //라디오버튼
    const [socket, setSocket] = useState(""); //콘센트
    const [bigTable, setBigTable] = useState(""); //큰 책상
    const [parking, setParking] = useState(""); //주차장
    const [pets, setPets] = useState(""); //애견동반
    const [fullGlass, setFullGlass] = useState(""); //통유리
    const [smoking, setSmoking] = useState(""); //흡연실
    const [noKids, setNoKids] = useState(""); //노키즈존
    const [sofa, setSofa] = useState(""); //쇼파
    const [terrace, setTerrace] = useState(""); //테라스
    const [rooftop, setRooftop] = useState(""); //루프탑

    let navigate = useNavigate();


    const onSubmit = (event) => {
        event.preventDefault();
    }

    const onChange = (event) => {
        event.preventDefault();

        const{
            target : {name, value}
        } = event;

        if(name==="store_name"){ setStoreName(value); }
        if(name==='explanation'){ setExplanation(value); }
        if(name==='store_tel'){ setTel(value); }
        if(name==='store_time'){ setStoreTime(value); }
        if(name==='store_closed'){setClosed(value);}
        if(name==='store_homepage'){setHomepage(value);}
    }  

    const onClick = (event) => {
        const{
            target : {name, value}
        } = event;

        if(name === 'power_socket'){ setSocket(value); }
        if(name === 'big_table'){ setBigTable(value); }
        if(name === 'parking'){ setParking(value); }
        if(name === 'pets'){ setPets(value); }
        if(name === 'full_glass'){ setFullGlass(value); }
        if(name === 'smoking_room'){ setSmoking(value); }
        if(name === 'no_Kids'){ setNoKids(value); }
        if(name === 'sofa'){ setSofa(value); }
        if(name === 'terrace'){ setTerrace(value); }
        if(name === 'rooftop'){ setRooftop(value); }
        

    } 

    return (
        <div>
           <Header title="매장등록"/>
           <div className="sub_content">
                <form onSubmit={onSubmit}>
                    <div className={styles.title}>장소정보</div>

                    <div className={styles.ipt_wrap}>
                        <div className={styles.label}>매장명 <b>*</b></div>
                        <input 
                            type="text" 
                            name="store_name" 
                            className={styles.ipt}
                            required
                            value={storeName}
                            onChange={onChange}
                            placeholder="매장명을 입력해주세요." 
                        />
                    </div>

                    <div className={styles.ipt_wrap}>
                        <div className={styles.label}>매장설명</div>
                        <input 
                            type="text" 
                            name="explanation" 
                            className={styles.ipt}
                            value={explanation}
                            onChange={onChange}
                            placeholder="매장설명을 입력해주세요." 
                        />
                    </div>

                    <div className={styles.ipt_wrap}>
                        <div className={styles.label}>전화번호</div>
                        <input 
                            type="text" 
                            name="store_tel" 
                            className={styles.ipt}
                            value={tel}
                            onChange={onChange}
                            placeholder="전화번호를 입력해주세요." 
                        />
                    </div>

                    {/* 주소 */}
                    <div className={styles.ipt_wrap}>
                        <div className={styles.label}>주소 <b>*</b></div>
                        <input 
                            type="text" 
                            name="store_address" 
                            required
                            className={styles.ipt}
                            placeholder="주소를 입력해주세요." 
                        />
                        <input 
                            type="text" 
                            name="store_address2" 
                            required
                            className={styles.ipt}
                            placeholder="상세주소를 입력해주세요." 
                        />
                    </div>


                    <div className={styles.ipt_wrap}>
                        <div className={styles.label}>영업시간 <b>*</b></div>
                        <textarea 
                            type="text" 
                            name="store_time" 
                            required
                            className={styles.ipt}
                            value={storeTime}
                            onChange={onChange}
                            placeholder="영업시간을 입력해주세요." 
                        ></textarea>
                    </div>

                    <div className={styles.ipt_wrap}>
                        <div className={styles.label}>휴무일</div>
                        <textarea 
                            type="text" 
                            name="store_closed" 
                            className={styles.ipt}
                            value={closed}
                            onChange={onChange}
                            placeholder="휴무일을 입력해주세요." 
                        ></textarea>
                    </div>

                    <div className={styles.ipt_wrap}>
                        <div className={styles.label}>홈페이지</div>
                        <input 
                            type="text" 
                            name="store_homepage" 
                            className={styles.ipt}
                            value={homepage}
                            onChange={onChange}
                            placeholder="홈페이지 링크를 입력해주세요." 
                        />
                    </div>


                    <StoreRadioWrap title="콘센트" name="power_socket" onClick={onClick}/>
                    <StoreRadioWrap title="큰테이블" name="big_table" onClick={onClick}/>
                    <StoreRadioWrap title="주차장" name="parking" onClick={onClick}/>
                    <StoreRadioWrap title="애견동반" name="pets" onClick={onClick}/>
                    <StoreRadioWrap title="통유리" name="full_glass" onClick={onClick} />
                    <StoreRadioWrap title="흡연실" name="smoking_room" onClick={onClick} />
                    <StoreRadioWrap title="노키즈존" name="no_Kids" onClick={onClick} />
                    <StoreRadioWrap title="쇼파" name="sofa" onClick={onClick} />
                    <StoreRadioWrap title="테라스" name="terrace" onClick={onClick} />
                    <StoreRadioWrap title="루프탑" name="rooftop" onClick={onClick} />
                    
                    <ul className={styles.btn_container}>
                        <li>
                            <button 
                                type="button" 
                                className={styles.cancelBtn}
                                onClick={() => {navigate(-1)}}
                            >취소</button>
                        </li>
                        <li>
                            <button type="submit" className={styles.submitBtn}>등록</button>
                        </li>
                    </ul>
                </form>
           </div>
           <Navigation />
        </div>
    );
}

export default  StoreRegist;