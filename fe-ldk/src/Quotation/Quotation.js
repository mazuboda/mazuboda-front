import React from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
import InputGroup from './InputGroup';
import Header from '../Component/Header';
import Header2 from '../Component/Header2';

const StyledContainer = styled.div`
  display: flex;
  width:100%;
  height:100%;
  background-color: #FFE9E9;
`;

const Quotation = () => {
    return (
        <>
        <Header2></Header2>
            <StyledContainer>
                <Carousel></Carousel>
                <InputGroup></InputGroup>
            </StyledContainer>
        </>
    );
};

export default Quotation;