/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import styled from "styled-components";
import kakaoIcon from "../public/images/카카오톡.png";
import Image from "next/image";

declare global {
  interface Window {
    kakao: any;
  }
}

const Contact = () => {
  //지도
  useEffect(() => {
    // const { kakao } = window;
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(
        36.051641499339475,
        129.371858321261
      ), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    //지도 생성
    const map = new window.kakao.maps.Map(container, options);

    const markerPosition = new window.kakao.maps.LatLng(
      36.051641499339475,
      129.371858321261
    );
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      {TEXTLIST.map((list) => {
        return (
          <TextBox key={list.id}>
            <div className="textTitle">[{list.title}]</div>
            <div className="text">{list.text}</div>
          </TextBox>
        );
      })}

      <KakaoBox>
        <a
          href="https://open.kakao.com/o/skv8Rkkf"
          style={{ textAlign: "center", margin: "auto 0" }}
        >
          <p style={{ display: "flex" }}>
            카카오톡 오픈채팅방으로 문의하기
            <Image
              src={kakaoIcon}
              alt=""
              style={{ width: "50px", height: "48px", marginTop: "-17px" }}
            />
          </p>
        </a>
      </KakaoBox>

      <Map id="map"></Map>
    </>
  );
};

const TextBox = styled.div`
  margin: 4% 10%;
  font-size: 17px;
  text-align: center;
  .text {
    margin-top: 10px;
    color: #006633;
  }
`;

const Map = styled.div`
  margin-left: 20px;
  width: 90%;
  height: 400px;
  margin-bottom: 50px;

  @media (width > 1000px) {
    height: 60vh;
    margin-left: 5%;
  }
`;

const KakaoBox = styled.div`
  height: 50px;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #ffe146;
  padding-left: 15px;
  cursor: pointer;
  margin: 25px auto;
  background-color: #ffe146;
  color: #006633;
`;

export default Contact;

const TEXTLIST = [
  {
    id: 1,
    title: "Tel",
    text: "010-3521-9933 / 054-244-9947",
  },
  {
    id: 2,
    title: "E-mail",
    text: "dae9933yun@hanmail.net",
  },
  {
    id: 3,
    title: "Address",
    text: "경북 포항시 북구 삼호로 125, 2층",
  },
];
