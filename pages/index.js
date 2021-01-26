import Head from 'next/head';

import styled from 'styled-components'
import db from '../db.json';

import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

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
  return (
    <>
      <Head>
          <title>Interstellar Quiz - Home</title>
          <link rel="canonical" href={db.canonical} />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Interstellar Quiz" />
          <meta property="og:description" content="O que você sabe sobre viagem no tempo?" />
          <meta property="og:url" content={db.canonical} />
          <meta property="og:site_name" content="Interstellar Quiz" />


          <meta property="og:image" content={db.bg} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="800" /> 
          <meta property="og:image:height" content="600" />
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo logo={db.logo2} />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
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
