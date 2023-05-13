type Props = {
  type: string;
};

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import r1 from "../public/images/remodeling/r1.jpeg";
import r2 from "../public/images/remodeling/r2.jpeg";
import r3 from "../public/images/remodeling/r3.jpeg";
import r4 from "../public/images/remodeling/r4.jpeg";
import r5 from "../public/images/remodeling/r5.jpeg";
import r6 from "../public/images/remodeling/r6.jpeg";
import r7 from "../public/images/remodeling/r7.jpeg";
import r8 from "../public/images/remodeling/r8.jpeg";

import c1 from "../public/images/commercial/c1.jpeg";
import c2 from "../public/images/commercial/c2.jpeg";
import c3 from "../public/images/commercial/c3.jpeg";
import c4 from "../public/images/commercial/c4.jpeg";
import c5 from "../public/images/commercial/c5.jpeg";
import c6 from "../public/images/commercial/c6.jpeg";
import c7 from "../public/images/commercial/c7.jpeg";
import c8 from "../public/images/commercial/c8.jpeg";
import c9 from "../public/images/commercial/c9.jpeg";

import o1 from "../public/images/other/o1.jpeg";
import o2 from "../public/images/other/o2.jpeg";
import o3 from "../public/images/other/o3.jpeg";
import o4 from "../public/images/other/o4.jpeg";
import o5 from "../public/images/other/o5.jpeg";
import o6 from "../public/images/other/o6.jpeg";
import o7 from "../public/images/other/o7.jpeg";

const OpenBox = ({ type }: Props) => {
  const [imgList, setImgList] = useState([]);
  const [zoomSrc, setZoomSrc] = useState("");
  const modalRef = useRef<HTMLDivElement>();

  const settings = {
    dots: false, //슬라이드 밑에 점 보이게
    infinite: false, //무한으로 반복
    slidesToShow: 2, //n장씩 보이게
    slidesToScroll: 1, //n장씩 스크롤
    className: "slider",
    // centerMode: true,
    // centerPadding: "40px", //0px은 슬라이드 끝쪽 이미지가 안잘림
    speed: 500,
    arrows: true,
    draggable: true,
  };

  useEffect(() => {
    switch (type) {
      case "remodeling":
        return setImgList(remodelingList);
      case "commercial":
        return setImgList(commercialList);
      case "other":
        return setImgList(otherList);
    }
  }, [type]);

  //이미지 제외한 영역을 클릭했을때 창 닫힘
  useEffect(() => {
    const handleModalBox = (e: MouseEvent) => {
      const target = e.target as Node;

      if (zoomSrc !== "" && !modalRef?.current?.contains(target)) {
        setZoomSrc("");
      }
    };

    document.addEventListener("mousedown", handleModalBox);
    return () => {
      document.removeEventListener("mousedown", handleModalBox);
    };
  }, [zoomSrc]);

  return (
    <>
      <Slider {...settings}>
        {imgList?.map((e, i) => (
          <ListWrapper key={i} onClick={() => setZoomSrc(e)}>
            <Img src={e} alt="" />
            {/* <Text>{e.text}</Text> */}
          </ListWrapper>
        ))}
      </Slider>
      {zoomSrc !== "" && (
        <>
          <HiddenWrapper>
            <div ref={modalRef}>
              <button onClick={() => setZoomSrc("")}>X</button>
              <Image src={zoomSrc} alt="" />
            </div>
          </HiddenWrapper>
        </>
      )}
    </>
  );
};

const ListWrapper = styled.div`
  cursor: pointer;
  padding-bottom: 25px;
`;

const Img = styled(Image)`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;

const Text = styled.p`
  text-align: center;
`;

const HiddenWrapper = styled.div`
  position: fixed;
  text-align: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 8px;
  background-color: rgba(40, 40, 40, 0.8);
  z-index: 9900;
  padding: 3% 5% 1% 5%;

  div {
    width: 100%;
    height: 100%;
    position: relative;
  }

  button {
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    opacity: 0.7;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 0;
    padding: 40px 0 40px;
  }
`;

const remodelingList = [r1, r2, r3, r4, r5, r6, r7, r8];
const commercialList = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
const otherList = [o1, o2, o7, o3, o4, o5, o6];

export default OpenBox;
