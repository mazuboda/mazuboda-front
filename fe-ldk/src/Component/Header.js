import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.div`
    // 위치
    // 정렬
    text-align:center;
    // 크기
    width:100%;
    padding:2%;
    // 디자인
    background-color:transparent;
    opacity:0.9;
    font-weight:bold;
    font-size:50px;
`;

const StyledHeaderHorizon = styled.hr`
    // 위치
    width:80%;
    height:3px;
    margin-left:auto;
    margin-right:auto;
    // 디자인
    background-color:black;
`;

const Header = () => {
    return (
        <>
            <StyledHeader>마주보다<StyledHeaderHorizon /></StyledHeader>
        </>
    );
};

export default Header;