import styled from "styled-components";
import Image from "next/image";

import office from "../public/images/office.jpg";
import restaurant from "../public/images/restaurant.jpg";
import bedMain from "../public/images/bedMain.jpg";
import { useEffect, useRef, useState } from "react";
import OpenBox from "./OpenBox";

const Design = () => {
  const [imgOpen, setImgOpen] = useState(false);
  const [type, setType] = useState("");

  const imgClickHandler = (type: string) => {
    setImgOpen(true);
    setType(type);

    switch (type) {
      case "remodeling":
        return window.scrollTo({
          top: 1000,
          behavior: "smooth",
        });
      case "commercial":
        return window.scrollTo({
          top: 1500,
          behavior: "smooth",
        });
      case "other":
        return window.scrollTo({
          top: 2000,
          behavior: "smooth",
        });
    }
  };

  return (
    <>
      <ImgBox>
        <Remodeling
          id="remodeling"
          onClick={() => imgClickHandler("remodeling")}
        >
          <Img src={imgList[0][0].src} alt="" layout="fill" />
          <Text>{imgList[0][0].text}</Text>
        </Remodeling>
        {imgOpen && type === "remodeling" && <OpenBox type={type} />}
        <Commercial
          id="commercial"
          onClick={() => imgClickHandler("commercial")}
        >
          <Img src={imgList[1][0].src} alt="" layout="fill" />
          <Text>{imgList[1][0]?.text}</Text>
        </Commercial>
        {imgOpen && type === "commercial" && <OpenBox type={type} />}
        <Other id="other" onClick={() => imgClickHandler("other")}>
          <Img src={imgList[2][0]?.src} alt="" layout="fill" />
          <Text>{imgList[2][0]?.text}</Text>
        </Other>
        {imgOpen && type === "other" && <OpenBox type={type} />}
      </ImgBox>
    </>
  );
};

//재사용

const ImgWrap = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
`;
//--------

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (width > 1000px) {
    flex-direction: column;
  }
`;

const Remodeling = styled(ImgWrap)`
  margin-bottom: 50px;
  margin-top: 35px;
  margin-right: -30px;
  left: 3%;
  width: 80%;
  height: 50vh;

  @media (width > 1000px) {
    width: 70%;
    height: 65vh;
    left: 50px;
  }

  &:hover {
    transform: scale(1);
  }
`;

const Commercial = styled(ImgWrap)`
  margin-bottom: 50px;
  margin-left: 72px;
  margin-right: 13px;
  height: 50vh;
  position: relative;

  @media (width > 1000px) {
    height: 65vh;
    margin-left: 200px;
    margin-right: 43px;
  }

  &:hover {
    transform: scale(1);
  }
`;

const Other = styled(ImgWrap)`
  left: 3%;
  width: 80%;
  height: 50vh;

  @media (width > 1000px) {
    width: 70%;
    height: 65vh;
    left: 50px;
  }

  &:hover {
    transform: scale(1);
  }
`;

const Img = styled(Image)`
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  filter: brightness(80%);
  transition: all 0.1s linear;
  right: 0;
  position: absolute;
  top: 405px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-shadow: #888886 1px 0 10px;
  color: white;
  font-family: "PT Serif", serif;
  font-size: 22px;
  margin: auto;

  @media (width > 1000px) {
    font-size: 3em;
  }
`;

export default Design;

const imgList = [
  [
    {
      src: bedMain,
      text: "Remodeling(리모델링)",
    },
  ],
  [{ src: restaurant, text: "Commercial(상가,음식점,호텔 등)" }],
  [{ src: office, text: "Other(사무실,교육시설 등)" }],
];
