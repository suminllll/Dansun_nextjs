/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import kakaoIcon from "../public/images/카카오톡.png";
import Image from "next/image";
import { isMobile } from "react-device-detect";
declare global {
  interface Window {
    kakao: any;
  }
}

type Props = {
  isMobile: boolean;
};

const Contact = ({ isMobile }: Props) => {
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
          href="https://open.kakao.com/o/spyReIGe"
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

  .text {
    margin-top: 10px;
    color: #006633;
  }
`;

const Map = styled.div`
  margin-left: 10%;
  width: 80vw;
  height: 80vh;
  margin-bottom: 50px;
`;

const KakaoBox = styled.div`
  height: 50px;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #ffe146;
  padding-left: 15px;
  text-align: center;
  cursor: pointer;
  margin: 25px 0 30px 10%;
  background-color: #ffe146;
  color: #006633;
`;

export default Contact;

const TEXTLIST = [
  {
    id: 1,
    title: "Tel",
    text: "010-0000-0000 / 054-244-9947",
  },
  {
    id: 2,
    title: "E-mail",
    text: "krlatnalsl01@gmail.com",
  },
  {
    id: 3,
    title: "Address",
    text: "경북 포항시 북구 삼호로 125, 2층",
  },
];

const INPUTTITLE = [
  {
    id: 1,
    title: "Name",
    name: "nameValue",
  },
  {
    id: 2,
    title: "Phone Number",
    name: "numberValue",
  },
  {
    id: 3,
    title: "Content",
    name: "contentValue",
  },
];
