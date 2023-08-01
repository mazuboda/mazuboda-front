import React from "react";
import styled from "@emotion/styled";
import Logo from "../Image/SimpleLogo.jpeg";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  // 위치
  /* position: absolute;
  top: 0;
  z-index: 1; */
  // 정렬
  text-align: center;
  // 크기
  width: 100%;
  padding: 20px 20px 20px 20px;
  // 디자인
  background-color: #b76464;
  opacity: 1;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const StyledHeaderHorizon = styled.hr`
  // 위치
  width: 100%;
  height: 3px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  // 디자인
  background-color: white;
`;

const Header2 = () => {
  return (
    <>
      <StyledHeader>
        <div className="flex flex-row items-end">
          <div className="grow ">
            <Link to='/'>
            <img src={Logo} alt="logo" width="80px" height="80px"></img>
            </Link>
          </div>
          <Link to="/" className="inline-block align-text-bottom me-3">
            이동규 님
          </Link>
          <Link to="/SignIn" className="inline-block align-text-bottom me-3">
            로그아웃
          </Link>
          <Link to="/" className="inline-block align-text-bottom me-3">
            홈
          </Link>
          <Link to="/" className="inline-block align-text-bottom me-3">
            마이페이지
          </Link>
          <Link to="/" className="inline-block align-text-bottom me-3">
            장바구니
          </Link>
        </div>
        <StyledHeaderHorizon />
      </StyledHeader>
    </>
  );
};

export default Header2;
