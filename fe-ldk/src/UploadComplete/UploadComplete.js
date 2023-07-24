import React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';


const PageContainer = styled.div`
    display: flex;
    justify-content: center; /* 플랙스 박스 정렬 */
    align-items: center; /* 플랙스 아이템 정렬 */
    width:100%;
    height:100%;
    background-color:#FFE9E9;
`;

const GoToQuotationButton = styled(Button)(({ theme }) => ({
    width:'1000px',
    height:'100px',
    marginBottom:'10px',
    marginTop:'60px',
    borderRadius:'30px',
    backgroundColor:'#535AFF',
    fontSize:'50px',
    fontWeight:'bold',
  }));

const GotoMainButton = styled(GoToQuotationButton)(({ theme }) => ({
    backgroundColor:'#6194F7',
    marginTop:'0px',
    ":hover":{
        backgroundColor:'#1976d2',
    }
  }));

const UploadComplete = () => {
    return (
        <>
        <PageContainer>
            <div className='text-center'>
            <div style={{fontSize:'150px'}}>견적 신청이<br/>완료되었어요!</div>
            <div style={{fontSize:'40px'}}>입찰 현황 &rarr; 실시간 현황 페이지 클릭!<br/>새로 신청하기 &rarr; 견적 내기 클릭!</div>
            <form>
            <div><GoToQuotationButton variant="contained">내 견적 확인하기</GoToQuotationButton></div>
            <div><GotoMainButton variant="contained">메인 페이지 돌아가기</GotoMainButton></div>
            </form>
            </div>
        </PageContainer>
        </>
    );
};

export default UploadComplete;