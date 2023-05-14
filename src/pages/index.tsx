export type Post = {
  userContent: string;
  userName: string;
  userPw: string;
  userTitle: string;
};
import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
} from "react";
import styled from "styled-components";
import { MainNav } from "../component/Nav";
import Design from "../component/Design";
import Contact from "../component/Contact";
import Qna from "../component/Qna";
import { useRecoilState } from "recoil";
import { writingInfo } from "../stores/info";
import next from "next/types";
import { isMobile } from "react-device-detect";
import img from "../public/images/배경이미지.jpeg";
import { StaticImageData } from "next/image";
import Image from "next/image";

const Main = ({ userValues, userName, userPw, userTitle, userContent }) => {
  const [scrollY, setScrollY] = useState(0); //[nav] 색깔을 바꿔주는 state
  const [postsList, setPostsList] = useState<Post[]>([]);

  const focusTarget = useRef([]); //[nav] 해당 카테고리로 이동할때 사용

  //[nav] 색깔 바꾸는 로직
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };
  //[nav] 카테고리를 클릭하면 해당 카테고리 위치로 내려감
  const scrollTo = (e) => {
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

  return (
    <Article>
      <MainNav
        handleScroll={handleScroll}
        scrollY={scrollY}
        scrollTo={scrollTo}
        isMobile={isMobile}
      />
      <MainImgBox isMobile={isMobile}>
        <Img src={img} alt="" isMobile={isMobile} />
        <Explain isMobile={isMobile}>
          <TextBox isMobile={isMobile}>
            단 하나의 선으로 시작해,
            <br />
            의미있는 공간을 만듭니다.
            <br />- 단선 인테리어
          </TextBox>
        </Explain>
      </MainImgBox>

      <Title ref={(el) => (focusTarget.current[0] = el)}>DESIGN</Title>
      <Design />

      <ContactTitle ref={(el) => (focusTarget.current[1] = el)}>
        CONTACT
      </ContactTitle>
      <Contact isMobile={isMobile} />

      <Title ref={(el) => (focusTarget.current[2] = el)}>Q&A</Title>
      <Qna posts={postsList} inputData={undefined} isMobile={isMobile} />
    </Article>
  );
};

const Article = styled.div`
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-right: 0;
`;

const MainImgBox = styled.div<{ isMobile: boolean }>`
  height: 450px;
  width: 100%;
  position: relative;

  @media (width > 1000px) {
    height: 650px;
  }
`;

const Img = styled(Image)<{ isMobile: boolean }>`
  height: 100%;
  width: 100%;
  object-fit: fill;
  z-index: -1;
`;

const Explain = styled.div<{ isMobile: boolean }>`
  height: 100%;
  width: 100%;
  color: white;
  position: absolute;
  top: 320px;

  @media (width > 1000px) {
    top: 390px;
  }
`;

const TextBox = styled.div<{ isMobile: boolean }>`
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

export default Main;
