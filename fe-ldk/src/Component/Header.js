import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.div`
    // 위치
    position:absolute;
    top:0;
    z-index:1;
    // 정렬
    text-align:center;
    // 크기
    width:100%;
    padding:2%;
    // 디자인
    background-color:#B76464;
    opacity:1;
    font-weight:bold;
    font-size:50px;
    color:white;
`;

const StyledHeaderHorizon = styled.hr`
    // 위치
    width:80%;
    height:3px;
    margin-left:auto;
    margin-right:auto;
    // 디자인
    background-color:white;
`;

const Header = () => {
    return (
        <>
            <StyledHeader>마주보다<StyledHeaderHorizon /></StyledHeader>
        </>
    );
};

export default Header;