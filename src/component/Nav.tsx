type Props = {
  handleScroll: () => void;
  scrollY: number;
  scrollTo: (e) => void;
};

import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

export const MainNav = ({ handleScroll, scrollY, scrollTo }: Props) => {
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleScroll);
    };
    watch();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <NavBox scrollY={scrollY}>
        <>
          <LogoTitle href="/" scrollY={scrollY}>
            DanSun
          </LogoTitle>
        </>
        <div>
          <Category name="design" onClick={scrollTo} scrollY={scrollY}>
            DESIGN
          </Category>
          <Category
            name="contact"
            onClick={(e) => scrollTo(e)}
            scrollY={scrollY}
          >
            CONTACT
          </Category>
          <Category name="qna" onClick={(e) => scrollTo(e)} scrollY={scrollY}>
            Q&A
          </Category>
        </div>
      </NavBox>
    </>
  );
};

//재사용

const Category = styled.button<{ scrollY?: any }>`
  font-size: 14px;
  text-decoration: none;
  letter-spacing: 1.5px;
  border-style: none;
  background-color: inherit;
  font-weight: 500;
  color: white;
  text-shadow: #888886 1px 0 5px;

  @media (width > 1000px) {
    margin-right: 40px;
    font-size: 17px;
  }
`;

const NavBox = styled.nav<{ scrollY: any }>`
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
  justify-content: space-between;

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
    background-color: ${({ scrollY }) => {
      if (scrollY > 690) {
        return "#003300";
      } else {
        return "transparent";
      }
    }};
  }
`;

const LogoTitle = styled(Link)<{ scrollY?: any }>`
  margin-right: 10px;
  font-weight: 700;
  font-size: 40px;
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
    margin-left: 40px;
    color: ${({ scrollY }) => {
      if (scrollY > 690) {
        return "white";
      } else {
        return "#003300";
      }
    }};
  }
`;

export const WritingNav = () => {
  return (
    <>
      <NavWrap>
        <>
          <LogoTitleWrite href="/">DanSun</LogoTitleWrite>
        </>
        <div>
          <div className="writeQna">Q&A</div>
        </div>
      </NavWrap>
    </>
  );
};

const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  z-index: 990;
  background-color: #003300;

  .writeQna {
    color: white;
  }
`;

const LogoTitleWrite = styled(Link)`
  padding-left: 20px;
  margin-right: 40px;
  font-size: 30px;
  font-family: "Dancing Script", cursive;
  text-decoration: none;
  color: white;
`;
