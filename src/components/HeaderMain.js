import React, { useState, useRef,useEffect } from 'react'; 
import styles from "./HeaderMain.module.css";

function Header_Main(){

    const [areaToggle, setAreaToggle] = useState(false);
    const areaToggleRef = useRef();


    const areaToggleHandler = () => {
        (areaToggle) ? setAreaToggle(false) : setAreaToggle(true)
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickModalOutside);
        return () => {
          document.removeEventListener('mousedown', clickModalOutside);
        };
    });

    const clickModalOutside = event => {
        if ( areaToggle && !areaToggleRef.current.contains(event.target)) {
            areaToggleHandler();
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_wrap}>
                <div className={styles.contain01}>
                    <div className={styles.title} onClick={areaToggleHandler} ref={areaToggleRef}>
                        흑석동 <img src="../images/header_arrow.svg" alt="arrow" className={styles.arrow}/>
                        {
                            (areaToggle) ? 
                            <ul>
                                <li>전국</li>
                                <li>흑석동</li>
                            </ul>
                            : null
                        }
                    </div>
                    <div className={styles.icon_wrap}>
                        <button type="button" className={styles.icon}><img src="../images/header_map_icon.svg" alt="지도"/></button>
                        <button type="button" className={styles.icon}><img src="../images/header_search_icon.svg" alt="검색"/></button>
                    </div>
                </div>
                <ul className={styles.menu_wrap}>
                    <li className={styles.active}>카페</li>
                    <li>메뉴</li>
                </ul>
            </div>
        </header>
    );
}

export default  Header_Main;