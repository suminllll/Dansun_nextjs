import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { OneButton } from "./Button";
import { useRouter } from "next/router";
import { Post } from "../pages";
// import Writing from '../pages/Writing';
type Props = {
  isMobile: boolean;
  posts: Post[];
  inputData: any;
};
const Qna = ({ posts, inputData, isMobile }: Props) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(""); //[QnA] 검색창에서 입력값을 받는 state
  const [filterValue, setFilterValue] = useState([]); //[QnA] 유효성 검사가 완료된 값을 담음

  //현재날짜 구함
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  let today = `${year}-${month}-${day}`;

  //게시글 제목 클릭하면 해당 내용으로 이동
  const handleTitle = () => {
    // alert("준비 중 이에요!");
    // router.push("/");
  };

  const handleWrite = () => {
    router.push("/writing");
  };

  //[QnA] SearchValue에 입력값으로 업데이트
  const handleSearch = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value === "") {
      setFilterValue(null);
      setSearchValue("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchCheck();
    }
  };

  //[QnA] 입력값 확인 하는 함수
  const searchCheck = () => {
    const filter = posts.filter(
      (posts) =>
        posts.userTitle.toLowerCase().includes(searchValue) ||
        posts.userName.toLowerCase().includes(searchValue)
    );

    //입력값이 없으면 알림창 띄우기
    if (!searchValue) alert("검색할 내용을 입력해주세요.");
    else if (filter) setFilterValue(filter);
  };

  const moveTheDetail = (title: string, name: string) => {
    return router.push({
      pathname: `/detail/pwCheck`,
      query: { title, name },
    });
  };

  return (
    <QnaBox>
      <SearchBox onKeyPress={(e) => handleEnter(e)}>
        <Search placeholder="Search" onChange={(e) => handleSearch(e)} />
      </SearchBox>
      <Table>
        <thead>
          <tr>
            <HeadTh style={{ width: 100 }}>No</HeadTh>
            <HeadTh
              style={{ width: 700, textAlign: "left", paddingLeft: "13px" }}
            >
              제목
            </HeadTh>
            <HeadTh style={{ width: 150 }}>글쓴이</HeadTh>
            <HeadTh style={{ width: 150 }}>날짜</HeadTh>
          </tr>
        </thead>
        <tbody>
          {/* 필터링된 입력값이 없으면 전체 게시물을, 아니면 필터링된 게시물을 보여줌 */}
          {filterValue?.length < 1 || filterValue === null
            ? posts?.map((data, i) => {
                return (
                  <tr key={i}>
                    <BodyTd>{i + 1}</BodyTd>
                    <BodyTd
                      onClick={() =>
                        moveTheDetail(data.userTitle, data.userName)
                      }
                      style={{ textAlign: "left", cursor: "pointer" }}
                    >
                      {data.userTitle}
                    </BodyTd>
                    <BodyTd>{data.userName}</BodyTd>
                    <BodyTd>{today}</BodyTd>
                  </tr>
                );
              })
            : filterValue?.map((data, i) => {
                return (
                  <tr key={data.no}>
                    <BodyTd>{data.no}</BodyTd>
                    <BodyTd
                      onClick={() =>
                        moveTheDetail(data.userTitle, data.userName)
                      }
                      style={{ textAlign: "left", cursor: "pointer" }}
                    >
                      {data.userTitle}
                    </BodyTd>
                    <BodyTd>{data.userName}</BodyTd>
                    <BodyTd>{today}</BodyTd>
                  </tr>
                );
              })}
          {/* {inputData &&
            inputData.map((user) => {
              return (
                <tr key={user.id}>
                  <BodyTd>{user.id}</BodyTd>
                  <BodyTd
                    onClick={handleTitle}
                    style={{ textAlign: "left", cursor: "pointer" }}
                  >
                    {user.userTitle}
                  </BodyTd>
                  <BodyTd>{user.userName}</BodyTd>
                  <BodyTd>{today}</BodyTd>
                </tr>
              );
            })} */}
        </tbody>
      </Table>
      <OneButton text="글쓰기" handleWrite={handleWrite} userName={undefined} />
    </QnaBox>
  );
};

const SearchBox = styled.form`
  float: right;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
`;

const Search = styled.input`
  border-style: none;
  padding-bottom: 5px;

  ::placeholder {
    color: lightgray;
    letter-spacing: 1px;
    padding-left: 5px;
  }
`;

const QnaBox = styled.div`
  margin: 4%;
`;

const Table = styled.table`
  width: 100%;
  border-top: 1px solid #003300;
  border-collapse: collapse;
`;

const HeadTh = styled.th`
  padding: 15px 0;
  color: #003300;
  letter-spacing: 1px;
  font-weight: 400;
`;

const BodyTd = styled.td`
  text-align: center;
  padding: 15px 13px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  color: #a0a0a0;
  letter-spacing: 1px;
  white-space: nowrap;
`;

export default Qna;
