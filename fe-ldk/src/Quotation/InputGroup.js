import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Inputitem = styled.input`
    margin-bottom:40px;
    height:70px;
    border-radius:10px;
    font-size:20px;
    font-weight: bold;
`;

const InputLabel = styled.label`
    font-size:20px;
    font-weight:bold;
    color:gray;
`;

const InputContainer = styled.div`
    padding:10%;
    padding-top:5%;
    padding-bottom:5%;
`;

const TextArea = styled.textarea`
    height:280px;
    margin-bottom:40px;
    border-radius:10px;
    border:2px solid black;
    font-size:20px;
    font-weight: bold;
    &::-webkit-input-placeholder { 
        text-align:center;
        vertical-align:middle;
        padding-top:120px;
    }
  `;

const Button = styled.input`
    width:100%;
    height:120px;
    background-color:#B76464;
    color:white;
    font-weight:bold;
    font-size:40px;
    border-radius:10px;
`;

const InputGroup = () => {
    return (
        <>
            <InputContainer className='container'>
                <form>

                    {/* 1행 */}
                    <div className='row'>
                        {/* <InputLabel for="TITLE">ex) 큐티뽀짝 레터링케이꾸</InputLabel> */}
                        <Inputitem placeholder='제목' className='col' id='TITLE' required/>
                    </div>
                    {/* 2행 */}
                    <div className='row'>
                        {/* <InputLabel for="PRICE">ex) 오억</InputLabel> */}
                        <Inputitem placeholder='가격' className='col me-3' required />
                        {/* <InputLabel for="QUANTITY">ex) 백만개</InputLabel> */}
                        <Inputitem placeholder='수량' className='col' required />
                    </div>
                    {/* 3행 */}
                    <div className='row'>
                        {/* <InputLabel for="ZIPCODE">ex) </InputLabel> */}
                        <Inputitem placeholder='우편번호' className='col' required />
                    </div>
                    {/* 4행 */}
                    <div className='row'>
                        {/* <InputLabel for="DETAILEDADDRESS">ex) </InputLabel> */}
                        <Inputitem placeholder='상세주소' className='col' required />
                    </div>
                    {/* 5행 */}
                    <div className='row'>
                        {/* <InputLabel for="EXPLANATION">ex) 생크림을 윗면 둘레로 윗면에 나루토와 사스케 싸움 그림과 가슴이 웅장해진다 텍스트</InputLabel> */}
                        <TextArea placeholder='설명' className='col' required />
                    </div>

                    <div className='row'>
                        <Link to='/UploadComplete'>
                        <Button type='submit' value='신청하기' className='col' ></Button>
                        </Link>
                    </div>
                </form>
            </InputContainer>
        </>
    );
};

export default InputGroup;