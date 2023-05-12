import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import styled from "styled-components";

import { WritingNav } from "../../component/Nav";
import { TwoButton } from "../../component/Button";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { writingInfo } from "../../stores/info";

const Writing = () => {
  const [inputData, setInputData] = useState([]); // 입력된 데이터를 갱신해줄 state
  const [check, setCheck] = useState(false); // 조건에 만족하면 true로 바꿀 state
  const router = useRouter();
  const [posts, setPosts] = useRecoilState(writingInfo);
  const nextNo = useRef(0);
  const [userValues, setUserValues] = useState({
    userName: "",
    userPw: "",
    userTitle: "",
    userContent: "",
  }); //글쓰기에서의 input 값을 담을 state

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  const { userName, userPw, userTitle, userContent } = userValues;

  //취소버튼 클릭시 홈으로 가기
  const handleCancel = () => {
    router.push("/");
  };

  const handleSubmit = (e) => {
    if (
      userName !== "" &&
      userPw !== "" &&
      userTitle !== "" &&
      userContent !== ""
    ) {
      setCheck(true);
      return;
    }
    return alert("입력칸을 모두 채워주세요.");
  };
  //TODO: 새로고침시 나가겠냐는 알림창 띄우기

  //게시 버튼을 누르면 데이터가 로컬스토리지에 저장됨
  const handlePush = (e) => {
    e.preventDefault();
    const getData = JSON.parse(localStorage.getItem("userName"));

    const dataList = getData === null ? [userValues] : [...getData, userValues];

    window.localStorage.setItem("userName", JSON.stringify(dataList));

    alert("저장되었습니다.");

    router.push("/");
  };

  // localStorage.removeItem('dataName');

  return (
    <>
      <WritingNav />

      <InputForm onSubmit={handleSubmit}>
        <TopBox>
          <InputStyle
            name="userName"
            value={userName}
            onChange={handleChange}
            placeholder="작성자 이름"
            style={{ marginRight: "10%" }}
          />
          <InputStyle
            name="userPw"
            value={userPw}
            onChange={handleChange}
            type="password"
            placeholder="비밀번호"
          />
        </TopBox>
        <InputStyle
          name="userTitle"
          value={userTitle}
          onChange={handleChange}
          placeholder="제목"
          style={{
            height: "18%",
            borderTop: "1px solid lightgray",
            borderBottom: "1px solid lightgray",
          }}
        />
        <TextArea
          name="userContent"
          value={userContent}
          onChange={handleChange}
          placeholder="내용을 입력하세요"
        />
        <>
          <TwoButton
            handleCancel={() => handleCancel()}
            handlePush={(e) => handlePush(e)}
            // userName={userName}
            cancelText="취소"
            PushText="게시"
          />
        </>
      </InputForm>
    </>
  );
};

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  /* padding: 100px 150px 0 140px; */
  padding: 5%;
  height: 70vh;
  width: 100%;
`;

const TopBox = styled.label`
  height: 18%;

  @media (width < 1000px) {
    display: flex;
    flex-direction: column;
    height: 37%;
  }
`;

const InputStyle = styled.input`
  border: none;
  font-size: 18px;
  height: 100%;
  padding-left: 20px;

  ::placeholder {
    color: lightgray;
    letter-spacing: 1px;
  }

  :first-child {
    @media (width < 1000px) {
      border-bottom: 1px solid lightgray;
      width: 100%;
    }
  }
`;

const TextArea = styled.textarea`
  height: 80%;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 18px;

  ::placeholder {
    color: lightgray;
    letter-spacing: 1px;
    font-size: 18px;
  }
`;

export default Writing;
