import React from 'react';
import styled from '@emotion/styled';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const Card = styled.div`
    //위치
    position:relative;
    //정렬

    //크기
    width:600px;
    height:600px;
    margin-top:5%;
    //디자인
    background-color:#F0EAFD;
    border-radius:50px;
`;


const CompanyIcon = styled(StorefrontOutlinedIcon)(({ theme }) => ({
    //위치
    position:'absolute',
    top:'-17%',
    left:'35%',
    //정렬
    marginLeft:'auto',
    marginRight:'auto',
    //크기
    fontSize:'180px',
    //디자인
}));

function Text() {
    return (
        <div className='text-center mt-auto ' style={{ marginBottom: '10%' }}>
            <span style={{ fontSize: '100px', fontWeight: 'bold' }}>고객님</span><br />
            <span style={{ fontSize: '50px', }}>입니다.</span>
        </div>
    );
};

const StyledButton = styled.button`
    width:400px;
    height:100px;
    border-radius:50px;
    background-color:#9B92FF;
    border:0;
    font-size:50px;
`;

const SelectCompany = () => {
    return (
        <Card className='d-flex align-items-center flex-column'>
        <CompanyIcon/>
            <Text/>
            <div className='mb-auto fs-2 '>
                    <StyledButton>회원가입 &#8594;	</StyledButton>
                </div>
        </Card>
    );
};

export default SelectCompany;