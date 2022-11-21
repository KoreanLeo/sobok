import React from 'react'; 
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

const StyledHeader = styled.header`
    position : fixed; box-shadow: 0px 2px 4px #00000015;
    background-color: #fff; width:100%; 
    left:0; top:0; z-index:999;
`;

const StyledBackBtn = styled.div`
    position: absolute; width: 25px; height : 100%; cursor:pointer; 
    background-image : url('../images/header_back_icon.svg'); background-size:35%;
    background-repeat:no-repeat; background-position:center;  
`;
const StyledTitle = styled.p`
    font-size:18px; padding:15px 5px;
    text-align:center; 
`;

function Header({title}){
    
    let navigate = useNavigate();

    return (
        <StyledHeader>
            <StyledBackBtn onClick={() => {navigate(-1)}}/>
            <StyledTitle>{title}</StyledTitle>
        </StyledHeader> 
    );
}

export default  Header;