import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.div`
    position:absolute;
    align-items: center; /* 플랙스 아이템 정렬 */
    top:0;
    display: flex;
    justify-content: center; /* 플랙스 박스 정렬 */
    align-items: center; /* 플랙스 아이템 정렬 */
    width:100%;
    text-align:center;
    background-color:transparent;
    z-index:2;
    padding:2%;
    font-size:50px;
    font-weight:bold;
    background-color:#FFE9E9;
    opacity:0.9;
    text-align:center;
`;

const StyledHeaderHorizon = styled.hr`
    width:80%;
    height:3px;
    background-color:black;
    position:absolute;
    bottom:5%;
`;

const Header = () => {
    return (
        <>
            <StyledHeader>마주보다<StyledHeaderHorizon /></StyledHeader>
        </>
    );
};

export default Header;