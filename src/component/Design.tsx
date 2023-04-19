import Link from "next/link";
import styled from "styled-components";

const Design = () => {
  return (
    <>
      <ImgBox>
        <Bath href={`/${imgList[0].first[0].text}`}>
          <Img src={imgList[0].first[0].src} alt={imgList[0].first[0].text} />
          <Text>{imgList[0].first[0].text}</Text>
        </Bath>

        <ImgContainer>
          <Living href={`/${imgList[0].first[1].text}`}>
            <Img src={imgList[0].first[1].src} alt={imgList[0].first[1].text} />
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
            />

            <Text>{imgList[0].second[0].text}</Text>
          </Kitchen>
        </ImgContainer>

        <ImgContainer>
          <Dining href={`/${imgList[0].second[1].text}`}>
            <Img
              src={imgList[0].second[1].src}
              alt={imgList[0].second[1].text}
            />
            <Text>{imgList[0].second[1].text}</Text>
          </Dining>
        </ImgContainer>
      </ImgBox>

      <ImgBox>
        <ImgContainer>
          <Bed href={`/${imgList[0].second[0].text}`}>
            <Img src={imgList[0].third[0].src} alt={imgList[0].third[0].text} />
            <Text>{imgList[0].third[0].text}</Text>
          </Bed>
        </ImgContainer>

        <ImgContainer>
          <Dress href={`/${imgList[0].third[1].text}`}>
            <Img src={imgList[0].third[1].src} alt={imgList[0].third[1].text} />
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

const Img = styled.img`
  object-fit: cover;
  filter: brightness(80%);
  height: 100%;
  width: 100%;
  transition: all 0.1s linear;

  :hover {
    transform: scale(1.15);
  }
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
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
        src: "/images/bathMain.jpg",
        text: "Bath",
      },
      {
        id: 2,
        src: "/images/livingMain.jpg",
        text: "Living",
      },
    ],
    second: [
      {
        id: 3,
        src: "/images/kitchenMain.jpg",
        text: "Kitchen",
      },
      {
        id: 4,
        src: "/images/diningMain.jpg",
        text: "Dining",
      },
    ],

    third: [
      {
        id: 5,
        src: "/images/bedMain.jpg",
        text: "Bed",
      },
      {
        id: 6,
        src: "/images/dressMain.jpg",
        text: "Dress",
      },
    ],
  },
];
