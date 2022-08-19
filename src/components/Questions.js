import React, { useState } from "react";
import styled from "styled-components";
import { MdFaceRetouchingNatural, MdFaceRetouchingOff } from "react-icons/md";

function Questions({ tweet }) {
  const [isAnswer, setIsAnswer] = useState(tweet.answer);
  return (
    <MainQuestions>
      <QuestionContents>
        <ContentsMainImg>
          <ContentsImg src={tweet.avatarUrl}></ContentsImg>
        </ContentsMainImg>

        <ContentsQuestion>
          <ContentsTitle href={tweet.url}>{tweet.title}</ContentsTitle>
          <ContentsAuthor>
            {tweet.author + "/" + tweet.createdAt}{" "}
          </ContentsAuthor>
        </ContentsQuestion>

        <ContentsAnswer>
          {isAnswer ? <MdFaceRetouchingNatural /> : <MdFaceRetouchingOff />}
        </ContentsAnswer>
      </QuestionContents>
    </MainQuestions>
  );
}

const MainQuestions = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuestionContents = styled.div`
  width: 45%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  background-color: #c4d7e0;
`;

const ContentsMainImg = styled.div`
  width: 13%;
  height: 100%;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsImg = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 50%;
`;

const ContentsQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 77%;
  height: 100%;
`;
const ContentsTitle = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: baseline;

  &:link {
    color: #7459dc;
    background-color: transparent;
    text-decoration: none;
  }
  &:visited {
    color: #e8647c;
    background-color: transparent;
    text-decoration: none;
  }
  &:hover {
    color: #ec9b3b;
    background-color: transparent;
    text-decoration: none;
  }
  &:active {
    color: #fffbcc;
    background-color: transparent;
    text-decoration: none;
  }
`;
const ContentsAuthor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const ContentsAnswer = styled.a`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 300%;
`;

export default Questions;
