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
                <link rel="canonical" href="" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={db.title} />
                <meta property="og:description" content={db.description} />
                <meta property="og:url" content="" />
                <meta property="og:site_name" content="Mix Fiscal" />
            </Head>
            <QuizBackground backgroundImage={db.bg2}>
                <TitleQuiz>
                    Nós sempre nos definimos pela capacidade de superar o impossível.
                </TitleQuiz>
            </QuizBackground>
        </>
    )
}