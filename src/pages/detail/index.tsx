type QnaType = {
  userTitle: string;
  userName: string;
  userContent: string;
  userPw?: string;
};
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { WritingNav } from "../../component/Nav";
import Link from "next/link";

const Detail = () => {
  const [data, setData] = useState<QnaType>();
  const router = useRouter();
  const title = router.query.title;
  const name = router.query.name;

  useEffect(() => {
    const dataList = JSON.parse(window.localStorage.getItem("userName"));
    setData(
      dataList.filter((e) => e.userTitle === title && e.userName === name)
    );
  }, [title, name]);

  return (
    <>
      <WritingNav />
      {data && (
        <ContentWrapper>
          <Content>{data[0]?.userTitle}</Content>
          <Content>{data[0]?.userName}</Content>
          <Content>{data[0]?.userContent}</Content>
        </ContentWrapper>
      )}
      <BackButton href={"/"}>목록으로</BackButton>
    </>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  font-size: 20px;

  @media (width < 1000px) {
    font-size: 17px;
    margin: 10% 1%;
    height: 100%;
  }
`;

const Content = styled.p`
  border-bottom: 1px solid lightgray;
  padding-left: 5%;
  padding-bottom: 8px;
  color: #003300;
  line-height: 1.5;
  white-space: pre-line;
`;

const BackButton = styled(Link)`
  background-color: #003300;
  color: white;
  border-style: none;
  margin-left: 40%;
  padding: 2% 6%;
  border-radius: 3px;
  position: absolute;
  bottom: 20px;

  @media (width < 1000px) {
    bottom: 40px;
  }
`;
export default Detail;
