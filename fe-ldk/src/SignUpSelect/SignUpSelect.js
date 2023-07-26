import React from 'react';
import Header from '../Component/Header';
import styled from '@emotion/styled';

const PageContainer = styled.div`
    display: flex;
    justify-content: center; /* 플랙스 박스 정렬 */
    align-items: center; /* 플랙스 아이템 정렬 */
    width:100%;
    height:100%;
    background-color:#FFE9E9;
`;

const SignUpSelect = () => {
    return (
        <>
            <PageContainer>
                <Header/>
            </PageContainer>
        </>
    );
};

export default SignUpSelect;