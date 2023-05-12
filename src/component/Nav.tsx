import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Qna from "./Qna";

export const MainNav = ({ handleScroll, scrollY, scrollTo, isMobile }) => {
  // const [scrollY, setScrollY] = useState(0); //[nav] 색깔을 바꿔주는 state
  // //[nav] 색깔 바꾸는 로직
  // const handleScroll = () => {
  //   // console.log(window.pageYOffset);

  //   setScrollY(window.pageYOffset);
  // };
  // 스크롤시 handleScroll를 호출해 색깔을 변경
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleScroll);
    };
    watch();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // 클릭시 맨 위로 이동
  const handleAbout = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <NavBox scrollY={scrollY} isMobile={isMobile}>
        <>
          <LogoTitle href="/" scrollY={scrollY}>
            DanSun
          </LogoTitle>
        </>
        <>
          <Category name="design" onClick={scrollTo} scrollY={scrollY}>
            DESIGN
          </Category>
          <Category name="contact" onClick={scrollTo} scrollY={scrollY}>
            CONTACT
          </Category>
          <Category name="qna" onClick={scrollTo} scrollY={scrollY}>
            QnA
          </Category>
        </>
      </NavBox>
    </>
  );
};

export const WritingNav = () => {
  return (
    <>
      <NavWrap>
        <>
          <LogoTitle href="/" scrollY={scrollY}>
            Design DanSun
          </LogoTitle>
        </>
        <div>
          <Category name="qna" scrollY={scrollY}>
            QnA
          </Category>
        </div>
      </NavWrap>
    </>
  );
};
//재사용

const Category = styled.button<{ scrollY: any }>`
  margin-right: 10px;
  text-decoration: none;
  letter-spacing: 1.5px;
  border-style: none;
  background-color: inherit;
  color: ${({ scrollY }) => {
    if (scrollY > 364) {
      return "white";
    } else {
      return "#003300";
    }
  }};

  @media (width > 1000px) {
    margin-right: 40px;
    color: ${({ scrollY }) => {
      if (scrollY > 690) {
        return "white";
      } else {
        return "#003300";
      }
    }};
  }
`;

const NavBox = styled.nav<{ scrollY: any; isMobile: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  height: 70px;
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  z-index: 990;
  transition: 0.5s ease;
  padding-left: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  background-color: ${({ scrollY }) => {
    if (scrollY > 364) {
      return "#003300";
    } else {
      return "transparent";
    }
  }};

  @media (width > 1000px) {
    /* width: 100%; */
    background-color: ${({ scrollY }) => {
      if (scrollY > 690) {
        return "#003300";
      } else {
        return "transparent";
      }
    }};
  }
`;

const LogoTitle = styled(Link)<{ scrollY: any }>`
  padding-left: 20px;
  margin-right: 20px;
  /* text-shadow: #888886 1px 0 10px; */
  font-size: 30px;
  font-family: "Dancing Script", cursive;
  text-decoration: none;
  color: ${({ scrollY }) => {
    if (scrollY > 364) {
      return "white";
    } else {
      return "#003300";
    }
  }};

  @media (width > 1000px) {
    margin-right: 40px;
    color: ${({ scrollY }) => {
      if (scrollY > 690) {
        return "white";
      } else {
        return "#003300";
      }
    }};
  }
`;

const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  z-index: 990;
  background-color: #003300;
`;
