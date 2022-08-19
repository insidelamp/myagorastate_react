import React, { useState, useEffect } from "react";
import FormSubmit from "./components/FormSubmit";
import Header from "./components/Header";
import Questions from "./components/Questions";
import LoadingDisplay from "./components/LoadingDisplay";
import { getDiscussions } from "./api/api";
import styled from "styled-components";

function App() {
  const [existingTweet, setExistingTweet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    setExistingTweet(await getDiscussions(existingTweet));
    setIsLoading(false);
  }, []);
  return (
    <MainContents>
      <Contents>
        <Header />
        <FormSubmit />
        {isLoading ? (
          <LoadingDisplay />
        ) : (
          <div>
            {existingTweet.map((tweet) => {
              return <Questions tweet={tweet} key={tweet.id} />;
            })}
          </div>
        )}
      </Contents>
    </MainContents>
  );
}

const MainContents = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: #6e85b7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Contents = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
