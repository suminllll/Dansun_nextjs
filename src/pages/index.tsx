export type Post = {
  userContent: string;
  userName: string;
  userPw: string;
  userTitle: string;
};

import React, { useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { MainNav } from "../component/Nav";
import Design from "../component/Design";
import Contact from "../component/Contact";
import Qna from "../component/Qna";
import img from "../public/images/배경이미지.jpeg";
import Image from "next/image";

const Main = () => {
  const [scrollY, setScrollY] = useState<number>(0); //[nav] 색깔을 바꿔주는 state
  const [postsList, setPostsList] = useState<Post[]>([]);
  const focusTarget = useRef<any[]>([]); //[nav] 해당 카테고리로 이동할때 사용

  //[nav] 색깔 바꾸는 로직
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };
  //[nav] 카테고리를 클릭하면 해당 카테고리 위치로 내려감
  const scrollTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    const category = {
      design: 0,
      contact: 1,
      qna: 2,
    };

    focusTarget.current[category[name]].scrollIntoView({ behavior: "smooth" });
  };

  useLayoutEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("userName"));
    setPostsList(data);
  }, []);

  // 클릭시 맨 위로 이동
  const upHandler = () => {
    window.scrollTo({ top: 0 });
  };

  const downHandler = () => {
    focusTarget.current[2].scrollIntoView();
  };

  return (
    <Article>
      <MainNav
        handleScroll={() => handleScroll()}
        scrollY={scrollY}
        scrollTo={(e) => scrollTo(e)}
      />
      <MainImgBox>
        <Img src={img} alt="" />
        <Explain>
          <TextBox>
            단 하나의 선으로 시작해,
            <br />
            의미있는 공간을 만듭니다.
            <br />- 단선 인테리어
          </TextBox>
        </Explain>
      </MainImgBox>
      <DownButton onClick={() => downHandler()}>↓</DownButton>
      <Title ref={(el) => (focusTarget.current[0] = el)}>DESIGN</Title>
      <Design />

      <ContactTitle ref={(el) => (focusTarget.current[1] = el)}>
        CONTACT
      </ContactTitle>
      <Contact />

      <Title ref={(el) => (focusTarget.current[2] = el)}>Q&A</Title>
      <Qna posts={postsList} inputData={undefined} />
      <UpButton onClick={() => upHandler()}>↑</UpButton>
    </Article>
  );
};

const Article = styled.div`
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-right: 0;
  position: relative;
`;

const MainImgBox = styled.div`
  height: 450px;
  width: 100%;
  position: relative;

  @media (width > 1000px) {
    height: 650px;
  }
`;

const Img = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: fill;
  z-index: -1;
`;

const Explain = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  position: absolute;
  top: 320px;

  @media (width > 1000px) {
    top: 390px;
  }
`;

const TextBox = styled.div`
  padding-left: 5%;
  font-weight: lighter;
  letter-spacing: 2px;
  font-size: 30px;

  @media (width > 1000px) {
    font-size: 60px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10%;
  color: #003300;
  font-size: 50px;
`;

const ContactTitle = styled(Title)``;

const UpDownButton = styled.button`
  position: absolute;
  border-radius: 50px;
  background-color: #003300;
  color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (width < 1000px) {
    padding: 3px;
  }
`;

const UpButton = styled(UpDownButton)`
  bottom: 300px;
  right: 30px;

  @media (width < 1000px) {
    bottom: 250px;
    right: 10px;
  }
`;

const DownButton = styled(UpDownButton)`
  top: 680px;
  right: 30px;
  @media (width < 1000px) {
    top: 500px;
    right: 10px;
  }
`;

export default Main;
