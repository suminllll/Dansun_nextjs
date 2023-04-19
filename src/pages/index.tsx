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

const Main = ({ userValues, userName, userPw, userTitle, userContent }) => {
  const [scrollY, setScrollY] = useState(0); //[nav] 색깔을 바꿔주는 state

  const [postsList, setPostsList] = useState([]);

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
    console.log("main", data);

    setPostsList(data);
  }, []);

  return (
    <Article>
      <MainNav
        handleScroll={handleScroll}
        scrollY={scrollY}
        scrollTo={scrollTo}
      />
      <Explain>
        <TextBox>
          단 하나의 선으로 시작해,
          <br />
          의미있는 공간을 만듭니다.
          <br />- 단선 인테리어
        </TextBox>
      </Explain>

      <Title ref={(el) => (focusTarget.current[0] = el)}>DESIGN</Title>
      <Design />

      <ContactTitle ref={(el) => (focusTarget.current[1] = el)}>
        CONTACT
      </ContactTitle>
      <Contact />

      <Title ref={(el) => (focusTarget.current[2] = el)}>QnA</Title>
      <Qna posts={postsList} inputData={undefined} />
    </Article>
  );
};

const Article = styled.article`
  background: url(../public/images/배경이미지.jpeg);
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Explain = styled.main`
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: rgba(40, 40, 40, 0.4);
  color: white;
`;

const TextBox = styled.div`
  padding-left: 5%;
  padding-top: 28%;
  font-size: 60px;
  font-weight: lighter;
  letter-spacing: 2px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  color: #003300;
  font-size: 50px;
`;

const ContactTitle = styled(Title)`
  margin-top: -15%;
`;

export default Main;
