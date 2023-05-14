import styled from "styled-components";
import { WritingNav } from "../../component/Nav";
import React, { SetStateAction, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const PwCheck = () => {
  const [pw, setPw] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const title = router.query.title;
  const name = router.query.name;

  const handleChange = (e) => {
    setPw(e.target.value);
  };

  const pwCheckHandler = (e: any) => {
    e.preventDefault();

    let data = JSON.parse(window.localStorage.getItem("userName"));

    const pwValue = data.filter(
      (e) => e.userPw === pw && e.userTitle === title && e.userName === name
    );

    return pwValue.length > 0
      ? router.push({
          pathname: `/detail`,
          query: { title, name },
        })
      : alert("비밀번호 오류");
    // const returnValue = router.push({
    //   pathname: `/detail`,
    //   query: { title, name },
    // });
    // // return isAdmin
    // //   ? pw === "5243"
    // //     ? returnValue
    // //     : alert("비밀번호 오류")
    // //   : pwValue.length > 0
    // //   ? returnValue
    // //   : alert("비밀번호 오류");
    // console.log({ isAdmin });
    // console.log({ pw });
    // console.log({ pwValue });

    // if (isAdmin && pw === "5243") {
    //   console.log("1");

    //   return returnValue;
    // } else if (pwValue.length > 0) {
    //   console.log("2");

    //   return returnValue;
    // } else {
    //   console.log("3");

    //   alert("비밀번호 오류");
    //   return;
    // }
  };

  return (
    <>
      <WritingNav />
      <InputForm>
        <PwWrapper onSubmit={pwCheckHandler}>
          <div>
            <p> 패스워드를 입력하세요.</p>
            <input
              type="password"
              value={pw}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button>확인</button>
        </PwWrapper>
      </InputForm>
      {/* {!isAdmin && (
        <AdminText href="/detail/pwCheck" onClick={() => setIsAdmin(true)}>
          관리자 이신가요?
        </AdminText>
      )} */}
    </>
  );
};

const InputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40%;

  @media (width > 1000px) {
    margin-top: 15%;
  }
`;

const PwWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 400px;
  height: 200px;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
    color: #003300;
    text-align: center;
  }

  input {
    height: 30px;
  }

  button {
    height: 50px;
    width: 70px;
    border-radius: 10px;
    border-style: none;
    background-color: #003300;
    color: white;
  }
`;

const AdminText = styled(Link)`
  color: lightgray;
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;
export default PwCheck;
