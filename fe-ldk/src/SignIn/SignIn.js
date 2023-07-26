import React from 'react';
import Carousel from './Carousel';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const PageContainer = styled.div`
    display: flex;
    justify-content: center; /* 플랙스 박스 정렬 */
    align-items: center; /* 플랙스 아이템 정렬 */
    width:100%;
    height:100%;
    background-color:#FFE9E9;
`;


const KakaoApi = styled(Button)(({ theme }) => ({
    position:'absolute',
    zIndex:'1',
    top:'40%',
    backgroundColor:'yellow',
    color:'black',
    fontSize:'50px',
    fontWeight:'bold',
    width:'800px',
    height:'200px',
    ":hover":{
        backgroundColor:'yellow',
    }
  }));

const Header = styled.div`
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

const HeaderHorizon = styled.hr`
    width:80%;
    height:3px;
    background-color:black;
    position:absolute;
    bottom:5%;
`;

const SignIn = () => {
    return (
        <>
            <PageContainer>
                <Header>마주보다<HeaderHorizon /></Header>
                
                <KakaoApi>카카오 API</KakaoApi>
                
                <Carousel></Carousel>
            </PageContainer>
        </>
    );
};

export default SignIn;