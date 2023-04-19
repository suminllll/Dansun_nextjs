import React from "react";
import styled from "styled-components";

export const OneButton = ({ text, handleWrite, userName }) => {
  return (
    <ButtonBox>
      <Button onClick={() => handleWrite({ state: userName })}>{text}</Button>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  margin-top: 20px;
  width: 110px;
  height: 35px;
  border-style: none;
  background-color: #003300;
  opacity: 0.7;
  color: white;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const TwoButton = ({
  cancelText,
  PushText,
  handleCancel,
  handlePush,
}) => {
  return (
    <ButtonBox>
      <Button style={{ marginRight: "20px" }} onClick={handleCancel}>
        {cancelText}
      </Button>
      <Button type="submit" onClick={(e) => handlePush(e)}>
        {PushText}
      </Button>
    </ButtonBox>
  );
};
