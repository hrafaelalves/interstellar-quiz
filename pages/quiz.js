import Head from 'next/head';

import styled from "styled-components";

import QuizBackground from "../src/components/QuizBackground";

import db from '../db.json';

const TitleQuiz = styled.h1`
    font-size: 40px;
    text-align: center;
    margin-top: 60px;
`;

export default function Quiz(){
    return (
        <>
            <Head>
                <title>Interstellar Quiz - Quiz Page</title>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="canonical" href={db.canonical} />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={db.title} />
                <meta property="og:description" content={db.description} />
                <meta property="og:url" content={db.canonical} />
                <meta property="og:site_name" content="Interstellar Quiz" />

                <meta property="og:image" content={db.bg2} />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="800" /> 
                <meta property="og:image:height" content="600" />
            </Head>
            <QuizBackground backgroundImage={db.bg2}>
                <TitleQuiz>
                    Nós sempre nos definimos pela capacidade de superar o impossível.
                </TitleQuiz>
            </QuizBackground>
        </>
    )
}