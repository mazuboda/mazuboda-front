import React from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width:100%;
  height:100%;
`;

const Quotation = () => {
    return (
        <>
            <StyledContainer>
                <Carousel classname></Carousel>

            </StyledContainer>
        </>
    );
};

export default Quotation;