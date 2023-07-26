import React from 'react';
import Header from '../Component/Header';
import styled from '@emotion/styled';
import SelectConsumer from './SelectConsumer';
import SelectCompany from './SelectCompany';

const SignUpSelect = () => {
    return (
        <>
        <div className='w-100 h-100' >
            <Header/>
            <div className='d-flex justify-content-evenly'>
            <SelectConsumer/>
            <SelectCompany/>
            </div>
        </div>
                
        </>
    );
};

export default SignUpSelect;