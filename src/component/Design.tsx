import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

import bathMain from "../public/images/bathMain.jpg";
import bedMain from "../public/images/bedMain.jpg";
import diningMain from "../public/images/diningMain.jpg";
import dressMain from "../public/images/dressMain.jpg";
import kitchenMain from "../public/images/kitchenMain.jpg";
import livingMain from "../public/images/livingMain.jpg";

const Design = () => {
  return (
    <>
      <ImgBox>
        <Bath href={`/${imgList[0].first[0].text}`}>
          <Img
            layout="fill"
            src={imgList[0].first[0].src}
            alt={imgList[0].first[0].text}
          />
          <Text>{imgList[0].first[0].text}</Text>
        </Bath>

        <ImgContainer>
          <Living href={`/${imgList[0].first[1].text}`}>
            <Img
              src={imgList[0].first[1].src}
              alt={imgList[0].first[1].text}
              layout="fill"
            />
            <Text>{imgList[0].first[1].text}</Text>
          </Living>
        </ImgContainer>
      </ImgBox>

      <ImgBox>
        <ImgContainer>
          <Kitchen href={`/${imgList[0].second[0].text}`}>
            <Img
              src={imgList[0].second[0].src}
              alt={imgList[0].second[0].text}
              layout="fill"
            />

            <Text>{imgList[0].second[0].text}</Text>
          </Kitchen>
        </ImgContainer>

        <ImgContainer>
          <Dining href={`/${imgList[0].second[1].text}`}>
            <Img
              src={imgList[0].second[1].src}
              alt={imgList[0].second[1].text}
              layout="fill"
            />
            <Text>{imgList[0].second[1].text}</Text>
          </Dining>
        </ImgContainer>
      </ImgBox>

      <ImgBox>
        <ImgContainer>
          <Bed href={`/${imgList[0].second[0].text}`}>
            <Img
              src={imgList[0].third[0].src}
              alt={imgList[0].third[0].text}
              layout="fill"
            />
            <Text>{imgList[0].third[0].text}</Text>
          </Bed>
        </ImgContainer>

        <ImgContainer>
          <Dress href={`/${imgList[0].third[1].text}`}>
            <Img
              src={imgList[0].third[1].src}
              alt={imgList[0].third[1].text}
              layout="fill"
            />
            <Text>{imgList[0].third[1].text}</Text>
          </Dress>
        </ImgContainer>
      </ImgBox>
    </>
  );
};

//재사용
const MainLink = styled(Link)``;

const ImgWrap = styled(MainLink)`
  position: relative;
  overflow: hidden;

  @media (max-width: 1166px) {
    margin: 10% auto;
  }
`;
//--------

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20% 5%;

  @media (max-width: 1166px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Bath = styled(ImgWrap)`
  width: 40vw;
  height: 130vh;
  margin-top: -10%;

  @media (max-width: 1166px) {
    width: 80vw;
  }
`;

const Living = styled(ImgWrap)`
  width: 40vw;
  height: 70vh;
  margin-left: 50px;
`;

const Kitchen = styled(ImgWrap)`
  width: 25vw;
  height: 40vh;
  margin-top: 30%;
  margin-right: 10%;

  @media (max-width: 1166px) {
    width: 100vw;
    height: 90vh;
    margin-top: -10%;
  }
`;

const Dining = styled(ImgWrap)`
  width: 40vw;
  height: 55vh;
  margin-top: -40%;
`;

const Bed = styled(ImgWrap)`
  width: 25vw;
  height: 60vh;
  margin: 30% 0;

  @media (max-width: 1166px) {
    width: 90vw;
    height: 90vh;
    margin-top: -10%;
  }
`;

const Dress = styled(ImgWrap)`
  margin-top: -40%;
  margin-right: -30%;
  width: 40vw;
  height: 60vh;
`;

const Img = styled(Image)`
  height: 100%;
  width: 100%;

  z-index: -1;
  object-fit: cover;
  filter: brightness(80%);
  transition: all 0.1s linear;

  :hover {
    transform: scale(1.15);
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50%;
  text-shadow: #888886 1px 0 10px;
  /* position: absolute;
  top: 50%;
  left: 40%; */
  color: white;
  font-size: 3em;
  font-family: "PT Serif", serif;
`;

export default Design;

const imgList = [
  {
    first: [
      {
        id: 1,
        src: bathMain,
        text: "Bath",
      },
      {
        id: 2,
        src: livingMain,
        text: "Living",
      },
    ],
    second: [
      {
        id: 3,
        src: kitchenMain,
        text: "Kitchen",
      },
      {
        id: 4,
        src: diningMain,
        text: "Dining",
      },
    ],

    third: [
      {
        id: 5,
        src: bedMain,
        text: "Bed",
      },
      {
        id: 6,
        src: dressMain,
        text: "Dress",
      },
    ],
  },
];
