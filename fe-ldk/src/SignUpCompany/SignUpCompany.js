import React from 'react';
import Carousel from './Carousel';
import styled from '@emotion/styled';
import { Padding } from '@mui/icons-material';
import { Button } from '@mui/material';

const Container = styled.div`
    width:100%;
    height:100%;
    padding-left:10%;
    padding-right:10%;
    padding-top:5%;
    background-color:#FFE9E9;
    `;

const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor:'#90CAF9',
    color:'white',
    marginTop:'10px',
    ":hover":{
        backgroundColor:'#0057FF'
    },
    width:'700px',
    fontSize:'20px',
    fontWeight:'bold',
}));

const SignUpCompany = () => {
    return (
        <>
        <Container>

        <Carousel></Carousel>
        <StyledButton>업로드</StyledButton><br/>
        <StyledButton>대표 이미지 설정</StyledButton>
        <Button className='w-full'>테스트</Button>
        </Container>
        </>
    );
};

export default SignUpCompany;