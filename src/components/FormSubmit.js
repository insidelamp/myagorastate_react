import React, { useState } from "react";
import styled from "styled-components";

function FormSubmit() {
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputQuestion, setInputQuestion] = useState("");

  function userWriteName(e) {
    setInputName(e.target.value);
  }
  function userWriteTitle(e) {
    setInputTitle(e.target.value);
  }
  function userWriteQuestion(e) {
    setInputQuestion(e.target.value);
  }
  return (
    <MainForm>
      <QuestionsType>
        <QuestionsTypeInput>Enter your name:</QuestionsTypeInput>
        <QuestionsTypeInput>Enter your title:</QuestionsTypeInput>
        <QuestionsTypeInput>Your question:</QuestionsTypeInput>
      </QuestionsType>
      <QuestionsWrite>
        <QuestionsWriteInput
          placeholder="이름을 입력해주세요"
          onChange={userWriteName}
        />
        <QuestionsWriteInput
          placeholder="제목을 입력해주세요!"
          onChange={userWriteTitle}
        />
        <QuestionsWriteInput
          placeholder="질문을 작성하세요!"
          onChange={userWriteQuestion}
        />
      </QuestionsWrite>
      <QuestionsBtn>submit</QuestionsBtn>
    </MainForm>
  );
}

const MainForm = styled.form`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const QuestionsType = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
`;
const QuestionsTypeInput = styled.div`
  color: white;
  font-weight: bold;
`;
const QuestionsWrite = styled.div`
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0px 15px;
`;
const QuestionsWriteInput = styled.input`
  text-align: center;
`;

const QuestionsBtn = styled.button`
  width: 100px;
  height: 55%;
  background-color: #f37878;
  border-radius: 30px;
  font-weight: bolder;
  font-size: 20px;
`;

export default FormSubmit;
