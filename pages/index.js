import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [yourName, setYourName] = useState('');
  const [canPlayIsDisabled, setCanPlayIsDisabled] = useState(true);

  const navigation = useRouter();

  function handleSubmitPlay(e) {
    e.preventDefault();

    navigation.push(`/quiz?name=${yourName}`);
  }

  function handleYourName(e) {
    const { value } = e.target;

    setYourName(value);

    setCanPlayIsDisabled(!(value.length >= 3));
  }

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo logo={db.logo2} />

          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>

            <Widget.Content>
              <p>{db.description}</p>

              <form onSubmit={handleSubmitPlay}>
                <input placeholder="Digite seu nome" onChange={handleYourName} />
                <button type="submit" disabled={canPlayIsDisabled}>
                  Jogar
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>

          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/hrafaelalves" />
      </QuizBackground>
    </>
  );
}
