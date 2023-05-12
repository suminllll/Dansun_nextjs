type Props = {
  type: string;
};

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import r1 from "../public/images/bathMain.jpg";
import r2 from "../public/images/bedMain.jpg";
import r3 from "../public/images/diningMain.jpg";
import r4 from "../public/images/dressMain.jpg";
import r5 from "../public/images/livingMain.jpg";
import r6 from "../public/images/kitchenMain.jpg";

const OpenBox = ({ type }: Props) => {
  const [imgList, setImgList] = useState([]);
  const [zoomSrc, setZoomSrc] = useState("");
  const modalRef = useRef<HTMLDivElement>();

  const settings = {
    dots: false, //슬라이드 밑에 점 보이게
    infinite: false, //무한으로 반복
    slidesToShow: 4, //n장씩 보이게
    slidesToScroll: 1, //n장씩 스크롤
    className: "slider",
    // centerMode: true,
    // centerPadding: "10px", //0px은 슬라이드 끝쪽 이미지가 안잘림
    speed: 500,
    arrows: true,
    draggable: true,
    // touchThreshold: 500,// 슬라이드를 이동할 떄 슬라이드 너비를 1/touchThreshold 이상 스와이프하여 슬라이드를 전환
  };

  useEffect(() => {
    switch (type) {
      case "remodeling":
        return setImgList(remoList);
      case "commercial":
        return setImgList(remoList);
      case "other":
        return setImgList(remoList);
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
        {imgList?.map((e) => (
          <ListWrapper key={e.src} onClick={() => setZoomSrc(e.src)}>
            <Img src={e.src} alt={e.text} />
            <Text>{e.text}</Text>
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
`;

const Img = styled(Image)`
  width: 265px;
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
    max-width: 100%;
    width: 100%;
    height: 100%;
    line-height: 0;
    padding: 40px 0 40px;
  }
`;

const remoList = [
  { src: r1, text: "r1" },
  { src: r2, text: "r2" },
  { src: r3, text: "r3" },
  { src: r4, text: "r4" },
  { src: r5, text: "r5" },
  { src: r6, text: "r6" },
];
export default OpenBox;
