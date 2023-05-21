type Props = {
  type: string;
};

import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const [imgList, setImgList] = useState<StaticImageData[]>([]);
  const [zoomSrc, setZoomSrc] = useState<StaticImageData>(null);
  const modalRef = useRef<HTMLDivElement>();
  const [sum, setSum] = useState<number>(301);

  useEffect(() => {
    AOS.init();
  }, [type]);

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

      if (zoomSrc !== null && !modalRef?.current?.contains(target)) {
        setZoomSrc(null);
      }
    };

    document.addEventListener("mousedown", handleModalBox);
    return () => {
      document.removeEventListener("mousedown", handleModalBox);
    };
  }, [zoomSrc]);

  const slideHandler = (type: string) => {
    if (type === "next" && sum < imgList.length * 300) {
      setSum(() => sum + 300);
    } else if (type === "prev" && sum > 300) {
      setSum(() => sum - 300);
    } else if (sum === 1) {
      setSum(0);
    } else {
      return;
    }
  };

  useEffect(() => {
    const slider = document.getElementsByClassName(`${type}`)[0] as HTMLElement;

    slider.style.transform = `translate3d(-${sum}px, 0px, 0px)`;
  }, [sum]);

  return (
    <>
      <SlidWrapper data-aos="fade-up">
        <button
          onClick={() => slideHandler("prev")}
          style={{
            position: "absolute",
            left: 0,
            zIndex: 1,
          }}
        >
          {"<"}
        </button>
        <div
          className={`slider ${type}`}
          style={{ display: "flex", transition: "all 1s ease 0s" }}
        >
          {imgList?.map((e, i) => (
            <ListWrapper key={i} onClick={() => setZoomSrc(e)}>
              <ImageStyle src={e} alt="" />
            </ListWrapper>
          ))}
        </div>
        <button
          onClick={() => slideHandler("next")}
          style={{
            position: "absolute",
            right: 0,
          }}
        >
          {">"}
        </button>
      </SlidWrapper>
      {zoomSrc !== null && (
        <>
          <HiddenWrapper>
            <div ref={modalRef}>
              <button
                onClick={() => setZoomSrc(null)}
                style={{ padding: "5px" }}
              >
                X
              </button>
              <Image
                src={zoomSrc}
                alt=""
                style={{ objectFit: "contain", height: "95%" }}
              />
            </div>
          </HiddenWrapper>
        </>
      )}
    </>
  );
};
const SlidWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  padding: 30px 0;
  background-color: #ebeeec;

  button {
    width: 45px;
    height: 300px;
    opacity: 0.7;
    text-align: center;
    padding: 5px;
  }
`;

const ListWrapper = styled.div`
  cursor: pointer;
  margin-right: 20px;
  transform: all 2s;
`;

const ImageStyle = styled(Image)`
  width: 400px;
  height: 300px;
  border-radius: 5px;

  @media (width < 1000px) {
    width: 300px;
    height: 250px;
  }
`;

const HiddenWrapper = styled.div`
  position: fixed;
  text-align: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(40, 40, 40, 0.8);
  z-index: 9900;
  padding: 6% 5% 1% 5%;

  div {
    width: 100%;
    height: 100%;
    position: relative;
  }

  button {
    position: absolute;
    right: 0;
    width: 45px;
    height: 40px;
    opacity: 0.7;
    text-align: center;
    padding: 5px;
  }

  img {
    width: 100%;

    // padding: 40px 0 40px;
  }
`;

const remodelingList: StaticImageData[] = [r1, r2, r3, r4, r5, r6, r7, r8];
const commercialList: StaticImageData[] = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
const otherList: StaticImageData[] = [o1, o2, o7, o3, o4, o5, o6];

export default OpenBox;
